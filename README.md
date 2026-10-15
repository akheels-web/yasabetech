# Yasabe Technologies

A responsive Next.js marketing site for enterprise networking, private AI and managed IT. The site exports to static HTML, CSS and JavaScript for Cloudflare Pages; it needs no application server or Cloudflare bindings.

## Local development

Use Node.js 22 or later. The repository includes a Node version pin for Cloudflare builds.

```sh
npm ci
npm run dev
```

The development site is available at http://localhost:3000.

## Verify and preview the production site

```sh
npm run lint
npm run build
npm run typecheck
npm run preview
```

The build writes `out/`. The dependency-free preview serves that exact export at http://localhost:4173. `npm start` also previews the export; `next start` does not support static exports. Stop the preview with Ctrl+C. `PORT` can override the preview port.

## Cloudflare Pages configuration

All preparation in this repository is local code. No Cloudflare resources, DNS records or deployments have been created or changed.

When you are ready to create or configure a Pages project yourself:

| Setting                | Value                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------- |
| Framework preset       | Next.js (Static HTML Export)                                                            |
| Build command          | `npm run build`                                                                         |
| Build output directory | `out`                                                                                   |
| Root directory         | Leave blank (this Git repository has package.json at its root) |
| Node version           | `22` (also pinned in `.node-version`)                                                   |
| Public build variable  | `NEXT_PUBLIC_SITE_URL=https://your-production-domain`                                   |

`wrangler.jsonc` declares the local project name and Pages output directory. Change the name if your eventual Pages project uses a different name. No credentials belong in the file. Wrangler is not required to build or preview this site.

Set `NEXT_PUBLIC_SITE_URL` before building for your production domain; it defaults to `https://yasabetech.com`. This controls canonical links, the sitemap and social metadata. See `.env.example`. Public variables are included in the build and must never contain secrets.

`public/_headers` is copied into `out/` for Pages security and asset caching headers. `robots.txt`, `sitemap.xml`, individual route HTML and a real `404.html` are generated during the build. No SPA catch-all redirect is needed.

Official deployment reference: [Cloudflare Pages static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/).

## Project enquiries

The enquiry form prepares a request for `rfq@yasabetech.com`. Visitors review it, then send it through their own email app. Copy and text-download fallbacks are available. BOQ documents can be attached in the email app. The site does not claim to submit, upload or deliver requests, and stores no enquiry data.

A backend or external form service would be needed for automatic delivery. That is intentionally outside this static-site setup.

## Content and assets

- Service catalog content lives in `src/lib/solutions.ts`; shared categories live in `src/lib/solution-categories.ts`.
- Reference research and the expanded service mapping are documented in `docs/services-research.md`.
- The project scope builder carries the selected service, scale, support and suggested architecture into the enquiry draft.
- Existing artwork and branding are preserved, with smaller WebP delivery assets in `public/`.
- Architecture suggestions and deployment times are illustrative and subject to project review. Business contact information and service capabilities should be checked by the site owner before publication.
