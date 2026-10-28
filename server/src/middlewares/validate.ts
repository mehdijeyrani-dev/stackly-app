import { RequestHandler } from "express";
import { ZodType } from "zod";

const validate = (schema: ZodType): RequestHandler => {
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
