import { createHash } from "crypto";
import User from "../models/user.model.js";
import type { LoginInput } from "../schemas/login.schema.js";
import type { RegisterInput } from "../schemas/register.schema.js";
import bcrypt from "bcrypt";
import Session from "../models/session.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/jwt.util.js";

export const registerService = async (data: RegisterInput) => {
  const existingUser = await User.findOne({
    email: data.email,
  });

  if (existingUser) {
    throw new Error("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);

  const user = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
  });

  return user;
};

export const loginService = async (data: LoginInput) => {
  const user = await User.findOne({
    email: data.email,
  }).select("+password");

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(data.password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  return user;
};

export const createSessionService = async (
  userId: string,
  refreshToken: string,
) => {
  const refreshTokenHash = createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const session = await Session.create({
    userId,
    refreshTokenHash,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
  return session;
};

export const refreshSessionService = async (refreshToken: string) => {
  const payload = verifyRefreshToken(refreshToken) as {
    userId: string;
  };

  const oldHash = createHash("sha256").update(refreshToken).digest("hex");

  const newRefreshToken = generateRefreshToken(payload.userId);

  const newHash = createHash("sha256").update(newRefreshToken).digest("hex");

  const session = await Session.findOneAndUpdate(
    {
      userId: payload.userId,
      refreshTokenHash: oldHash,
      expiresAt: { $gt: new Date() },
      revokedAt: null,
    },
    {
      refreshTokenHash: newHash,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
    {
      new: true,
    },
  );

  if (!session) {
    throw new Error("Invalid refresh token");
  }

  return {
    accessToken: generateAccessToken(payload.userId),
    refreshToken: newRefreshToken,
  };
};

export const logoutService = async (refreshToken: string) => {
  const refreshTokenHash = createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  await Session.findOneAndUpdate(
    {
      refreshTokenHash,
      revokedAt: null,
    },
    {
      revokedAt: new Date(),
    },
  );
};
