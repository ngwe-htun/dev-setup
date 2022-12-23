import { Navigate, Outlet } from "react-router-dom"

export const OrderShouldAvailable = ({data}) => {
    return data 
        ? <Outlet /> 
        : <Navigate to="/" />;
};