import { z } from 'zod';

export const storeUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});
