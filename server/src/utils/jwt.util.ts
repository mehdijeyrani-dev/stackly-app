import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwt.js";

export const generateAccessToken = (userId: string) => {
  return jwt.sign({ userId }, jwtConfig.access.secret, {
    expiresIn: jwtConfig.access.expiresIn,
  });
};

export const generateRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, jwtConfig.refresh.secret, {
    expiresIn: jwtConfig.refresh.expiresIn,
  });
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, jwtConfig.access.secret);
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, jwtConfig.refresh.secret);
};
