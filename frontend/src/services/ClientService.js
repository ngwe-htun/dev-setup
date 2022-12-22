import axios from "axios";
import { Config } from "../config/app";
import { clientAuthHeader } from "./HttpService";

export const checkAvailability = async (categoryId, cityId, date) => {
    const url = `${Config.client_host}/item/by/category`;
    try {
        console.log(cityId)
        let res = await axios.get(url, {
            params: {
                "category_id": 1,
                "city_id": cityId,
                "date": date
            },
            headers: clientAuthHeader()
        });
        console.log(res.data.data)
    } catch (err) {
        throw Error(err.response.data.message)
    }
}

export const getNrcData = async () => {
    const url = `${Config.client_host}/order/nrc`;
    try {
        let res = await axios.get(url, { headers: clientAuthHeader() });
        //let cars = Array.from(new Set(res.data.data.map(({ nrc_code }) => nrc_code)));

        return res.data.data;
    } catch (err) {
        console.log(err);
    }
}