import { useLocation } from "react-router-dom";
import { MainComponent } from "../components/MainComponent";
import { MapComponent } from "../components/MapComponent.jsx";
import { HeaderComponent } from "../components/HeaderComponent.jsx";
import { NavComponent } from "../components/NavComponent";

export let DashboardPage = () => {
  let location = useLocation();

  return (
    <>
      <HeaderComponent />
      <div className="container-fluid">
        <div className="row">
          <NavComponent />
          {location.pathname === "/map" ? (<>
            <MainComponent pageName={"Map"} />
            <MapComponent />
          </>)
            :
            ("")
          }
        </div>
      </div>
    </>
  );
};