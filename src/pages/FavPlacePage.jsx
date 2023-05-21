import { useLocation, useNavigate } from "react-router-dom";
import { MainComponent } from "../components/MainComponent"
import { DashboardPage } from "./DashboardPage";
import { useContext, useEffect, useState } from "react";
import { API_URL } from "../config";
import AuthContext from "../context/AuthContext";

export let FavPlacePage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user)
            navigate("/");
        else
            getFavoritePlaces(); // request
    }, []);

    if (!user) {
        return;// no user => no UI مش حيكمل
    }

    async function getFavoritePlaces() { //request
        try {
            setLoading(true);
            const res = await fetch(`${API_URL}/favoriteList`, {
                method: "POST"
            });
            let data = await res.json();
            setLoading(false)
            //request end => false 

            if (typeof data === "object") { 
                data = data.filter(place => place.username === user.username);
                setPlaces(data);
            }
            //backend addressed by front
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {<DashboardPage />}
            {location.pathname === "/favorites" ? <MainComponent pageName={"Places"} /> : ""}
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Longitude</th>
                            <th scope="col">Latitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? <tr>
                            <th rowSpan="3">loading data ...</th> 
                            {/* عبل ما تنعرض الداتا */}
                            <th></th>
                            <th></th>
                        </tr> :
                            places.map((place, index) => (
                                <tr
                                    key={place._id} // id - lat - lng
                                    onClick={() => navigate("/map", {
                                        state: { coords: { lat: place.lat, lng: place.long } }
                                        //object have lat and lng.
                                    })}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <th>#{index + 1}</th>
                                    <td>{place.lat}</td>
                                    <td>{place.long}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}