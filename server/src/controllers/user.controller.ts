import type { RequestHandler } from "express";
import {
  changePasswordService,
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

export const changePasswordController: RequestHandler = async (req, res) => {
  try {
    await changePasswordService(req.userId!, req.body);

    res.status(200).json({
      success: true,
      message: "Password changed successfully. Please log in again.",
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Current password is incorrect"
    ) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
      return;
    }

    throw error;
  }
};
