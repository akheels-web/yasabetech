# Misyatech

A bilingual (`EN` / `العربية` RTL) Next.js 16 enterprise technology website tailored for organizations in **Oman (Muscat, Sohar, Duqm, Salalah)** and **Dubai / UAE**. The site exports to static HTML, CSS and JavaScript in `out/` and deploys to **Cloudflare Workers with Static Assets** (`worker/index.ts`), where `/api/enquiry` handles verified enquiry delivery to Zoho Mail (`sales@misyatech.com`).

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

## Brand Assets & Icons

`src/components/brand-logo.tsx` renders the official Misyatech horizontal logo (`public/logo.webp` on light surfaces and `public/logo-dark.webp` on dark navy surfaces). To regenerate logo and icon derivatives from an updated transparent PNG master, run:

```sh
node scripts/generate-brand-assets.mjs "path/to/misyatech.png"
```

## Cloudflare Workers configuration

Follow the [Cloudflare Workers hosting guide](docs/cloudflare-hosting.md), [email setup guide](docs/email-setup.md), and [production roadmap](docs/roadmap.md) for deployment (`npm run deploy`), Worker runtime secrets (`ZOHO_EMAIL_FROM=website@misyatech.com`, `ZOHO_EMAIL_API_URL=https://api.zeptomail.in/v1.1/email`), Turnstile keys, and `NEXT_PUBLIC_SITE_URL=https://misyatech.com`.

## Content, SEO & Media Assets

- All photographic and Open Graph content assets live in `public/images/` in WebP format (`docs/image-assets.md`).
- Technology ecosystem logos live in `public/brands/` as SVGs and scroll continuously leftward (`dir="ltr"`).
- SEO Power Pack includes JSON-LD structured data (`Organization`, `WebSite`, `ProfessionalService`, `BreadcrumbList`, `FAQPage`), `manifest.ts`, `robots.ts`, `sitemap.ts`, Open Graph WebP (`og-misyatech.webp`), and `OM;AE` regional metadata.
