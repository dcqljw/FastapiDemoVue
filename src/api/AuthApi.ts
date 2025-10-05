import {httpClient} from "@/api/HttpClient.ts";

interface LoginForm {
    username: string
    password: string
}

interface EditPasswordForm {
    username: any
    old_password: string
    new_password: string
}

export function fetchAuthLogin(loginForm: LoginForm) {
    let formData = new FormData();
    formData.append('username', loginForm.username)
    formData.append('password', loginForm.password)
    return httpClient.post('/auth/login', formData)
}

export function fetchEditPassword(editPasswordForm: EditPasswordForm) {
    return httpClient.post('/auth/edit_password', editPasswordForm)
}

export function fetchAuthLogout() {
    return httpClient.post('/auth/logout')
}