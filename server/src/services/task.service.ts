import Task from "../models/Task.js";
import { CreateTaskInput } from "../schemas/task.schema.js";
import type { TaskQuery } from "../schemas/taskQuery.schema.js";
import { UpdateTaskInput } from "../schemas/updateTask.schema.js";

type TaskFilter = {
  completed?: boolean;
  $or?: (
    | { title: { $regex: string; $options: "i" } }
    | { description: { $regex: string; $options: "i" } }
  )[];
};

const escapeRegex = (value: string): string => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

export const createTaskService = async ({
  title,
  description,
}: CreateTaskInput) => {
  return Task.create({
    title,
    description,
  });
};

export const getTasksService = async ({
  page,
  limit,
  completed,
  search,
  sort,
}: TaskQuery) => {
  const skip = (page - 1) * limit;

  const filter: TaskFilter = {};

  if (completed === "true") {
    filter.completed = true;
  } else if (completed === "false") {
    filter.completed = false;
  }

  if (search) {
    const escapedSearch = escapeRegex(search);

    filter.$or = [
      {
        title: { $regex: escapedSearch, $options: "i" },
      },
      {
        description: { $regex: escapedSearch, $options: "i" },
      },
    ];
  }

  const [tasks, total] = await Promise.all([
    Task.find(filter)
      .sort({ createdAt: sort === "newest" ? -1 : 1 })
      .skip(skip)
      .limit(limit),

    Task.countDocuments(filter),
  ]);

  const totalPages = Math.ceil(total / limit);

  return {
    tasks,
    pagination: {
      currentPage: page,
      pageSize: limit,
      totalResults: total,
      totalPages: totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
};

export const getTaskByIdService = async (id: string | string[]) => {
  return Task.findById(id);
};

export const updateTaskService = async (
  id: string | string[],
  updates: UpdateTaskInput,
) => {
  return Task.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });
};

export const deleteTaskService = async (id: string | string[]) => {
  return Task.findByIdAndDelete(id);
};
