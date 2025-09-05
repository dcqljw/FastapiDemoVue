import {httpClient} from "@/api/HttpClient.ts";

interface LoginForm {
    username: string
    password: string
}

interface EditPasswordForm {
    username: string
    old_password: string
    new_password: string
}

export function authLogin(loginForm: LoginForm) {
    return httpClient.post('/auth/login', loginForm)
}

export function editPasswordApi(editPasswordForm: EditPasswordForm) {
    return httpClient.post('/auth/edit_password', editPasswordForm)
}