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

## Interactive 3D WebGL Hero & Graphics Architecture
- **Interactive Three.js Canvas (`src/components/hero-3d-scene.tsx`)**:
  - WebGL particle constellation field with glowing cyber orbital rings in electric cyan and royal purple.
  - Interactive mouse tilt and camera rotation responding in real time to the user's cursor.
- **3D Crystalline Holographic AI & Network Sphere (`public/hero-3d-sphere.jpg`)**:
  - Centerpiece floating glassmorphic sphere with glowing central neural processor and fiber optic conduits.
  - Floating 3D holographic telemetry badges:
    - `400G Optical Fabric` (< 0.8ms Latency • 0% Loss)
    - `Sovereign AI Node` (NVIDIA HGX H100 Active)
- **Direct 3D Service Showcase Cards in Hero**:
  - **Enterprise Networking**: Bespoke 3D core switch render (`public/service-networking.jpg`), Wi-Fi 7 specs, and direct RFQ trigger.
  - **Sovereign AI Infrastructure**: Bespoke 3D liquid-cooled GPU supercomputer render (`public/service-ai.jpg`), local LLM fine-tuning specs, and direct RFQ trigger.
  - **Managed IT & 24/7 Operations**: Bespoke 3D datacenter NVMe SAN & SOC unit render (`public/service-managed.jpg`), sub-15m SLA response, and direct RFQ trigger.

## Pages Implemented
1. **Home (`/`)**:
   - Hero with interactive 3D WebGL canvas, floating holographic sphere, telemetry badges, and 3D service cards.
   - Authorized Partner OEM strip (**Cisco Gold, NVIDIA Elite, Dell Titanium, Fortinet Expert, HPE, Microsoft**).
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
- Three.js (`three` + `@types/three`) for real-time 3D WebGL rendering.
- Tailwind CSS v4 with custom `@theme inline` variables.
- Radix UI primitives (`@radix-ui/react-dialog`, `@radix-ui/react-tabs`, `@radix-ui/react-slot`).
- Lucide React icons.
- Build verified with 0 TypeScript/ESLint errors and sub-second prerendering.
