import { Router } from "express";
import validate from "../middlewares/validate.js";
import registerSchema from "../schemas/register.schema.js";
import { registerController } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", validate(registerSchema), registerController);

export default router;
