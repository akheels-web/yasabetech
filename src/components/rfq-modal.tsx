"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { solutionCategories } from "@/lib/solution-categories";

const options = [
  ...solutionCategories.map((category) => ({
    id: category.id,
    label: category.enquiryLabel,
  })),
  { id: "hardware-boq", label: "Hardware sourcing / BOQ" },
];
interface RFQModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialCategory?: string;
  initialScope?: string;
}

export function RFQModal({
  open,
  onOpenChange,
  initialCategory = "networking",
  initialScope = "",
}: RFQModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-24px)] rounded-2xl sm:max-w-xl">
        <QuoteForm
          key={`${initialCategory}-${initialScope}`}
          initialCategory={initialCategory}
          initialScope={initialScope}
        />
      </DialogContent>
    </Dialog>
  );
}

function QuoteForm({
  initialCategory,
  initialScope,
}: {
  initialCategory: string;
  initialScope: string;
}) {
  const [services, setServices] = useState([initialCategory]);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeline, setTimeline] = useState("Planning / exploring options");
  const [scope, setScope] = useState(initialScope);
  const [ready, setReady] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");
  const serviceNames = options
    .filter((option) => services.includes(option.id))
    .map((option) => option.label)
    .join(", ");
  const subject = `Project enquiry — ${company}`;
  const body = `Hello Yasabe team,\n\nI would like to discuss the following project.\n\nCompany: ${company}\nWork email: ${email}\nPhone: ${phone || "Not provided"}\nServices: ${serviceNames}\nTimeline: ${timeline}\n\nProject details:\n${scope || "To be discussed"}\n\nPlease contact me to review the scope and quotation.`;
  const mailto = `mailto:rfq@yasabetech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(
        `To: rfq@yasabetech.com\nSubject: ${subject}\n\n${body}`,
      );
      setCopyStatus("Copied to clipboard");
    } catch {
      setCopyStatus("Select and copy the request text below.");
    }
  };
  const download = () => {
    const url = URL.createObjectURL(
      new Blob([`To: rfq@yasabetech.com\nSubject: ${subject}\n\n${body}`], {
        type: "text/plain;charset=utf-8",
      }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "yasabe-project-enquiry.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <>
      <DialogHeader className="pr-6 text-left">
        <p className="text-xs font-semibold text-blue-700 mb-2">
          Let’s build something that works.
        </p>
        <DialogTitle className="text-3xl font-medium leading-tight">
          {ready ? "Your email draft is ready." : "Tell us about your project."}
        </DialogTitle>
        <DialogDescription className="pt-2 leading-relaxed">
          {ready
            ? "Review your request, then open your email app and send it to our team. Your request has not been sent yet."
            : "Prepare an enquiry for rfq@yasabetech.com. You’ll review and send it from your email app; no details are stored on this site."}
        </DialogDescription>
      </DialogHeader>
      {!ready ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setReady(true);
          }}
          className="space-y-5 mt-1"
        >
          <fieldset>
            <legend className="text-xs font-semibold mb-2">
              What can we help with? Choose at least one.
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {options.map((option) => (
                <label className="quote-service" key={option.id}>
                  <input
                    type="checkbox"
                    checked={services.includes(option.id)}
                    onChange={() =>
                      setServices((current) =>
                        current.includes(option.id)
                          ? current.filter((id) => id !== option.id)
                          : [...current, option.id],
                      )
                    }
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="quote-field" htmlFor="quote-company">
              Company *
              <Input
                id="quote-company"
                name="organization"
                autoComplete="organization"
                required
                maxLength={120}
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder="Your company"
              />
            </label>
            <label className="quote-field" htmlFor="quote-email">
              Work email *
              <Input
                id="quote-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={180}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
              />
            </label>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="quote-field" htmlFor="quote-phone">
              Phone (optional)
              <Input
                id="quote-phone"
                name="tel"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Include country code"
              />
            </label>
            <label className="quote-field" htmlFor="quote-timeline">
              Project timeline
              <select
                id="quote-timeline"
                value={timeline}
                onChange={(event) => setTimeline(event.target.value)}
                className="h-11 rounded-xl border border-slate-200 px-3 text-sm"
              >
                <option>Planning / exploring options</option>
                <option>Within 1–2 weeks</option>
                <option>Within a month</option>
                <option>Within 3 months</option>
                <option>Tender / BOQ pricing</option>
              </select>
            </label>
          </div>
          <label className="quote-field" htmlFor="quote-scope">
            Project details
            <Textarea
              id="quote-scope"
              rows={4}
              maxLength={2000}
              value={scope}
              onChange={(event) => setScope(event.target.value)}
              placeholder="Tell us about your sites, hardware, workloads or support requirements."
            />
          </label>
          <p className="text-xs text-slate-500 leading-relaxed">
            Have a spreadsheet or tender document? Attach it in your email app
            after opening the draft.
          </p>
          <Button
            type="submit"
            variant="brand"
            disabled={!services.length || !company.trim()}
            className="w-full"
          >
            Prepare email draft <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      ) : (
        <div className="space-y-4">
          <Textarea
            aria-label="Prepared project enquiry"
            value={body}
            readOnly
            rows={9}
            className="text-xs bg-slate-50"
          />
          <Button asChild variant="brand" className="w-full">
            <a href={mailto}>
              <Mail className="mr-2 h-4 w-4" />
              Open email app
            </a>
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" onClick={copy}>
              <Copy className="mr-2 h-4 w-4" />
              Copy request
            </Button>
            <Button variant="outline" onClick={download}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          <p role="status" className="text-xs text-blue-700">
            {copyStatus && (
              <>
                <Check className="inline h-3 w-3 mr-1" />
                {copyStatus}
              </>
            )}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            No email app configured? Copy or download your request and send it
            to{" "}
            <a className="underline" href="mailto:rfq@yasabetech.com">
              rfq@yasabetech.com
            </a>
            .
          </p>
          <button className="text-link" onClick={() => setReady(false)}>
            Edit project details
          </button>
        </div>
      )}
    </>
  );
}
