import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MainComponent } from "../components/MainComponent";
import { MapComponent } from "../components/MapComponent.jsx";
import { HeaderComponent } from "../components/HeaderComponent.jsx";
import { NavComponent } from "../components/NavComponent";
import AuthContext from "../context/AuthContext";
import { useEffect } from "react";

export let DashboardPage = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!user)
      navigate("/");
  }, []);

  if (!user) {
    return;
  }

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