"use client";

// Step 1 (live in interview): hard-code pizzas right in this file and map over them.
// Step 2: move data to the API and fetch it — that's what we have now.

import { useEffect, useState } from "react";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPizzas() {
      try {
        const response = await fetch("/api/pizzas");

        if (!response.ok) {
          throw new Error("Could not load pizzas");
        }

        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPizzas();
  }, []);

  if (loading) {
    return <p className="status">Loading menu...</p>;
  }

  if (error) {
    return <p className="status error">Oops: {error}</p>;
  }

  return (
    <main className="page">
      <h1>Pizza Menu</h1>
      <p className="subtitle">Pick your favorite slice</p>

      <ul className="pizza-list">
        {pizzas.map((pizza) => (
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
