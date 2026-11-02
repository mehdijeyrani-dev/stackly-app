import { z } from "zod";

const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1).max(72),
    newPassword: z.string().min(8).max(72),
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "New password must be different from current password",
    path: ["newPassword"],
  });
  
  export type ChangePasswordInput = z.output<typeof changePasswordSchema>;

  export default changePasswordSchema;
