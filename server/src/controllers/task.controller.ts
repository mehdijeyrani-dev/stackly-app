import { RequestHandler } from "express";
import Task from "../models/Task.js";
import { isValidObjectId } from "mongoose";

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

export const getTaskById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId) {
    res.status(400).json({
      success: false,
      message: "Invalid task ID",
    });
    return;
  }

  const task = await Task.findById(id);

  if (!task) {
    res.status(404).json({
      success: false,
      message: "Task not found",
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: task,
  });
};
