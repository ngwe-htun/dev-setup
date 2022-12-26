import { Navigate, Outlet, useLocation } from "react-router-dom"

export const OrderShouldAvailable = () => {

    let categoryInfo = useLocation().state?.categoryId;
    console.log(categoryInfo);

    return categoryInfo 
        ? <Outlet context={categoryInfo}/>
        : <Navigate to="/" />;
};