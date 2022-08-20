const TodoModel = require("../models/todo");

const create = async (req, res) => {
  const todoReq = req.body.todo;
  const todo = new TodoModel({ todo: todoReq, isDone: false });
  const result = await todo.save();
  return res.json(result);
};
const read = async (req, res) => {
    const id = req.params.id;
    const result = await TodoModel.findOne({_id:id});
  return res.json(result);
};
const readAll = async (req, res) => {
    const result = await TodoModel.find()
  return res.json(result);
};
const update = async (req, res) => {
    const id = req.params.id;
    const result = await TodoModel.findOneAndUpdate({_id:id},{$set: {
        todo: req.body.todo, isDone: req.body.isDone
    }},{new: true});
    return res.json(result);
};

const _delete = async (req, res) => {
    const id = req.params.id;
    const result = await TodoModel.findOneAndDelete({_id:id});
    return res.json(result);
};

const _deleteAll = async (req, res) => {
    const result = await TodoModel.remove({});
    return res.json(result);
};

module.exports = {
  create: create,
  read: read,
  readAll: readAll,
  update: update,
  _delete: _delete,
  _deleteAll: _deleteAll
};
