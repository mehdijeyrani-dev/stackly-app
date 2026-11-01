import { z } from "zod";

const registerSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().trim().toLowerCase(),
  password: z.string().min(8).max(72),
});

export type RegisterInput = z.output<typeof registerSchema>;

export default registerSchema;
