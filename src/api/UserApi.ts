import {httpClient} from "@/api/HttpClient.ts";

interface CreateUser {
    username: string;
    password: string;
}

export function fetchUserInfo() {
    return httpClient.post('/user/info')
}

export function fetchGetUserList() {
    return httpClient.post('/user/get_user')
}

export function fetchCreateUser(user: CreateUser) {
    return httpClient.post('/user/create_user', user)
}

export function fetchDeleteUser(userId: string) {
    return httpClient.post(`/user/delete_user?user_id=${userId}`)
}