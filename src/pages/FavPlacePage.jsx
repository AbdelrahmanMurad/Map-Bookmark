import { useLocation } from "react-router-dom";
import { MainComponent } from "../components/MainComponent"
import { DashboardPage } from "./DashboardPage";

export let FavPlacePage = () => {
    let location = useLocation();

    return (
        <>
            {<DashboardPage />}
            {location.pathname === "/favorites" ? <MainComponent pageName={"Places"} /> : ""}
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Place</th>
                            <th scope="col">Longitude</th>
                            <th scope="col">Latitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Masood</td>
                            <td>Kin</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}