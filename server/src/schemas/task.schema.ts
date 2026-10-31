import { z } from "zod";

const taskSchema = z.object({
  title: z.string().trim().min(1).max(200),
  description: z.string().max(2000).optional(),
});

export type CreateTaskInput = z.infer<typeof taskSchema>;

export default taskSchema;
