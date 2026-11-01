import { z } from "zod";

const loginSchema = z.object({
  email: z.email().trim().toLowerCase(),
  password: z.string().min(8).max(72),
});

export type LoginInput = z.output<typeof loginSchema>;

export default loginSchema;
