import { useRef, useEffect, useState } from "react";
import * as tt from "@tomtom-international/web-sdk-maps";
import * as ttapi from "@tomtom-international/web-sdk-services";
import "../resources/css/map.css";
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { API_URL } from "../config";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useLocation } from "react-router-dom";

export let MapComponent = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  let coords = { lat: 31.4273, lng: 34.37517 };
  if (location.state) {
    coords = location.state?.coords;
  }

  const mapElement = useRef();
  const [map, setMap] = useState({});
  const [latitude, setLatitude] = useState(coords.lat); // Gaza
  const [longitude, setLongitude] = useState(coords.lng); // Gaza
  const [searchResults, setSearchResults] = useState([]);

  async function addToFavorite(lat, long) {
    try {
      const res = await fetch(`${API_URL}/addToFavorite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          lat: `${lat}`,
          long: `${long}`
        }),
      });
      const data = await res.json();
      if (data.status) {
        toast.success(data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const convertToPoints = (lngLat) => {
    return {
      point: {
        latitude: lngLat.lat,
        longitude: lngLat.lng,
      },
    };
  };

  const drawRoute = (geoJson, map) => {
    if (map.getLayer("route")) {
      map.removeLayer("route");
      map.removeSource("route");
    }
    map.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: geoJson,
      },
      paint: {
        "line-color": "#4a90e2",
        "line-width": 6,
      },
    });
  };

  const addDeliveryMarker = (lngLat, map) => {
    const element = document.createElement("div");
    element.className = "marker-delivery";

    const button = document.createElement("button");
    button.className = "heart-icon";
    button.innerHTML = "<i class='fas fa-heart'></i>"; // Use 'fas' class prefix for solid heart icon

    button.addEventListener("click", async () => {
      // Handle button click event here
      await addToFavorite(lngLat.lat, lngLat.lng)
      // Perform any desired actions when the heart icon is clicked
    });

    element.appendChild(button);

    new tt.Marker({
      element: element,
    })
      .setLngLat(lngLat)
      .addTo(map);
  };

  const handlePlaceSelect = (place) => {
    const { lat, lng } = place.position;

    setLongitude(lng);
    setLatitude(lat);

    // Add marker to the selected place
    const lngLat = { lng, lat };
    addDeliveryMarker(lngLat, map);
  };

  const searchPlaces = (searchTerm) => {
    const searchOptions = {
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      query: searchTerm,
      language: "ar",
      limit: 5,
      typeahead: true,
    };

    ttapi.services
      .fuzzySearch(searchOptions)
      .then((response) => {
        setSearchResults(response.results);
      })
      .catch((error) => {
        console.log("Error searching for places:", error);
      });
  };

  useEffect(() => {
    const origin = {
      lng: longitude,
      lat: latitude,
    };
    const destinations = [];

    let map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_API_KEY,
      container: mapElement.current,
      stylesVisibility: {
        trafficIncidents: true,
        trafficFlow: true,
      },
      center: [longitude, latitude],
      zoom: 13,
    });
    setMap(map);

    const addMarker = () => {
      const popupOffset = {
        bottom: [0, -25],
      };
      const popup = new tt.Popup({ offset: popupOffset }).setHTML("This is you!");
      const element = document.createElement("div");
      element.className = "marker";

      const marker = new tt.Marker({
        draggable: true,
        element: element,
      })
        .setLngLat([longitude, latitude])
        .addTo(map);

      marker.on("dragend", () => {
        const lngLat = marker.getLngLat();
        setLongitude(lngLat.lng);
        setLatitude(lngLat.lat);
      });

      marker.setPopup(popup).togglePopup();
    };
    addMarker();

    const sortDestinations = (locations) => {
      const pointsForDestinations = locations.map((destination) => {
        return convertToPoints(destination);
      });
      const callParameters = {
        key: process.env.REACT_APP_TOM_TOM_API_KEY,
        destinations: pointsForDestinations,
        origins: [convertToPoints(origin)],
      };

      return new Promise((resolve, reject) => {
        ttapi.services
          .matrixRouting(callParameters)
          .then((matrixAPIResults) => {
            const results = matrixAPIResults.matrix[0];
            const resultsArray = results.map((result, index) => {
              return {
                location: locations[index],
                drivingtime: result.response.routeSummary.travelTimeInSeconds,
              };
            });
            resultsArray.sort((a, b) => {
              return a.drivingtime - b.drivingtime;
            });
            const sortedLocations = resultsArray.map((result) => {
              return result.location;
            });
            resolve(sortedLocations);
          });
      });
    };

    const reCalculateRoutes = () => {
      sortDestinations(destinations)
        .then((sorted) => {
          sorted.unshift(origin);
          ttapi.services
            .calculateRoute({
              key: process.env.REACT_APP_TOM_TOM_API_KEY,
              locations: sorted,
            })
            .then((routeData) => {
              const geoJson = routeData.toGeoJson();
              drawRoute(geoJson, map);
            });
        });
    };

    map.on("click", (e) => {
      destinations.push(e.lngLat);
      addDeliveryMarker(e.lngLat, map);
      reCalculateRoutes();
    });

    return () => map.remove();
  }, [longitude, latitude]);

  return (
    <>
      {map && (
        <div className="app col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <input
            type="text"
            placeholder="Search for a place"
            onChange={(e) => searchPlaces(e.target.value)}
            className="form-control"
          />
          <ul className="list-group mb-4">
            {searchResults.map((result) => (
              <li
                className="list-group-item"
                style={{ cursor: 'pointer' }}
                key={result.id}
                onClick={() => handlePlaceSelect(result)}
              >
                {result.address.freeformAddress}
              </li>
            ))}
          </ul>

          <div ref={mapElement} className="map" />
          <br></br>
        </div>
      )}
    </>
  );
};
