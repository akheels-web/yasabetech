# Direct enquiries to Zoho Mail

The receiving mailbox is **sales@yasabetech.com**. Since it already receives mail in Zoho Mail, keep its existing mail routing and MX records.

The website now submits to a Cloudflare Pages Function at `/api/enquiry`. That function validates the request, verifies Turnstile and asks Zoho's transactional email API to send to the fixed sales mailbox. The visitor's address is used as Reply-To; it is never used as an unauthenticated sender. A successful response means Zoho accepted the email for delivery, not that inbox delivery has been independently confirmed.

## 1. Set up a transactional sender in Zoho

Use Zoho's transactional email product (ZeptoMail / Zoho CPaaS), not your Zoho Mail mailbox password. Create a sending agent and verify `yasabetech.com`. Copy the domain authentication records and the sending API endpoint shown for your account's data center. Add only the records required to authenticate the transactional sender; do not replace the working mailbox's MX records.

Use a verified sender such as `website@yasabetech.com`. If you prefer to send from `sales@yasabetech.com`, configure that verified sender instead. Generate the sending API key for the agent. The provider account must be approved for sending and have an available sending allowance.

Official references: [sending API](https://www.zoho.com/cpaas/help/api/email-sending.html), [domain verification](https://www.zoho.com/zeptomail/help/domains.html). Zoho's current API documentation uses `https://cpaas.zoho.com/v1.1/email`; use your account's endpoint if it differs. Regional `api.zeptomail.*` sending endpoints are also supported by the handler.

## 2. Create a Turnstile widget

In Cloudflare Turnstile, create a managed widget and allow your production hostname, including `www` if used. Add any preview hostnames you intend to test. Keep the secret key private. The endpoint verifies every token, including its hostname and the `enquiry` action.

Official references: [client widget](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/), [server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).

## 3. Add these settings to the Pages project

In your Cloudflare Pages project's Variables and Secrets settings, configure the appropriate production environment (and preview environment if needed):

| Name                             | Kind                   | Value                                               |
| -------------------------------- | ---------------------- | --------------------------------------------------- |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Public build variable  | Turnstile site key                                  |
| `ZOHO_EMAIL_API_KEY`             | Secret runtime binding | Sending API key from Zoho                           |
| `TURNSTILE_SECRET_KEY`           | Secret runtime binding | Turnstile secret key                                |
| `ZOHO_EMAIL_FROM`                | Secret runtime binding | Your verified sender, e.g. `website@yasabetech.com` |
| `ZOHO_EMAIL_API_URL`             | Secret runtime binding | Exact sending endpoint from your Zoho account       |

Store all four runtime values as Secrets in the Pages dashboard. The sender and endpoint are not confidential, but using secret bindings keeps these account-specific values outside this repository's Wrangler configuration. Ordinary runtime variables are managed by `wrangler.jsonc` when that file is the project's source of truth. Public build variables are still entered in the Pages build settings.

Only the site key belongs in a `NEXT_PUBLIC_` variable. Never put sending credentials or the Turnstile secret into client-side variables, Git, or a chat message.

Rebuild after setting the public site key. Deploy through the Pages Git integration, or a Pages deployment workflow that includes the repository's `functions/` directory. Uploading only the `out/` files through a static dashboard upload will not install the backend. `_routes.json` limits function execution to `/api/enquiry`; the other pages remain static.

Official references: [Pages Functions](https://developers.cloudflare.com/pages/functions/get-started/), [runtime bindings](https://developers.cloudflare.com/pages/functions/bindings/).

## 4. Verify the live flow

Send a test enquiry yourself after deploying with the real settings. Confirm it reaches `sales@yasabetech.com`, check the spam folder and verify that Reply targets the visitor's email. The website shows a reference only after Zoho accepts the message. Missing credentials, failed verification and provider errors cannot produce a success screen.

## Local development

```sh
npm run test
npm run check:functions
npm run build
```

The automated email tests use fake provider responses and send no email. For a full local integration test, copy `.env.example` to `.env.local` and `.dev.vars.example` to `.dev.vars`, then fill them privately. Use Cloudflare's documented test keys locally or a widget configured for your local hostname. Never use test secret keys in production.

```sh
npm run build
npm run preview:functions
```

Open the local URL printed by Wrangler. `npm run dev` and `npm run preview` render the UI but do not run Pages Functions. Plain static preview cannot send email. Files supplied as a BOQ should be emailed separately; attachment upload is not part of this form.

The code has request-size and field limits, fixed recipient routing, a honeypot and server-verified Turnstile. Contact details are forwarded to Zoho without being stored by the application. Production sending and DNS settings have not been changed by this code update.
