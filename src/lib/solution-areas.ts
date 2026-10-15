export const solutionAreas = [
  {
    id: "networking", category: "networking", title: "Networking & wireless",
    description: "Reliable Wi-Fi, switching and SD-WAN that connect your people, sites and applications.",
    useCases: "Offices, branches and campuses",
    includes: ["Enterprise Wi-Fi and site surveys", "Campus switching and SD-WAN", "Data center fabrics and connectivity", "Network visibility and access policies"],
    support: "We assess coverage and capacity, design the network, configure equipment and support your rollout.",
  },
  {
    id: "managed-it", category: "managed-it", title: "Servers, cloud & storage",
    description: "Compute, hybrid cloud, backup and storage sized around the workloads that matter.",
    useCases: "New workloads, refreshes and recovery",
    includes: ["Servers, virtualization and HCI", "Storage, backup and disaster recovery", "Cloud migration and hybrid infrastructure", "Virtual desktops and IT monitoring"],
    support: "We size your environment, plan migration and recovery, and agree the ongoing operations you need.",
  },
  {
    id: "cybersecurity", category: "managed-it", title: "Cybersecurity & protection",
    description: "Protect users, endpoints and applications with security that fits your environment.",
    useCases: "Secure access and business continuity",
    includes: ["Firewalls and network segmentation", "Endpoint protection and identity access", "Vulnerability reviews and remediation planning", "Security monitoring and incident workflows"],
    support: "We review the risks, integrate suitable controls and define monitoring and escalation responsibilities.",
  },
  {
    id: "ai", category: "ai", title: "Private AI & smart systems",
    description: "Bring private AI, connected devices and useful operational insights into your business.",
    useCases: "Private data, connected assets and facilities",
    includes: ["GPU compute and private AI platforms", "Private knowledge search and inference", "IoT sensors, metering and asset tracking", "Industrial and facility dashboards"],
    support: "We start with a defined use case, size the platform and connect data, devices and operational workflows.",
  },
  {
    id: "telecom", category: "telecom", title: "Telecom & connectivity",
    description: "Fiber, in-building coverage and communications infrastructure for connected operations.",
    useCases: "Large buildings, field teams and multiple sites",
    includes: ["Fixed networks and fiber infrastructure", "Mobile and in-building coverage planning", "Operational radio and control-room communications", "Telecom monitoring and maintenance planning"],
    support: "We assess site requirements, coordinate integration and validate coverage and connectivity at handover.",
  },
  {
    id: "av-elv", category: "av-elv", title: "Workplace & building systems",
    description: "Meeting rooms, collaboration, CCTV and access control that work together.",
    useCases: "Meeting spaces, offices and operational sites",
    includes: ["Meeting-room AV and unified communications", "Contact centers and public address", "CCTV, access control and facility monitoring", "Structured cabling, racks and UPS planning"],
    support: "We plan each space, integrate the systems and help your team use and maintain them confidently.",
  },
  {
    id: "digital", category: "digital", title: "Digital platforms & automation",
    description: "Connect business applications, cloud services and workflows with less manual effort.",
    useCases: "Approvals, service portals and shared data",
    includes: ["Business applications and workflow automation", "Cloud and as-a-service platform selection", "Application and data integrations", "Immersive and distributed-ledger use-case reviews"],
    support: "We map the workflow, select a practical platform and coordinate integration, access and user handover.",
  },
  {
    id: "hardware-boq", category: "hardware-boq", title: "Hardware & software sourcing",
    description: "Source devices, infrastructure and licences with clear BOQ matching and delivery planning.",
    useCases: "New teams, office expansion and refreshes",
    includes: ["BOQ review and equipment selection", "Laptops, workstations and infrastructure hardware", "Software licensing and renewal requirements", "Configuration, delivery and rollout coordination"],
    support: "We review compatibility, confirm availability and licensing, and coordinate procurement with your rollout plan.",
  },
] as const;

export type SolutionArea = (typeof solutionAreas)[number];
