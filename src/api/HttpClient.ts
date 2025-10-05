import axios from "axios";
import {useToastGlobal} from "@/toast.ts";
import {useUserStore} from "@/stores/user.ts";

const httpClient = axios.create({
    baseURL: "http://localhost:8000",
});
httpClient.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `bearer ${localStorage.getItem("token")}`
        return config
    },
    (error) => {
        const toast = useToastGlobal();
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error.response.data.detail,
            life: 3000
        });
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
        console.log(error)
        const toast = useToastGlobal();
        if (error.response.status === 401) {
            useUserStore().logOut()
        }
        let error_msg;
        if (error.message === "Network Error") {
            error_msg = "Network Error"
        } else {
            error_msg = error.response.data.detail;
        }
        toast.add({
            severity: 'error',
            summary: 'Error',
            detail: error_msg,
            life: 3000
        });
        return Promise.reject(error)
    }
)
export {httpClient};