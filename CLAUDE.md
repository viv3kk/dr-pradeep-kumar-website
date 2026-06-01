# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run lint     # ESLint via next lint
npm run start    # Serve production build locally
```

There are no tests. TypeScript type-checking is part of the build step (`npm run build`).

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the canonical domain. This variable drives all canonical URLs, hreflang alternates, sitemap, and robots.txt — it must be set for SEO metadata to render correctly.

## Architecture

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · next-intl v4 · Framer Motion · Radix UI

### Routing and i18n

Every page is served under a locale prefix (`/en/...`, `/hi/...`). The middleware in `src/proxy.ts` (renamed from `middleware.ts` per Next.js 16 convention) handles locale detection and routing. Locale config lives in `src/i18n/routing.ts` — English is default, locale detection from `Accept-Language` headers is intentionally disabled.

The app has two layout levels:
- `src/app/layout.tsx` — root layout, owns `<html>` and `<body>`, reads locale via `getLocale()`, loads fonts
- `src/app/[locale]/layout.tsx` — validates locale, enables static rendering per locale

### Data layer

All bilingual content uses the `Bilingual` / `BilingualList` interfaces from `src/lib/specialties-data.ts`. Use the `t(bilingual, locale)` and `tList(bilingualList, locale)` helpers to resolve locale-specific strings — never access `.en` or `.hi` directly in components.

**Doctor profile data** (`src/lib/doctor-data.ts`) — single source of truth for Dr. Kumar's personal info, clinic locations, schedule, fees, services, and testimonials. This is typed `as const` so mutations require editing the object directly.

**Specialty pages** use a two-tier data model:
1. `SPECIALTIES` array in `src/lib/specialties-data.ts` — metadata stubs for all 11 specialties (used for nav, grid, static params, metadata generation)
2. Full data in `src/lib/specialties/<slug>.ts` — only exists for fully built pages; registered in the `LOADERS` map at the bottom of `specialties-data.ts`

When adding a new specialty page: create `src/lib/specialties/<slug>.ts` exporting a `Specialty` default, then register it in the `LOADERS` map. Remove the `comingSoon: true` flag from the stub or remove the stub entirely.

### Specialty page rendering

`src/app/[locale]/specialties/[slug]/page.tsx` calls `loadSpecialtyData(slug)` — this returns the full data file for built pages, or falls back to the stub. If `comingSoon: true` is set on the specialty, only the hero + `<ComingSoonBanner>` render; the full section tree is skipped.

### Colors

Specialty colors are typed as `SpecialtyColor` (`coral | teal | navy | gold | purple | sky`). The `COLORS` map in `src/lib/specialty-colors.ts` provides the full palette (bg, bgDeep, border, tag, dot, ink) for each color. Always use this map rather than hard-coding hex values.

### SEO

`src/lib/seo.ts` exposes:
- `SITE_URL` — reads `NEXT_PUBLIC_SITE_URL` env var
- `localeUrl(locale, path)` — builds absolute URLs for JSON-LD and metadata
- `buildLocaleMetadata(locale, path)` — generates canonical + hreflang alternates + OG locale for any page

Each page inlines its own JSON-LD via `dangerouslySetInnerHTML`. The root layout inlines the physician schema; specialty pages inject `MedicalSpecialty` + `BreadcrumbList`.

### i18n message strings

Short UI strings (button labels, nav items, section headings) live in `messages/en.json` and `messages/hi.json`. Long-form medical content (topic descriptions, FAQs, patient stories) lives inline in the specialty data files as `Bilingual` objects — not in the message files.
