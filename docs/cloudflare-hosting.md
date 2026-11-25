# Host Misyatech on Cloudflare Workers

This repository deploys to **Cloudflare Workers with Static Assets**:

- Static pages and media exported by Next.js (`out/`) are served directly by Workers Static Assets (`assets.directory = "./out"`).
- Security and cache headers are applied from `public/_headers`.
- `worker/index.ts` handles `/api/enquiry` via `server/enquiry.mjs` (`run_worker_first = ["/api/*"]`), forwarding verified enquiries to `sales@misyatech.com` without exposing credentials to the browser.

## 1. Free Allowances & Architecture

| Component | Free allowance / cost boundary |
| --- | --- |
| Static pages and assets | Free, unlimited requests when they do not invoke the Worker script (`run_worker_first: ["/api/*"]`) |
| Enquiry endpoint (`/api/enquiry`) | Uses the account's Workers Free allowance (100,000 requests per day across the account) |
| Static asset bundle | Fits comfortably within Workers Static Assets limits (~139 files, ~4 MiB total in `out/`) |
| Turnstile | Free plan is sufficient for the enquiry form |
| Domain and Zoho sending | Managed separately; keep existing Zoho Mail MX, SPF, DKIM, and DMARC DNS records untouched |

## 2. Project Configuration (`wrangler.jsonc`)

- **Worker entrypoint**: `worker/index.ts`
- **Assets directory**: `./out` (`html_handling: "auto-trailing-slash"`, `not_found_handling: "404-page"`, `run_worker_first: ["/api/*"]`)
- **Custom domains**: `misyatech.com` and `www.misyatech.com` (`custom_domain: true`)
- **Observability**: Workers Logs and Traces enabled (`observability.enabled = true`, `logs.enabled = true`, `traces.enabled = true`)

Generate TypeScript binding types (`worker-configuration.d.ts`) after modifying `wrangler.jsonc`:

```sh
npm run cf-typegen
```

## 3. Configure Secrets and Public Build Variables

1. Keep existing Zoho Mail DNS records (`mx*.zoho.in`, SPF, DKIM, DMARC, `_mta-sts`, and `bounce-zem.misyatech.com -> cluster89.zeptomail.in`) intact.
2. Create a **Managed Turnstile widget** allowing `misyatech.com`, `www.misyatech.com`, and `misyatech.<subdomain>.workers.dev`.
3. Set build-time public variables (in `.env.local` for local builds or CI environment variables) before running `npm run build`:
   - `NEXT_PUBLIC_SITE_URL=https://misyatech.com`
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY=<your-turnstile-site-key>`
4. Upload the four Worker runtime secrets using Wrangler (never commit secrets or paste them into `wrangler.jsonc`):

```sh
npx wrangler secret put TURNSTILE_SECRET_KEY
npx wrangler secret put ZOHO_EMAIL_API_KEY
npx wrangler secret put ZOHO_EMAIL_FROM
npx wrangler secret put ZOHO_EMAIL_API_URL
```

Use your account's Zoho / ZeptoMail sending endpoint (for example `https://api.zeptomail.in/v1.1/email`, matching your `cluster89.zeptomail.in` bounce CNAME) and a verified sender such as `website@misyatech.com`. The destination mailbox is fixed in code to `sales@misyatech.com`.

## 4. Deploy from CLI

Sign in to the Misyatech Cloudflare account once:

```sh
npx wrangler login
```

Verify locally and deploy:

```sh
npm test
npm run typecheck
npm run lint
npm run build
npm run check:worker
npm run deploy
```

Note: Before binding `www.misyatech.com` as a Worker Custom Domain (`custom_domain: true`), any conflicting standalone `CNAME` record for `www.misyatech.com` must be removed so Cloudflare Workers Custom Domains can manage both `misyatech.com` and `www.misyatech.com` DNS records cleanly.

## 5. Local Preview & Troubleshooting

- **Local Worker dev server** (serves `out/` plus `/api/enquiry`):
  ```sh
  npm run preview:worker
  ```
- **Static-only preview**: `npm run preview` (`http://localhost:4173`)
- **Form says temporarily unavailable**: Confirm `NEXT_PUBLIC_TURNSTILE_SITE_KEY` was set before `npm run build` and all four Worker runtime secrets exist (`npx wrangler secret list`).
- **Turnstile fails**: Verify the site/secret key pair and ensure `misyatech.com` / `www.misyatech.com` are in the widget's allowed hostnames.
- **Email confirmation error (502)**: Verify the ZeptoMail `.in` sender verification (`website@misyatech.com`), API key, endpoint URL, and sending credits.
