import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 100,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    resetPasswordTokenHash: {
      type: String,
      select: false,
    },

    resetPasswordExpiresAt: {
      type: Date,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

const User = model("User", userSchema);

export default User;
