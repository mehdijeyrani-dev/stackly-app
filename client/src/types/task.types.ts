export interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 1 | 2 | 3 | 4;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskPayload {
  title: string;
  description?: string;
  priority?: 1 | 2 | 3 | 4;
  dueDate?: string | null;
}

export interface UpdateTaskPayload {
  title?: string;
  description?: string;
  priority?: 1 | 2 | 3 | 4;
  dueDate?: string | null;
}

export interface TaskQueryParams {
  page?: number;
  limit?: number;
  completed?: boolean;
  search?: string;
  sort?: "newest" | "oldest";
}
