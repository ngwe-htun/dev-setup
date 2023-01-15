import { Navigate, Outlet, useLocation } from "react-router-dom"

export const HasBidInfo = () => {

    // Consts
    const state = useLocation().state;
    const bider = useLocation().state?.bider;
    const orderInfo = useLocation().state?.orderInfo;
    const lotInfo = useLocation().state?.lotInfo;

    return (orderInfo && bider && lotInfo) 
        ? <Outlet context={state}/> 
        : <Navigate to="/" />;
};