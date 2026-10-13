import * as React from "react"
import { ShieldCheck, CheckCircle2 } from "lucide-react"

const partners = [
  { name: "Cisco Systems", tier: "Gold Integrator Partner" },
  { name: "NVIDIA", tier: "Elite Compute Partner" },
  { name: "Dell Technologies", tier: "Titanium OEM Partner" },
  { name: "HPE Aruba", tier: "Platinum Partner" },
  { name: "Fortinet", tier: "Expert MSSP Integrator" },
  { name: "Microsoft Azure", tier: "Certified Cloud Solutions" },
  { name: "Arista Networks", tier: "Data Center Fabric" },
  { name: "Palo Alto Networks", tier: "Next-Gen Cyber Defense" },
]

export function PartnersBanner() {
  const marqueeItems = [...partners, ...partners]

  return (
    <section className="py-12 border-b border-slate-200 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 mb-1.5">
              <ShieldCheck className="h-4 w-4" />
              100% Authorized Procurement &amp; Deployment Channels
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-heading">
              Backed by Global Technology Giants &amp; Official Vendor
              Warranties
            </h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs shrink-0">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <span className="font-medium">
              Genuine Serialized Hardware • Direct Manufacturer RMA Support
            </span>
          </div>
        </div>

        {/* Infinite marquee of partner cards */}
        <div className="relative">
          {/* Edge fades */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden no-scrollbar">
            <div className="flex gap-4 w-max animate-marquee">
              {marqueeItems.map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="p-4 pr-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-300 transition-all group w-[280px] shrink-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-800 text-white flex items-center justify-center text-xs font-black font-heading shrink-0">
                      {partner.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-tight">
                        {partner.name}
                      </div>
                      <div className="text-[11px] font-semibold text-indigo-600 mt-0.5">
                        {partner.tier}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
