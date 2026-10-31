import { z } from "zod";

const updateTaskSchema = z
  .object({
    title: z.string().trim().min(1).max(200).optional(),
    description: z.string().max(2000).optional(),
    completed: z.boolean().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided",
  });

export type UpdateTaskOutput = z.output<typeof updateTaskSchema>;

export default updateTaskSchema;
