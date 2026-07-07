import { pizzas } from "@/data/pizzas";

// GET /api/pizzas
export async function GET() {
  return Response.json(pizzas);
}
