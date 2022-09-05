import * as services from "../../utils/services";
import React from "react";
// import styles from "./Crud.scss";
import Title from "../../components/Title/Title";
var generate = require("fake-todos");

export default function Crud() {
  const createTodo = async () => {
    var items = generate(1);
    const res = await services.createTodo(items[0].what);
    console.log(res.data);
  };

  const readTodo = async () => {
    const res = await services.readTodo();
    console.log(res.data);
    return res.data;
  };

  const updateTodo = async () => {
    const data = await readTodo();
    var items = generate(1);
    console.log(data[0]);
    const res = await services.updateTodo(data[0]._id, {
      todo: items[0].what,
      isDone: true,
    });
    console.log(res.data);
  };

  const deleteTodo = async () => {
    const data = await readTodo();
    console.log(data[0]);
    const res = await services.deleteTodo(data[0]._id);
    console.log(res.data);
  };

  return (
    <div className="container-fluid crud-container">
      <a href="https://restfulapi.net/">
        <Title title="RESTful Resource Methods" />
      </a>

      <div className="grid margin-top-20">
        <div className="card">
          <h2>Create&rarr;</h2>
          <button
            type="button"
            className="btn btn-primary"
            onClick={createTodo}
          >
            POST
          </button>
        </div>

        <div className="card">
          <h2>Read&rarr;</h2>
          <button type="button" className="btn btn-primary" onClick={readTodo}>
            READ
          </button>
        </div>

        <div className="card">
          <h2>Update&rarr;</h2>
          <button
            type="button"
            className="btn btn-primary"
            onClick={updateTodo}
          >
            UPDATE
          </button>
        </div>

        <div className="card">
          <h2>Delete&rarr;</h2>
          <button
            type="button"
            className="btn btn-primary"
            onClick={deleteTodo}
          >
            DELETE
          </button>
        </div>

      </div>
    </div>
  );
}
