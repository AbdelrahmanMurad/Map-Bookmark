import { NavLink, useLocation } from "react-router-dom";
import { MainComponent } from "../components/MainComponent";
import reactLogo from "../resources/img/pa.png";
import { MapPage } from "../pages/MapPage";

export let DashboardPage = () => {
    let location = useLocation();

    return (
        <>
            <header className="navbar sticky-top navbar-light bg-light flex-md-nowrap py-0 shadow">
                <NavLink className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/map">
                    <img src={reactLogo} className="brand-img" alt="react logo" />
                    <b className="p-2 fs-5">
                        Palestine Map
                    </b>
                </NavLink>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <div className="navbar-nav">
                    <div className="p-1 nav-item text-nowrap">
                        <NavLink className="px-3 btn btn-success">User Name</NavLink>
                    </div>
                </div>
                <div className="navbar-nav">
                    <div className="p-1 nav-item text-nowrap">
                        <NavLink className="px-3 btn btn-danger" to="/login">Sign out</NavLink>
                        {/* <NavLink className="nav-link px-3 btn-light-main btn" to="/">Sign out</NavLink> */}
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div className="position-sticky pt-4 p-2">
                            <ul className="nav flex-column fs-5">
                                <li className="nav-item pt-2">
                                    <NavLink className={(props) => props.isActive ? "nav-link active" : "nav-link"}
                                        aria-current="page"
                                        to="/map"
                                        end>
                                        <span data-feather="home"></span>
                                        Map
                                    </NavLink>
                                </li>
                                {/* هنا سنضيف اي صفحة جديدة بالقادم */}
                                <li className="nav-item">
                                    <NavLink className={(props) => props.isActive ? "nav-link active" : "nav-link"}
                                        aria-current="page"
                                        to="/actions"
                                        end>
                                        <span data-feather="file"></span>
                                        Action
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    {location.pathname === "/map" ?
                        <>
                            <MainComponent pageName={"Map"} />
                            <MapPage />
                        </> : ""}
                </div>
            </div>
        </>
    );
}