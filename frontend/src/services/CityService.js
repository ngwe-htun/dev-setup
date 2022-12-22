import { decideAuthHeader, decidePath } from "./HttpService";

//import { Config } from "../config/app"
import axios from "axios";

export const getCityList = async (isClient = false) => {
  const url = decidePath(isClient) + "/cities";
  const authHeader = decideAuthHeader(isClient);
  try {
    let res = await axios.get(url, { headers: authHeader });
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
