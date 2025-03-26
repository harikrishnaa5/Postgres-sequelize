const { Todo } = require("../models");

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        if (todos.length > 0) res.status(200).json(todos);
        else res.status(200).json({ message: "No todos found" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

exports.createNewTodo = async (req, res) => {
    const { title, description, percentCompleted, isCompleted } = req.body;
    try {
        const todo = await Todo.create({
            title,
            description,
            percentCompleted,
            isCompleted,
        });
        res.status(201).json({ message: "New Todo created", todo });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

exports.updateTodo = async (req, res) => {
    console.log("entering inside updatetodo");
    const todoId = req.params.id;
    const { title, description, percentCompleted, isCompleted } = req.body;
    try {
        const updatedTodo = await Todo.update(
            { title, description, percentCompleted, isCompleted },
            { where: { id: todoId } }
        );
        if (updatedTodo[0] > 0) {
            res.status(200).json({ message: "Successfully updated" });
        } else {
            res.send(404).json({ message: "No todo found with the given id" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

exports.getTodoById = async (req, res) => {
    const todoId = req.params.id;
    try {
        const todo = await Todo.findOne({
            where: { id: todoId },
        });
        if (todo) {
            res.status(200).json(todo);
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

exports.deleteTodo = async (req, res) => {
    const todoId = req.params.id;
    try {
        const deleted = await Todo.destroy({ where: { id: todoId } });
        if (deleted > 0) res.status(200).json({ message: "Deleted the todo" });
        else res.status(404).json({ message: "Todo not found" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
