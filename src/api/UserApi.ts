import {httpClient} from "@/api/HttpClient.ts";

export function userInfo() {
    return httpClient.post('/user/info')
}