---
version: 1.0
name: Misyatech
description: Enterprise networking, private AI and managed IT for Oman and Dubai.
colors:
  navy-deep: "#050E1E"
  navy: "#07142B"
  navy-surface: "#0D1F3C"
  blue: "#1D4ED8"
  sky: "#38BDF8"
  sky-light: "#7DD3FC"
  mist: "#F4F8FF"
  glacier: "#EAF2FF"
  violet-deep: "#1B1145"
  violet-royal: "#3B1D7A"
  indigo-vivid: "#4F46E5"
  violet-soft: "#A78BFA"
  ink: "#08152B"
  copy: "#4A5E7A"
  line: "#DCE6F5"
typography:
  sans:
    fontFamily: "Plus Jakarta Sans, IBM Plex Sans Arabic, sans-serif"
  display:
    fontFamily: "Outfit, Cairo, sans-serif"
rounded:
  DEFAULT: "0.75rem"
  media: "1rem"
spacing:
  page-max: "80rem"
---

# Misyatech Design Context

## Overview

Bilingual (English + Arabic RTL) executive enterprise IT experience tailored for business and IT leaders across **Muscat, Oman** and **Dubai, UAE**. The visual architecture centers on **Deep Navy & Light Blue** (`#050E1E`, `#07142B`, `#1D4ED8`, `#38BDF8`, `#7DD3FC`, `#F4F8FF`), high-craft cursor physics, and clean typographic hierarchy without decorative badge clutter.

All photography is illustrative WebP editorial imagery; no fabricated customer counts, street addresses, or unverified certification claims are introduced.

## Runtime Ownership

- Shared design tokens, RTL rules, architectural hairline grid, optical purple-indigo image veils (`.img-veil-hero`, `.img-veil-panel-active`, `.img-veil-panel-idle`, `.img-veil-card`, `.img-veil-soft`, `.img-prism-sheen`), specular edge glow, kinetic button slide, and marquee animation: `src/app/globals.css`.
- Google Font variables (`Outfit`, `Plus Jakarta Sans`, `Cairo`, `IBM Plex Sans Arabic`): `src/app/layout.tsx`.
- Language state (`en` / `ar`, `ltr` / `rtl`): `src/components/language-provider.tsx` and `src/lib/i18n.ts`.
- UI primitives: `src/components/ui/` (Button with `azure`/`brand`/`glass`/`default`/`outline` variants, Accordion hairline rows, Badge, Separator, Tabs, Dialog, Select, Input, Textarea, Card).
- Interactive components: `src/components/interactive/` (`HeroShowcase`, `ExpandingPractices`, `ScrollStory`, `CapabilityIndex`, `TiltCard`, `MagneticButton`, `ScrollProgressRail`, `ScrollReveal`, `ScopeEstimator`).
- Enquiry contract (`/api/enquiry` → `sales@misyatech.com`): `server/enquiry.mjs` and `src/components/rfq-modal.tsx`.
