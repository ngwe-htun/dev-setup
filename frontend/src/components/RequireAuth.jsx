import { useLocation, Navigate, Outlet } from "react-router-dom";
import UseAuth from "./UseAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = UseAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;