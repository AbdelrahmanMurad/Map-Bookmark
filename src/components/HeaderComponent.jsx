import { NavLink } from "react-router-dom";
import reactLogo from "../resources/img/pa.png";

export let HeaderComponent = ({ username, logout }) => {
    return (
        <header className="navbar sticky-top navbar-light bg-light flex-md-nowrap py-0 shadow">
            <NavLink className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/map">
                <img src={reactLogo} className="brand-img" alt="react logo" />
                <b className="p-2 fs-5">Palestine Map</b>
            </NavLink>
            <button
                className="navbar-toggler position-absolute d-md-none collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex justify-content-end">
                <div className="navbar-nav">
                    <div className="p-1 nav-item text-nowrap">
                        <NavLink className="px-3 btn btn-success">{username}</NavLink>
                    </div>
                </div>
                <div className="navbar-nav">
                    <div className="p-1 nav-item text-nowrap">
                        <button className="px-3 btn btn-danger" onClick={logout}>Sign out</button>
                    </div>
                </div>
            </div>
        </header>
    );
}