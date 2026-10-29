import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Stackly API is healthy",
  });
});

app.use("/api/tasks", taskRoutes);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorHandler);

export default app;
