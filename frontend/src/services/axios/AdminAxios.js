import axios, { HttpStatusCode } from "axios";
import { Logout } from "../LogoutService";

const adminAxios = axios.create();

adminAxios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // IF something wrong with authorized, return to login
    if (HttpStatusCode.Unauthorized === error.response.status) {
      console.log(error.response.status);
      Logout();
    } else {
      return Promise.reject(error);
    }
  });

export default adminAxios;