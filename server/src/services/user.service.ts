import Session from "../models/session.model.js";
import User from "../models/user.model.js";
import { ChangePasswordInput } from "../schemas/changePassword.schema.js";
import type { UpdateProfileInput } from "../schemas/updateProfile.schema.js";
import bcrypt from "bcrypt";

export const getProfileService = async (userId: string) => {
  const user = await User.findById(userId).select(
    "name email isEmailVerified createdAt",
  );

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const updateProfileService = async (
  userId: string,
  data: UpdateProfileInput,
) => {
  const user = await User.findByIdAndUpdate(
    userId,
    { $set: { name: data.name } },
    { returnDocument: "after", runValidators: true },
  ).select("name email isEmailVerified createdAt");

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const changePasswordService = async (
  userId: string,
  data: ChangePasswordInput,
) => {
  const user = await User.findById(userId).select("+password");

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(
    data.currentPassword,
    user.password,
  );

  if (!isPasswordValid) {
    throw new Error("Current password is incorrect");
  }

  user.password = await bcrypt.hash(data.newPassword, 12);

  await user.save();

  await Session.updateMany(
    {
      userId,
      revokedAt: null,
    },
    { revokedAt: new Date() },
  );
};
