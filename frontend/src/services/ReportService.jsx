import axios from "axios";
import { Config } from "../config/app";
import { authHeader } from "./HttpService";

export const fetchAuctionReport = async (startDate, endDate) => {
    const url = `${Config.admin_host}/report/auction`;
    try {
        let res = await axios.get(
            url,
            {
                params: {
                    "start_date": startDate,
	                "end_date": endDate
                },
                headers: authHeader()
            }
        );
        return res.data.data;
    } catch (err) {
        console.log(err);
    }
}

export const fetchNonAuctionReport = async (startDate, endDate) => {
    const url = `${Config.admin_host}/report/order`;
    try {
        let res = await axios.get(
            url,
            {
                params: {
                    "start_date": startDate.toLocaleDateString(),
                    "end_date": endDate.toLocaleDateString()
                },
                headers: authHeader()
            }
        );
        return res.data.data;
    } catch (err) {
        console.log(err);
    }
}