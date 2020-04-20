import { CoreAPI, RestAPI } from './rest.config'

export const API_TYPE = {
    CORE: CoreAPI,
    REST: RestAPI
}

export const get = (url, apiType, config) => {
    return apiType.get(url, config).then(response => {
        return response.data;
        
    }).catch(error => {
        throw error.response;
    })
}

export const post = (url, data, apiType, config) => {
    return apiType.post(url, data, config).then(response => {
        return response.data;
        
    }).catch(error => {
        throw error.response;
    })
}

export const put = (url, data, apiType, config) => {
    return apiType.put(url, data, config).then(response => {
        return response.data;
        
    }).catch(error => {
        throw error.response;
    })
}

export const del = (url, apiType, config) => {
    return apiType.delete(url, config).then(response => {
        return response.data;
        
    }).catch(error => {
        throw error.response;
    });
}
