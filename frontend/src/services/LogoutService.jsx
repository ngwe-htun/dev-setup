import { useNavigate } from "react-router-dom";
import { removeAdminAccessInfo } from "./storage/AdminStorage"

// LOGOUT AND REDIRECT
export const Logout = () => {
    try {
        return removeAdminAccessInfo();
    } catch (err) {
        console.log(err);
    }
}