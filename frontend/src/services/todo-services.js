// import axios from "axios";
import axios from "../utils/axios";
// const apiURL = process.env.REACT_APP_API_URL;
const apiURL =  "https://devstacktutor.com/api";

export const createTodo = (todo) => {
    return axios.post(apiURL + "/create", {
        todo: todo
    })
}

export const readTodo = () => {
    return axios.get(apiURL + "/read")
}

export const updateTodo = (id, data) => {
    return axios.put(apiURL + "/update/" + id, {
        todo: data.todo,
        isDone: data.isDone
    })
}

export const deleteTodo = (id) => {
    return axios.delete(apiURL + "/delete/" + id)
}

