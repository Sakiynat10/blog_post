import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get(TOKEN);

import { ENDPOINT , TOKEN} from "../constants";


const request = axios.create( {
    baseURL: ENDPOINT ,
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

request.interceptors.response.use(response => response , 
    (error) => {
        alert(error?.response?.data);
        return Promise.reject(error)
    }
    )

export default request;