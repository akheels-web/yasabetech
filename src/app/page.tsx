"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Award,
  CheckCircle2,
  Cpu,
  FileSpreadsheet,
  ShieldCheck,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PartnersBanner } from "@/components/partners-banner"
import { StatsCounter } from "@/components/stats-counter"
import { RFQModal } from "@/components/rfq-modal"
import { Hero3DScene } from "@/components/hero-3d-scene"

const heroServiceCards = [
  {
    id: "networking",
    title: "Enterprise Networking",
    badge: "400G SD-WAN & Wi-Fi 7",
    image: "/service-networking.jpg",
    headline: "High-Throughput Campus & Data Center Fabrics",
    specs: [
      "Sub-microsecond optical interconnects",
      "Wi-Fi 7 multi-link operation (MLO)",
      "Zero-Trust segmentation",
    ],
    oem: "Cisco • Arista • HPE Aruba",
    accent: "text-sky-700 bg-sky-50 border-sky-200",
    cta: "Request Quote — Network",
  },
  {
    id: "ai",
    title: "Sovereign AI Infrastructure",
    badge: "NVIDIA HGX Clusters",
    image: "/service-ai.jpg",
    headline: "Private On-Premise GPU Supercomputing",
    specs: [
      "Turnkey HGX H100 / B200 liquid-cooled rigs",
      "Confidential on-premise LLM fine-tuning",
      "Strict national data sovereignty",
    ],
    oem: "NVIDIA • Dell XE9680 • TensorRT",
    accent: "text-indigo-700 bg-indigo-50 border-indigo-200",
    cta: "Request Quote — AI Cluster",
  },
  {
    id: "managed-it",
    title: "Managed IT & 24/7 Ops",
    badge: "Tier-3 NOC & SOC Desk",
    image: "/service-managed.jpg",
    headline: "Round-the-Clock Support & All-Flash SAN",
    specs: [
      "< 15 min critical incident response",
      "All-NVMe SAN with immutable backups",
      "Certified engineers on 24/7 standby",
    ],
    oem: "Dell PowerStore • Fortinet • NetApp",
    accent: "text-amber-800 bg-amber-50 border-amber-200",
    cta: "Request Quote — Managed IT SLA",
  },
]

const advantages = [
  {
    icon: FileSpreadsheet,
    title: "BOQ Validation & Architecture Review",
    desc: "Certified CCIE and AI architects audit your Bill of Quantities before ordering — compatibility, optics matching, zero configuration mismatches.",
  },
  {
    icon: Award,
    title: "Direct OEM Channels & Serialized Warranties",
    desc: "Zero grey-market hardware. 100% genuine with manufacturer service agreements (Cisco SMARTnet, Dell ProSupport Plus, FortiCare).",
  },
  {
    icon: Zap,
    title: "Pre-Staged & Burn-In Tested",
    desc: "Hardware arrives pre-configured, firmware-patched, and factory burn-in tested — eliminating site deployment friction.",
  },
]

const caseStudies = [
  {
    client: "Tier-1 Regional Financial Group",
    category: "Networking & Security",
    title: "400G Low-Latency Core Fabric & Dual-DC SD-WAN Overhaul",
    metric: "99.999% Uptime",
    detail:
      "120+ switches and redundant optical interconnects with sub-microsecond latency, serving 4M+ daily financial transactions without packet loss.",
  },
  {
    client: "Sovereign Healthcare Organization",
    category: "Private AI Infrastructure",
    title: "On-Premise Medical LLM Cluster with Sovereign Governance",
    metric: "6.8x Faster Inference",
    detail:
      "High-density 8x H100 GPU server nodes, local vector storage, and confidential computing enclaves adhering strictly to patient data sovereignty laws.",
  },
  {
    client: "National Logistics Conglomerate",
    category: "Managed IT Services",
    title: "Consolidated Hybrid Cloud Infrastructure & 24/7 NOC",
    metric: "45% OPEX Reduction",
    detail:
      "Replaced aging legacy server racks with automated HCI clusters and outsourced real-time telemetry to our 24/7 dedicated engineering squad.",
  },
]

export default function HomePage() {
  const [rfqOpen, setRfqOpen] = React.useState(false)
  const [modalCategory, setModalCategory] = React.useState<string>("networking")

  const openQuoteFor = (cat: string) => {
    setModalCategory(cat)
    setRfqOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* =============================================================== */}
      {/* HERO — light, modern, 3D                                         */}
      {/* =============================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50/50 border-b border-slate-200">
        {/* Backdrop: soft ambient glows */}
        <div className="absolute -top-32 left-1/4 w-[700px] h-[500px] rounded-full bg-sky-200/40 blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[560px] h-[420px] rounded-full bg-indigo-200/35 blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-[500px] h-[350px] rounded-full bg-cyan-100/50 blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 pb-24 md:pt-16 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left: narrative */}
            <div className="lg:col-span-6 space-y-7">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs anim-fade-up">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-sky-700">
                  Direct OEM Partner
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-[11px] text-slate-600 font-medium">
                  Cisco • NVIDIA • Dell • Fortinet
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight leading-[1.06] font-heading text-slate-950 anim-fade-up anim-delay-1">
                Enterprise{" "}
                <span className="text-gradient-brand">Networking</span> &amp;
                Sovereign{" "}
                <span className="text-gradient-cyan">Private AI</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl anim-fade-up anim-delay-2">
                Yasabe Technologies delivers mission-critical network fabrics,
                turn-key private AI compute, and 24/7 managed IT — backed by a
                guaranteed 99.999% SLA.
              </p>

              <div className="flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] uppercase text-slate-400 font-heading anim-fade-up anim-delay-2">
                <span className="text-sky-500">Connect</span>
                <span className="text-slate-300">/</span>
                <span>Secure</span>
                <span className="text-slate-300">/</span>
                <span className="text-indigo-500">Empower</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 anim-fade-up anim-delay-3">
                <Button
                  onClick={() => openQuoteFor("networking")}
                  size="lg"
                  variant="brand"
                  className="font-bold px-7 text-sm shadow-lg shadow-indigo-500/20"
                >
                  <FileSpreadsheet className="mr-2 h-4 w-4" />
                  Request RFQ / BOQ Quote
                </Button>
                <Link href="/solutions">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 font-bold px-6 text-sm"
                  >
                    Explore All Solutions
                    <ArrowRight className="ml-2 h-4 w-4 text-sky-600" />
                  </Button>
                </Link>
              </div>

              {/* Trust strip */}
              <div className="pt-5 grid grid-cols-3 gap-3 max-w-lg anim-fade-up anim-delay-4">
                {[
                  { v: "99.999%", l: "Uptime Guarantee", c: "text-slate-950" },
                  { v: "550+", l: "Enterprise Nodes", c: "text-sky-700" },
                  { v: "< 15m", l: "Critical SLA", c: "text-emerald-700" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs"
                  >
                    <div className={`text-base sm:text-lg font-black font-heading ${s.c}`}>
                      {s.v}
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D stage */}
            <div className="lg:col-span-6 relative anim-fade-up anim-delay-2">
              <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 p-4 sm:p-5 overflow-hidden">
                {/* Stage header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono font-bold text-slate-700 ml-1.5">
                      3D AI &amp; Network Infrastructure Core
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border text-emerald-700 bg-emerald-50 border-emerald-200">
                    Live Telemetry
                  </span>
                </div>

                {/* 3D canvas */}
                <div className="relative w-full aspect-square max-h-[430px] rounded-2xl overflow-hidden bg-slate-50/70 flex items-center justify-center mt-3">
                  <div className="absolute inset-0 z-10 opacity-70">
                    <Hero3DScene />
                  </div>

                  <div className="relative z-20 w-64 h-64 sm:w-80 sm:h-80 pointer-events-none drop-shadow-2xl">
                    <Image
                      src="/hero-3d-sphere.jpg"
                      alt="3D Holographic AI & Network Core"
                      fill
                      priority
                      sizes="(max-width: 768px) 256px, 320px"
                      className="object-contain"
                    />
                  </div>

                  {/* Floating badges */}
                  <div className="absolute top-4 left-4 z-30 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-200/90 flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-sky-50 text-sky-700 border border-sky-200/70 flex items-center justify-center shrink-0">
                      <Activity className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold text-slate-400 font-mono tracking-wider">
                        400G Optical Fabric
                      </div>
                      <div className="text-xs font-black text-slate-900 font-heading">
                        &lt; 0.8ms Latency • 0% Loss
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 z-30 bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-lg border border-slate-200/90 flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200/70 flex items-center justify-center shrink-0">
                      <Cpu className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[9px] uppercase font-bold text-slate-400 font-mono tracking-wider">
                        Sovereign AI Node
                      </div>
                      <div className="text-xs font-black text-slate-900 font-heading">
                        NVIDIA HGX H100 Active
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-bar */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    Move your mouse to inspect the 3D constellation
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

          {/* Service showcase cards */}
          <div className="mt-16 pt-12 border-t border-slate-200/80">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <Badge className="text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold mb-1.5">
                  Our Core Capabilities
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
                  Engineered to Power High-Growth Organizations
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                Direct authorized vendor fulfillment, precision factory burn-in
                testing, and continuous SLA monitoring.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {heroServiceCards.map((card) => (
                <div
                  key={card.id}
                  className="group relative rounded-3xl border border-slate-200 bg-white shadow-xs hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <div className="relative aspect-[4/3] w-full bg-slate-50 overflow-hidden border-b border-slate-100">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-xs backdrop-blur-sm ${card.accent}`}
                        >
                          {card.badge}
                        </span>
                      </div>
                    </div>

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
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs text-slate-700 font-medium"
                          >
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

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
        </div>
      </section>

      {/* Partners marquee/board */}
      <PartnersBanner />

      {/* Metrics */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-950 font-heading">
              Engineered for Enterprise SLA Rigor
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Guaranteed service levels backed by our 24/7 incident
              coordination team.
            </p>
          </div>
          <StatsCounter />
        </div>
      </section>

      {/* Advantage + ops terminal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold w-fit">
                The Yasabe Advantage
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
                Solving the Hardest Challenges in Enterprise Technology
                Delivery
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether deploying 1,000 enterprise access points or assembling
                high-density AI inference racks, procurement delays and
                misconfigured hardware cost millions. Yasabe Technologies
                streamlines the entire lifecycle:
              </p>

              <div className="space-y-4 pt-2">
                {advantages.map((adv) => {
                  const Icon = adv.icon
                  return (
                    <div
                      key={adv.title}
                      className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
                    >
                      <div className="p-2 rounded-xl bg-gradient-to-br from-sky-100 to-indigo-100 text-sky-700 border border-sky-200/60 shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 font-heading">
                          {adv.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                          {adv.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Ops terminal card (intentional terminal-style accent) */}
            <div className="rounded-3xl border border-slate-700/40 bg-slate-900 p-6 sm:p-7 shadow-2xl text-white space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-amber-500" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    yasabe-orchestration-engine
                  </span>
                </div>
                <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">
                  Operational 24/7
                </span>
              </div>

              <div className="font-mono text-xs space-y-2 text-slate-300">
                <div className="text-slate-500">{"// Real-time Infrastructure Provisioning Feed"}</div>
                <div className="flex items-center gap-2 text-sky-400">
                  <span className="text-slate-600">&gt;</span>
                  <span>INIT: Enterprise Fabric Rollout (Campus 01)</span>
                </div>
                <div className="pl-4 text-slate-400 text-[11px] space-y-1">
                  <div>[OK] Cisco Catalyst 9300 Core Ring: In-Service</div>
                  <div>[OK] SD-WAN Uplinks: Dual Active-Active 10Gbps</div>
                  <div>[OK] Wi-Fi 7 APs: 48 units synced via WLC</div>
                  <div>[OK] Private AI Node: 8x H100 TensorRT running</div>
                  <div className="text-emerald-400 font-bold">
                    [VERIFIED] 0 Packet Drops across 400G spine fabric
                  </div>
                </div>

                <div className="pt-2 text-slate-500">{"// Security & Compliance Validation"}</div>
                <div className="flex items-center gap-2 text-indigo-400">
                  <span className="text-slate-600">&gt;</span>
                  <span>SEC_AUDIT: ISO 27001 &amp; NIST 800-53 Check</span>
                </div>
                <div className="pl-4 text-slate-400 text-[11px]">
                  <div>
                    [STATUS] 0 Critical Vulnerabilities • Encryption: TLS 1.3 /
                    MACsec
                  </div>
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

      {/* Case studies */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <Badge className="text-xs bg-sky-50 text-sky-700 border-sky-200 mb-2 font-bold">
                Proven Track Record
              </Badge>
              <h2 className="text-3xl font-extrabold text-slate-950 font-heading">
                Enterprise Case Highlights
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Real results delivered across key sectors in Saudi Arabia and
                the GCC.
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
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between reveal"
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

      {/* Final CTA — light with gradient card */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 p-8 sm:p-12 text-center space-y-6">
            <Badge className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200 font-bold">
              Guaranteed Fast Turnaround
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 font-heading tracking-tight">
              Ready to Upgrade Your Network, AI &amp; IT Infrastructure?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Send us your Bill of Quantities (BOQ), tender specifications, or
              architecture goals. Our senior solutions architects will return a
              verified proposal and authorized pricing within hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                onClick={() => openQuoteFor("networking")}
                size="lg"
                variant="brand"
                className="w-full sm:w-auto font-extrabold px-8 shadow-lg shadow-indigo-500/20 text-base"
              >
                <FileSpreadsheet className="mr-2 h-5 w-5" />
                Submit BOQ for Quick Quotation
              </Button>
              <Link href="/about" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-slate-300 bg-white text-slate-800 hover:bg-slate-50 font-bold"
                >
                  Learn About Our Standards
                </Button>
              </Link>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
              {[
                "100% Genuine Hardware Warranties",
                "Direct Vendor Escalation",
                "24/7 Managed NOC Availability",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RFQModal
        open={rfqOpen}
        onOpenChange={setRfqOpen}
        initialCategory={modalCategory}
      />
    </div>
  )
}
