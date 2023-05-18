import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MainComponent } from "../components/MainComponent";
import { MapComponent } from "../components/MapComponent.jsx";
import { HeaderComponent } from "../components/HeaderComponent.jsx";
import { NavComponent } from "../components/NavComponent";
import AuthContext from "../context/AuthContext";

export let DashboardPage = () => {
  let location = useLocation();
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <HeaderComponent username={user.username} logout={logout} />
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