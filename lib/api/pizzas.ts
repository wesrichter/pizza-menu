import { pizzasSchema, type Pizza } from "@/types/pizza";

export async function fetchPizzas(): Promise<Pizza[]> {
  const response = await fetch("/api/pizzas");

  if (!response.ok) {
    throw new Error("Could not load pizzas");
  }

  const data: unknown = await response.json();
  return pizzasSchema.parse(data);
}
