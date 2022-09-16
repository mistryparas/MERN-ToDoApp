import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL + "/auth";
// const apiURL = "http://todoapp-1888867965.us-east-1.elb.amazonaws.com/api" + "/auth";

export const signup = (firstName, lastName, email, password) => {
    return axios.post(apiURL + "/signup", {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password
    })
}

export const signin = (email, password) => {
    return axios.post(apiURL + "/generateToken", {
        "email": email,
        "password": password
    })
}

