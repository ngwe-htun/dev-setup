import { Navigate, Outlet } from "react-router-dom"

export const CanOrder = ({categoryId}) => {
    return (categoryId) 
        ? <Outlet /> 
        : <Navigate to="/" />;
};