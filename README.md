# Mecha Auto Spa

Premium mobile detailing website for Rochester, MN — built to the specification in [design.md](design.md).

**Stack:** Next.js 15 (App Router, static export) · TypeScript · Tailwind CSS v4 · shadcn/ui · Framer Motion · React Hook Form + Zod

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## Before launch — replace the placeholders

Everything site-wide lives in **`src/lib/constants.ts`**:

| What | Where |
|---|---|
| Phone, email, hours, social links | `SITE` in `src/lib/constants.ts` |
| Domain (also update after buying) | `SITE.url` |
| Cal.com booking link | `SITE.bookingUrl` |
| Quote form endpoint (see below) | `SITE.quoteEndpoint` |
| Google review content | `src/data/reviews.ts` |
| Legal copy | `src/app/privacy/`, `src/app/terms/` |
| Photography | `public/images/` (see [ATTRIBUTION.md](ATTRIBUTION.md)) |

### Quote form

The site is fully static, so the quote form needs an external endpoint. Create a free form endpoint (e.g. [Formspree](https://formspree.io)) and paste its URL into `SITE.quoteEndpoint`. Until then, the form falls back to opening a pre-filled email draft to `SITE.email`.

## Deployment (GitHub Pages)

1. Create a GitHub repository and push this project to `main`.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` builds and deploys via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Currently live at **https://rwetz.github.io/mecha-auto-spa/**.

### Base path (subpath vs. custom domain)

Because the site is served from the `/mecha-auto-spa/` subpath, the deploy
workflow sets `PAGES_BASE_PATH=/mecha-auto-spa`, which `next.config.ts` turns
into `basePath` (covering links + `_next` assets) and `NEXT_PUBLIC_BASE_PATH`
(consumed by `asset()` in `src/lib/asset.ts` to prefix `next/image` sources —
`basePath` alone does *not* cover those).

### Custom domain (Squarespace DNS)

1. Repo **Settings → Pages → Custom domain** → enter `mechaautospa.com`.
2. In Squarespace DNS, add four `A` records for `@` pointing to GitHub Pages IPs (`185.199.108.153`, `.109.`, `.110.`, `.111.`) and a `CNAME` record for `www` → `rwetz.github.io`.
3. Enable **Enforce HTTPS** once DNS propagates.
4. **Delete the `env: PAGES_BASE_PATH` block** from `.github/workflows/deploy.yml` — a root domain needs no base path, and `asset()`/`basePath` become no-ops automatically.

## Future: moving to Vercel (Part 4 of the spec)

The architecture is Vercel-ready. When you outgrow static hosting (Stripe payments, Supabase, Resend email, API routes):

1. Remove `output: "export"` and `images.unoptimized` from `next.config.ts`.
2. Add the `/api/quote`, `/api/booking`, `/api/stripe` route handlers.
3. Point `SITE.quoteEndpoint` at `/api/quote`.
4. Import the repo on vercel.com and move DNS.

No page or component code needs to change.

## Structure

```
src/
├── app/                  # Routes: /, /services, /ceramic-coatings,
│                         # /paint-correction, /request-quote, /contact
├── components/
│   ├── home/             # 13 homepage sections (hero → final CTA)
│   ├── services/         # Page hero, pricing tiers, add-ons grid
│   ├── booking/          # Quote form
│   ├── layout/           # Navbar, footer, logo
│   ├── animations/       # FadeUp, Stagger, MotionProvider
│   └── ui/               # shadcn/ui primitives
├── data/                 # Services, pricing, reviews, FAQs, locations
└── lib/                  # constants.ts (business info), schema.ts (JSON-LD)
```
