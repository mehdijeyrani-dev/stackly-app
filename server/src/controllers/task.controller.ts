import { RequestHandler } from "express";
import Task from "../models/Task.js";

export const createTask: RequestHandler = async (req, res) => {
  const { title, description } = req.body;

  const task = await Task.create({
    title,
    description,
  });

  res.status(201).json({
    success: true,
    data: task,
  });
};

export const getTasks: RequestHandler = async (_req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    results: tasks.length,
    data: tasks,
  });
};
