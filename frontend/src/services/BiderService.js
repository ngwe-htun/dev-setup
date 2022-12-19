import axios from "axios";
import { Config } from "../config/app"
import { authHeader } from "../services/HttpService";

export const getBiderLists = async () => {
    const url = `${Config.admin_host}/bider`;
    try {
        let res = await axios.get(url, { headers: authHeader() });
        return res.data.data;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export const LimitBiderForm = async (data) => {
    const url = `${Config.admin_host}/auction/issue/form`;
    try {
        let res = await axios.post(url, data, { headers: authHeader() });
        return res.data.data;
    } catch (err) {
        console.log(err)
        throw Error(err)
    }
}

export const CreateBider = async (regNo, name, company, country) => {
    const url = `${Config.admin_host}/bider`;
    try {
        let res = await axios.post(url, {
            "reg_number": regNo,
            "name": name,
            "company": company,
            "country": country
        }, {headers: authHeader()});
        return res.data.data
    } catch (err) {
        throw Error(err)
    }
}