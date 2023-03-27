import { useLocation } from "react-router-dom";
import { MainComponent } from "../components/MainComponent"
import { DashboardPage } from "../pages/DashboardPage";

export let ActionPage = () => {
    let location = useLocation();

    return (
        <>
            {<DashboardPage />}
            {location.pathname === "/actions" ? <MainComponent pageName={"Actions"} /> : ""}
            <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Masood</td>
                            <td>Kin</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Taher</td>
                            <td>Mar</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Murad</td>
                            <td>Thor</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Ehab</td>
                            <td>Swee</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}