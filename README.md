# Pizza Menu

Basic Next.js app for the Hy-Vee pairing interview.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## API

```bash
curl http://localhost:3000/api/pizzas
```

## Project layout

- `data/pizzas.js` — pizza data (server-side)
- `app/api/pizzas/route.js` — `GET /api/pizzas` endpoint
- `app/page.js` — fetches pizzas and shows the menu
