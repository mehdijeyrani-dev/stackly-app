import type { RequestHandler } from "express";
import { registerService, loginService } from "../services/auth.service.js";
import type { RegisterInput } from "../schemas/register.schema.js";
import type { LoginInput } from "../schemas/login.schema.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils//jwt.util.js";

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

  res.status(200).json({
    success: true,
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      accessToken,
      refreshToken,
    },
  });
};
