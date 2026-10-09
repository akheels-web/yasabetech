import * as React from "react"
import { ShieldCheck, CheckCircle2 } from "lucide-react"

export function PartnersBanner() {
  const partners = [
    { name: "Cisco Systems", tier: "Gold Integrator Partner", tag: "SD-WAN & Core Switching" },
    { name: "NVIDIA", tier: "Elite Compute Partner", tag: "AI Clusters & TensorRT" },
    { name: "Dell Technologies", tier: "Titanium OEM Solution Partner", tag: "PowerEdge & Enterprise SAN" },
    { name: "Hewlett Packard Enterprise", tier: "Platinum Partner", tag: "Aruba Wi-Fi 7 & ProLiant" },
    { name: "Fortinet", tier: "Expert MSSP Integrator", tag: "FortiGate & Zero Trust" },
    { name: "Microsoft Azure", tier: "Certified Cloud Solutions", tag: "Hybrid Enterprise Architecture" },
    { name: "Arista Networks", tier: "Data Center Fabric", tag: "400G/800G Low Latency" },
    { name: "Palo Alto Networks", tier: "Next-Gen Cyber Defense", tag: "Prisma SASE & Strata" },
  ]

  return (
    <section className="py-12 border-y border-slate-200 bg-slate-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 mb-1.5">
              <ShieldCheck className="h-4 w-4" />
              100% Authorized Procurement & Deployment Channels
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-heading">
              Backed by Global Technology Giants & Official Vendor Warranties
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span className="font-medium">Genuine Serialized Hardware • Direct Manufacturer RMA Support</span>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-sky-300 transition-all hover:shadow-md group shadow-xs"
            >
              <div className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                {partner.name}
              </div>
              <div className="text-[11px] font-semibold text-indigo-600 mt-0.5">
                {partner.tier}
              </div>
              <div className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-medium">
                {partner.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
