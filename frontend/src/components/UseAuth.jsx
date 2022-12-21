import { useContext } from "react";
import AuthContext from "./RequireAuth";

const UseAuth = () => {
    return useContext(AuthContext);
}

export default UseAuth;