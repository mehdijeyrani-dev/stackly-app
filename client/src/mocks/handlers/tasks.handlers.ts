import { http, HttpResponse } from "msw";
import { tasks } from "../data/tasks";
import type { Task } from "@/types/task.types";

const API_URL = import.meta.env.VITE_API_URL;

export const taskHandlers = [
  http.get(`${API_URL}/tasks`, ({ request }) => {
    const url = new URL(request.url);

    const page = Math.max(1, Number(url.searchParams.get("page")) || 1);
    const limit = Math.min(
      100,
      Math.max(1, Number(url.searchParams.get("limit")) || 10),
    );

    const completed = url.searchParams.get("completed");

    const search = url.searchParams.get("search")?.trim().toLowerCase();
    const sort = url.searchParams.get("sort") || "newest";

    let filteredTasks = [...tasks];

    // Filter by completed status
    if (completed === "true" || completed === "false") {
      filteredTasks = filteredTasks.filter(
        (task) => task.completed === (completed === "true"),
      );
    }

    // Search tasks
    if (search) {
      filteredTasks = filteredTasks.filter((task) => {
        task.title.toLowerCase().includes(search) ||
          task.description?.toLowerCase().includes(search);
      });
    }

    // Sort tasks
    filteredTasks.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return sort === "oldest" ? dateA - dateB : dateB - dateA;
    });

    // Pagination
    const total = filteredTasks.length;
    const totalPage = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;

    const paginatedTasks = filteredTasks.slice(startIndex, startIndex + limit);

    return HttpResponse.json({
      success: true,
      data: {
        tasks: paginatedTasks,
        pagination: {
          page,
          limit,
          total,
          totalPage,
        },
      },
    });
  }),
  http.get(`${API_URL}/tasks/:id`, ({ params }) => {
    const { id } = params;

    const task = tasks.find((task) => task._id === id);

    if (!task) {
      return HttpResponse.json(
        {
          success: false,
          message: "Task not found",
        },
        { status: 404 },
      );
    }

    return HttpResponse.json({
      success: true,
      data: {
        task,
      },
    });
  }),
  http.post(`${API_URL}/tasks`, async ({ request }) => {
    const body = (await request.json()) as {
      title: string;
      description?: string;
    };

    if (!body.title?.trim()) {
      return HttpResponse.json(
        {
          success: false,
          message: "Title is required",
        },
        { status: 400 },
      );
    }

    const now = new Date().toISOString();

    const newTask: Task = {
      _id: crypto.randomUUID(),
      title: body.title.trim(),
      description: body.description?.trim(),
      completed: false,
      priority: 4,
      dueDate: null,
      createdAt: now,
      updatedAt: now,
    };

    tasks.unshift(newTask);

    return HttpResponse.json(
      {
        success: true,
        data: {
          task: newTask,
        },
      },
      { status: 201 },
    );
  }),
  http.patch(`${API_URL}/tasks/:id`, async ({ params, request }) => {
    const { id } = params;

    const taskIndex = tasks.findIndex((task) => task._id === id);

    if (taskIndex === -1) {
      return HttpResponse.json(
        {
          success: false,
          message: "Task not found",
        },
        { status: 404 },
      );
    }

    const body = (await request.json()) as Partial<
      Pick<Task, "title" | "description" | "completed" | "priority" | "dueDate">
    >;

    if (Object.keys(body).length === 0) {
      return HttpResponse.json(
        {
          success: false,
          message: "At least one field is required",
        },
        { status: 400 },
      );
    }

    const updatedTask: Task = {
      ...tasks[taskIndex],
      ...body,
      updatedAt: new Date().toISOString(),
    };

    tasks[taskIndex] = updatedTask;

    return HttpResponse.json({
      success: true,
      data: {
        task: updatedTask,
      },
    });
  }),

  http.delete(`${API_URL}/tasks/:id`, async ({ params }) => {
    const { id } = params;

    const taskIndex = tasks.findIndex((task) => task._id === id);

    if (taskIndex === -1) {
      return HttpResponse.json(
        {
          success: false,
          message: "Task not found",
        },
        { status: 404 },
      );
    }

    tasks.splice(taskIndex, 1);

    return HttpResponse.json({
      success: true,
      message: "Task deleted successfully",
    });
  }),
];
