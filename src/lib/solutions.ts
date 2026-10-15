import type { SolutionCategory } from "@/lib/solution-categories";

export interface SolutionItem {
  id: string;
  title: string;
  category: SolutionCategory;
  categoryLabel: string;
  headline?: string;
  description: string;
  features: string[];
  supportedTech: string;
  deploymentTime?: string;
  sla?: string;
}

export const solutionsList: SolutionItem[] = [
  // Enterprise Networking
  {
    id: "sd-wan",
    title: "Enterprise Multi-Cloud SD-WAN",
    category: "networking",
    categoryLabel: "Enterprise Networking",
    headline: "Zero-Downtime WAN Fabric Across Branch Offices & Hybrid Clouds",
    description:
      "Replace expensive, brittle legacy MPLS with intelligent Software-Defined WAN. Features dynamic path steering, automated encryption tunnels, and application-aware QoS.",
    features: [
      "Sub-second brownout failover between multiple ISPs and 5G uplinks",
      "Direct-to-Cloud SaaS optimization (Microsoft 365, AWS, Azure)",
      "Centralized orchestrator with single-pane-of-glass policy push",
      "Integrated IPS/IDS and Next-Gen Firewall micro-segmentation",
    ],
    supportedTech:
      "Cisco Catalyst SD-WAN • Fortinet Secure SD-WAN • HPE Aruba EdgeConnect",
    deploymentTime: "2 to 4 Weeks",
    sla: "99.999% Availability",
  },
  {
    id: "wifi-7",
    title: "Wi-Fi 7 Enterprise Campus Mobility",
    category: "networking",
    categoryLabel: "Enterprise Networking",
    headline: "Ultra-High Density Wireless for Modern Headquarters & Campuses",
    description:
      "Design and turn-key rollout of 802.11be Wi-Fi 7 infrastructure. Delivers multi-gigabit speeds, 320 MHz channel width, and Multi-Link Operation (MLO) for zero-latency roaming.",
    features: [
      "Predictive RF 3D heat-mapping and physical site survey validation",
      "High client density handling (> 500 concurrent active devices per AP)",
      "Automated IoT device isolation and 802.1X enterprise authentication",
      "AI-driven radio resource management (RRM) to mitigate interference",
    ],
    supportedTech:
      "Cisco Catalyst 9100 Series • HPE Aruba AP-735 • Ruckus R770",
    deploymentTime: "1 to 3 Weeks",
    sla: "99.99% Wireless Uptime",
  },
  {
    id: "spine-leaf",
    title: "400G/800G Data Center Spine-Leaf Fabric",
    category: "networking",
    categoryLabel: "Enterprise Networking",
    headline:
      "Non-Blocking Low-Latency Switching for Cloud & Private Data Centers",
    description:
      "High-density spine-leaf CLOS network architectures built for massive east-west traffic, high-frequency transactions, and GPU cluster interconnects.",
    features: [
      "EVPN-VXLAN network virtualization for multi-tenant isolation",
      "RoCE v2 (RDMA over Converged Ethernet) with PFC/ECN flow control",
      "Telemetry streaming with nanosecond precision timestamping",
      "Hot-swappable redundant power and liquid-cooling compatibility",
    ],
    supportedTech: "Arista 7060X / 7280R • Cisco Nexus 9300/9500 • Juniper QFX",
    deploymentTime: "3 to 6 Weeks",
    sla: "100% Non-Blocking Fabric",
  },

  // AI Services
  {
    id: "gpu-clusters",
    title: "High-Density GPU Compute Superclusters",
    category: "ai",
    categoryLabel: "AI Services & Compute",
    headline: "Turnkey NVIDIA HGX / DGX Infrastructure for Large AI Workloads",
    description:
      "End-to-end hardware provisioning, high-speed InfiniBand networking, and thermal management for state-of-the-art enterprise AI training and inference.",
    features: [
      "NVIDIA HGX H100 / H200 & Blackwell B200 system provisioning",
      "NVIDIA Quantum-2 400Gb/s InfiniBand or Spectrum-X Ethernet fabric",
      "Liquid cooling loop integration and data center power staging",
      "Cluster management via Slurm, Kubernetes, and NVIDIA Base Command",
    ],
    supportedTech:
      "NVIDIA DGX / HGX • Supermicro SuperServer • Dell PowerEdge XE9680",
    deploymentTime: "4 to 8 Weeks",
    sla: "Dedicated OEM RMA Escalation",
  },
  {
    id: "sovereign-llm",
    title: "Sovereign On-Premise LLM & RAG Engines",
    category: "ai",
    categoryLabel: "AI Services & Compute",
    headline: "Confidential Enterprise AI Without Cloud Data Leakage",
    description:
      "Deploy private open-weights models (Llama 3, DeepSeek, Mistral) within your physical perimeter. Completely isolated from public internet dependencies.",
    features: [
      "Enterprise RAG pipeline with GPU-accelerated Milvus/Qdrant vector stores",
      "vLLM and TensorRT-LLM optimized inference with FP8/AWQ quantization",
      "Role-based access control (RBAC) connecting to active directory / LDAP",
      "Strict compliance with national data residency and sovereign governance",
    ],
    supportedTech: "TensorRT-LLM • vLLM • PyTorch • HuggingFace • LangChain",
    deploymentTime: "2 to 4 Weeks",
    sla: "Sub-50ms Token Latency",
  },
  {
    id: "ai-ops",
    title: "AIOps & Autonomous Network Intelligence",
    category: "ai",
    categoryLabel: "AI Services & Compute",
    headline: "Predictive Anomaly Detection and Self-Healing Infrastructure",
    description:
      "Integrate intelligent autonomous agents that ingest network telemetry, predict link degradation before failures occur, and automatically remediate bottlenecks.",
    features: [
      "Continuous machine-learning baseline calculation on interface telemetry",
      "Automated root-cause analysis across routing, switches, and firewalls",
      "Proactive ticket generation with pre-populated diagnostic traces",
      "Zero-touch configuration rollback upon synthetic test failure",
    ],
    supportedTech:
      "Cisco DNA Spaces • Cisco ThousandEyes • Datadog AIOps • Custom Agents",
    deploymentTime: "2 to 3 Weeks",
    sla: "Automated Incident Prevention",
  },

  // Managed IT & Cloud
  {
    id: "noc-soc",
    title: "24/7 Dedicated NOC & SOC Operations",
    category: "managed-it",
    categoryLabel: "Managed IT & Infrastructure",
    headline:
      "Continuous Vigilance, Proactive Remediation & Rapid Incident Command",
    description:
      "Outsource or augment your IT operations with Yasabe Technologies' round-the-clock Tier-3 network and security operations desk based in Riyadh.",
    features: [
      "Guaranteed 15-minute response SLA for critical Tier-1 incidents",
      "Real-time synthetic transaction monitoring and link status tracking",
      "Managed patch management and emergency firmware zero-day mitigation",
      "Comprehensive monthly SLA and performance executive reporting",
    ],
    supportedTech: "Zabbix • Prometheus • Grafana • FortiSIEM • ServiceNow",
    deploymentTime: "Immediate Onboarding",
    sla: "< 15 Min Critical Incident SLA",
  },
  {
    id: "hybrid-storage",
    title: "Enterprise Storage (SAN/NAS) & Backup",
    category: "managed-it",
    categoryLabel: "Managed IT & Infrastructure",
    headline:
      "Petabyte-Scale High-IOPS Storage with Air-Gapped Ransomware Recovery",
    description:
      "Design and deployment of mission-critical storage arrays for database workloads, virtualization clusters, and immutable compliance archives.",
    features: [
      "All-NVMe high-IOPS storage for Oracle, SAP, and SQL server workloads",
      "Air-gapped and immutable snapshot policies preventing ransomware encryption",
      "Synchronous active-active replication between primary and DR sites",
      "Seamless cloud tiering to S3-compatible sovereign object storage",
    ],
    supportedTech:
      "Dell PowerStore / PowerMax • NetApp AFF • Pure Storage FlashArray",
    deploymentTime: "2 to 4 Weeks",
    sla: "Zero Data Loss (RPO = 0)",
  },
  {
    id: "virtualization",
    title: "Hyperconverged Infrastructure & Cloud",
    category: "managed-it",
    categoryLabel: "Managed IT & Infrastructure",
    headline:
      "Modernize Server Silos with Resilient HCI & Multi-Hypervisor Fabrics",
    description:
      "Transition from fragmented hardware to scalable software-defined compute, storage, and virtualization with enterprise SLA backing.",
    features: [
      "HCI cluster design with automated non-disruptive rolling upgrades",
      "Multi-hypervisor support (VMware vSphere, Nutanix AHV, Proxmox VE)",
      "Disaster recovery runbook orchestration with single-click failover",
      "Complete physical hardware lifecycle maintenance and spare parts stocking",
    ],
    supportedTech:
      "Dell VxRail • Nutanix Cloud Platform • VMware vSphere • Cisco UCS",
    deploymentTime: "2 to 5 Weeks",
    sla: "99.999% Compute Availability",
  },
  // Expanded service coverage informed by the reference research in docs/services-research.md.
  // New offerings use scoping language rather than unverified delivery or SLA promises.
  {
    id: "cybersecurity",
    title: "Cybersecurity & Network Protection",
    category: "managed-it",
    categoryLabel: "ICT & Managed IT",
    description:
      "Build a security plan around your users, endpoints, applications and data. Connect preventive controls with monitoring and a documented response process.",
    features: [
      "Firewall, secure access and network segmentation planning",
      "Endpoint protection and identity access review",
      "Vulnerability assessment and remediation priorities",
      "Security monitoring and incident escalation workflows",
    ],
    supportedTech: "Network security • Endpoint protection • Identity & access",
  },
  {
    id: "it-management-observability",
    title: "IT Management & Observability",
    category: "managed-it",
    categoryLabel: "ICT & Managed IT",
    description:
      "Bring visibility to networks, systems and service performance with management tools that help your team identify issues and coordinate day-to-day work.",
    features: [
      "Infrastructure discovery and asset inventory",
      "Centralized dashboards, logs and operational alerts",
      "Service desk, ticketing and change-management workflows",
      "Capacity, availability and performance reporting",
    ],
    supportedTech: "Monitoring • Asset management • IT service management",
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration & Hybrid Infrastructure",
    category: "managed-it",
    categoryLabel: "ICT & Managed IT",
    description:
      "Plan the move between on-premise and cloud environments with a clear view of application dependencies, connectivity, governance and operational cost.",
    features: [
      "Workload assessment and migration sequencing",
      "Private, public and hybrid cloud architecture",
      "Cloud connectivity, access policies and backup planning",
      "Cutover validation and operational handover",
    ],
    supportedTech: "Cloud infrastructure • Migration • Hybrid operations",
  },
  {
    id: "virtual-desktops",
    title: "Virtual Desktops & Digital Workspaces",
    category: "managed-it",
    categoryLabel: "ICT & Managed IT",
    description:
      "Provide a consistent workspace for office, remote and shared-device users through centrally managed virtual desktops and application access.",
    features: [
      "Virtual desktop infrastructure and application delivery",
      "User profiles, desktop images and access policies",
      "Compute, storage and connectivity sizing",
      "Workspace monitoring and lifecycle management",
    ],
    supportedTech: "VDI • Virtual applications • Workspace management",
  },
  {
    id: "smart-building-monitoring",
    title: "Smart Buildings & Connected Monitoring",
    category: "ai",
    categoryLabel: "AI & IoT",
    description:
      "Connect building telemetry into a practical operational view. Help facilities teams track equipment, environmental conditions and alarm events across their sites.",
    features: [
      "Environmental and equipment condition monitoring",
      "Fire alarm event integration with approved building systems",
      "Connected home and facility control integration",
      "Alert routing, dashboards and maintenance workflows",
    ],
    supportedTech: "Building telemetry • Sensors • Facility dashboards",
  },
  {
    id: "smart-metering-energy",
    title: "Smart Metering & Energy Management",
    category: "ai",
    categoryLabel: "AI & IoT",
    description:
      "Make utility consumption easier to understand with connected meters, usage dashboards and exception alerts for buildings, campuses and distributed assets.",
    features: [
      "Advanced metering infrastructure planning",
      "Energy and water consumption visibility",
      "Usage anomalies, trends and reporting",
      "Smart pole and EV charging monitoring integration",
    ],
    supportedTech: "Smart meters • Energy monitoring • Charging telemetry",
  },
  {
    id: "connected-vehicles-assets",
    title: "Connected Vehicles & Asset Tracking",
    category: "ai",
    categoryLabel: "AI & IoT",
    description:
      "Bring fleet and asset activity into a shared operational view. Plan tracking and event workflows around your vehicles, equipment and authorized personnel.",
    features: [
      "Vehicle telemetry and fleet activity dashboards",
      "Asset location, utilization and movement alerts",
      "Personnel tracking with defined access and privacy controls",
      "Maintenance events and operational system integration",
    ],
    supportedTech: "Fleet telemetry • Asset tracking • Event management",
  },
  {
    id: "industrial-iot",
    title: "Industrial IoT & Oilfield Monitoring",
    category: "ai",
    categoryLabel: "AI & IoT",
    description:
      "Connect operational equipment and field telemetry to support production visibility, equipment maintenance and remote monitoring in industrial environments.",
    features: [
      "Industrial equipment and sensor connectivity",
      "Oil and gas asset condition monitoring",
      "Production dashboards and exception reporting",
      "Integration planning between operational and IT systems",
    ],
    supportedTech: "Industry 4.0 • Industrial telemetry • Remote monitoring",
  },
  {
    id: "agritech",
    title: "Agri-Tech & Connected Farming",
    category: "ai",
    categoryLabel: "AI & IoT",
    description:
      "Use field measurements to guide agricultural operations. Bring environmental, irrigation and equipment information together for growers and farm managers.",
    features: [
      "Soil and environmental sensor monitoring",
      "Irrigation telemetry and scheduling integration",
      "Farm equipment and resource visibility",
      "Dashboards and alerts for changing field conditions",
    ],
    supportedTech:
      "Connected agriculture • Irrigation monitoring • Field sensors",
  },
  {
    id: "smart-city-platforms",
    title: "Smart Parking, Waste & City Platforms",
    category: "ai",
    categoryLabel: "AI & IoT",
    description:
      "Connect urban services through an integrated command view. Turn parking, waste collection and distributed sensor data into useful operational information.",
    features: [
      "Parking occupancy and guidance integration",
      "Waste collection telemetry and service planning",
      "Shared IoT dashboards and command-center integration",
      "Custom device onboarding and event workflows",
    ],
    supportedTech: "Smart parking • Waste monitoring • IoT command platforms",
  },
  {
    id: "digital-healthcare",
    title: "Connected Healthcare & Facility Intelligence",
    category: "ai",
    categoryLabel: "AI & IoT",
    description:
      "Support healthcare operations with connected equipment, facility telemetry and carefully controlled information flows between operational systems.",
    features: [
      "Clinical equipment and facility asset visibility",
      "Environmental condition and equipment monitoring",
      "Operational dashboards and alert routing",
      "Data access, retention and integration planning",
    ],
    supportedTech: "Healthcare IoT • Asset visibility • Facility monitoring",
  },
  {
    id: "mobile-network-infrastructure",
    title: "Mobile Networks & In-Building Coverage",
    category: "telecom",
    categoryLabel: "Mobility & Telecom",
    description:
      "Plan mobile connectivity for campuses and large buildings, combining site assessment with infrastructure integration and coverage validation.",
    features: [
      "Mobile network infrastructure requirements review",
      "In-building solution and coverage assessment",
      "Equipment, cabling and site integration planning",
      "Coverage testing and commissioning documentation",
    ],
    supportedTech:
      "Mobile infrastructure • In-building solutions • Coverage planning",
  },
  {
    id: "fixed-telecom-networks",
    title: "Fixed Telecom & Fiber Infrastructure",
    category: "telecom",
    categoryLabel: "Mobility & Telecom",
    description:
      "Build a foundation for fixed connectivity with fiber infrastructure, access networks and transport planning suited to the sites you need to connect.",
    features: [
      "Fiber route and access network planning",
      "Telecom equipment and connectivity integration",
      "Link testing, labeling and as-built documentation",
      "Expansion and infrastructure lifecycle planning",
    ],
    supportedTech: "Fixed networks • Fiber infrastructure • Access & transport",
  },
  {
    id: "critical-communications",
    title: "Critical Communication Systems",
    category: "telecom",
    categoryLabel: "Mobility & Telecom",
    description:
      "Define communication requirements for field teams and operational sites. Bring coverage, resilience, dispatch and escalation needs into one design.",
    features: [
      "Operational radio and dispatch requirements assessment",
      "Coverage and resilience architecture",
      "Integration with control rooms and operational workflows",
      "Acceptance testing, training and handover planning",
    ],
    supportedTech: "Operational communications • Dispatch • Control rooms",
  },
  {
    id: "telecom-managed-services",
    title: "Telecom Operations & Managed Services",
    category: "telecom",
    categoryLabel: "Mobility & Telecom",
    description:
      "Coordinate the operational care of telecom infrastructure with monitoring, maintenance and field support aligned to an agreed service scope.",
    features: [
      "Telecom asset inventory and service visibility",
      "Fault monitoring and escalation coordination",
      "Preventive maintenance and field support planning",
      "Performance reporting and lifecycle recommendations",
    ],
    supportedTech: "Telecom monitoring • Maintenance • Service operations",
  },
  {
    id: "collaboration-meeting-rooms",
    title: "Unified Communications & Meeting Rooms",
    category: "av-elv",
    categoryLabel: "AV, UC & ELV",
    description:
      "Make meetings and workplace communication easier with integrated conferencing, room audio, displays and collaboration tools.",
    features: [
      "Meeting room and hybrid collaboration design",
      "Video conferencing, microphones and room audio",
      "Display, presentation and room-control integration",
      "User training and room support handover",
    ],
    supportedTech: "Unified communications • Video conferencing • Room AV",
  },
  {
    id: "contact-centers",
    title: "Contact Center & Customer Communications",
    category: "av-elv",
    categoryLabel: "AV, UC & ELV",
    description:
      "Connect customer conversations with the teams handling them. Plan contact center tools around routing, agent workflows and operational visibility.",
    features: [
      "Contact routing and interactive voice workflows",
      "Agent workspace and supervisor dashboards",
      "Customer system and reporting integration",
      "Recording and retention requirements planning",
    ],
    supportedTech:
      "Contact centers • Customer communications • Agent workflows",
  },
  {
    id: "cctv-access-control",
    title: "CCTV & Access Control",
    category: "av-elv",
    categoryLabel: "AV, UC & ELV",
    description:
      "Plan physical security as a connected system, bringing video surveillance, access permissions and incident review into the same operational picture.",
    features: [
      "Camera placement, recording and storage design",
      "Door access and visitor management integration",
      "Central monitoring and event review workflows",
      "Permissions, retention and system handover planning",
    ],
    supportedTech: "Video surveillance • Access control • Physical security",
  },
  {
    id: "structured-cabling-ups",
    title: "Structured Cabling & UPS Infrastructure",
    category: "av-elv",
    categoryLabel: "AV, UC & ELV",
    description:
      "Give connected systems a dependable physical foundation with organized copper and fiber cabling, equipment racks and backup power planning.",
    features: [
      "Structured copper and fiber cabling design",
      "Rack layouts, patching and cable management",
      "UPS sizing and power continuity planning",
      "Testing, labeling and as-built documentation",
    ],
    supportedTech: "Structured cabling • Equipment racks • Backup power",
  },
  {
    id: "public-address-environmental",
    title: "Public Address & Environmental Monitoring",
    category: "av-elv",
    categoryLabel: "AV, UC & ELV",
    description:
      "Support facility communications and equipment awareness with public address systems, environmental sensing and integration into building operations.",
    features: [
      "Public address zoning and audio distribution",
      "Temperature, humidity and leak monitoring",
      "Facility alerts and control-room integration",
      "System commissioning and maintenance documentation",
    ],
    supportedTech:
      "Public address • Environmental sensors • Facility integration",
  },
  {
    id: "cloud-service-platforms",
    title: "Cloud Platforms & As-a-Service Solutions",
    category: "digital",
    categoryLabel: "Digital Platforms & Services",
    description:
      "Choose an operating model for infrastructure, applications and data services. Plan cloud adoption around access, integration, governance and ongoing ownership.",
    features: [
      "Infrastructure, platform and software service assessment",
      "AI and IoT platform integration planning",
      "Data protection, backup and service continuity requirements",
      "Service ownership, subscription and support coordination",
    ],
    supportedTech:
      "IaaS • PaaS • SaaS • AIaaS • IoTaaS • Data protection services",
  },
  {
    id: "business-applications-automation",
    title: "Business Applications & Workflow Automation",
    category: "digital",
    categoryLabel: "Digital Platforms & Services",
    description:
      "Connect business applications and repeatable workflows so teams can move information between systems with clearer ownership and fewer manual steps.",
    features: [
      "Business process and application requirements discovery",
      "Workflow, approval and service portal design",
      "Application integration and data exchange planning",
      "User access, reporting and adoption support",
    ],
    supportedTech: "Business applications • Workflow automation • Integrations",
  },
  {
    id: "immersive-experiences",
    title: "Immersive Experiences & Metaverse Platforms",
    category: "digital",
    categoryLabel: "Digital Platforms & Services",
    description:
      "Explore virtual environments for training, demonstrations and customer engagement, starting with a defined use case and a practical content and platform plan.",
    features: [
      "Immersive experience and audience requirements review",
      "Virtual environment and interactive content planning",
      "Platform, device and hosting integration",
      "Content management and ongoing support scope",
    ],
    supportedTech:
      "Virtual experiences • Immersive content • Metaverse platforms",
  },
  {
    id: "blockchain-integrations",
    title: "Blockchain & Distributed Ledger Solutions",
    category: "digital",
    categoryLabel: "Digital Platforms & Services",
    description:
      "Assess distributed ledger use cases for shared records and multi-party workflows, with clear requirements for identity, governance and integration.",
    features: [
      "Use-case assessment and solution feasibility",
      "Shared record and transaction workflow design",
      "Identity, permissions and governance requirements",
      "Integration planning with existing business systems",
    ],
    supportedTech:
      "Distributed ledgers • Shared records • Enterprise integration",
  },
];
