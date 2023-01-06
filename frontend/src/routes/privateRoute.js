import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { getAccessToken, getUserInfo } from "../services/storage/AdminStorage";

// DASHBOARD PRIVATE ROUTE
export const PrivateRoute = () => {
    let token = getAccessToken();
    let userInfo = getUserInfo();
    return (token && userInfo)
        ? <Outlet />
        : <Navigate to="/login" />;
}