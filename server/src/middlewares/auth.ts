import { RequestHandler } from "express";
import { verifyAccessToken } from "../utils/jwt.util.js";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

const auth: RequestHandler = (req, res, next) => {
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

    next();
  } catch {
    res.status(401).json({
      success: false,
      message: "Invalid or expired access token",
    });
  }
};

export default auth;
