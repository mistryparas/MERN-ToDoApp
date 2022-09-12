import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL + "/auth";

export const signup = (firstName, lastName, email, password) => {
    return axios.post(apiURL + "/signup", {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password
    })
}

export const login = (email, password) => {
    return axios.post(apiURL + "/login", {
        "email": email,
        "password": password
    })
}

