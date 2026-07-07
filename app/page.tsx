"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPizzas } from "@/lib/api/pizzas";

export default function Home() {
  const { data: pizzas, isLoading, error } = useQuery({
    queryKey: ["pizzas"],
    queryFn: fetchPizzas,
  });

  if (isLoading) {
    return <p className="status">Loading menu...</p>;
  }

  if (error) {
    return <p className="status error">Oops: {error.message}</p>;
  }

  return (
    <main className="page">
      <h1>Pizza Menu</h1>
      <p className="subtitle">Pick your favorite slice</p>

      <ul className="pizza-list">
        {pizzas?.map((pizza) => (
          <li key={pizza.id} className="pizza-card">
            <div className="pizza-top">
              <h2>{pizza.name}</h2>
              <span className="price">${pizza.price}</span>
            </div>
            <p>{pizza.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
