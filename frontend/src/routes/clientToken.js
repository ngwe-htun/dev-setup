import { Outlet } from "react-router-dom";
import { registerToken } from "../services/ClientService";
import { getClientToken } from "../services/storage/ClientStorage"

// Register client token
export const ClientToken = () => {
    let token = getClientToken();
    if (!token) {
        registerToken();
        token = getClientToken();
    }
    return (token)
        ? <Outlet />
        : registerToken();
}