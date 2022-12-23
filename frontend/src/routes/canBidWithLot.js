import { Navigate, Outlet } from "react-router-dom"

export const CanBidWithLot = ({regNo, lotNo}) => {
    return (regNo && lotNo) 
        ? <Outlet /> 
        : <Navigate to="/" />;
};