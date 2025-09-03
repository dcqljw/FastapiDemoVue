import axios from "axios";

const httpClient = axios.create({
    baseURL: "http://localhost:8000",
});

httpClient.interceptors.request.use(
    (config) => {
        config.headers.Authorization = localStorage.getItem("token")
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

httpClient.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)
export {httpClient};