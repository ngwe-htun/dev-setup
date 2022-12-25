import { Navigate, Outlet } from "react-router-dom"

export const CanBid = ({regNo}) => {
    return (regNo) 
        ? <Outlet /> 
        : <Navigate to="/" />;
};