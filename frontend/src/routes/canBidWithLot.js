import { Navigate, Outlet, useLocation } from "react-router-dom"

export const CanBidWithLot = () => {

    // Consts
    const state = useLocation().state;
    const bider = useLocation().state?.bider;
    const lotInfo = useLocation().state?.lotInfo;
    const categoryId = useLocation().state?.categoryId;

    return (bider && lotInfo && categoryId) 
        ? <Outlet context={state}/> 
        : <Navigate to="/" />;
};