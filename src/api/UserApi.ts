import {httpClient} from "@/api/HttpClient.ts";

interface CreateUser {
    username: string;
    password: string;
}

export function userInfo() {
    return httpClient.post('/user/info')
}

export function getUserListApi() {
    return httpClient.post('/user/get_user')
}

export function createUserApi(user: CreateUser) {
    return httpClient.post('/user/create_user', user)
}