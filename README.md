# Pizza Menu

Basic Next.js + TypeScript app for the Hy-Vee pairing interview.

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

- `types/pizza.ts` — Pizza type
- `data/pizzas.ts` — pizza data (server-side)
- `app/api/pizzas/route.ts` — `GET /api/pizzas` endpoint
- `lib/api/pizzas.ts` — fetch helper used by TanStack Query
- `app/page.tsx` — fetches pizzas with `useQuery` and shows the menu
- `app/providers.tsx` — TanStack Query provider
