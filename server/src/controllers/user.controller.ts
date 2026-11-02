import type { RequestHandler } from "express";
import {
  getProfileService,
  updateProfileService,
} from "../services/user.service.js";

export const getProfileController: RequestHandler = async (req, res) => {
  const user = await getProfileService(req.userId!);

  res.status(200).json({
    success: true,
    data: user,
  });
};

export const updateProfileController: RequestHandler = async (req, res) => {
  const user = await updateProfileService(req.userId!, req.body);

  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    data: user,
  });
};
