# Host Yasabe Technologies on Cloudflare Free

Verified against the linked provider documentation on 15 October 2026. This guide describes steps for the site owner; preparing it does not create a deployment or change Cloudflare, DNS or Zoho settings.

Use **Cloudflare Pages with GitHub integration** for this repository. The pages are a Next.js static export, and `/api/enquiry` is a Pages Function that sends enquiries to `sales@yasabetech.com`. No server, database or paid Workers subscription is required for this architecture within the free allowances.

## 1. Understand the free allowances

| Component | Free allowance / cost boundary |
| --- | --- |
| Pages builds | 500 builds per month, one at a time; 20-minute build timeout |
| Static pages and assets | Free, unlimited requests when they do not invoke Functions |
| Enquiry endpoint | Shares the account's Workers Free allowance of 100,000 requests per day; other Workers also consume it |
| Site files | Up to 20,000 files; each asset must be at most 25 MiB |
| Turnstile | Free plan is sufficient for this form |
| Domain and Zoho sending | Separate from Cloudflare hosting; domain renewals and Zoho sending credits may cost money |

Only `/api/enquiry` invokes the Function, as configured in `public/_routes.json`. A daily Function limit affects enquiries; static pages use separate delivery. Keep the account on Workers Free and review usage rather than enabling paid services for this site.

Sources: [Pages limits](https://developers.cloudflare.com/pages/platform/limits/), [Functions pricing](https://developers.cloudflare.com/pages/functions/pricing/), [Turnstile plans](https://developers.cloudflare.com/turnstile/plans/). Zoho uses sending credits; review [its current pricing](https://www.zoho.com/cpaas/pricing.html) separately. A working Zoho Mail mailbox does not itself configure the sending API.

## 2. Create the Pages project from GitHub

1. Sign in to Cloudflare and open **Workers & Pages → Create application → Pages → Import an existing Git repository**. Labels may vary slightly.
2. Connect GitHub and grant the Cloudflare app access to **only `akheels-web/yasabetech`** if practical. Select that repository.
3. Choose the project name `yasabetech` if available. If another name is needed, update the `name` in `wrangler.jsonc` to match before deploying.
4. Enter these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Next.js (Static HTML Export)` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | Leave blank — `package.json` is at the GitHub repository root |
| Node version | `22`, pinned in `.node-version`; `NODE_VERSION=22` can also be set in build variables |

Do not select the full-stack Next.js preset or configure `next start`. The existing `next.config.ts` exports static files, and the repository's `functions/` directory supplies the API separately. No OpenNext adapter is needed for this setup.

Before the first build, set the public build variable `NEXT_PUBLIC_SITE_URL=https://yasabetech.com` if that will be the canonical production domain. For a temporary Pages-only launch, use the actual `https://<project>.pages.dev` address and change it when the domain is ready. It controls canonical URLs, sitemap and social metadata.

Select **Save and Deploy**. A successful deployment provides a `https://<project>.pages.dev` URL. The site can be previewed before email is activated, but the form will report that online enquiries are unavailable until configured.

Sources: [static Next.js deployment](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/), [GitHub integration](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/).

## 3. Activate enquiries to the Zoho mailbox

1. Follow the [email setup guide](email-setup.md) to verify a transactional sender in Zoho CPaaS / ZeptoMail, generate its sending API key and copy the endpoint for your account's region. Keep the existing receiving mailbox and MX records.
2. Create a **Managed Turnstile widget**. Allow `yasabetech.com`, `www.yasabetech.com` if used, and the exact project `pages.dev` hostname if testing there. Add any preview hostname you need explicitly. Copy its site key and secret.
3. In the Pages project's production **Variables and Secrets** settings, add the following. Repeat for Preview only if you want preview builds to send mail.

| Name | Where / type | Value |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public build variable | Your canonical HTTPS site URL |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Public build variable | Turnstile site key |
| `TURNSTILE_SECRET_KEY` | Runtime Secret | Matching Turnstile secret |
| `ZOHO_EMAIL_API_KEY` | Runtime Secret | Zoho sending API key |
| `ZOHO_EMAIL_FROM` | Runtime Secret | Verified sender, e.g. `website@yasabetech.com` |
| `ZOHO_EMAIL_API_URL` | Runtime Secret | Your account's email sending endpoint |

Use **Secret** bindings for all four runtime values. The sender and endpoint can be stored as secrets even though they are not confidential. This avoids conflicting with runtime variable configuration managed by `wrangler.jsonc`. Keep API keys out of public build variables, Git and chat.

Rebuild and redeploy after saving settings: public values are compiled into the frontend, and runtime secrets must be attached to the deployment. The recipient is fixed in code to `sales@yasabetech.com`; replies target the visitor's address.

Deploy using the Git integration so Cloudflare bundles `functions/api/enquiry.ts`. Dashboard drag-and-drop of `out/` does **not** install Pages Functions. See [Functions deployment](https://developers.cloudflare.com/pages/functions/get-started/) and [Wrangler configuration](https://developers.cloudflare.com/pages/functions/wrangler-configuration/).

## 4. Connect the domain while preserving Zoho Mail

Open the Pages project → **Custom domains → Set up a domain** and add the desired hostname before creating its DNS record.

- For `yasabetech.com` (the apex), the zone must be on the same Cloudflare account as the Pages project, using Cloudflare nameservers. If migrating DNS, first copy and verify every existing Zoho MX, SPF, DKIM, DMARC and other required record. Review the imported zone before changing nameservers at the registrar.
- For `www.yasabetech.com` with DNS hosted elsewhere, register it under Pages Custom domains, then add the requested CNAME pointing to `<project>.pages.dev` at that DNS provider. This permits a subdomain launch without moving the whole DNS zone.

Wait for the domain to become active and HTTPS to work. If serving both apex and `www`, choose one canonical hostname and configure a redirect for the other. Set `NEXT_PUBLIC_SITE_URL` to the canonical address and rebuild. Domain registration and renewals remain separate costs.

Reference: [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/).

## 5. Check the live deployment

- Open `/`, `/solutions/` and `/about/`; refresh each direct URL. Check navigation, mobile layout, logos and favicons.
- Open `/robots.txt`, `/sitemap.xml` and an unknown URL to check the sitemap domain and 404 page.
- Submit one enquiry yourself. Confirm the success reference, receipt in `sales@yasabetech.com` (including spam), and that Reply uses your test visitor address. A reference means the provider accepted the email, not proof of inbox delivery.

| Symptom | First check |
| --- | --- |
| Build fails / `out` missing | Build command, Node 22, blank root directory and build logs |
| Form says temporarily unavailable | Public site key was present during build; all four runtime secrets exist |
| Turnstile fails | Site/secret pair, allowed hostname and correct production/preview environment |
| `/api/enquiry` returns HTML or 404 | Project deployed through Git with the `functions/` directory |
| Submission cannot be confirmed | Zoho sender verification, endpoint, API key, approval and sending credits |
| Domain or HTTPS pending | Domain added in Pages, DNS target, nameservers and any restrictive CAA records |

## 6. Updates, local checks and rollback

Future pushes to `main` trigger production builds through the connected Git integration. Use a branch and preview deployment for review first. Preview settings and Turnstile hostnames must be configured separately if testing email there.

Run these from the repository root before publishing code:

```sh
npm ci
npm run lint
npm test
npm run build
npm run check:functions
npm run preview:functions
```

The preview command serves locally; it does not deploy. Private local keys belong in ignored `.env.local` and `.dev.vars` files; see their example files. Automated email tests use mocks and send no mail. Generated brand assets are committed, so asset generation is not required during a Cloudflare build.

If a release has problems, use a previous successful production deployment's **Rollback** action in Pages, then revert the offending Git commit before the next push. Check domain and form behavior after recovery. See [Pages rollbacks](https://developers.cloudflare.com/pages/configuration/rollbacks/).
