import { Dashboard } from "@/layouts";
import {
  Completed,
  Favorites,
  Inbox,
  NotFound,
  Notifications,
  Reporting,
  Today,
  Upcoming,
} from "@/pages";
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
      {
        path: "today",
        Component: Today,
      },
      {
        path: "upcoming",
        Component: Upcoming,
      },
      {
        path: "completed",
        Component: Completed,
      },
      {
        path: "favorites",
        Component: Favorites,
      },
      {
        path: "report",
        Component: Reporting,
      },
      {
        path: "notifications",
        Component: Notifications
      }
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
