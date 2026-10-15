"use client"

import * as React from "react"

const checks = [
  { label: "400G spine fabric", value: "0 packet loss", tone: "ok" },
  { label: "SD-WAN dual uplinks", value: "active-active 10Gbps", tone: "ok" },
  { label: "Wi-Fi 7 coverage", value: "48 APs · synced", tone: "ok" },
  { label: "H100 cluster", value: "inference p95 42ms", tone: "info" },
  { label: "SOC audit sweep", value: "0 critical findings", tone: "ok" },
] as const

const zones = [
  { name: "Private data", desc: "Records & regulated workloads", dot: "bg-violet-500" },
  { name: "Sovereign models", desc: "On-prem LLM · confidential compute", dot: "bg-sky-500" },
  { name: "Private workloads", desc: "Inference · managed services", dot: "bg-emerald-500" },
]

const toneStyles: Record<string, string> = {
  ok: "text-emerald-700",
  info: "text-sky-700",
}

export function OpsView() {
  return (
    <div className="relative">
      {/* floating commerce-free status badge */}
      <div className="absolute -top-4 right-5 z-10 flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 shadow-lg shadow-slate-900/5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[11px] font-semibold tracking-wide text-emerald-700">
          Monitored 24/7 · Riyadh NOC
        </span>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_24px_60px_-24px_rgba(11,18,32,0.18),0_2px_8px_rgba(11,18,32,0.04)]">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2.5 pl-4">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
            </div>
            <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-500">
              ops://customer-environment
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            live
          </span>
        </div>

        {/* body: boundary canvas + NOC rail */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">
          {/* boundary canvas */}
          <div className="relative border-b border-slate-100 bg-[#fafbfd] p-5 md:border-b-0 md:border-r">
            <div className="absolute inset-0 bg-ops-dots opacity-60" />
            <div className="relative">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Customer-controlled boundary
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  mTLS · MACsec
                </span>
              </div>

              <div className="rounded-xl border border-slate-300/70 bg-white/70 p-3.5 space-y-3">
                {zones.map((z) => (
                  <div
                    key={z.name}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5"
                  >
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${z.dot}`} />
                    <div className="min-w-0">
                      <div className="truncate text-[12px] font-semibold text-slate-900">
                        {z.name}
                      </div>
                      <div className="truncate text-[10px] text-slate-500">
                        {z.desc}
                      </div>
                    </div>
                  </div>
                ))}

                {/* policy core */}
                <div className="flex items-center justify-center gap-2 rounded-lg border border-slate-900/10 bg-slate-900 px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                    Policy &amp; Control Plane
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400">
                <span className="font-mono">egress: authorized channels only</span>
                <span>ISO 27001 · NIST 800-53</span>
              </div>
            </div>
          </div>

          {/* NOC live-check rail */}
          <div className="bg-white p-5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                NOC live checks
              </span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                all green
              </span>
            </div>
            <div className="space-y-2">
              {checks.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center justify-between gap-3 rounded-lg border border-slate-100 bg-slate-50/60 px-3 py-2"
                >
                  <div className="min-w-0">
                    <div className="truncate text-[11px] font-semibold text-slate-800">
                      {c.label}
                    </div>
                    <div className={`font-mono text-[10px] ${toneStyles[c.tone]}`}>
                      [OK] {c.value}
                    </div>
                  </div>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* footer metrics */}
        <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100 bg-slate-50/60">
          {[
            { v: "99.999%", l: "SLA uptime" },
            { v: "< 15 min", l: "critical response" },
            { v: "550+", l: "nodes delivered" },
          ].map((m) => (
            <div key={m.l} className="px-4 py-3 text-center">
              <div className="text-sm font-bold tabular-nums text-slate-900">
                {m.v}
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-500">
                {m.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
