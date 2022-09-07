const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const schema = new Schema({
    userId: Schema.Types.ObjectId,
    todo: String,
    isDone: Boolean
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } });

const Todos = mongoose.model("todo", schema);
module.exports = Todos;