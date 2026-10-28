import express from "express";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Stackly API is healthy",
  });
});

app.get("/api/test-error", (_req, res) => {
  throw new Error("Test server error");
});

app.use(errorHandler);

export default app;
