import { Request, Response, NextFunction } from "express";

import * as yup from "yup";

export const Validate =
  (schema: yup.AnyObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const resource = req.body;
    try {
      await schema.validate(resource);
      next();
    } catch (e) {
      res.status(400).json({ error: e.errors.join(", ") });
    }
  };
