import * as React from "react"
import { Activity, Globe2, Clock, Cpu } from "lucide-react"

export function StatsCounter() {
  const stats = [
    {
      value: "99.999%",
      label: "Mission-Critical SLA Uptime",
      subtext: "Tier-IV Data Center & Core Network Fabric",
      icon: Activity,
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200",
    },
    {
      value: "550+",
      label: "Enterprise Deployments Delivered",
      subtext: "Across Banking, Energy, Gov & Healthcare",
      icon: Globe2,
      color: "text-sky-600",
      bg: "bg-sky-50 border-sky-200",
    },
    {
      value: "< 15 Min",
      label: "Guaranteed Incident Response",
      subtext: "24/7 Dedicated Tier-3 NOC & SOC Engineers",
      icon: Clock,
      color: "text-indigo-600",
      bg: "bg-indigo-50 border-indigo-200",
    },
    {
      value: "45+",
      label: "Certified Solution Architects",
      subtext: "Cisco CCIE, NVIDIA AI & AWS Cloud Specialists",
      icon: Cpu,
      color: "text-purple-600",
      bg: "bg-purple-50 border-purple-200",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => {
        const Icon = stat.icon
        return (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all shadow-xs hover:shadow-md"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2.5 rounded-xl border ${stat.bg}`}>
                <Icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                Metric #{i + 1}
              </span>
            </div>
            <div className={`text-3xl font-extrabold tracking-tight font-heading ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-sm font-bold text-slate-900 mt-1">
              {stat.label}
            </div>
            <div className="text-xs text-slate-600 mt-1 leading-relaxed">
              {stat.subtext}
            </div>
          </div>
        )
      })}
    </div>
  )
}
