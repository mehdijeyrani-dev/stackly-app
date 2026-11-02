import { RequestHandler } from "express";
import { verifyAccessToken } from "../utils/jwt.util.js";
import User from "../models/user.model.js";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

const auth: RequestHandler = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization?.startsWith("Bearer ")) {
      res.status(401).json({
        success: false,
        message: "Authentication required",
      });
      return;
    }

    const token = authorization.split(" ")[1];

    const payload = verifyAccessToken(token) as {
      userId: string;
    };

    req.userId = payload.userId;

    const user = await User.findById(req.userId);

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
      return;
    }

    next();
  } catch (error) {
    if (
      error instanceof Error &&
      (error.name === "JsonWebTokenError" ||
        error.name === "TokenExpiredError" ||
        error.name === "NotBeforeError")
    ) {
      res.status(401).json({
        success: false,
        message: "Invalid or expired access token",
      });
      return;
    }
    next(error);
  }
};

export default auth;
