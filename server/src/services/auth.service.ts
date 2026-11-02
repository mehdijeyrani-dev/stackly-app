import { createHash, randomBytes } from "crypto";
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
import type { ForgotPasswordInput } from "../schemas/forgotPassword.schema.js";
import type { ResetPasswordInput } from "../schemas/resetPassword.schema.js";

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

export const forgotPasswordService = async (data: ForgotPasswordInput) => {
  const user = await User.findOne({
    email: data.email,
  });

  if (!user) {
    return null;
  }

  const resetToken = randomBytes(32).toString("hex");

  const resetPasswordTokenHash = createHash("sha256")
    .update(resetToken)
    .digest("hex");

  user.resetPasswordTokenHash = resetPasswordTokenHash;

  user.resetPasswordExpiresAt = new Date(Date.now() + 15 * 60 * 1000);

  await user.save();

  // console.log("Password Reset Token:", resetToken);

  return resetToken;
};

export const resetPasswordService = async (data: ResetPasswordInput) => {
  const resetTokenHash = createHash("sha256").update(data.token).digest("hex");

  const user = await User.findOne({
    resetPasswordTokenHash: resetTokenHash,
    resetPasswordExpiresAt: { $gt: new Date() },
  }).select("+resetPasswordTokenHash +resetPasswordExpiresAt");

  if (!user) {
    throw new Error("Invalid or expired reset token");
  }

  user.password = await bcrypt.hash(data.password, 12);

  user.resetPasswordTokenHash = undefined;
  user.resetPasswordExpiresAt = undefined;

  await user.save();

  await Session.updateMany(
    {
      userId: user._id,
      revokedAt: null,
    },
    { revokedAt: new Date() },
  );

  return user;
};
