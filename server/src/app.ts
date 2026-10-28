import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import validate from "./middlewares/validate.js";
import taskSchema from "./schemas/task.schema.js";
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

app.use(errorHandler);

export default app;
