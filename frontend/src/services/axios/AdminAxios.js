import axios from "axios";

const adminAxios = axios.create();

adminAxios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // Re register client token
    return Promise.reject(error);
  });

export default adminAxios;