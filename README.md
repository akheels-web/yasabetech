# Misyatech

A bilingual (`EN` / `العربية` RTL) Next.js 16 enterprise technology website tailored for organizations in **Oman (Muscat, Sohar, Duqm, Salalah)** and **Dubai / UAE**. The site exports to static HTML, CSS and JavaScript for Cloudflare Pages; a Pages Function handles verified enquiry delivery to Zoho Mail (`sales@misyatech.com`).

## Local development

Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

The development site is available at http://localhost:3000.

## Verify and preview the production site

```sh
npm test
npm run typecheck
npm run lint
npm run build
npm run preview
```

The build writes `out/`. The preview server serves the static export at http://localhost:4173.

## Custom Logo Replacement

`src/components/brand-logo.tsx` currently renders a geometric interlocking M architectural monogram while you prepare your final corporate logo. When ready:
1. Replace `public/logo.webp` (or run `node scripts/generate-brand-assets.mjs "path/to/logo.png" "path/to/icon.png"`).
2. Set `USE_CUSTOM_LOGO_IMAGE = true` in `src/components/brand-logo.tsx`.

## Cloudflare Pages configuration

Follow the [Cloudflare Free hosting guide](docs/cloudflare-hosting.md) and [email setup guide](docs/email-setup.md) for deployment, Zoho transactional email secrets (`ZOHO_EMAIL_FROM=website@misyatech.com`), Turnstile keys, and `NEXT_PUBLIC_SITE_URL=https://misyatech.com`.

## Content, SEO & Media Assets

- All photographic and Open Graph content assets live in `public/images/` in WebP format (`docs/image-assets.md`).
- Technology ecosystem logos live in `public/brands/` as SVGs and scroll continuously leftward (`dir="ltr"`).
- SEO Power Pack includes JSON-LD structured data (`Organization`, `WebSite`, `ProfessionalService`, `BreadcrumbList`, `FAQPage`), `manifest.ts`, `robots.ts`, `sitemap.ts`, Open Graph WebP (`og-misyatech.webp`), and `OM;AE` regional metadata.
