# filo.nodo

Static catalog site for handmade crochet, embroidery frames, and custom embroideries.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding products

1. Put images in `public/products/`
2. Add entries in `src/data/products.ts`

Use `comingSoon: true` and `image: null` for placeholders until you have photos.

## Site config

Brand name, tagline, and social links live in `src/data/site.ts`.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
