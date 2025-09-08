import axios from "axios";
import router from "@/router";
import {useToastGlobal} from "@/toast.ts";

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
        if (response.status !== 200) {

            return Promise.reject(response)
        } else {
            return response
        }
    },
    (error) => {
        const toast = useToastGlobal();
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.response.data.detail,
            life: 3000
        });
        router.push("/login")
        return Promise.reject(error)
    }
)
export {httpClient};