const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

//router to get all todos
router.get("/", todoController.getAllTodos);
//router to create a new todo
router.post("/", todoController.createNewTodo);
//router to update a todo
router.put("/:id", todoController.updateTodo);
//router to get a todo
router.get("/:id", todoController.getTodById);
//router to delete a todo
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
