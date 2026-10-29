import { Router } from "express";
import validate from "../middlewares/validate.js";
import taskSchema from "../schemas/task.schema.js";
import {
  createTask,
  deleteTask,
  getTaskById,
  getTasks,
  updateTask,
} from "../controllers/task.controller.js";
import updateTaskSchema from "../schemas/updateTask.schema.js";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", validate(taskSchema), createTask);
router.patch("/:id", validate(updateTaskSchema), updateTask);
router.delete("/:id", deleteTask);

export default router;
