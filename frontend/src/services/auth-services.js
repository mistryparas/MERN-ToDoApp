import axios from "axios";
import {API_URL} from "../config";


export const signup = (firstName, lastName, email, password) => {
    return axios.post(API_URL + "/auth/signup", {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password
    })
}

export const signin = (email, password) => {
    return axios.post(API_URL + "/auth/generateToken", {
        "email": email,
        "password": password
    })
}

