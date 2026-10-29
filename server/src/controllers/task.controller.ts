import { RequestHandler } from "express";
import Task from "../models/Task.js";
import { isValidObjectId } from "mongoose";
import type { QueryFilter } from "mongoose";

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

export const getTasks: RequestHandler = async (req, res) => {
  const page = Math.max(Number(req.query.page) || 1, 1);
  const limit = Math.min(Math.max(Number(req.query.limit) || 10, 1), 100);

  const filter: QueryFilter<{
    title: string;
    description: string;
    completed: boolean;
  }> = {};

  if (req.query.completed === "true") {
    filter.completed = true;
  } else if (req.query.completed === "false") {
    filter.completed = false;
  }

  const search =
    typeof req.query.search === "string" ? req.query.search.trim() : "";

  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }

  const skip = (page - 1) * limit;

  const [tasks, total] = await Promise.all([
    Task.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
    Task.countDocuments(filter),
  ]);

  res.status(200).json({
    success: true,
    data: tasks,
    pagination: {
      page,
      limit,
      totalResults: total,
      totalPages: Math.ceil(total / limit),
    },
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

export const updateTask: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid task ID",
    });
    return;
  }

  const task = await Task.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

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

export const deleteTask: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid task ID",
    });
    return;
  }

  const task = await Task.findByIdAndDelete(id);

  if (!task) {
    res.status(404).json({
      success: false,
      message: "Task not found",
    });
    return;
  }

  res.status(200).json({
    success: true,
    message: "Task deleted successfully",
    data: task,
  });
};
