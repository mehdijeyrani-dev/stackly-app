import { z } from "zod";

const taskQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(10),
  completed: z.enum(["true", "false"]).optional(),
  search: z.string().trim().max(100).optional(),
  sort: z.enum(["newest", "oldest"]).default("newest"),
});

export type TaskQueryInput = z.input<typeof taskQuerySchema>;
export type TaskQuery = z.output<typeof taskQuerySchema>;

export default taskQuerySchema;
