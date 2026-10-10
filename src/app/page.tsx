"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Network, 
  Cpu, 
  Server, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  FileSpreadsheet, 
  Zap, 
  Award, 
  ArrowUpRight, 
  Activity, 
  Check, 
  Sparkles,
  Layers,
  Lock,
  Globe2,
  Clock,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PartnersBanner } from "@/components/partners-banner"
import { StatsCounter } from "@/components/stats-counter"
import { RFQModal } from "@/components/rfq-modal"
import { Hero3DScene } from "@/components/hero-3d-scene"

export default function HomePage() {
  const [rfqOpen, setRfqOpen] = React.useState(false)
  const [modalCategory, setModalCategory] = React.useState<string>("networking")
  const [activeTab, setActiveTab] = React.useState<"all" | "networking" | "ai" | "managed-it">("all")

  const openQuoteFor = (cat: string) => {
    setModalCategory(cat)
    setRfqOpen(true)
  }

  const heroServiceCards = [
    {
      id: "networking",
      title: "Enterprise Networking",
      badge: "400G SD-WAN & Wi-Fi 7",
      image: "/service-networking.jpg",
      headline: "High-Throughput Campus & Data Center Fabrics",
      specs: [
        "Sub-microsecond latency optical interconnects",
        "Wi-Fi 7 enterprise multi-link operation (MLO)",
        "Zero-Trust network access & segmentation",
      ],
      oem: "Cisco • Arista • HPE Aruba",
      cta: "Request Network Quote",
      color: "from-sky-500 to-blue-600",
      accent: "text-sky-700 bg-sky-50 border-sky-200",
    },
    {
      id: "ai",
      title: "Sovereign AI Infrastructure",
      badge: "NVIDIA HGX Clusters",
      image: "/service-ai.jpg",
      headline: "Private On-Premise GPU Supercomputing",
      specs: [
        "Turnkey NVIDIA HGX H100 / B200 liquid-cooled rigs",
        "Confidential on-premise local LLM fine-tuning",
        "Strict national data sovereignty & zero leaks",
      ],
      oem: "NVIDIA • Dell XE9680 • TensorRT",
      cta: "Request AI Cluster Quote",
      color: "from-indigo-600 to-purple-600",
      accent: "text-indigo-700 bg-indigo-50 border-indigo-200",
    },
    {
      id: "managed-it",
      title: "Managed IT & 24/7 Operations",
      badge: "Tier-3 NOC & SOC Desk",
      image: "/service-managed.jpg",
      headline: "Round-the-Clock Support & All-Flash SAN",
      specs: [
        "< 15 Min guaranteed critical incident response",
        "All-NVMe SAN storage with immutable backups",
        "Certified field engineers on 24/7 standby",
      ],
      oem: "Dell PowerStore • Fortinet • NetApp",
      cta: "Request Managed IT SLA",
      color: "from-slate-800 to-[#0b1a3d]",
      accent: "text-amber-800 bg-amber-50 border-amber-200",
    },
  ]

  const caseStudies = [
    {
      client: "Tier-1 Regional Financial Group",
      category: "Networking & Security",
      title: "400G Low-Latency Core Fabric & Dual-Datacenter SD-WAN Overhaul",
      metric: "99.999% Uptime",
      detail: "Deployed 120+ switches and redundant optical interconnects with sub-microsecond latency, serving 4M+ daily financial transactions without packet loss.",
    },
    {
      client: "Sovereign Healthcare Organization",
      category: "Private AI Infrastructure",
      title: "On-Premise Medical LLM Cluster with Sovereign Data Governance",
      metric: "6.8x Faster Inference",
      detail: "Engineered high-density 8x H100 GPU server nodes, local vector storage, and confidential computing enclaves adhering strictly to local patient data sovereignty laws.",
    },
    {
      client: "National Logistics Conglomerate",
      category: "Managed IT Services",
      title: "Consolidated Hybrid Cloud Infrastructure & 24/7 NOC Monitoring",
      metric: "45% OPEX Reduction",
      detail: "Replaced aging legacy server racks with automated HCI clusters and outsourced real-time telemetry to Yasabe Technologies' 24/7 dedicated engineering squad.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ========================================================================= */}
      {/* DYNAMIC 3D HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60 border-b border-slate-200">
        
        {/* Subtle Ambient Glowing Gradients */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[450px] bg-sky-200/35 blur-[150px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-indigo-200/30 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Headlines & High-Trust Narrative */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Live OEM Channel Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sky-700 font-bold uppercase tracking-wider text-[11px]">Direct OEM Partner</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600">Cisco • NVIDIA • Dell • Fortinet</span>
              </div>

              {/* Grand Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-heading leading-[1.08]">
                Enterprise <span className="text-gradient-brand">Networking</span> & Sovereign <span className="text-gradient-cyan">Private AI</span>
              </h1>

              {/* Subheadline & Slogan */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Yasabe Technologies delivers mission-critical network fabrics, turn-key private AI compute, and 24/7 managed IT services backed by guaranteed 99.999% SLA.
              </p>

              <div className="flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-slate-400 font-heading">
                <span>CONNECT</span>
                <span className="text-sky-500 font-black">/</span>
                <span>SECURE</span>
                <span className="text-indigo-500 font-black">/</span>
                <span>EMPOWER</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Button
                  onClick={() => openQuoteFor("networking")}
                  size="lg"
                  variant="brand"
                  className="font-bold px-7 shadow-lg shadow-indigo-500/20 text-sm"
                >
                  <FileSpreadsheet className="mr-2 h-4 w-4" />
                  Request RFQ / BOQ Quote
                </Button>
                <Link href="/solutions">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 hover:bg-slate-50 text-slate-800 font-bold px-6 text-sm"
                  >
                    Explore All Solutions
                    <ArrowRight className="ml-2 h-4 w-4 text-sky-600" />
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-lg">
                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-base sm:text-lg font-black text-slate-950 font-heading">99.999%</div>
                  <div className="text-[10px] text-slate-500 font-medium">Uptime Guarantee</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-base sm:text-lg font-black text-sky-700 font-heading">550+</div>
                  <div className="text-[10px] text-slate-500 font-medium">Enterprise Nodes</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-base sm:text-lg font-black text-emerald-700 font-heading">&lt; 15m</div>
                  <div className="text-[10px] text-slate-500 font-medium">Critical SLA</div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive 3D Holographic Core & Telemetry Stage */}
            <div className="lg:col-span-6 relative">
              
              {/* Main 3D Card Display */}
              <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-2xl p-4 sm:p-6 overflow-hidden">
                
                {/* 3D Stage Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-bold text-slate-700 ml-1.5">
                      3D AI & Network Infrastructure Core
                    </span>
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full border text-emerald-700 bg-emerald-50 border-emerald-200">
                    Live Telemetry
                  </span>
                </div>

                {/* Layered 3D Visual Centerpiece */}
                <div className="relative w-full aspect-square max-h-[440px] rounded-2xl overflow-hidden bg-slate-50/50 flex items-center justify-center mt-3">
                  
                  {/* Real Three.js WebGL Interactive Particle Constellation */}
                  <div className="absolute inset-0 z-10 opacity-70">
                    <Hero3DScene />
                  </div>

                  {/* 3D Crystalline Sphere Graphic */}
                  <div className="relative z-20 w-64 h-64 sm:w-80 sm:h-80 transition-transform duration-700 hover:scale-105 pointer-events-none drop-shadow-2xl">
                    <Image
                      src="/hero-3d-sphere.jpg"
                      alt="3D Holographic AI & Network Core"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>

                  {/* Floating Holographic Badge 1 */}
                  <div className="absolute top-4 left-4 z-30 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-200/90 flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold shrink-0">
                      <Activity className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold text-slate-400 font-mono">400G Optical Fabric</div>
                      <div className="text-xs font-black text-slate-900 font-heading">
                        &lt; 0.8ms Latency • 0% Loss
                      </div>
                    </div>
                  </div>

                  {/* Floating Holographic Badge 2 */}
                  <div className="absolute bottom-4 right-4 z-30 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-200/90 flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold shrink-0">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold text-slate-400 font-mono">Sovereign AI Node</div>
                      <div className="text-xs font-black text-slate-900 font-heading">
                        NVIDIA HGX H100 Active
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-bar with Live Action */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    Drag with mouse to inspect 3D constellation
                  </span>
                  <button
                    onClick={() => openQuoteFor("networking")}
                    className="text-sky-700 hover:text-sky-800 font-bold inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Technical Review</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* ========================================================================= */}
          {/* 3D SERVICE SHOWCASE CARDS (Right inside Hero to immediately attract clients) */}
          {/* ========================================================================= */}
          <div className="mt-14 pt-10 border-t border-slate-200/80">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <Badge variant="default" className="text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold mb-1.5">
                  Our Core Capabilities
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                  Engineered to Power High-Growth Organizations
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                Direct authorized vendor fulfillment, precision factory burn-in testing, and continuous SLA monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {heroServiceCards.map((card) => (
                <div
                  key={card.id}
                  className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* 3D Hardware Graphic Showcase */}
                    <div className="relative aspect-[4/3] w-full bg-slate-50 overflow-hidden border-b border-slate-100">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-xs ${card.accent}`}>
                          {card.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-sky-700 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-xs font-semibold text-slate-500 mt-1">
                          {card.headline}
                        </p>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        {card.specs.map((spec, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0 space-y-3">
                    <div className="text-[11px] text-slate-500 font-mono">
                      Stack: <span className="text-slate-800 font-semibold">{card.oem}</span>
                    </div>
                    <Button
                      onClick={() => openQuoteFor(card.id)}
                      className="w-full bg-[#0b1a3d] hover:bg-[#152a5a] text-white font-bold text-xs py-2.5 shadow-sm"
                    >
                      <FileSpreadsheet className="mr-1.5 h-3.5 w-3.5" />
                      {card.cta}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ========================================================================= */}

        </div>
      </section>

      {/* Authorized Partners & OEM Channels */}
      <PartnersBanner />

      {/* Enterprise Metrics & SLAs */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-950 font-heading">Engineered for Enterprise SLA Rigor</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Guaranteed service levels backed by our 24/7 incident coordination team.
            </p>
          </div>
          <StatsCounter />
        </div>
      </section>

      {/* The Yasabe Technologies Advantage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <Badge variant="default" className="text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold">
                The Yasabe Advantage
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
                Solving the Hardest Challenges in Enterprise Technology Delivery
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether deploying 1,000 enterprise access points or assembling high-density AI inference racks, procurement delays and misconfigured hardware cost millions. Yasabe Technologies streamlines the entire lifecycle:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="p-2 rounded-lg bg-sky-100 text-sky-700 shrink-0">
                    <FileSpreadsheet className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">BOQ Validation & Architecture Review</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Our certified CCIE and AI architects audit your Bill of Quantities before ordering, ensuring compatibility, optics matching, and zero configuration mismatches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">Direct OEM Channels & Serialized Warranties</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Zero grey-market hardware. 100% genuine products with manufacturer service agreements (Cisco SMARTnet, Dell ProSupport Plus, FortiCare).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                  <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700 shrink-0">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">Pre-Staged & Burn-In Tested in Regional Lab</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Hardware arrives at your facility pre-configured, firmware-patched, and factory burn-in tested, eliminating site deployment friction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Operational Terminal / Telemetry Card */}
            <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 sm:p-7 shadow-xl text-white space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">yasabe-orchestration-engine</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                  Operational 24/7
                </span>
              </div>

              <div className="font-mono text-xs space-y-2 text-slate-300">
                <div className="text-slate-500">// Real-time Infrastructure Provisioning Feed</div>
                <div className="flex items-center gap-2 text-sky-400">
                  <span className="text-slate-600">&gt;</span>
                  <span>INIT: Enterprise Fabric Rollout (Campus 01)</span>
                </div>
                <div className="pl-4 text-slate-400 text-[11px] space-y-1">
                  <div>[OK] Cisco Catalyst 9300 Core Ring: In-Service</div>
                  <div>[OK] SD-WAN Uplinks: Dual Active-Active 10Gbps</div>
                  <div>[OK] Wi-Fi 7 APs: 48 units synced via WLC</div>
                  <div>[OK] Private AI Node: 8x H100 TensorRT running</div>
                  <div className="text-emerald-400 font-bold">[VERIFIED] 0 Packet Drops across 400G spine fabric</div>
                </div>

                <div className="pt-2 text-slate-500">// Security & Compliance Validation</div>
                <div className="flex items-center gap-2 text-indigo-400">
                  <span className="text-slate-600">&gt;</span>
                  <span>SEC_AUDIT: ISO 27001 & NIST 800-53 Check</span>
                </div>
                <div className="pl-4 text-slate-400 text-[11px]">
                  <div>[STATUS] 0 Critical Vulnerabilities • Encryption: TLS 1.3 / MACsec</div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="text-[11px] text-slate-400">
                  Need custom infrastructure architecture design?
                </div>
                <Button
                  size="sm"
                  variant="sky"
                  onClick={() => openQuoteFor("networking")}
                  className="font-bold text-xs"
                >
                  Consult Senior Architect
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Badge variant="default" className="text-xs bg-sky-50 text-sky-700 border-sky-200 mb-2 font-bold">
                Proven Track Record
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-950 font-heading">Enterprise Case Highlights</h2>
              <p className="text-slate-600 text-sm mt-1">
                Real results delivered across key sectors in Saudi Arabia and the GCC.
              </p>
            </div>
            <Link href="/solutions">
              <Button variant="ghost" className="text-sky-700 hover:text-sky-800 font-bold">
                View All Deployments <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase text-sky-700 font-heading">
                      {cs.category}
                    </span>
                    <Badge variant="emerald" className="text-[11px] font-bold">
                      {cs.metric}
                    </Badge>
                  </div>
                  <h3 className="text-base font-bold text-slate-950 font-heading leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cs.detail}
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-4 text-[11px] text-slate-500">
                  Client: <strong className="text-slate-900">{cs.client}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct RFQ Call to Action Banner */}
      <section className="py-20 relative bg-[#0b1a3d] text-white border-t border-slate-200 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Badge variant="default" className="text-xs bg-white/10 text-white border-white/20 font-bold">
            Guaranteed Fast Turnaround
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
            Ready to Upgrade Your Network, AI & IT Infrastructure?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Send us your Bill of Quantities (BOQ), tender specifications, or architecture goals. Our senior solutions architects will return a verified proposal and authorized pricing within hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => openQuoteFor("networking")}
              size="lg"
              className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold px-8 shadow-xl text-base"
            >
              <FileSpreadsheet className="mr-2 h-5 w-5" />
              Submit BOQ for Quick Quotation
            </Button>
            <Link href="/about" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold"
              >
                Learn About Our Standards
              </Button>
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              100% Genuine Hardware Warranties
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              Direct Vendor Escalation
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              24/7 Managed NOC Availability
            </span>
          </div>
        </div>
      </section>

      {/* Global RFQ Modal Component */}
      <RFQModal
        open={rfqOpen}
        onOpenChange={setRfqOpen}
        initialCategory={modalCategory}
      />
    </div>
  )
}
