import { Navigate, Outlet } from "react-router-dom"

export const CanOrder = ({itemId}) => {
    return (itemId) 
        ? <Outlet /> 
        : <Navigate to="/" />;
};