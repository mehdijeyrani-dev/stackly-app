import { RequestHandler } from "express";
import type { z, ZodType } from "zod";

const validateQuery = <T extends ZodType>(
  schema: T,
): RequestHandler<
  Record<string, string>,
  unknown,
  unknown,
  unknown,
  { validatedQuery: z.output<T> }
> => {
  return (req, res, next) => {
    const result = schema.safeParse(req.query);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: "Invalid query parameters",
        errors: result.error.issues,
      });
      return;
    }

    res.locals.validatedQuery = result.data;
    next();
  };
};

export default validateQuery;
