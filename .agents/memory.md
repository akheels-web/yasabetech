# Misyatech - Project Memory & Decisions

## Rebrand & Architectural Navy / Light Blue Overhaul (November 2026)
- **Framework Upgrade (November 2026)**: Upgraded `next` and `eslint-config-next` from `16.4.0` to `16.4.6` (`experimental.agentUpgrade: "security"` set in `next.config.ts`) to resolve published Next.js security advisory.
- **Brand Identity**: Rebranded from **Yasabe Technologies** to **Misyatech** (`ميسياتك`), domain `misyatech.com`, enquiry mailbox `sales@misyatech.com`.
- **Target Markets**: **Oman (Muscat, Sohar, Duqm, Salalah)** and **Dubai / United Arab Emirates**.
- **Logo Strategy**: Geometric interlocking **"M"** monogram rendered in `src/components/brand-logo.tsx` with `USE_CUSTOM_LOGO_IMAGE = false` (referencing `public/logo.webp`) so the owner can drop in their custom logo later and flip the boolean or overwrite `public/logo.webp`.
- **Color Palette (Architectural Navy & Light Blue + Purple Optical Image Veils)**:
  - Deepest / Hero Navy: `#050E1E` / `#07142B` / `#0D1F3C`
  - Cobalt Primary: `#1D4ED8` / `#2563EB`
  - Light Blue Highlights & Specular Accents: `#38BDF8` / `#7DD3FC` / `#BAE6FD`
  - Optical Purple-Indigo Image Veils (no black scrims): `#1B1145` / `#3B1D7A` / `#4F46E5` / `#A78BFA` (`img-veil-hero`, `img-veil-panel-active`, `img-veil-panel-idle`, `img-veil-card`, `img-veil-soft`, cursor `img-prism-sheen`)
  - Glacier Mist & White Surfaces: `#F4F8FF` / `#EAF2FF` / `#FFFFFF`
- **Typography & Bilingual RTL**:
  - English: `Outfit` (display) + `Plus Jakarta Sans` (body)
  - Arabic (`العربية`, RTL): `Cairo` (display) + `IBM Plex Sans Arabic` (body)
  - Instant `EN / العربية` language toggle persisted in `localStorage` via `useSyncExternalStore` to prevent hydration mismatch.
- **High-Craft Interactive Components**:
  - `HeroShowcase`: 3-scene interactive regional lens (`Muscat`, `Dubai`, `Private AI`) with scroll-linked backdrop depth.
  - `ExpandingPractices`: 3 horizontal expanding architectural photo panels (`Networking`, `Private AI`, `Managed IT`).
  - `ScrollStory`: Continuous scroll-scrubbed vertical progress beam and `clip-path` image transitions.
  - `CapabilityIndex`: Swiss-style 01–08 hairline index with live pinned dark-navy `TiltCard` scope preview.
  - `TiltCard`: Capped 3D perspective tilt with `1px` cursor-tracked light-blue specular edge border.
  - `MagneticButton`: Damped pointer magnetism with kinetic vertical text roll + diagonal arrow flight.
  - `Footer`: Integrated executive CTA header, click-to-copy email, live Muscat & Dubai `GST` time readout, and cursor-illuminated oversized `MISYATECH` wordmark.
  - `ServiceSuites` (`src/components/interactive/service-suites.tsx`, `src/lib/specialized-services.ts`): Interactive 4-suite showcase with search on `/solutions/` covering Website Designing, CRM, HRM, Fleet Management, Field Dispatch, AI Voice Calling, Private AI Assistants, Project AMC, Microsoft Intune, Active Directory Management, NTP Server, DHCP Failover, and DNS Management — paired with 4 bespoke WebP creatives (`creative-web-crm-hrm.webp`, `creative-fleet-management.webp`, `creative-ai-voice.webp`, `creative-core-infra-amc.webp`).
  - `ScopeEstimator`: Interactive Oman & Dubai project scope planner (with specialized module selection) pre-filling `RFQModal`.
- **WebP Asset Standard**:
  - All photographic & OG assets in `public/images/` are optimized `.webp` files (including `oman-dubai-skyline.webp`, `private-ai-datacenter.webp`, and `og-misyatech.webp`), and `public/brands/*.svg` retain crisp vector logos in the continuous leftward marquee (`dir="ltr"`).
