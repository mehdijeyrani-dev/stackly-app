import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.ts";
import { ThemeController } from "./components/common";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeController />
    <RouterProvider router={router} />
  </StrictMode>,
);
