import { Navigate, Outlet, useLocation } from "react-router-dom"

export const HasOrderInfo = () => {

    // Consts
    const state = useLocation().state;
    const orderInfo = useLocation().state?.orderInfo;

    return (orderInfo) 
        ? <Outlet context={state}/> 
        : <Navigate to="/" />;
};