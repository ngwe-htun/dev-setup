import axios from "axios";
import { Config } from "../config/app"
import { decideAuthHeader, decidePath } from "./HttpService";

export const getCityList = async (isClient=false) => {
    console.log(isClient)
    const url = decidePath(isClient) + '/cities';
    const authHeader = decideAuthHeader(isClient);
    try {
        let res = await axios.get(url, { headers: authHeader });
        return res.data.data
    } catch (err) {
        console.log(err)
    }
}