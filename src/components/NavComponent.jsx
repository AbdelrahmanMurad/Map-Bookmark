import { NavLink } from "react-router-dom";

export let NavComponent = () => {
    return (
        <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
            <div className="position-sticky pt-4 p-2">
                <ul className="nav flex-column fs-5">
                    <li className="nav-item pt-2">
                        <NavLink
                            className={(props) => props.isActive ? "nav-link active" : "nav-link"}
                            aria-current="page"
                            to="/map"
                            end>
                            <span data-feather="home"></span>
                            Map
                        </NavLink>
                    </li>
                    {/* هنا سنضيف اي صفحة جديدة بالقادم */}
                    <li className="nav-item">
                        <NavLink
                            className={(props) => props.isActive ? "nav-link active" : "nav-link"}
                            aria-current="page"
                            to="/favorites"
                            end>
                            <span data-feather="file"></span>
                            Favorite Places
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}