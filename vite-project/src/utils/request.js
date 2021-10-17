import axios from 'axios';
const baseURL = "http://127.0.0.1:8081";
const timeout = 5000
const service = axios.create({
    baseURL: baseURL,
    timeout: timeout,
})

service.interceptors.request.use((config) => {
    config.headers['X-Token'] = "tokne";
    return config;
}, (err) => {
    return Promise.reject(err);
})

service.interceptors.response.use((response) => {
    const status = response.status;
    const data = response.data;
    if (status !== 200) {
        return Promise.reject(response);
    } else {
        return data;
    }
}, (err) => {
    return Promise.reject(err);
})
export default service;