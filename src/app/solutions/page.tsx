"use client"

import * as React from "react"
import { 
  Network, 
  Cpu, 
  Server, 
  CheckCircle2, 
  FileSpreadsheet, 
  Search, 
  SlidersHorizontal,
  ChevronDown,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RFQModal } from "@/components/rfq-modal"

interface SolutionItem {
  id: string
  title: string
  category: "networking" | "ai" | "managed-it"
  categoryLabel: string
  headline: string
  description: string
  features: string[]
  supportedTech: string
  deploymentTime: string
  sla: string
}

export default function SolutionsPage() {
  const [rfqOpen, setRfqOpen] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState<"all" | "networking" | "ai" | "managed-it">("all")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [modalInitialCategory, setModalInitialCategory] = React.useState<string>("networking")

  // Interactive Scope Calculator State
  const [calcDomain, setCalcDomain] = React.useState<"networking" | "ai" | "managed-it">("networking")
  const [calcScale, setCalcScale] = React.useState<"sme" | "enterprise" | "datacenter">("enterprise")
  const [calcSla, setCalcSla] = React.useState<"standard" | "critical">("critical")

  // FAQ open states
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  const solutionsList: SolutionItem[] = [
    // Enterprise Networking
    {
      id: "sd-wan",
      title: "Enterprise Multi-Cloud SD-WAN",
      category: "networking",
      categoryLabel: "Enterprise Networking",
      headline: "Zero-Downtime WAN Fabric Across Branch Offices & Hybrid Clouds",
      description: "Replace expensive, brittle legacy MPLS with intelligent Software-Defined WAN. Features dynamic path steering, automated encryption tunnels, and application-aware QoS.",
      features: [
        "Sub-second brownout failover between multiple ISPs and 5G uplinks",
        "Direct-to-Cloud SaaS optimization (Microsoft 365, AWS, Azure)",
        "Centralized orchestrator with single-pane-of-glass policy push",
        "Integrated IPS/IDS and Next-Gen Firewall micro-segmentation",
      ],
      supportedTech: "Cisco Catalyst SD-WAN • Fortinet Secure SD-WAN • HPE Aruba EdgeConnect",
      deploymentTime: "2 to 4 Weeks",
      sla: "99.999% Availability",
    },
    {
      id: "wifi-7",
      title: "Wi-Fi 7 Enterprise Campus Mobility",
      category: "networking",
      categoryLabel: "Enterprise Networking",
      headline: "Ultra-High Density Wireless for Modern Headquarters & Campuses",
      description: "Design and turn-key rollout of 802.11be Wi-Fi 7 infrastructure. Delivers multi-gigabit speeds, 320 MHz channel width, and Multi-Link Operation (MLO) for zero-latency roaming.",
      features: [
        "Predictive RF 3D heat-mapping and physical site survey validation",
        "High client density handling (> 500 concurrent active devices per AP)",
        "Automated IoT device isolation and 802.1X enterprise authentication",
        "AI-driven radio resource management (RRM) to mitigate interference",
      ],
      supportedTech: "Cisco Catalyst 9100 Series • HPE Aruba AP-735 • Ruckus R770",
      deploymentTime: "1 to 3 Weeks",
      sla: "99.99% Wireless Uptime",
    },
    {
      id: "spine-leaf",
      title: "400G/800G Data Center Spine-Leaf Fabric",
      category: "networking",
      categoryLabel: "Enterprise Networking",
      headline: "Non-Blocking Low-Latency Switching for Cloud & Private Data Centers",
      description: "High-density spine-leaf CLOS network architectures built for massive east-west traffic, high-frequency transactions, and GPU cluster interconnects.",
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
      description: "End-to-end hardware provisioning, high-speed InfiniBand networking, and thermal management for state-of-the-art enterprise AI training and inference.",
      features: [
        "NVIDIA HGX H100 / H200 & Blackwell B200 system provisioning",
        "NVIDIA Quantum-2 400Gb/s InfiniBand or Spectrum-X Ethernet fabric",
        "Liquid cooling loop integration and data center power staging",
        "Cluster management via Slurm, Kubernetes, and NVIDIA Base Command",
      ],
      supportedTech: "NVIDIA DGX / HGX • Supermicro SuperServer • Dell PowerEdge XE9680",
      deploymentTime: "4 to 8 Weeks",
      sla: "Dedicated OEM RMA Escalation",
    },
    {
      id: "sovereign-llm",
      title: "Sovereign On-Premise LLM & RAG Engines",
      category: "ai",
      categoryLabel: "AI Services & Compute",
      headline: "Confidential Enterprise AI Without Cloud Data Leakage",
      description: "Deploy private open-weights models (Llama 3, DeepSeek, Mistral) within your physical perimeter. Completely isolated from public internet dependencies.",
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
      description: "Integrate intelligent autonomous agents that ingest network telemetry, predict link degradation before failures occur, and automatically remediate bottlenecks.",
      features: [
        "Continuous machine-learning baseline calculation on interface telemetry",
        "Automated root-cause analysis across routing, switches, and firewalls",
        "Proactive ticket generation with pre-populated diagnostic traces",
        "Zero-touch configuration rollback upon synthetic test failure",
      ],
      supportedTech: "Cisco DNA Spaces • Cisco ThousandEyes • Datadog AIOps • Custom Agents",
      deploymentTime: "2 to 3 Weeks",
      sla: "Automated Incident Prevention",
    },

    // Managed IT & Cloud
    {
      id: "noc-soc",
      title: "24/7 Dedicated NOC & SOC Operations",
      category: "managed-it",
      categoryLabel: "Managed IT & Infrastructure",
      headline: "Continuous Vigilance, Proactive Remediation & Rapid Incident Command",
      description: "Outsource or augment your IT operations with Yasabe Technologies' round-the-clock Tier-3 network and security operations desk based in Riyadh.",
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
      headline: "Petabyte-Scale High-IOPS Storage with Air-Gapped Ransomware Recovery",
      description: "Design and deployment of mission-critical storage arrays for database workloads, virtualization clusters, and immutable compliance archives.",
      features: [
        "All-NVMe high-IOPS storage for Oracle, SAP, and SQL server workloads",
        "Air-gapped and immutable snapshot policies preventing ransomware encryption",
        "Synchronous active-active replication between primary and DR sites",
        "Seamless cloud tiering to S3-compatible sovereign object storage",
      ],
      supportedTech: "Dell PowerStore / PowerMax • NetApp AFF • Pure Storage FlashArray",
      deploymentTime: "2 to 4 Weeks",
      sla: "Zero Data Loss (RPO = 0)",
    },
    {
      id: "virtualization",
      title: "Hyperconverged Infrastructure & Cloud",
      category: "managed-it",
      categoryLabel: "Managed IT & Infrastructure",
      headline: "Modernize Server Silos with Resilient HCI & Multi-Hypervisor Fabrics",
      description: "Transition from fragmented hardware to scalable software-defined compute, storage, and virtualization with enterprise SLA backing.",
      features: [
        "HCI cluster design with automated non-disruptive rolling upgrades",
        "Multi-hypervisor support (VMware vSphere, Nutanix AHV, Proxmox VE)",
        "Disaster recovery runbook orchestration with single-click failover",
        "Complete physical hardware lifecycle maintenance and spare parts stocking",
      ],
      supportedTech: "Dell VxRail • Nutanix Cloud Platform • VMware vSphere • Cisco UCS",
      deploymentTime: "2 to 5 Weeks",
      sla: "99.999% Compute Availability",
    },
  ]

  const filteredSolutions = solutionsList.filter((sol) => {
    const matchesCategory = selectedCategory === "all" || sol.category === selectedCategory
    const matchesSearch = 
      sol.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sol.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sol.supportedTech.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sol.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const openQuoteFor = (cat: string) => {
    setModalInitialCategory(cat)
    setRfqOpen(true)
  }

  // Calculate dynamic scope summary
  const getArchitectureBlueprint = () => {
    if (calcDomain === "networking") {
      if (calcScale === "sme") return "Redundant Dual-ISP SD-WAN Gateway + Wi-Fi 7 Enterprise (8x APs) + Managed 24/7 Monitoring"
      if (calcScale === "enterprise") return "Full Campus SD-WAN Mesh + 48-port PoE+ Core Switches + Multi-Floor Wi-Fi 7 + ZTNA Security"
      return "400G Spine-Leaf CLOS Fabric + Dual Data Center DCI + Terabit Core Routing + Sub-microsecond Latency SLA"
    } else if (calcDomain === "ai") {
      if (calcScale === "sme") return "Dual RTX 6000 Ada / L40S Inference Server + Local Vector Database + Confidential RAG API"
      if (calcScale === "enterprise") return "4x to 8x NVIDIA HGX H100 Server Node + 400G InfiniBand Network + Private Fine-Tuning Rig"
      return "Multi-Node NVIDIA HGX Cluster + Quantum-2 InfiniBand Fabric + Liquid Cooled In-Row CDA + Slurm Orchestrator"
    } else {
      if (calcScale === "sme") return "All-Flash SAN Array (50TB) + Hyper-V/vSphere Cluster + Immutable Daily Backup Appliance"
      if (calcScale === "enterprise") return "Dell VxRail / Nutanix HCI 4-Node Cluster + Dual 25G ToR Switches + 24/7 Managed NOC/SOC"
      return "Tier-IV Multi-Site Active-Active Storage Fabric + Metro Clustering + Sub-minute Automated RTO/RPO"
    }
  }

  const faqs = [
    {
      q: "How does Yasabe Technologies guarantee 100% genuine authorized hardware?",
      a: "We only procure through direct manufacturer-authorized distribution channels for Cisco, NVIDIA, Dell, HP, and Fortinet. Every item is verified via official serialized vendor databases, guaranteeing that your organization receives full manufacturer warranty coverage (e.g. Cisco SMARTnet, Dell ProSupport).",
    },
    {
      q: "Can we send you an existing Bill of Quantities (BOQ) for quotation?",
      a: "Yes. Simply click 'Request RFQ' or email rfq@yasabetech.com with your BOQ spreadsheet or tender document. Our certified solution architects will audit your list for compatibility, transceivers, cabling, and power specifications before returning an official priced proposal.",
    },
    {
      q: "How do your private on-premise AI deployments ensure data sovereignty?",
      a: "Our private AI solutions run entirely within your physical server rooms or sovereign cloud tenant. Model weights, vector databases, and prompt streams never cross external borders or cloud inference APIs, fulfilling strict national data residency mandates.",
    },
    {
      q: "What is your typical turnaround time for hardware staging and delivery?",
      a: "Standard in-stock enterprise networking items (switches, transceivers, APs) can be pre-staged and delivered within 3-5 business days. Specialized high-density GPU servers and custom spine-leaf fabrics typically follow confirmed factory allocation schedules with expedited priority lanes.",
    },
    {
      q: "What is included with your 24/7 Managed NOC & Support services?",
      a: "Our 24/7 service includes real-time telemetry, proactive link degradation alerts, automated firmware vulnerability scanning, sub-15 minute critical incident response, and local spare parts dispatch.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Solutions Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto space-y-4">
          <Badge variant="default" className="text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold">
            Enterprise Solutions Catalog
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-heading tracking-tight">
            High-Performance Networking, AI & Managed IT
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Engineered for enterprise scale, zero downtime, and strict data sovereignty. Explore our solutions portfolio or use our interactive architecture scope builder below.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Button
              onClick={() => openQuoteFor("networking")}
              variant="brand"
              className="font-bold px-7 shadow-md"
            >
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Request Solution RFQ
            </Button>
            <a href="#calculator">
              <Button variant="outline" className="border-slate-300 text-slate-800 font-bold hover:bg-slate-50">
                <SlidersHorizontal className="mr-2 h-4 w-4 text-sky-600" />
                Architecture Scope Builder
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-20 z-30 bg-white/95 border-b border-slate-200 backdrop-blur-md py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-[#0b1a3d] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Solutions ({solutionsList.length})
            </button>
            <button
              onClick={() => setSelectedCategory("networking")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === "networking"
                  ? "bg-[#0b1a3d] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Network className="h-3.5 w-3.5" />
              Networking (3)
            </button>
            <button
              onClick={() => setSelectedCategory("ai")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === "ai"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Cpu className="h-3.5 w-3.5" />
              AI Services (3)
            </button>
            <button
              onClick={() => setSelectedCategory("managed-it")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                selectedCategory === "managed-it"
                  ? "bg-sky-700 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Server className="h-3.5 w-3.5" />
              Managed IT (3)
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by tech, switch, GPU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
            />
          </div>
        </div>
      </section>

      {/* Solutions Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredSolutions.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((sol) => (
                <div
                  key={sol.id}
                  id={sol.id}
                  className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xl transition-all shadow-xs group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="default"
                        className={`text-[10px] uppercase font-bold ${
                          sol.category === "networking"
                            ? "bg-sky-50 text-sky-700 border-sky-200"
                            : sol.category === "ai"
                            ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                            : "bg-slate-100 text-slate-800 border-slate-200"
                        }`}
                      >
                        {sol.categoryLabel}
                      </Badge>
                      <span className="text-[11px] text-slate-500 font-mono font-medium">
                        {sol.deploymentTime}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-sky-700 transition-colors">
                        {sol.title}
                      </h3>
                      <div className="text-xs font-semibold text-sky-700 mt-1">
                        {sol.headline}
                      </div>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {sol.description}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-800 font-heading">
                        Technical Highlights:
                      </div>
                      {sol.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-6 border-t border-slate-100 mt-6 space-y-4">
                    <div className="text-[11px] text-slate-500">
                      <span className="text-slate-800 font-bold block uppercase text-[10px]">OEM Stack:</span>
                      <span className="font-mono text-slate-700 font-medium">{sol.supportedTech}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                      <span className="font-medium">Guaranteed SLA:</span>
                      <strong className="text-emerald-700 font-bold">{sol.sla}</strong>
                    </div>

                    <Button
                      onClick={() => openQuoteFor(sol.category)}
                      className="w-full bg-[#0b1a3d] hover:bg-sky-700 text-white text-xs font-bold transition-all py-2.5"
                    >
                      Request Quote for this Solution
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200">
              <Search className="h-10 w-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 font-heading">No solutions matched your search</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching with different keywords like &quot;SD-WAN&quot;, &quot;H100&quot;, &quot;NOC&quot;, or &quot;Wi-Fi&quot;.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                }}
                className="mt-4 border-slate-300 text-slate-700 font-bold"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Scope & RFQ Builder Calculator */}
      <section className="py-20 bg-slate-50 border-y border-slate-200" id="calculator">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="default" className="text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold mb-2">
              Interactive Scope Builder
            </Badge>
            <h2 className="text-3xl font-extrabold text-slate-950 font-heading">
              Project Scope & Architecture Estimator
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Configure your requirements to view a recommended architecture blueprint and instant deployment parameters.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Step 1: Domain */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-heading">
                  1. Focus Domain
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setCalcDomain("networking")}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      calcDomain === "networking"
                        ? "bg-sky-50 border-sky-500 text-sky-900 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Enterprise Networking
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcDomain("ai")}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      calcDomain === "ai"
                        ? "bg-indigo-50 border-indigo-500 text-indigo-900 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Private AI & GPU Compute
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcDomain("managed-it")}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      calcDomain === "managed-it"
                        ? "bg-sky-50 border-sky-500 text-sky-900 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Managed IT & Storage
                  </button>
                </div>
              </div>

              {/* Step 2: Scale */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-heading">
                  2. Deployment Scale
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setCalcScale("sme")}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      calcScale === "sme"
                        ? "bg-sky-50 border-sky-500 text-sky-900 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Single Facility / SME
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcScale("enterprise")}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      calcScale === "enterprise"
                        ? "bg-sky-50 border-sky-500 text-sky-900 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Multi-Branch Enterprise
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcScale("datacenter")}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      calcScale === "datacenter"
                        ? "bg-sky-50 border-sky-500 text-sky-900 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    High-Density Data Center
                  </button>
                </div>
              </div>

              {/* Step 3: SLA */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 font-heading">
                  3. Service & SLA Tier
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setCalcSla("critical")}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      calcSla === "critical"
                        ? "bg-sky-50 border-sky-500 text-sky-900 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Tier-IV Mission-Critical (24/7)
                  </button>
                  <button
                    type="button"
                    onClick={() => setCalcSla("standard")}
                    className={`w-full p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      calcSla === "standard"
                        ? "bg-sky-50 border-sky-500 text-sky-900 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    Standard Business Hours SLA
                  </button>
                </div>
              </div>
            </div>

            {/* Live Recommendation Output Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="text-xs font-bold text-sky-700 uppercase tracking-wider flex items-center gap-2 font-heading">
                  <Sparkles className="h-4 w-4" />
                  Recommended Architecture Blueprint
                </div>
                <Badge variant="emerald" className="text-[11px] font-bold">
                  {calcSla === "critical" ? "99.999% SLA Target" : "99.9% Standard SLA"}
                </Badge>
              </div>

              <div className="text-base font-bold text-slate-950 font-heading">
                {getArchitectureBlueprint()}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 pt-2 font-medium">
                <div>
                  <span className="text-slate-400 block font-normal">Staging Lab Burn-in:</span>
                  <strong className="text-slate-900">3-5 Business Days</strong>
                </div>
                <div>
                  <span className="text-slate-400 block font-normal">Warranty Standard:</span>
                  <strong className="text-sky-700">Direct OEM Replacement</strong>
                </div>
                <div>
                  <span className="text-slate-400 block font-normal">Lead Architect Desk:</span>
                  <strong className="text-slate-900">Riyadh Solutions HQ</strong>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                <span className="text-xs text-slate-600 font-medium">
                  Ready to turn this scope into an official quotation?
                </span>
                <Button
                  onClick={() => openQuoteFor(calcDomain)}
                  variant="brand"
                  className="font-bold px-6 text-xs shadow-md"
                >
                  Request Official BOQ for this Scope
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="default" className="text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold mb-2">
              Procurement & Engineering FAQs
            </Badge>
            <h2 className="text-3xl font-extrabold text-slate-950 font-heading">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Key questions about our authorized supply chain, warranties, and deployment standards.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-slate-900 hover:text-sky-700 transition-colors font-heading cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-sky-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global RFQ Modal Component */}
      <RFQModal
        open={rfqOpen}
        onOpenChange={setRfqOpen}
        initialCategory={modalInitialCategory}
      />
    </div>
  )
}
