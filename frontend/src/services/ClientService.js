import axios from "axios";
import { Config } from "../config/app";
import { clientAuthHeader } from "./HttpService";

export const checkAvailability = async (categoryId, cityId, date) => {
    const url = `${Config.client_host}/item/by/category`;
    console.log(url);
    try {
        console.log(cityId)
        let res = await axios.get(url, {
            params: {
                "category_id": categoryId,
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
        return res.data.data;
    } catch (err) {
        console.log(err);
    }
}

export const order = async (data) => {
    const url = `${Config.client_host}/order`;
    try {
        let res = await axios.post(url, data, { headers: clientAuthHeader() });
        return res.data.data;
    } catch (err) {
        console.log(err.response.data);
    }
}

export const getBiderInfo = async (regNo) => {
    const url = `${Config.client_host}/bider`;
    try {
        let res = await axios.get(url,{
            params: {"reg_number": regNo},
            headers: clientAuthHeader()}
        );
        return res.data.data;
    } catch (err) {
        console.log(err.response.data);
        throw Error(err);
    }
}

export const getItemWithLot = async (lotNo) => {
    const url = `${Config.client_host}/item/by/log/${lotNo}`;
    try {
        let res = await axios.get(url, {headers: clientAuthHeader()});
        return res.data.data;
    } catch (err) {
        let errMsg = err.response?.data.message;
        throw Error(errMsg)
    }
}


export const auctionBid = async (data) => {
    const url = `${Config.client_host}/auction`;
    try {
        let res = await axios.post(url, data, {headers: clientAuthHeader()});
        console.log(res.data.data);
    } catch (err) {
        let errMsg = err.response?.data.message;
        throw Error(errMsg)   
    }
} 