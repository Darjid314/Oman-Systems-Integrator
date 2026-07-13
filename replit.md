# Allak Universal LLC — Lead Generation Website

A corporate lead-generation website for Allak Universal LLC, a systems integrator based in Barka, Oman, focused on government IT/networking tenders.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port from env)
- `pnpm --filter @workspace/allak-universal run dev` — run the marketing site (served via its artifact workflow)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)
- Frontend: React + Vite (artifact `allak-universal`, served at `/`)

## Where things live

- `artifacts/allak-universal` — the marketing/lead-gen site (single page: hero, services grid, about, government tender credibility, contact form)
- `artifacts/api-server/src/routes/leads.ts` — `POST /api/leads` endpoint that saves contact form submissions
- `lib/db/src/schema/leads.ts` — `leads` table (name, email, phone, company, message, createdAt)
- `lib/api-spec/openapi.yaml` — source of truth for the `/leads` API contract

## Architecture decisions

- Contact form submissions are persisted via a real backend endpoint (`useCreateLead` hook → `POST /api/leads` → `leads` table), not faked, since lead capture is the site's primary purpose.
- No auth/admin UI for viewing leads yet — submissions are stored in the `leads` table and can be queried directly via the database.

## Product

- Single-page corporate site presenting Allak Universal LLC's service lines (IT & networking, One Screen interactive displays, Huawei products, storage servers, firewalls/network security, VR/XR, structured cabling, CCTV, video walls, AV solutions, OT peripherals, desktop/IT support), an About section, a government-tender credibility section, and a working contact form that saves inquiries to the database.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- In this scaffold's `index.css`, any `@import url(...)` (e.g. Google Fonts) must come before `@import 'tailwindcss'` — CSS requires `@import` statements to precede other at-rules/declarations, and Tailwind's own import expands to non-import content.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
