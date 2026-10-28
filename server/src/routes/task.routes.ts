import { Router } from "express";
import validate from "../middlewares/validate.js";
import taskSchema from "../schemas/task.schema.js";
import { createTask, getTasks } from "../controllers/task.controller.js";

const router = Router();

router.post("/", validate(taskSchema), createTask);
router.get("/", getTasks);

export default router;
