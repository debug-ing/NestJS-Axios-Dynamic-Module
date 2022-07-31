import { AxiosInstance } from "axios";

export function AxiosProvider({ username, password,auth }) {
    return {
        baseURL: 'https://jsonplaceholder.typicode.com/',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'username': username,
            'password': password,
            'token': auth,
        }
    }
}