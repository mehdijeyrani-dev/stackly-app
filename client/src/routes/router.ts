import { Dashboard } from "@/layouts";
import { Inbox } from "@/pages";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: Inbox,
      },
      {
        path: "inbox",
        Component: Inbox,
      },
    ],
  },
]);
