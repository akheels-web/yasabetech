import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Clock, 
  FileCheck 
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Yasabe Technologies" 
                width={200} 
                height={55} 
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Yasabe Technologies is an authorized Tier-1 enterprise technology integrator. We architect mission-critical enterprise networking, sovereign private AI compute clusters, and 24/7 managed IT services with guaranteed SLA performance. Connect. Secure. Empower.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] text-slate-700 flex items-center gap-1.5 shadow-xs font-medium">
                <ShieldCheck className="h-3.5 w-3.5 text-sky-600" />
                ISO 27001 Certified
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] text-slate-700 flex items-center gap-1.5 shadow-xs font-medium">
                <FileCheck className="h-3.5 w-3.5 text-emerald-600" />
                Official OEM Channel
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
              Enterprise Solutions
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/solutions#networking" className="hover:text-sky-700 transition-colors flex items-center gap-1 font-medium">
                  SD-WAN & Campus Fabrics <ArrowUpRight className="h-3 w-3 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link href="/solutions#networking" className="hover:text-sky-700 transition-colors flex items-center gap-1 font-medium">
                  Enterprise Wi-Fi 7 Deployments <ArrowUpRight className="h-3 w-3 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link href="/solutions#ai" className="hover:text-sky-700 transition-colors flex items-center gap-1 font-medium">
                  Private LLM Inference Rigs <ArrowUpRight className="h-3 w-3 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link href="/solutions#ai" className="hover:text-sky-700 transition-colors flex items-center gap-1 font-medium">
                  NVIDIA GPU Superclusters <ArrowUpRight className="h-3 w-3 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link href="/solutions#managed-it" className="hover:text-sky-700 transition-colors flex items-center gap-1 font-medium">
                  24/7 Dedicated NOC & SOC <ArrowUpRight className="h-3 w-3 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link href="/solutions#managed-it" className="hover:text-sky-700 transition-colors flex items-center gap-1 font-medium">
                  Hybrid Cloud & Virtualization <ArrowUpRight className="h-3 w-3 text-slate-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Company */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
              Company & Process
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-sky-700 transition-colors font-medium">
                  Home Landing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-700 transition-colors font-medium">
                  About Yasabe Technologies
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-sky-700 transition-colors font-medium">
                  Engineering Leadership
                </Link>
              </li>
              <li>
                <Link href="/about#certifications" className="hover:text-sky-700 transition-colors font-medium">
                  Partner Accreditations
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-sky-700 transition-colors font-medium">
                  Solutions & Pricing Matrix
                </Link>
              </li>
              <li>
                <Link href="/solutions#calculator" className="hover:text-sky-700 transition-colors font-medium">
                  Online BOQ Estimator
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & HQ */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 font-heading">
              Direct B2B Procurement Desk
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2 text-slate-700">
                <MapPin className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                <span>King Fahd Road, Technology Corridor, Riyadh 11564, Saudi Arabia</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Phone className="h-4 w-4 text-sky-600 shrink-0" />
                <span>+966 11 829 4400</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Mail className="h-4 w-4 text-sky-600 shrink-0" />
                <span>rfq@yasabetech.com</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 pt-1">
                <Clock className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>24/7 Incident Escalation & RMA Desk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Yasabe Technologies LLC. All rights reserved. Connect • Secure • Empower
          </div>
          <div className="flex items-center gap-6 font-medium">
            <span className="hover:text-slate-800 transition-colors cursor-pointer">
              Enterprise SLA Terms
            </span>
            <span className="hover:text-slate-800 transition-colors cursor-pointer">
              Privacy & Data Sovereignty
            </span>
            <span className="hover:text-slate-800 transition-colors cursor-pointer">
              Vendor Warranty Guidelines
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
