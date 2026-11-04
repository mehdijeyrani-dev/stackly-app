import type { Task } from "../../types/task.types";

export const tasks: Task[] = [
  {
    _id: "task-1",
    title: "Design dashboard layout",
    description: "Create the main dashboard layout",
    completed: false,
    priority: 1,
    dueDate: "2026-11-06T10:00:00.000Z",
    createdAt: "2026-11-01T08:00:00.000Z",
    updatedAt: "2026-11-01T08:00:00.000Z",
  },
  {
    _id: "task-2",
    title: "Review project structure",
    description: "Review frontend folder organization",
    completed: true,
    priority: 2,
    dueDate: null,
    createdAt: "2026-11-02T09:00:00.000Z",
    updatedAt: "2026-11-03T09:00:00.000Z",
  },
  {
    _id: "task-3",
    title: "Implement task management",
    description: "Implement task CRUD operations",
    completed: false,
    priority: 3,
    dueDate: "2026-11-08T12:00:00.000Z",
    createdAt: "2026-11-03T10:00:00.000Z",
    updatedAt: "2026-11-03T10:00:00.000Z",
  },
  {
    _id: "task-4",
    title: "Prepare project documentation",
    description: "Document API endpoints and responses",
    completed: false,
    priority: 4,
    dueDate: null,
    createdAt: "2026-11-04T07:00:00.000Z",
    updatedAt: "2026-11-04T07:00:00.000Z",
  },
];
