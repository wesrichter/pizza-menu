import { pizzas } from "@/data/pizzas";

export async function GET() {
  return Response.json(pizzas);
}
