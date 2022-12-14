
import axios from 'axios';
import { authHeader } from './HttpService.js'; 
import { Config } from '../config/app.js';

export const getUserList = async () => {
    const url = `${Config.admin_host}/auth/user/list`
    try {
        let res = axios.get(url, {
            headers: authHeader
        })
        console.log(res.data)
    } catch (err) {
        console.clear()
        console.clear()
    }
}

export const createUser = async (data) => {
    const url = `${Config.admin_host}/auth/create`;
    try {
        let res = await axios.post(url, data, { headers: authHeader });
        return res.data;
    } catch (err) {
        throw new Error('Failed to create user');
    }
}


export const resetUserPassword = async (userId) =>  {
    const url = `${Config.admin_host}/auth/reset`;
    try {
        let res = await axios.put(url, {"user_id": 77}, {headers: authHeader});
        return res.data.data
    } catch (err) {
        throw new Error(err.message)
    }
}