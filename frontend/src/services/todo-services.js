import axios from "../utils/axios";

export const createTodo = (todo) => {
    return axios.post("/create", {
        todo: todo
    })
}

export const readTodo = () => {
    return axios.get("/read")
}

export const updateTodo = (id, data) => {
    return axios.put("/update/" + id, {
        todo: data.todo,
        isDone: data.isDone
    })
}

export const deleteTodo = (id) => {
    return axios.delete("/delete/" + id)
}

