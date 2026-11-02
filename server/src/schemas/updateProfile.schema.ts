import { trim, z } from "zod";

const updateProfileSchema = z.object({
  name: z.string().trim().min(3).max(100),
});

export type UpdateProfileInput = z.output<typeof updateProfileSchema>;

export default updateProfileSchema;
