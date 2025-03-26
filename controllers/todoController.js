const Todo = require("../models/todo");

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        if (todos) res.status(200).json(todos);
        else res.status(200).json({ message: "No todos found" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

exports.createNewTodo = async (req, res) => {
    const { task, description, percentCompleted, isCompleted } = req.body;
    try {
        const todo = await Todo.create({
            task,
            description,
            percentCompleted,
            isCompleted,
        });
        res.status(201).json({ message: "New Todo created", todo });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
