# Misyatech Production Roadmap

Tracks remaining setup and operational tasks following the live deployment of **Misyatech** on **Cloudflare Workers with Static Assets** (`misyatech.com`, `www.misyatech.com`, `misyatech.misyatechnologies.workers.dev`).

## Priority 1: Activate Online Enquiry Form (`/api/enquiry`)

The `/api/enquiry` endpoint currently fails closed (`503`) by design until Cloudflare Turnstile and Zoho transactional email secrets are configured.

- [ ] **Create a Managed Turnstile widget** in the `misyatechnologies@gmail.com` Cloudflare dashboard allowing:
  - `misyatech.com`
  - `www.misyatech.com`
  - `misyatech.misyatechnologies.workers.dev`
- [ ] **Verify transactional email sender** (`website@misyatech.com`) in **Zoho ZeptoMail India** (`https://api.zeptomail.in/v1.1/email`, matching existing DNS record `bounce-zem.misyatech.com -> cluster89.zeptomail.in`). Keep all existing Zoho Mail MX, SPF, DKIM, and DMARC records untouched. See [email setup guide](email-setup.md).
- [ ] **Set public build variables** before running the next build (for example in `.env.local` or Workers Builds environment variables):
  - `NEXT_PUBLIC_SITE_URL=https://misyatech.com`
  - `NEXT_PUBLIC_TURNSTILE_SITE_KEY=<your-turnstile-site-key>`
- [ ] **Bind the 4 runtime Worker secrets** via Wrangler (never commit secrets to Git or `wrangler.jsonc`):
  ```sh
  npx wrangler secret put TURNSTILE_SECRET_KEY
  npx wrangler secret put ZOHO_EMAIL_API_KEY
  npx wrangler secret put ZOHO_EMAIL_FROM
  npx wrangler secret put ZOHO_EMAIL_API_URL
  ```
- [ ] **Rebuild, deploy, and test live**: Run `npm run deploy`, submit one test enquiry on `https://misyatech.com`, and verify delivery to `sales@misyatech.com` with visitor `Reply-To` intact.

## Priority 2: Automated GitHub -> Cloudflare Workers CI/CD

The initial deployment was published directly from the CLI (`npx wrangler deploy`), so commits pushed to GitHub do **not** automatically rebuild or redeploy the Worker yet.

- [ ] **Commit and push** the Misyatech rebrand and Workers configuration to GitHub (`main`).
- [ ] **Connect Cloudflare Workers Builds** (Dashboard -> **Workers & Pages -> `misyatech` -> Settings -> Builds -> Connect**):
  - Production branch: `main`
  - Build command: `npm run build`
  - Deploy command: `npx wrangler deploy`
  - Public build variables: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
  - *(Alternative: add a GitHub Actions workflow using `cloudflare/wrangler-action` and a `CLOUDFLARE_API_TOKEN` repository secret.)*

## Priority 3: Production Polish & SEO Operations

- [ ] **Enable Always Use HTTPS** in Cloudflare SSL/TLS settings for zone `misyatech.com` (currently `off`).
- [ ] **Consolidate canonical URLs** with a Cloudflare Redirect Rule redirecting `www.misyatech.com/*` -> `https://misyatech.com/$1` (`301`).
- [ ] **Submit sitemap** (`https://misyatech.com/sitemap.xml`) in Google Search Console and Bing Webmaster Tools.
