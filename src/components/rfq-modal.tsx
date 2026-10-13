"use client"

import * as React from "react"
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle2, 
  Building2, 
  Mail, 
  Phone, 
  UploadCloud, 
  Cpu, 
  Network, 
  Server, 
  Send 
} from "lucide-react"

interface RFQModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialCategory?: string
}

export function RFQModal({ open, onOpenChange, initialCategory = "networking" }: RFQModalProps) {
  const [selectedServices, setSelectedServices] = React.useState<string[]>([
    initialCategory,
  ])
  const [company, setCompany] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [timeline, setTimeline] = React.useState("immediate")
  const [scopeDetails, setScopeDetails] = React.useState("")
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [rfqReference, setRfqReference] = React.useState("")

  const resetForm = () => {
    setSelectedServices(initialCategory ? [initialCategory] : [])
    setIsSubmitted(false)
    setRfqReference("")
    setCompany("")
    setEmail("")
    setPhone("")
    setScopeDetails("")
  }

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) resetForm()
    onOpenChange(nextOpen)
  }

  const serviceOptions = [
    { id: "networking", label: "Enterprise Networking (SD-WAN / Wi-Fi 7)", icon: Network },
    { id: "ai", label: "AI Infrastructure & Sovereign LLMs", icon: Cpu },
    { id: "managed-it", label: "Managed IT & 24/7 NOC/SOC Support", icon: Server },
    { id: "hardware-boq", label: "Direct Hardware Supply & BOQ Fulfillment", icon: Building2 },
  ]

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id))
    } else {
      setSelectedServices([...selectedServices, id])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const generatedRef = "RFQ-YASABE-" + Math.floor(100000 + Math.random() * 900000)
    setRfqReference(generatedRef)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    resetForm()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-xl bg-white border border-slate-200 text-slate-900 shadow-2xl">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="default" className="text-[11px] bg-sky-50 text-sky-700 border-sky-200 font-bold">
                  Direct B2B Procurement & Engineering
                </Badge>
              </div>
              <DialogTitle className="text-2xl font-bold text-slate-900 tracking-tight font-heading">
                Request an RFQ & Solution Assessment
              </DialogTitle>
              <DialogDescription className="text-slate-600 text-sm">
                Submit your Bill of Quantities (BOQ) or enterprise requirements. Our solution architects will return an authorized proposal within 4 business hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 font-heading">
                  Select Required Solutions (Multiple Allowed)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {serviceOptions.map((opt) => {
                    const Icon = opt.icon
                    const isSelected = selectedServices.includes(opt.id)
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => toggleService(opt.id)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-sky-50 border-sky-500 text-sky-900 shadow-xs"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                        }`}
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-sky-600" : "text-slate-400"}`} />
                        <span>{opt.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Organization Name *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      required
                      placeholder="e.g. Enterprise Client / Gov Entity"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="pl-9 bg-white border-slate-300 text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Official Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-9 bg-white border-slate-300 text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Direct Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input
                      type="tel"
                      placeholder="+966 50 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-9 bg-white border-slate-300 text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Deployment Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="flex h-11 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                  >
                    <option value="immediate">Urgent (Within 1-2 Weeks)</option>
                    <option value="1month">Standard (Within 30 Days)</option>
                    <option value="quarter">Upcoming Quarter (Q3/Q4)</option>
                    <option value="boq-pricing">Tender / BOQ Pricing Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Project Scope, Hardware Quantities or BOQ Details
                </label>
                <Textarea
                  placeholder="Paste your BOQ list, equipment part numbers (Cisco, Dell, NVIDIA, Fortinet), site count, or AI workload specifications..."
                  rows={3}
                  value={scopeDetails}
                  onChange={(e) => setScopeDetails(e.target.value)}
                  className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 text-xs"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <UploadCloud className="h-4 w-4 text-sky-600" />
                  Have an Excel or PDF BOQ?
                </span>
                <span className="text-[11px] text-sky-700 font-bold">
                  Direct upload enabled upon submission
                </span>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => onOpenChange(false)}
                  className="text-slate-600 hover:text-slate-900"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="brand"
                  className="font-bold px-6 shadow-md"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit RFQ Request
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 shadow-xs">
              <CheckCircle2 className="h-8 w-8 animate-bounce" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">RFQ Successfully Dispatched</h3>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                Thank you for consulting Yasabe Technologies. Your request has been assigned to our Senior Systems & Network Engineering Desk.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left space-y-1 shadow-xs">
              <div className="text-xs text-slate-500 uppercase font-bold">Reference ID</div>
              <div className="text-base font-mono font-bold text-sky-700">{rfqReference}</div>
              <div className="text-xs text-slate-600 font-medium">
                Direct Dispatch: <span className="text-slate-900">rfq@yasabetech.com</span>
              </div>
            </div>
            <div className="pt-2">
              <Button onClick={handleReset} variant="brand" className="font-bold px-7">
                Done & Return
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
