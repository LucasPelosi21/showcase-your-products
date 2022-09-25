import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

export const validateBody =
  (schema: AnyZodObject) =>
  ({ body }: Request, res: Response, next: NextFunction) => {
    const data = schema.safeParse(body);
    if (!data.success) return res.status(400).send(data.error);

    return next();
  };
