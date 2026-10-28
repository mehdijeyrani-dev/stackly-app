import { Router } from "express";
import validate from "../middlewares/validate.js";
import taskSchema from "../schemas/task.schema.js";
import {
  createTask,
  getTaskById,
  getTasks,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTaskById);
router.post("/", validate(taskSchema), createTask);

export default router;
