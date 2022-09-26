import { z } from 'zod';

export const storeProductSchema = z.object({
  category_id: z.number().int(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
});

export const updateProductSchema = z.object({
  category_id: z.number().int(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
});
