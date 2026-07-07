import { z } from "zod";

export const pizzaSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
});

export const pizzasSchema = z.array(pizzaSchema);

export type Pizza = z.infer<typeof pizzaSchema>;
