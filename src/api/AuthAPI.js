import { callPostApi } from "./ApiCaller";
import { API_TYPE } from "./api";

const AuthAPI = {

    register: (name, username, pin) => {
        const url = "/auth/register/";
        const data = {
            name, username, pin
        }
        return callPostApi(url, data, API_TYPE.REST);
    },

    login: (username, pin) => {
        const url = "/auth/login/";
        const data = {
            username, pin
        }
        return callPostApi(url, data, API_TYPE.REST);
    }
}

export default AuthAPI;