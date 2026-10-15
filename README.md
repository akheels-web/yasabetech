# Yasabe Technologies

A responsive Next.js marketing site for enterprise networking, private AI and managed IT. The site exports to static HTML, CSS and JavaScript for Cloudflare Pages; a Pages Function handles direct enquiry delivery to Zoho Mail.

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

Follow the [Cloudflare Free hosting guide](docs/cloudflare-hosting.md) for the full GitHub deployment, custom domain, email setup, verification and rollback steps.

All preparation in this repository is local code. No Cloudflare resources, DNS records or deployments have been created or changed.

When you are ready to create or configure a Pages project yourself:

| Setting                | Value                                                          |
| ---------------------- | -------------------------------------------------------------- |
| Framework preset       | Next.js (Static HTML Export)                                   |
| Build command          | `npm run build`                                                |
| Build output directory | `out`                                                          |
| Root directory         | Leave blank (this Git repository has package.json at its root) |
| Node version           | `22` (also pinned in `.node-version`)                          |
| Public build variable  | `NEXT_PUBLIC_SITE_URL=https://your-production-domain`          |

`wrangler.jsonc` declares the local project name and Pages output directory. Change the name if your eventual Pages project uses a different name. No credentials belong in the file. Wrangler is not required to build or preview this site.

Set `NEXT_PUBLIC_SITE_URL` before building for your production domain; it defaults to `https://yasabetech.com`. This controls canonical links, the sitemap and social metadata. See `.env.example`. Public variables are included in the build and must never contain secrets.

`public/_headers` is copied into `out/` for Pages security and asset caching headers. `robots.txt`, `sitemap.xml`, individual route HTML and a real `404.html` are generated during the build. No SPA catch-all redirect is needed.

Official deployment reference: [Cloudflare Pages static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/).

## Project enquiries

The form sends directly to `sales@yasabetech.com` through `/api/enquiry`, a Cloudflare Pages Function backed by Zoho transactional email. The visitor is set as Reply-To. Turnstile verification, server-side validation and a fixed recipient protect the endpoint.

Follow [the email setup guide](docs/email-setup.md) to add the private Zoho credentials and Turnstile keys. The frontend stays static; direct email requires the Pages Function and runtime settings. The UI does not report success until the provider accepts the request. The static-only preview cannot send mail.

Use `npm test` for delivery-handler tests and `npm run check:functions` to validate the Cloudflare bundle. `npm run preview:functions` runs a full local Pages preview after building. Tests use mocks and send no real email.

## Content and assets

- The compact solutions overview lives in `src/lib/solution-areas.ts`; shared enquiry categories live in `src/lib/solution-categories.ts`. The earlier detailed catalogue in `src/lib/solutions.ts` is retained as a reference and is not rendered on the page.
- Reference research and the expanded service mapping are documented in `docs/services-research.md`.
- Solution cards open optional details and carry the selected area into the enquiry form. Regional research and the compact layout decisions are documented in `docs/solutions-refresh.md`.
- Editorial-style photographic imagery lives in `public/images/`; the original networking illustrations and unused starter images have been removed. Brand logos and icons are preserved.
- Image provenance, generation prompts and usage are documented in `docs/image-assets.md`.
- Homepage technology logos are local SVG assets under `public/brands/`; their sources are recorded in `docs/technology-logo-sources.json`. The single-row strip automatically scrolls left without manual controls.
- Architecture suggestions and deployment times are illustrative and subject to project review. Business contact information and service capabilities should be checked by the site owner before publication.
