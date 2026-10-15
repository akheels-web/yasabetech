# Compact solutions page — 15 October 2026

The supplied reference informed the compact card format: an icon, title, one short description, use cases and an optional details action. The existing Yasabe colours, typography, navigation and overall template remain in use.

## Research and content decisions

- [Cisco's Saudi Arabia announcement](https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2025/m05/cisco-expands-partnership-with-saudi-arabia-to-power-the-ai-future.html) connects networking, security, collaboration and AI infrastructure. This supports grouping these capabilities into clear business-facing areas rather than leading with hardware specifications.
- [Ooredoo Oman's enterprise SD-WAN announcement](https://www.ooredoo.om/en/press-release/ooredoo-advances-omans-digital-economy-with-sd-wan-network-solution/) demonstrates local relevance for branch connectivity, security and network visibility. The page targets Oman and Saudi Arabia explicitly; it does not claim local offices, customer relationships or regulatory certifications.
- [Dell's infrastructure portfolio](https://industryresources.dell.com/) informed the separation of compute, storage, cloud and recovery from the private AI use case. Copy is original and does not reproduce vendor performance claims.

The public overview now has eight areas: networking, infrastructure/cloud, cybersecurity, private AI/smart systems, telecom, workplace/building systems, digital platforms and hardware/software sourcing. Four short delivery stages form a separate “How we support each solution” section. Solution-specific coverage and support open in a dialog. The selected solution is carried into the enquiry form.

The former expanded catalogue, filters, scope-builder controls and FAQ are removed from the public page. The detailed historical catalogue remains in `src/lib/solutions.ts` as a reference and is not imported into the page. Existing category anchors and the `#calculator` project-planning anchor remain valid.

## Logo assets and motion

The homepage displays 25 technology brands: Microsoft, Cisco, Intel, AMD, NVIDIA, Dell, Fortinet, Lenovo, Veeam, NetApp, Nutanix, VMware, HP, Palo Alto Networks, Juniper Networks, Red Hat, Ubiquiti, TP-Link, Supermicro, QNAP, Seagate, Schneider Electric, Citrix, Poly and Zoom. These cover software, networking, compute, security, storage, backup, power and workplace collaboration. The strip is labelled “Technology ecosystem”; it does not assert certified partnership status.

SVG paths come from [Simple Icons](https://github.com/simple-icons/simple-icons) and [SVGL](https://svgl.app/). Individual asset URLs, brand sources and supplied colours are recorded in [technology-logo-sources.json](technology-logo-sources.json). Simple Icons SVGs use their supplied brand colour; transparent viewBox padding is trimmed without changing the logo paths. Logos are stored under `public/brands/`, with no runtime image-service dependency. Logos and trademarks belong to their respective owners.

The strip automatically moves left in one continuous row using two identical groups. The duplicate is hidden from assistive technology. At the owner's request, there are no play/pause buttons, hover stops or wrapping static layout. The strip has its own autoplay rule; motion preferences for the rest of the site remain in effect.

The hero reuses the existing illustrative collaboration photograph. It is not a claim that the pictured people or office belong to Yasabe. See [image provenance](image-assets.md).

This is a local source update. No Cloudflare configuration or deployment is part of this work.
