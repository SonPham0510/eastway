# EASTWAY — Logistics Landing Page

Next.js 16 (App Router) + Tailwind CSS 4 landing page for **EASTWAY Logistics**, rebuilt from the
original Shipify reference design. Static export, ready for Vercel.

## Stack

- Next.js 16.2 (App Router, static export via `output: "export"`)
- React 19, TypeScript 5.9
- Tailwind CSS 4 (tokens in `app/globals.css`)
- Self-hosted Satoshi webfont (`public/fonts`), no external font requests

## Structure

```
app/
  layout.tsx          fonts, metadata, skip link
  page.tsx            homepage composition
  globals.css         design tokens + container utility
  location/page.tsx   locations page
  robots.ts           generated robots.txt
  sitemap.ts          generated sitemap.xml
components/
  Header.tsx          sticky nav, location dropdown, mobile menu
  Footer.tsx          4-column footer
  Logo.tsx            EASTWAY mark + wordmark
  SearchBar.tsx       location search
  icons/index.tsx     hand-drawn SVG icon set
  sections/           Hero, WhyUs, Services, GlobalReach, Testimonial,
                      Insights, Faq, CtaBanner, QuoteForm
public/
  images/             logo mark, world map, photography
  fonts/              Satoshi woff2
  icons/              favicon
  llms.txt            LLM discovery file
```

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # webpack builder, outputs static site to out/
```

## Deploy to Vercel

### Option A — Git (recommended)

1. Push this folder to a GitHub/GitLab repo.
2. Go to https://vercel.com/new, import the repo.
3. Framework preset: **Next.js**. Build command `npm run build`, output `.next` (Vercel handles
   the static export automatically). No environment variables are required.
4. Deploy. Every push to the default branch redeploys.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel          # first run links the project and creates a preview deployment
vercel --prod   # promote to production
```

The project pins Node `24.x` via `package.json` engines. `package-lock.json` includes the
Linux optional binaries (`@next/swc-*`, `lightningcss-*`, `sharp`) so `npm ci` resolves
deterministically on Vercel.

`allowScripts` denies `sharp`'s install script. Sharp is not used by this project
(`images.unoptimized` is enabled for static export), and the script can fall back to
compiling from source, which is slower and can fail on a build machine.

### Custom domain

Vercel dashboard → Project → Settings → Domains → add your domain and point DNS as instructed.
Canonical URLs for metadata, `robots.txt` and `sitemap.xml` are resolved in `app/site.ts`.
Set the `NEXT_PUBLIC_SITE_URL` environment variable in Vercel (for example
`https://eastway.com`) to point them at your domain; on Vercel the deployment URL is used
automatically when the variable is unset.

## Content to review before launch

- Placeholder phone `+90 212 000 00 00` in `Footer.tsx` and `QuoteForm.tsx`
- Email `hello@eastway.com` across `Footer.tsx`, `QuoteForm.tsx`, `public/llms.txt`
- Office address in `Footer.tsx`
- Headline, service copy, stats, testimonials and article cards are written content — adjust to
  the real EASTWAY business
- The quote form is client-side only; wire it to an API route or form service for real leads

## Quality checks

- `npx tsc --noEmit` — clean
- `npm run build` — clean, 5 static routes (`/`, `/location`, `/robots.txt`, `/sitemap.xml`, `/_not-found`)
- Lighthouse (desktop, snapshot): Accessibility 100, Best Practices 100

Browser QA (Playwright, 390/768/1440px): all images load, no console errors, no horizontal
overflow; FAQ accordion, quote form and mobile menu verified.
