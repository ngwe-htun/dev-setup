import { Config } from "../config/app";
import { getClientToken } from "./storage/ClientStorage";

export function authHeader () {
        return {"Authorization" : `Bearer ${localStorage.getItem('access-token')}` };
}

export function clientAuthHeader() {
        let token = getClientToken();
        return {"Authorization" : `Bearer ${token}`};
}

export function decidePath(isClient) {
        let url = '';
        if (isClient) {
                url = `${Config.base_host}${Config.client_path_prefix}`;
        } else {
                url = `${Config.base_host}${Config.admin_path_prefix}`;
        }
        return url;
}

export function decideAuthHeader(isClient) {
    let header = authHeader();
    if (isClient) {
        header = clientAuthHeader();
    }

    return header;
}