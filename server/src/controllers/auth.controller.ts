import type { RequestHandler } from "express";
import { RegisterInput } from "../schemas/register.schema.js";
import { registerService } from "../services/auth.service.js";

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
