import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};

export default errorHandler;
