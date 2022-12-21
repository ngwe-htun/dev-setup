import axios from "axios";
import { Config } from "../config/app"
import { authHeader, decideAuthHeader, decidePath } from "./HttpService";


export const getCategoryList = async () => {
    const url = `${Config.admin_host}/category/parent`;
    try {
        let res = await axios.get(url, { headers: authHeader() });
        console.log(authHeader())
        return res.data.data
    } catch (err) {

    }
}

export const createSubCategory = async (id, data) => {
    const url = `${Config.admin_host}/category/${id}`;
    try {
        let res = await axios.post(url, data, { headers: authHeader() });
        return res.data
    } catch (err) {}
}

export const getSubCategories = async (categori_id, isClient=false) =>  {
    const url = decidePath(isClient) + `/category/${categori_id}/child`;
    const header = decideAuthHeader(isClient);
    try {
        let res = await axios.get(url, { headers: header });
        return res.data.data
    } catch (err) {
        console.log(err)
    }
} 