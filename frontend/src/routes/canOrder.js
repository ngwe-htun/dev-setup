import { Navigate, Outlet, useLocation } from "react-router-dom"

export const CanOrder = () => {

    const state = useLocation()?.state;
    const itemId = useLocation()?.state?.itemId;
    
    return (itemId) 
        ? <Outlet context={state} /> 
        : <Navigate to="/" />;
};