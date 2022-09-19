import axios from "axios";
import config from "../config";

// const apiURL =  "https://devstacktutor.com/api" + "/auth";

export const signup = (firstName, lastName, email, password) => {
    return axios.post(config.API_URL + "/auth/signup", {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password
    })
}

export const signin = (email, password) => {
    return axios.post(config.API_URL + "/auth/generateToken", {
        "email": email,
        "password": password
    })
}

