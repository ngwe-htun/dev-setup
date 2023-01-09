import axios from "axios";
import { Config } from "../config/app";
import { authHeader } from "./HttpService";

export const createItem = async (
    category,
    subCategory,
    city,
    quantity,
    availableDate,
    lotNo
) => {
    const url = `${Config.admin_host}/item`;
    try {
        let id = subCategory ? subCategory.id : category.id;
        let city_id = city ? city.id : 1;
        let data = {
            "item_category_id": id,
            "city_id": city_id,
            "available_date": availableDate.toLocaleDateString(),
            "sellable_currency": "kyat",
            "base_price" : 12000000,
        };
        if (lotNo) {
            data['log_number'] = lotNo;
        }
        if (quantity) {
            data['qty'] = quantity;
        } else {
            data['qty'] = 0;
        }
        console.log(data)
        let res = await axios.post(url, data, { headers: authHeader() })
        return res.data.data
    } catch (err) {
        console.log(err.response);
    }
}

export const getItemLists = async (categoryId) => {
    const url = `${Config.admin_host}/item/list/by/category/${categoryId}`;
    try { 
        let res = await axios.get(url, { headers: authHeader() })
        return res.data.data;
    } catch (err) {
        console.log(err)
    }
}