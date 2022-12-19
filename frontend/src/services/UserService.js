
import axios from 'axios';
import { authHeader } from './HttpService.js'; 
import { Config } from '../config/app.js';
import { cityRole } from '../pages/admin/user/UserPage.jsx';

export const getUserList = async () => {
    const url = `${Config.admin_host}/auth/user/list`
    try {
        let res = await axios.get(url, {
            headers: authHeader()
        })
        console.log(res.data.data)
        return res.data.data
    } catch (err) {
        throw Error(err);
    }
}

export const createUser = async (name) => {
    const url = `${Config.admin_host}/auth/create`;
    try {
        let res = await axios.post(url, {
            "name": name
        }, { headers: authHeader() });
        return res.data;
    } catch (err) {
        throw new Error('Failed to create user');
    }
}


export const resetUserPassword = async (userId) =>  {
    const url = `${Config.admin_host}/auth/reset`;
    try {
        let res = await axios.put(url, {"user_id": userId}, {headers: authHeader()});
        return res.data.data
    } catch (err) {
        throw new Error(err.message)
    }
}

export const assignRole = async (userId, role, cities = []) => {
    const url = `${Config.admin_host}/auth/assign/role`;
    try {
        let value = "1";
        let data = {
            "user_id": userId,
            "attribute": role.name,
            "value": value
        }
        if (role.name === cityRole) {
            console.log(cities);
            if (cities.length > 0) {
                let availableCities = cities.map(function(item){
                    return item.name;
                }).join(",");
                data['value'] = availableCities;
            }
        }
        let res = await axios.post(url, data, {headers: authHeader()});
        return res.data.data
    } catch (err) {
        throw Error(err);
    }
}

export const ChangePassword = async (name, old, newPass, confirm) => {
    const url = `${Config.admin_host}/auth/change/pass`;
    try {
        let data = {
            "name" : name,
            "password" : old,
            "new_password": newPass,
            "confirm_password" : confirm
        };
        let res = await axios.put(url, data, {headers: authHeader()})
        console.log(res.data.data)
    } catch (err) {
        throw Error(err);
    }
}
