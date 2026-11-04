import type { Task, TaskQueryParams } from "@/types/task.types";
import { api } from "./api";
import type { ApiResponse, Pagination } from "@/types/api.types";

interface GetTasksResponse {
  tasks: Task[];
  pagination: Pagination;
}

export const taskService = {
  getTasks: async (params?: TaskQueryParams) => {
    const { data } = await api.get<ApiResponse<GetTasksResponse>>("/tasks", {
      params,
    });

    return data.data;
  },
};