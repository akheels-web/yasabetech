"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ShieldCheck, 
  Cpu, 
  FileSpreadsheet, 
  Clock,
  Workflow
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RFQModal } from "@/components/rfq-modal"

export default function AboutPage() {
  const [rfqOpen, setRfqOpen] = React.useState(false)

  const corePillars = [
    {
      title: "100% Authorized Channels",
      desc: "We source exclusively through authorized manufacturer distribution. Every switch, GPU, and server carries official vendor warranties with serialized authenticity.",
      icon: ShieldCheck,
      color: "text-sky-700",
      bg: "bg-sky-50 border-sky-200",
    },
    {
      title: "Architecture-First Verification",
      desc: "We don't simply drop-ship boxes. Our certified Cisco CCIE and NVIDIA solutions architects audit your Bill of Quantities (BOQ) to prevent optic, power, or protocol mismatches.",
      icon: Cpu,
      color: "text-indigo-700",
      bg: "bg-indigo-50 border-indigo-200",
    },
    {
      title: "Pre-Staging & Burn-In Testing",
      desc: "Hardware is unboxed, firmware-updated, and stress-tested inside our regional staging laboratory before on-site dispatch, cutting deployment time by over 60%.",
      icon: Workflow,
      color: "text-emerald-700",
      bg: "bg-emerald-50 border-emerald-200",
    },
    {
      title: "Sub-15 Minute SLA Response",
      desc: "Our Riyadh-based 24/7 Network Operations Center (NOC) guarantees rapid ticket acknowledgement and priority RMA spare parts replacement.",
      icon: Clock,
      color: "text-amber-700",
      bg: "bg-amber-50 border-amber-200",
    },
  ]

  const operatingProcess = [
    {
      step: "01",
      title: "BOQ Review & Technical Scoping",
      desc: "Submit your equipment list, tender requirement, or network blueprint. We verify compatibility, transceivers, licensing, and power footprints.",
    },
    {
      step: "02",
      title: "Direct OEM Sourcing & Allocation",
      desc: "We secure genuine serialized units via authorized tier-1 channels (Cisco, Dell, NVIDIA, Fortinet) with guaranteed manufacturing warranties.",
    },
    {
      step: "03",
      title: "Lab Staging & Firmware Hardening",
      desc: "In our specialized Riyadh facility, systems undergo burn-in load tests, OS hardening, configuration templating, and port tagging.",
    },
    {
      step: "04",
      title: "Turnkey Commissioning & 24/7 NOC",
      desc: "Our field engineers install and certify optical links, hand over documentation, and transition monitoring to our 24/7 dedicated support desk.",
    },
  ]

  const leadershipTeam = [
    {
      name: "Tariq Al-Mansoor",
      role: "Managing Director & Chief Technologist",
      bio: "20+ years steering national ICT and data center infrastructure projects across the Kingdom and the GCC.",
      credentials: "Ex-Cisco Architect • Executive MBA",
    },
    {
      name: "Dr. Elena Rostova",
      role: "Head of AI Compute & Infrastructure",
      bio: "Specialist in large-scale NVIDIA GPU clusters, sovereign LLM inference, and liquid-cooled data center topologies.",
      credentials: "Ph.D. High-Performance Computing • NVIDIA Certified",
    },
    {
      name: "Fahad Al-Zahrani",
      role: "VP of Enterprise Networking & Security",
      bio: "Leads network fabric architecture, SD-WAN migrations, and Zero-Trust campus security implementations.",
      credentials: "Dual CCIE (#38412 Enterprise & Security)",
    },
    {
      name: "Sami Qureshi",
      role: "Director of 24/7 Managed NOC & SOC",
      bio: "Oversees 24/7 real-time telemetry, mission-critical incident command, and enterprise SLA fulfillment.",
      credentials: "ITIL v4 Master • CISSP • Tier-IV Operations",
    },
  ]

  const accreditations = [
    { name: "ISO 27001", label: "Information Security Management Certified" },
    { name: "ISO 9001", label: "Quality Management & Procurement Standards" },
    { name: "Cisco Gold Integrator", label: "Authorized Enterprise & SD-WAN Specialist" },
    { name: "NVIDIA Elite Cloud", label: "Enterprise AI & Accelerated Compute Partner" },
    { name: "Dell Titanium Partner", label: "OEM Server, Storage & SAN Certified" },
    { name: "Fortinet Expert MSSP", label: "Zero-Trust & Next-Gen Cyber Defense" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* About Us Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <Badge variant="default" className="text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold mb-4">
            About Yasabe Technologies
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
            Engineering Resilient Digital Foundations for the <span className="text-gradient-brand">AI Era</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-6 leading-relaxed">
            Inspired by the highest standards of enterprise technology supply, Yasabe Technologies was founded to eliminate supply chain friction, counterfeit hardware risks, and configuration errors for mission-critical IT, high-speed networks, and private AI compute.
          </p>
          <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => setRfqOpen(true)}
              variant="brand"
              className="font-bold px-7 shadow-md"
            >
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              Request Engineering Consultation
            </Button>
            <Link href="/solutions">
              <Button variant="outline" className="border-slate-300 text-slate-800 font-bold hover:bg-slate-50">
                Explore Solutions Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Founding Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-xs font-bold text-sky-700 uppercase tracking-wider font-heading">
                Our Heritage & Mission
              </div>
              <h2 className="text-3xl font-extrabold text-slate-950 font-heading tracking-tight">
                From Hardware Procurement to Advanced Enterprise Systems Integration
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Modern enterprises face a dual dilemma: traditional IT suppliers focus merely on box drop-shipping without understanding architecture, while pure consultancies lack the authorized supply chain muscle to deliver physical infrastructure rapidly.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Yasabe Technologies bridges this gap. We operate as an authorized Tier-1 hardware supplier while deploying in-house senior network and AI engineers who ensure that every server, switch, and GPU cluster is architected for zero downtime, strict regulatory data sovereignty, and measurable ROI.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-extrabold text-sky-700 font-heading">100%</div>
                  <div className="text-xs text-slate-600 mt-0.5 font-medium">OEM Serialized Authenticity</div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-2xl font-extrabold text-emerald-700 font-heading">&lt; 4 Hours</div>
                  <div className="text-xs text-slate-600 mt-0.5 font-medium">Average BOQ Turnaround</div>
                </div>
              </div>
            </div>

            {/* Core Values / Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillars.map((pillar, i) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className={`p-2.5 rounded-xl border w-fit mb-4 ${pillar.bg}`}>
                        <Icon className={`h-5 w-5 ${pillar.color}`} />
                      </div>
                      <h3 className="text-base font-bold text-slate-950 font-heading mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Step Operational Model */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="default" className="text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold mb-2">
              Our Operating Model
            </Badge>
            <h2 className="text-3xl font-extrabold text-slate-950 font-heading">How We Deliver Without Failure</h2>
            <p className="text-slate-600 text-sm mt-2">
              A disciplined, engineering-led execution framework designed for government tenders and enterprise mission-critical environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operatingProcess.map((proc) => (
              <div
                key={proc.step}
                className="relative p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between hover:border-sky-300 shadow-xs hover:shadow-md transition-all group"
              >
                <div>
                  <div className="text-3xl font-mono font-extrabold text-sky-600/50 group-hover:text-sky-600 transition-colors mb-3">
                    {proc.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-950 font-heading mb-2">{proc.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Squad */}
      <section className="py-20 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="default" className="text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold mb-2">
              Senior Leadership
            </Badge>
            <h2 className="text-3xl font-extrabold text-slate-950 font-heading">Led by Seasoned Engineers & Architects</h2>
            <p className="text-slate-600 text-sm mt-2">
              Our team brings decades of field experience from leading OEM vendors and mission-critical enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-xs hover:shadow-md space-y-4"
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-sky-100 to-indigo-100 border border-sky-200 flex items-center justify-center text-sky-700 font-bold text-xl font-heading">
                  {leader.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950 font-heading">{leader.name}</h3>
                  <div className="text-xs font-semibold text-sky-700 mt-0.5">{leader.role}</div>
                  <div className="text-[11px] font-mono text-slate-500 mt-1">{leader.credentials}</div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Compliance Strip */}
      <section className="py-16 bg-slate-50 border-y border-slate-200" id="certifications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-slate-950 font-heading">Accreditations & Industry Certifications</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Compliant with national cybersecurity frameworks and global IT standards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {accreditations.map((acc, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-slate-200 text-center space-y-1 hover:border-sky-300 transition-all shadow-xs"
              >
                <div className="text-sm font-bold text-slate-900 font-heading">{acc.name}</div>
                <div className="text-[10px] text-slate-500 leading-tight font-medium">{acc.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Physical HQ & Contact CTA */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge variant="default" className="text-xs bg-sky-50 text-sky-700 border-sky-200 font-bold">
            Regional Presence
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading">
            Visit Our Solutions & Staging Lab in Riyadh
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            We welcome enterprise IT leaders, procurement directors, and systems architects to review pre-staged racks, benchmark GPU inference speeds, and inspect hardware before sign-off.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => setRfqOpen(true)}
              variant="brand"
              className="font-bold px-8 shadow-md"
            >
              Schedule a Consultation
            </Button>
            <Link href="/solutions">
              <Button variant="outline" className="border-slate-300 text-slate-800 font-bold hover:bg-slate-50">
                View Solutions Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <RFQModal open={rfqOpen} onOpenChange={setRfqOpen} />
    </div>
  )
}
