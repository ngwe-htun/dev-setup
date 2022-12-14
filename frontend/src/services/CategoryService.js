import axios from "axios";
import { Config } from "../config/app"
import { authHeader } from "./HttpService";


export const getCategoryList = async () => {
    const url = `${Config.admin_host}/category/parent`;
    try {
        let res = await axios.get(url, { headers: authHeader });
        return res.data.data
    } catch (err) {

    }
}

export const createSubCategory = async (id, data) => {
    const url = `${Config.admin_host}/category/${id}`;
    try {
        let res = await axios.post(url, data, { headers: authHeader });
        return res.data
    } catch (err) {}
}

export const getSubCategories = async (categori_id) =>  {
    const url = `${Config.admin_host}/category/${categori_id}/child`;
    try {
        let res = await axios.get(url, { headers: authHeader });
        return res.data.data
    } catch (err) {
        console.log(err)
    }
} 