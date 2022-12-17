import axios from "axios";
import { Config } from "../config/app";
import { authHeader } from "./HttpService";

export const getUserRoles = async () => {
    const url = `${Config.admin_host}/auth/roles`;
    try {
        let formattedResult = [];
        let result = await axios.get(url,{
            headers: authHeader()
        });

        let data = await result.data.data;
        for(var i in data) {
            formattedResult.push({
                'name': data[i]
            })
        }
        return formattedResult;
    } catch (err) {
        console.log('Error to fetch roles')
    }
}