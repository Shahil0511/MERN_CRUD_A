import express from "express";
import Todo from "../models/todoModels.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const todo = new Todo({
      task: req.body.task,
      description: req.body.description,
    });
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
