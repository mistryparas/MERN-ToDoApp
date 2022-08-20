const express = require('express');
const router  = express.Router();
const todoController = require('../controller/todo');

//Create
router.post('/create', todoController.create);

//Read
router.get('/read/:id', todoController.read);

//ReadAll
router.get('/read', todoController.readAll);

//Update
router.put('/update/:id', todoController.update);

//Delete
router.delete('/delete/:id', todoController._delete);

//DeleteAll
router.delete('/delete', todoController._deleteAll);

module.exports = router;