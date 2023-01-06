import axios from "axios";

const clientAxios = axios.create();

clientAxios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // Re register client token
    return Promise.reject(error);
  });

export default clientAxios;