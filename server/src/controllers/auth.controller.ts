import type { RequestHandler } from "express";
import {
  registerService,
  loginService,
  createSessionService,
  refreshSessionService,
  logoutService,
  forgotPasswordService,
  resetPasswordService,
} from "../services/auth.service.js";
import type { RegisterInput } from "../schemas/register.schema.js";
import type { LoginInput } from "../schemas/login.schema.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils//jwt.util.js";
import User from "../models/user.model.js";
import type { ForgotPasswordInput } from "../schemas/forgotPassword.schema.js";
import type { ResetPasswordInput } from "../schemas/resetPassword.schema.js";

export const registerController: RequestHandler<
  Record<string, string>,
  unknown,
  RegisterInput
> = async (req, res) => {
  try {
    const user = await registerService(req.body);

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "Email already registered"
    ) {
      res.status(409).json({
        success: false,
        message: error.message,
      });
      return;
    }

    throw error;
  }
};

export const loginController: RequestHandler<
  Record<string, string>,
  unknown,
  LoginInput
> = async (req, res) => {
  const user = await loginService(req.body);

  const accessToken = generateAccessToken(user._id.toString());
  const refreshToken = generateRefreshToken(user._id.toString());

  await createSessionService(user._id.toString(), refreshToken);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/api/auth",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    success: true,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      accessToken,
    },
  });
};

export const refreshSessionController: RequestHandler = async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  if (!refreshToken) {
    res.status(401).json({
      success: false,
      message: "Refresh token is required",
    });
    return;
  }

  try {
    const result = await refreshSessionService(refreshToken);

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      data: {
        accessToken: result.accessToken,
      },
    });
  } catch {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/api/auth",
    });

    res.status(401).json({
      success: false,
      message: "Invalid or expired refresh token",
    });
  }
};

export const logoutController: RequestHandler = async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;

  if (refreshToken) {
    await logoutService(refreshToken);
  }

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: process.env.NODE_DEV === "production",
    sameSite: "lax",
    path: "/api/auth",
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

export const getMe: RequestHandler = async (req, res) => {
  const user = await User.findById(req.userId).select(
    "name email isEmailVerified createAt",
  );

  if (!user) {
    res.status(404).json({
      success: false,
      message: "User not found",
    });
    return;
  }

  res.status(200).json({
    success: true,
    data: user,
  });
};

export const forgotPasswordController: RequestHandler<
  Record<string, string>,
  unknown,
  ForgotPasswordInput
> = async (req, res) => {   
  await forgotPasswordService(req.body);

  res.status(200).json({
    success: true,
    message:
      "If an account exists with this email, password reset instructions will be sent.",
  });
};

export const resetPasswordController: RequestHandler<
  Record<string, string>,
  unknown,
  ResetPasswordInput
> = async (req, res) => {
  try {
    await resetPasswordService(req.body);

    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch {
    res.status(400).json({
      success: false,
      message: "Invalid or expired reset token",
    });
  }
};
