import { RequestHandler } from "express";
import { ZodType } from "zod";

const validateQuery = (schema: ZodType): RequestHandler => {
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
