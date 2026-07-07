// Our pizza list lives here on the server side.
// The API reads from this file and sends it to the browser.

export const pizzas = [
  {
    id: 1,
    name: "Cheese",
    description: "Tomato sauce and mozzarella",
    price: 12,
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Classic pepperoni with extra cheese",
    price: 14,
  },
  {
    id: 3,
    name: "Veggie",
    description: "Peppers, onions, mushrooms, olives",
    price: 13,
  },
  {
    id: 4,
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham",
    price: 16,
  },
];
