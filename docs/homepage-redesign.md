# Homepage redesign — 24 October 2026

## Research access and references

Mobbin's section and screen searches were attempted through its connector, but all returned: “Mobbin MCP requires a paid plan.” No Mobbin screens were retrieved or used. The owner explicitly chose to continue with public business-site references.

The public homepages below were inspected in a browser. Their layout principles informed an original Yasabe implementation; their images, copy, customer logos and business claims were not imported.

- [Thoughtworks](https://www.thoughtworks.com/): one dominant visual opening, a clear proposition and deliberate section hierarchy. Yasabe uses an original illustrative architectural photograph instead of the reference's video treatment.
- [Vercel Enterprise](https://vercel.com/enterprise): concise, outcome-focused capabilities with adjacent visual content and a clear next action. Yasabe uses a compact, user-controlled three-practice preview rather than a long specification list.
- Computacenter's text-fetch request returned HTTP 403 and was not used as an inspected design reference.

## Implementation

The homepage combines a full-width photo hero, the existing 25-brand scrolling strip, a three-tab solutions preview, a short sequential delivery section and a focused contact band. The existing brand fonts, primary blue, logo, Navbar, Footer and RFQModal remain canonical. Homepage-prefixed styling confines the new presentation to Home; the shorter Solutions page and About page remain intact.

The hero names Oman and Saudi Arabia as target markets. Supporting photos retain the provenance described in image-assets.md. The new hero, `public/images/home-business-hero.webp`, was generated using the built-in image generation tool and optimized to a 1920 × 720 WebP (about 164 KiB). It is illustrative, not an actual Yasabe office. No testimonials, customer statistics, offices, certifications or service guarantees were invented.

Hero generation prompt: an original wide editorial photograph of a contemporary Gulf business workplace, warm limestone and glass, indoor greenery and a distant dry mountain horizon; calm darker space on the left for the headline and sunlit architecture on the right. No identifiable landmarks, Dubai towers, networking equipment, text, logos or watermarks.

The three practice tabs cover networking, private AI and managed IT/security. Selecting a practice changes the displayed image, copy, capabilities and solution link. Discuss your project carries that practice into the shared enquiry form. Tabs do not automatically rotate; the maintained Radix primitive owns keyboard behaviour. The logo strip continues automatic leftward scrolling with no manual controls, per the owner's prior explicit preference.

This update does not activate Zoho credentials, send test mail, deploy the site or change Cloudflare. The email setup guide still applies to live delivery.

Design decisions and runtime token ownership are recorded in the root DESIGN.md.

## Verification

- Production static export, ESLint and TypeScript checks pass; all 17 existing enquiry tests pass with mocked providers.
- An independent source reviewer checked the page against the homepage checklist. Its typography-documentation correction was applied.
- Browser checks covered desktop, 768px tablet and 390px mobile layouts, the mobile menu, keyboard tab selection, AI service/scope handoff, Escape dismissal and restored enquiry-trigger focus. No horizontal overflow was observed at the tested tablet/mobile sizes. The logo track's CSS animation was running.
- The official design document linter reports zero errors; five unused-token warnings refer to documentation palette entries that are owned by the shared CSS rather than generated component definitions.
- A production dependency audit reports an existing critical advisory against Next.js 16.4.0, with 16.4.3 offered as a compatible fix. Dependency remediation remains outstanding; this visual update does not claim a clean security audit.
- No live enquiry was sent. Zoho/Turnstile configuration and email delivery still require the separate setup described in the hosting guide.
