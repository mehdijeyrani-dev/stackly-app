import { Router } from "express";
import validate from "../middlewares/validate.js";
import registerSchema from "../schemas/register.schema.js";
import {
  loginController,
  refresh,
  registerController,
} from "../controllers/auth.controller.js";
import loginSchema from "../schemas/login.schema.js";

const router = Router();

router.post("/register", validate(registerSchema), registerController);
router.post("/login", validate(loginSchema), loginController);
router.post("/refresh", refresh);

export default router;
