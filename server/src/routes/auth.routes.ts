import { Router } from "express";
import validate from "../middlewares/validate.js";
import registerSchema from "../schemas/register.schema.js";
import {
  forgotPasswordController,
  getMe,
  loginController,
  logoutController,
  refreshSessionController,
  registerController,
  resetPasswordController,
} from "../controllers/auth.controller.js";
import loginSchema from "../schemas/login.schema.js";
import auth from "../middlewares/auth.js";
import forgotPasswordSchema from "../schemas/forgotPassword.schema.js";
import resetPasswordSchema from "../schemas/resetPassword.schema.js";

const router = Router();

router.post("/register", validate(registerSchema), registerController);
router.post("/login", validate(loginSchema), loginController);
router.post("/refresh", refreshSessionController);
router.post("/logout", logoutController);
router.get("/me", auth, getMe);
router.post(
  "/forgot-password",
  validate(forgotPasswordSchema),
  forgotPasswordController,
);
router.post(
  "/reset-password",
  validate(resetPasswordSchema),
  resetPasswordController,
);

export default router;
