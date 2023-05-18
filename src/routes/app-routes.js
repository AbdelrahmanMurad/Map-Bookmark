import { Route, Routes } from "react-router-dom";
import { FavPlacePage } from "../pages/FavPlacePage";
import { AuthPage } from "../pages/AuthPage";
import { DashboardPage } from "../pages/DashboardPage";

export let AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/map" element={<DashboardPage />} />
            <Route path="/favorites" element={<FavPlacePage />} />
        </Routes>
    );
}