# Yasabe Technologies - Project Memory & Decisions

## Branding & Visual System Update (October 2026)
- **Theme**: Pure premium Light Theme (completely removed dark mode as per user request).
- **Typography**: Google Fonts `Plus Jakarta Sans` for body copy and `Outfit` for modern geometric enterprise headings.
- **Logo Integration**: Uploaded corporate logo (`public/logo.png`) featuring the tri-tone geometric Y mark (Navy, Indigo/Purple, Cyan) with the motto *"CONNECT / SECURE / EMPOWER"*. Displayed in high-resolution across Navbar, Footer, and Favicon.
- **Color Palette**:
  - Primary Dark Accent: `#0b1a3d` (Deep Royal Navy)
  - Secondary Accent: `#4f46e5` / `#4338ca` (Royal Indigo)
  - Highlight Accent: `#0284c7` / `#00b4d8` (Electric Cyan)
  - Backgrounds: `#ffffff` (Pure White) and `#f8fafc` / `#f1f5f9` (Soft Platinum Slate)
  - Borders: `#e2e8f0` / `#cbd5e1`

## Bespoke 3D Graphics & Visual Showcase (Hero & Services)
- `public/hero-graphic.jpg`: High-resolution 3D enterprise topology featuring central holographic AI chip, 400G optical conduits, and server modules on pristine white background.
- `public/service-networking.jpg`: 3D enterprise core switch rack with glowing cyan fiber optic conduits and holographic Wi-Fi 7 radio waves.
- `public/service-ai.jpg`: 3D NVIDIA HGX liquid-cooled GPU supercomputing server node with holographic neural processor.
- `public/service-managed.jpg`: 3D datacenter NVMe SAN storage bays with 24/7 holographic security shield and cloud telemetry monitors.
- **Hero Interactive Switcher**:
  - Allows instant toggling between **Full Stack (Integrated)**, **Networking (400G & Wi-Fi 7)**, **AI Compute (HGX Clusters)**, and **Managed IT (24/7 NOC/SOC)** with live updating 3D renders and telemetry metrics.
- **Three Pillars Section**:
  - Each pillar card features the corresponding 3D hardware graphic with domain badges.

## Pages Implemented
1. **Home (`/`)**:
   - Hero with interactive 3D centerpiece switcher, floating telemetry badges, and live OEM partners.
   - Authorized Partner OEM strip (**Cisco Gold, NVIDIA Elite, Dell Titanium, Fortinet Expert, HPE, Microsoft**).
   - Core 3 Pillars deep-dive cards with bespoke 3D graphics.
   - Enterprise SLA metrics counter.
   - Why Yasabe Technologies (BOQ Review, Staging Lab, Serialized OEM Warranties).
   - Real-world Case Studies (Banking, Sovereign Healthcare, Logistics).
   - Interactive RFQ / BOQ Quotation modal.
2. **About Us (`/about`)**:
   - Company heritage & mission.
   - 4 Core Pillars of Service.
   - The 4-Step Operational Delivery Framework.
   - Senior Leadership & Engineering team profiles.
   - Accreditations strip (ISO 27001, ISO 9001, Cisco Gold, NVIDIA Elite).
   - Riyadh Technology Corridor HQ and Staging Lab details.
3. **Solutions (`/solutions`)**:
   - Category filtering (*All*, *Networking*, *AI Services*, *Managed IT*) + real-time search.
   - In-depth solution cards with hardware compatibility and SLA targets.
   - **Interactive Project Scope & Architecture Estimator**: Real-time calculator where clients select their focus domain, deployment scale, and SLA level to receive an instant recommended blueprint.
   - Procurement & Technical FAQs accordion.

## Technical Details
- Next.js 16.4 App Router with Turbopack bundler (`next dev --turbopack`).
- Tailwind CSS v4 with custom `@theme inline` variables.
- Radix UI primitives (`@radix-ui/react-dialog`, `@radix-ui/react-tabs`, `@radix-ui/react-slot`).
- Lucide React icons.
- Build verified with 0 TypeScript/ESLint errors and sub-second prerendering.
