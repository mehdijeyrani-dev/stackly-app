import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.ts";
import { ThemeController } from "./components/common";
import "./index.css";

async function enableMocking() {
  if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MOCKING === "true") {
    const { worker } = await import("./mocks/browser.ts");

    return worker.start({
      onUnhandledFrame: "warn",
    });
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <ThemeController />
      <RouterProvider router={router} />
    </StrictMode>,
  );
});
