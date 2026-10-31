import { RequestHandler } from "express";
import type { z, ZodType } from "zod";

const validate = <T extends ZodType>(
  schema: T,
): RequestHandler<Record<string, string>, unknown, z.output<T>, unknown> => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: result.error.issues,
      });

      return;
    }

    req.body = result.data;
    next();
  };
};

export default validate;
