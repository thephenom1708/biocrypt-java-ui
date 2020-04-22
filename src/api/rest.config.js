import axios from 'axios'

const CoreServerConfig = {
    url: 'http://localhost:8080/api'
}

const RestServerConfig = {
    url: 'http://localhost:5000/api'
}

export const CoreAPI = axios.create({
    baseURL: CoreServerConfig.url,
    headers: {
        "Content-Type": "application/json",
    }
});

export const RestAPI = axios.create({
    baseURL: RestServerConfig.url,
    headers: {
        "Content-Type": "application/json",
    }
});
