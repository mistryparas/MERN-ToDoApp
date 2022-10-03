const express = require('express');
const router  = express.Router();
const todoController = require('../controller/todo');
const userController = require('../controller/users');

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

router.get("/stats", todoController.getStats)

//Healthcheck
router.get('/healthcheck', (req, res) => {
    return res.status(200).send("Success");
});

//Auth
router.post("/auth/generateToken", userController.generateToken);
router.post("/auth/refreshToken", userController.refreshToken)
router.post("/auth/signup", userController.signup);
router.get("/users/", userController.getUser)

module.exports = router;