import { get, post, put, del } from "./api";

const failureReponse = (error) => {
    return {
        success: false,
        status: error.status,
        errors: error.data
    }
}


export const callGetApi = async (url, apiType, config) => {
    try {
        const response = await get(url, apiType, config);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log(error['data']);
        return Promise.reject(failureReponse(error));
    }
}

export const callPostApi = async (url, data, apiType, config) => {
    try {
        const response = await post(url, data, apiType, config);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log(error.data);
        return Promise.reject(failureReponse(error));
    }
}

export const callPutApi = async (url, data, apiType, config) => {
    try {
        const response = await put(url, data, apiType, config);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log(error.data);
        return Promise.reject(failureReponse(error));
    }
}

export const callDeleteApi = async (url, data, apiType, config) => {
    try {
        config['data'] = data
        const response = await del(url, apiType, config);
        console.log(response);
        return response;
    }
    catch (error) {
        console.log(error.data);
        return Promise.reject(failureReponse(error));
    }
}
