import { z } from "zod";

const verifyEmailSchema = z.object({
  token: z.string().min(1),
});

export type VerifyEmailInput = z.output<typeof verifyEmailSchema>;

export default verifyEmailSchema;
