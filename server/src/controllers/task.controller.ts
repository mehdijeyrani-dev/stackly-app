import { RequestHandler } from "express";
import { isValidObjectId } from "mongoose";
import {
  createTaskService,
  deleteTaskService,
  getTaskByIdService,
  getTasksService,
  updateTaskService,
} from "../services/task.service.js";
import type { TaskQuery } from "../schemas/taskQuery.schema.js";
import type { CreateTaskOutput } from "../schemas/task.schema.js";
import type { UpdateTaskOutput } from "../schemas/updateTask.schema.js";

export const createTask: RequestHandler<
  Record<string, string>,
  unknown,
  CreateTaskOutput
> = async (req, res) => {
  const { title, description } = req.body;

  const task = await createTaskService({
    title,
    description,
  });

  res.status(201).json({
    success: true,
    data: task,
  });
};

export const getTasks: RequestHandler<
  Record<string, string>,
  unknown,
  unknown,
  unknown,
  { validatedQuery: TaskQuery }
> = async (_req, res) => {
  const query = res.locals.validatedQuery;

  const result = await getTasksService(query);

  res.status(200).json({
    success: true,
    data: result.tasks,
    pagination: result.pagination,
  });
};

export const getTaskById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid task ID",
    });
    return;
  }

  const task = await getTaskByIdService(id);

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

export const updateTask: RequestHandler<
  Record<string, string>,
  unknown,
  UpdateTaskOutput
> = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({
      success: false,
      message: "Invalid task ID",
    });
    return;
  }

  const task = await updateTaskService(id, req.body);

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

  const task = await deleteTaskService(id);

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
