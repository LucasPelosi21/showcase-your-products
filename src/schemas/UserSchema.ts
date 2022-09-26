import { z } from 'zod';

export const storeUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const updateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});
