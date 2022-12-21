import axios from "axios";
import { Config } from "../config/app";

export const Login = async (name, password) => {
    let url = `${Config.admin_host}/auth/login`;
    try { 
        let res = await axios.post(url, {
            "name": name,
            "password": password
        });
        return res.data.data
    } catch(err) {
        // console.log(err)
        throw Error('Login failed')
    } 
}

