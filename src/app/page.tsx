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
  SlidersHorizontal,
  ChevronRight,
  Sparkles,
  Layers,
  Lock,
  Globe2,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PartnersBanner } from "@/components/partners-banner"
import { StatsCounter } from "@/components/stats-counter"
import { RFQModal } from "@/components/rfq-modal"

type ServiceMode = "ecosystem" | "networking" | "ai" | "managed-it"

export default function HomePage() {
  const [rfqOpen, setRfqOpen] = React.useState(false)
  const [serviceMode, setServiceMode] = React.useState<ServiceMode>("ecosystem")
  const [modalCategory, setModalCategory] = React.useState<string>("networking")

  const serviceVisualData = {
    ecosystem: {
      title: "Unified Enterprise Ecosystem",
      tagline: "400G Backbone • Sovereign AI Clusters • 24/7 NOC Supervision",
      image: "/hero-graphic.jpg",
      status: "Integrated Fabric Active • Tier-IV Architecture",
      statusColor: "text-sky-700 bg-sky-50 border-sky-200",
      description: "A cohesive, non-blocking digital foundation combining ultra-low-latency fiber switching, liquid-cooled private AI inference nodes, and automated 24/7 telemetry.",
      metric1: { label: "Network Bandwidth", value: "Up to 51.2 Tbps" },
      metric2: { label: "AI Acceleration", value: "8x H100 TensorRT" },
      metric3: { label: "Incident SLA", value: "< 15 Min Guaranteed" },
      highlight: "Unified Enterprise Topology",
    },
    networking: {
      title: "High-Speed Enterprise Networking",
      tagline: "Multi-Gigabit SD-WAN, Wi-Fi 7 Enterprise & 400G CLOS Fabric",
      image: "/service-networking.jpg",
      status: "Zero Jitter • 0.00% Packet Loss",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      description: "Mission-critical network backbones engineered with Cisco Catalyst and Arista 400G switching, featuring sub-second brownout failover and multi-floor Wi-Fi 7 roaming.",
      metric1: { label: "Optical Latency", value: "< 0.8ms" },
      metric2: { label: "Wi-Fi 7 Bandwidth", value: "320 MHz MLO" },
      metric3: { label: "Uptime Target", value: "99.999% SLA" },
      highlight: "Cisco & Arista 400G Core",
    },
    ai: {
      title: "Sovereign AI Compute & GPU Rigs",
      tagline: "Turnkey NVIDIA HGX Superclusters & Private Local LLM Inference",
      image: "/service-ai.jpg",
      status: "Confidential Enclave • Zero External Data Leak",
      statusColor: "text-indigo-700 bg-indigo-50 border-indigo-200",
      description: "High-density GPU supercomputers with Quantum-2 InfiniBand networking and private vector stores, enabling local LLM fine-tuning without public cloud exposure.",
      metric1: { label: "Inference Speed", value: "6.8x Accelerated" },
      metric2: { label: "Compute Density", value: "NVIDIA HGX Nodes" },
      metric3: { label: "Data Residency", value: "100% On-Premise" },
      highlight: "Liquid-Cooled GPU Fabric",
    },
    "managed-it": {
      title: "Managed IT & 24/7 Operations",
      tagline: "Round-the-Clock Tier-3 NOC/SOC, All-Flash SAN & Zero SLA Breaches",
      image: "/service-managed.jpg",
      status: "24/7 NOC Active in Riyadh • Direct OEM Spares",
      statusColor: "text-amber-700 bg-amber-50 border-amber-200",
      description: "End-to-end infrastructure lifecycle care: all-NVMe immutable storage arrays, air-gapped ransomware protection, and certified field engineers on 15-minute standby.",
      metric1: { label: "Incident Response", value: "< 15 Minutes" },
      metric2: { label: "Storage IOPS", value: "Sub-millisecond" },
      metric3: { label: "Compliance", value: "ISO 27001 / SOC 2" },
      highlight: "Active Defense & SAN Array",
    },
  }

  const currentVisual = serviceVisualData[serviceMode]

  const openQuoteFor = (cat: string) => {
    setModalCategory(cat)
    setRfqOpen(true)
  }

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
      {/* ATTRACTIVE GRAPHIC-RICH HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 border-b border-slate-200">
        
        {/* Soft Ambient Glows behind graphics */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-sky-200/30 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[300px] bg-indigo-200/25 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Partner Badge with Live Dot */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sky-700 font-bold uppercase tracking-wider text-[11px]">Direct OEM Partner</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600">Cisco • NVIDIA • Dell • Fortinet</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-heading leading-[1.1]">
                High-Speed <span className="text-gradient-brand">Networks</span> & Sovereign <span className="text-gradient-cyan">Enterprise AI</span>
              </h1>

              {/* Subheadline & Motto */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Yasabe Technologies architects mission-critical digital infrastructure for enterprises, government entities, and high-growth organizations. Certified Tier-1 hardware supply, zero-downtime fabrics, and guaranteed SLA performance.
              </p>

              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-400 font-heading">
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
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4 text-sky-600" />
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators Strip */}
              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-lg">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-base sm:text-lg font-black text-slate-900 font-heading">99.999%</div>
                  <div className="text-[10px] text-slate-500 font-medium">Uptime Guarantee</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-base sm:text-lg font-black text-sky-700 font-heading">550+</div>
                  <div className="text-[10px] text-slate-500 font-medium">Deployments</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-base sm:text-lg font-black text-emerald-700 font-heading">&lt; 15m</div>
                  <div className="text-[10px] text-slate-500 font-medium">Critical SLA</div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Graphic Showcase & Interactive Switcher */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Graphic Stage Container */}
              <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-2xl p-3 sm:p-4 overflow-hidden group">
                
                {/* Visual Top Bar */}
                <div className="flex items-center justify-between px-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-bold text-slate-700 ml-1.5">
                      {currentVisual.highlight}
                    </span>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${currentVisual.statusColor}`}>
                    {currentVisual.status}
                  </span>
                </div>

                {/* High-Impact 3D Centerpiece Graphic */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 mt-3 group">
                  <Image
                    src={currentVisual.image}
                    alt={currentVisual.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Floating Holographic Badge 1 */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-slate-200/80 flex items-center gap-2.5 text-left">
                    <div className="h-8 w-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold shrink-0">
                      <Activity className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 font-mono">Live Telemetry</div>
                      <div className="text-xs font-extrabold text-slate-900 font-heading">
                        {currentVisual.metric1.value}
                      </div>
                    </div>
                  </div>

                  {/* Floating Holographic Badge 2 */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-md border border-slate-200/80 flex items-center gap-2.5 text-left">
                    <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 font-mono">Verified Standard</div>
                      <div className="text-xs font-extrabold text-slate-900 font-heading">
                        {currentVisual.metric3.value}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Mode Switcher Buttons */}
                <div className="grid grid-cols-4 gap-1.5 pt-3">
                  <button
                    onClick={() => setServiceMode("ecosystem")}
                    className={`p-2 rounded-xl text-center transition-all cursor-pointer ${
                      serviceMode === "ecosystem"
                        ? "bg-[#0b1a3d] text-white shadow-xs"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/70"
                    }`}
                  >
                    <div className="text-[11px] font-bold">Full Stack</div>
                    <div className="text-[9px] opacity-75">Integrated</div>
                  </button>

                  <button
                    onClick={() => setServiceMode("networking")}
                    className={`p-2 rounded-xl text-center transition-all cursor-pointer ${
                      serviceMode === "networking"
                        ? "bg-sky-600 text-white shadow-xs"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/70"
                    }`}
                  >
                    <div className="text-[11px] font-bold">Networking</div>
                    <div className="text-[9px] opacity-75">400G & Wi-Fi 7</div>
                  </button>

                  <button
                    onClick={() => setServiceMode("ai")}
                    className={`p-2 rounded-xl text-center transition-all cursor-pointer ${
                      serviceMode === "ai"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/70"
                    }`}
                  >
                    <div className="text-[11px] font-bold">AI Compute</div>
                    <div className="text-[9px] opacity-75">HGX Clusters</div>
                  </button>

                  <button
                    onClick={() => setServiceMode("managed-it")}
                    className={`p-2 rounded-xl text-center transition-all cursor-pointer ${
                      serviceMode === "managed-it"
                        ? "bg-slate-900 text-white shadow-xs"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/70"
                    }`}
                  >
                    <div className="text-[11px] font-bold">Managed IT</div>
                    <div className="text-[9px] opacity-75">24/7 NOC/SOC</div>
                  </button>
                </div>

                {/* Subtext description & quick action */}
                <div className="p-2 text-left flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate pr-2 font-medium">{currentVisual.tagline}</span>
                  <button
                    onClick={() => openQuoteFor(serviceMode === "ecosystem" ? "networking" : serviceMode)}
                    className="text-sky-700 hover:text-sky-800 font-bold shrink-0 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Instant RFQ</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Authorized Partners & OEM Channels */}
      <PartnersBanner />

      {/* ========================================================================= */}
      {/* 3 PILLARS WITH BESPOKE 3D HARDWARE GRAPHICS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge variant="default" className="mb-3 text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold">
              Engineering Excellence
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight">
              Three Pillars of Resilient Technology Delivery
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              We eliminate technical fragmentation by unifying high-throughput network fabrics, sovereign AI hardware rigs, and continuous managed support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Networking Pillar Card with 3D Graphic */}
            <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-sky-300 hover:shadow-2xl transition-all shadow-xs flex flex-col justify-between group">
              <div>
                <div className="relative aspect-video w-full bg-slate-50 overflow-hidden border-b border-slate-100">
                  <Image 
                    src="/service-networking.jpg" 
                    alt="Enterprise Networking Hardware" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="default" className="bg-white/95 text-sky-700 border-slate-200 font-bold text-[10px] shadow-xs">
                      Wi-Fi 7 & 400G Fabric
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-xs font-bold text-sky-700 uppercase tracking-wider font-heading">
                      Ultra-Low Latency & High Bandwidth
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-sky-700 transition-colors mt-0.5">
                      Enterprise Networking
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      Software-Defined WAN (SD-WAN), multi-gigabit campus switching, 400G spine-leaf data center fabrics, and high-density Wi-Fi 7 wireless rollouts.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {[
                      "Cisco SD-WAN with dynamic multi-cloud routing",
                      "Enterprise Wi-Fi 7 campus deployment with MLO",
                      "400G/800G Data Center Spine-Leaf optical fabrics",
                      "Zero-Trust Network Access (ZTNA) segmentation",
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="text-[11px] text-slate-500 font-mono">
                  Stack: <span className="text-slate-800 font-semibold">Cisco • Arista • HPE Aruba</span>
                </div>
                <Link href="/solutions#networking" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-between border-slate-300 hover:border-slate-400 font-semibold text-slate-800">
                    <span>Explore Networking Solutions</span>
                    <ArrowRight className="h-4 w-4 text-sky-600" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* AI Pillar Card with 3D Graphic */}
            <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-indigo-300 hover:shadow-2xl transition-all shadow-xs flex flex-col justify-between group">
              <div>
                <div className="relative aspect-video w-full bg-slate-50 overflow-hidden border-b border-slate-100">
                  <Image 
                    src="/service-ai.jpg" 
                    alt="AI GPU Supercomputer Node" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="purple" className="bg-white/95 text-indigo-700 border-slate-200 font-bold text-[10px] shadow-xs">
                      NVIDIA HGX Clusters
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider font-heading">
                      Sovereign AI & Autonomous Systems
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-indigo-700 transition-colors mt-0.5">
                      AI Compute & Infrastructure
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      End-to-end hardware provisioning and software orchestration for private on-premise LLMs, NVIDIA GPU clusters, and enterprise vector search.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {[
                      "NVIDIA HGX H100 / B200 superclusters & liquid cooling",
                      "Private LLM fine-tuning & TensorRT-LLM inference",
                      "Enterprise RAG vector pipelines with confidential RBAC",
                      "AIOps continuous predictive infrastructure monitoring",
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="text-[11px] text-slate-500 font-mono">
                  Stack: <span className="text-slate-800 font-semibold">NVIDIA • TensorRT • Dell XE9680</span>
                </div>
                <Link href="/solutions#ai" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-between border-slate-300 hover:border-slate-400 font-semibold text-slate-800">
                    <span>Explore AI Solutions</span>
                    <ArrowRight className="h-4 w-4 text-indigo-600" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Managed IT Pillar Card with 3D Graphic */}
            <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-sky-300 hover:shadow-2xl transition-all shadow-xs flex flex-col justify-between group">
              <div>
                <div className="relative aspect-video w-full bg-slate-50 overflow-hidden border-b border-slate-100">
                  <Image 
                    src="/service-managed.jpg" 
                    alt="Managed IT & Storage Operations" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/95 text-slate-800 border-slate-200 font-bold text-[10px] shadow-xs">
                      24/7 SOC & SAN Storage
                    </Badge>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider font-heading">
                      24/7 Operations & Zero SLA Breaches
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 font-heading group-hover:text-sky-700 transition-colors mt-0.5">
                      Managed IT & Storage
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      Round-the-clock Tier-3 NOC/SOC operations, petabyte-scale all-flash SAN storage, hyperconverged virtualization, and rapid hardware fulfillment.
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {[
                      "24/7/365 Dedicated Tier-3 NOC & SOC desk in Riyadh",
                      "All-NVMe SAN/NAS storage arrays with immutable backups",
                      "Hyperconverged infrastructure (VMware, Nutanix AHV)",
                      "Direct BOQ tender procurement and guaranteed OEM warranties",
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="text-[11px] text-slate-500 font-mono">
                  Stack: <span className="text-slate-800 font-semibold">Dell PowerStore • Fortinet • NetApp</span>
                </div>
                <Link href="/solutions#managed-it" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-between border-slate-300 hover:border-slate-400 font-semibold text-slate-800">
                    <span>Explore Managed IT</span>
                    <ArrowRight className="h-4 w-4 text-slate-800" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Enterprise Metrics & SLAs */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200">
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
                  Need a custom infrastructure architecture design?
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
