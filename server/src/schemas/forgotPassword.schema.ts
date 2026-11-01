import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.email().trim().toLowerCase(),
});

export type ForgotPasswordInput = z.output<typeof forgotPasswordSchema>;

export default forgotPasswordSchema;
