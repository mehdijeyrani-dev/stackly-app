import User from "../models/user.model.js";
import type { UpdateProfileInput } from "../schemas/updateProfile.schema.js";

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
