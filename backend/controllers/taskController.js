import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  const newTask = new Task({ ...req.body, userId: req.user.id });
  await newTask.save();
  res.status(201).json(newTask);
};

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id }); // Only get this user's tasks
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.send("Task deleted");
};