# Misyatech Project Architecture & Knowledge Base

## Overview
Misyatech is an enterprise-grade Next.js 16 static-export web application serving **Oman (Muscat, Sohar, Duqm, Salalah) & Dubai / UAE**, specializing in:
1. **High-Performance Enterprise Networking** (SD-WAN, Enterprise Wi-Fi 7, Core Switching, Data Center Fabric, Zero Trust)
2. **Private AI & Sovereign Compute** (Private LLM Deployment, GPU Compute Clusters, Bilingual Arabic/English RAG Search, Smart Facility IoT)
3. **Managed IT, Cybersecurity & BOQ Sourcing** (Hybrid Cloud, Next-Gen Security, Enterprise Storage/Servers, Transparent BOQ Validation)

## Technical Stack
- **Framework**: Next.js 16.4.6 with App Router (`output: "export"`, static HTML export to `out/`)
- **Engine**: Turbopack (`next dev --turbopack`)
- **Styling**: Tailwind CSS v4 + Architectural Navy & Light Blue tokens (`#050E1E` / `#07142B` Deep Navy, `#1D4ED8` Cobalt, `#38BDF8` / `#7DD3FC` Light Blue, `#F4F8FF` Glacier Mist)
- **Typography**: `Outfit`, `Plus Jakarta Sans`, `Cairo`, and `IBM Plex Sans Arabic` via `next/font/google`
- **Bilingual EN / العربية (RTL)**: `LanguageProvider` (`useSyncExternalStore`) + `src/lib/i18n.ts` switching `dir="ltr" | "rtl"` and `lang="en" | "ar"`
- **Interactive & UI Components**: shadcn/ui primitives (Radix Accordion hairline rows, Dialog, Tabs, Select, Button with kinetic hover + `azure`/`brand`/`glass` variants, Badge, Separator) + custom interactive components (`HeroShowcase` 3-scene lens, `ExpandingPractices` horizontal flex panels, `ServiceSuites` 4-creative 13-service showcase with instant search, `ScrollStory` scroll-scrubbed clip-path reveal, `CapabilityIndex` 01-08 live preview, `TiltCard` specular border glow, `MagneticButton`, `ScrollProgressRail`, `ScrollReveal`, `ScopeEstimator`)
- **Hosting & Backend Worker**: **Cloudflare Workers with Static Assets** (`wrangler.jsonc`, entrypoint `worker/index.ts`) serving `out/` (`html_handling: "auto-trailing-slash"`, `not_found_handling: "404-page"`, `run_worker_first: ["/api/*"]`, `observability` logs & traces enabled) and routing `/api/enquiry` to `server/enquiry.mjs` sending to `sales@misyatech.com` via Zoho transactional email + Cloudflare Turnstile verification
- **SEO Power Pack**: JSON-LD (`Organization`, `WebSite`, `ProfessionalService`, `BreadcrumbList`, `FAQPage`), `manifest.ts`, `robots.ts`, `sitemap.ts`, Open Graph WebP (`og-misyatech.webp`), geo tags (`OM;AE`)
- **Pages**:
  - `/` (Home / Flagship Showcase)
  - `/solutions` (8 Solution Areas, Category Filter, Scope Planner, Delivery Steps, FAQ)
  - `/about` (Company Ethos, Oman & Dubai Regional Alignment, Guiding Principles, 4-Step Delivery Process)
