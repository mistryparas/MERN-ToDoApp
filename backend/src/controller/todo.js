const TodoModel = require("../models/todo");

const create = async (req, res) => {
  // console.log(req.user);
  const todoReq = req.body.todo;
  const todo = new TodoModel({ todo: todoReq, isDone: false , userId: req.user.id});
  const result = await todo.save();
  return res.json(result);
};
const read = async (req, res) => {
    const id = req.params.id;
    const result = await TodoModel.findOne({_id:id, userId: req.user.id});
  return res.json(result);
};
const readAll = async (req, res) => {
    const result = await TodoModel.find({userId: req.user.id})
  return res.json(result);
};
const update = async (req, res) => {
    const id = req.params.id;
    const result = await TodoModel.findOneAndUpdate({_id:id, userId: req.user.id},{$set: {
        todo: req.body.todo, isDone: req.body.isDone
    }},{new: true});
    return res.json(result);
};

const _delete = async (req, res) => {
    const id = req.params.id;
    const result = await TodoModel.findOneAndDelete({_id:id, userId: req.user.id});
    return res.json(result);
};

const _deleteAll = async (req, res) => {
    const result = await TodoModel.remove({userId: req.user.id});
    return res.json(result);
};

const getStats = async (req, res) => {
    const total = await TodoModel.find({userId: req.user.id}).count();
    const completed = await TodoModel.find({userId: req.user.id, isDone: true}).count();
    return res.json({
      total: total,
      completed: completed,
      pending: total-completed
    })
  }

module.exports = {
  create: create,
  read: read,
  readAll: readAll,
  update: update,
  _delete: _delete,
  _deleteAll: _deleteAll,
  getStats: getStats
};
