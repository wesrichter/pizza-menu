import type { Pizza } from "@/types/pizza";

export async function fetchPizzas(): Promise<Pizza[]> {
  const response = await fetch("/api/pizzas");

  if (!response.ok) {
    throw new Error("Could not load pizzas");
  }

  return response.json();
}
