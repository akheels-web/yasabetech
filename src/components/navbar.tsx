"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { 
  Menu, 
  X, 
  FileSpreadsheet, 
  Phone,
  ShieldCheck,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { RFQModal } from "@/components/rfq-modal"

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [rfqOpen, setRfqOpen] = React.useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "About Us", href: "/about" },
  ]

  return (
    <>
      {/* Top micro-banner */}
      <div className="bg-slate-50 border-b border-slate-200 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-600">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[11px] border border-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              NOC Operations Normal (99.999% SLA)
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-slate-600 font-medium">
              Authorized Partner for Cisco, NVIDIA, Dell & Fortinet
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-600 font-medium">
            <div className="flex items-center gap-1.5 text-[11px]">
              <Phone className="h-3 w-3 text-sky-600" />
              <span>Direct Hotline: <strong className="text-slate-900">+966 11 829 4400</strong></span>
            </div>
            <button 
              onClick={() => setRfqOpen(true)}
              className="text-[11px] text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="h-3 w-3" />
              Upload BOQ
            </button>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/90 bg-white/90 backdrop-blur-xl shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center">
              <Image 
                src="/logo.png" 
                alt="Yasabe Technologies Logo" 
                width={200} 
                height={55}
                className="h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "text-slate-950 bg-slate-100 shadow-xs border border-slate-200/80"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/solutions">
              <Button variant="ghost" size="sm" className="text-slate-700 hover:text-slate-950 hover:bg-slate-100 font-semibold">
                Explore Services
              </Button>
            </Link>
            <Button
              onClick={() => setRfqOpen(true)}
              size="sm"
              variant="brand"
              className="font-bold shadow-md shadow-indigo-500/15"
            >
              <FileSpreadsheet className="mr-1.5 h-4 w-4" />
              Request RFQ
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-semibold ${
                    pathname === link.href
                      ? "bg-slate-100 text-sky-700 font-bold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-2">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false)
                  setRfqOpen(true)
                }}
                variant="brand"
                className="w-full font-bold"
              >
                <FileSpreadsheet className="mr-2 h-4 w-4" />
                Request RFQ / Quote
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Global RFQ Dialog */}
      <RFQModal open={rfqOpen} onOpenChange={setRfqOpen} />
    </>
  )
}
