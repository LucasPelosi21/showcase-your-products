import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send('Token não existe');

  try {
    const [, token] = authHeader.split(' ');
    jwt.verify(token, process.env.CUSTOM_JWT_KEY || '');

    return next();
  } catch (err) {
    return res.status(401).send({ error: 'Token Invalido' });
  }
};
