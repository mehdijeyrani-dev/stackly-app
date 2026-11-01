import { z } from "zod";

const resetPasswordSchema = z.object({
  token: z.string().min(1),
  password: z.string().min(8).max(72),
});

export type ResetPasswordInput = z.output<typeof resetPasswordSchema>;

export default resetPasswordSchema;
