import { Router } from "express";
import auth from "../middlewares/auth.js";
import {
  changePasswordController,
  getProfileController,
  updateProfileController,
} from "../controllers/user.controller.js";
import validate from "../middlewares/validate.js";
import updateProfileSchema from "../schemas/updateProfile.schema.js";
import changePasswordSchema from "../schemas/changePassword.schema.js";

const router = Router();

router.get("/me", auth, getProfileController);
router.patch(
  "/me",
  auth,
  validate(updateProfileSchema),
  updateProfileController,
);
router.patch(
  "/me/password",
  auth,
  validate(changePasswordSchema),
  changePasswordController,
);

export default router;
