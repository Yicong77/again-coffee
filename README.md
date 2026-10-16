# Again Coffee — Café Brand Website

A brand and store-guide website for Again Coffee, a café in Docklands, Melbourne.
Built as a single-developer project: design implementation, performance
optimisation and deployment.

## What it is

A single-page brand site that turns café discovery into foot traffic:

- **Brand showcase** — hero, brand story and photo journal sections
- **Photo journal carousel** — auto-rotating and manually switchable gallery
- **Store guidance** — address, opening hours and Instagram entry points;
  address links open Google Maps directions
- **Responsive** — desktop, tablet and mobile layouts with animation and
  accessibility details

## Tech stack

- React 19 · TypeScript · Next.js (App Router)
- Tailwind CSS · CSS Modules
- Sharp — multi-size WebP image generation, lazy loading and `srcSet`
- Cloudflare Workers / Wrangler — build and deployment

## Getting started

```bash
npm install
npm run dev      # local development
npm run build    # production build
```

## Project structure

- `app/` — site code (App Router pages and components)
- `public/` / `assets/` — images and static assets
- `worker/` — Cloudflare Workers entry
- `scripts/` · `tests/` — build scripts and tests

## Notes

- Image pipeline: Sharp generates multiple WebP sizes at build time; pages
  lazy-load with `srcSet` to cut unnecessary transfers and layout shift.
- Deployed with Wrangler to Cloudflare Workers.
