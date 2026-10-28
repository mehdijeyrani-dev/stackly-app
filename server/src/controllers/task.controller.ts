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
