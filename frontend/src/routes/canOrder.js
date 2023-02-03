import { Navigate, Outlet, useLocation } from "react-router-dom"

export const CanOrder = () => {

    const state = useLocation()?.state;
    const itemId = useLocation()?.state?.itemId;
    const cityId = useLocation()?.state?.cityId;
    
    return (itemId && cityId) 
        ? <Outlet context={state} /> 
        : <Navigate to="/" />;
};