"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Check, Loader2, Mail } from "lucide-react";
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
import { Select } from "@/components/ui/select";
import { EnquiryVerification } from "@/components/enquiry-verification";
import { solutionCategories } from "@/lib/solution-categories";
import { PROJECT_TIMELINES, SALES_EMAIL } from "@/lib/enquiry";

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
          onDone={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}

function QuoteForm({
  initialCategory,
  initialScope,
  onDone,
}: {
  initialCategory: string;
  initialScope: string;
  onDone: () => void;
}) {
  const [services, setServices] = useState([initialCategory]);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeline, setTimeline] = useState<string>(PROJECT_TIMELINES[0]);
  const [scope, setScope] = useState(initialScope);
  const [website, setWebsite] = useState("");
  const [token, setToken] = useState("");
  const [verificationVersion, setVerificationVersion] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");
  const submissionLock = useRef(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submissionLock.current) return;
    setError("");
    if (!siteKey) {
      setError(
        `Online enquiries are temporarily unavailable. Please email ${SALES_EMAIL}.`,
      );
      return;
    }
    if (!token) {
      setError("Please complete the verification and try again.");
      return;
    }
    submissionLock.current = true;
    setSubmitting(true);
    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(30000),
        body: JSON.stringify({
          services,
          company,
          email,
          phone,
          timeline,
          scope,
          website,
          turnstileToken: token,
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || typeof result?.reference !== "string")
        throw new Error(
          typeof result?.message === "string"
            ? result.message
            : `We couldn’t confirm your submission. Please try again or email ${SALES_EMAIL}.`,
        );
      setReference(result.reference);
    } catch (failure) {
      setError(
        failure instanceof Error && failure.name === "Error"
          ? failure.message
          : `We couldn’t confirm your submission. Please try again or email ${SALES_EMAIL}.`,
      );
      setToken("");
      setVerificationVersion((version) => version + 1);
    } finally {
      submissionLock.current = false;
      setSubmitting(false);
    }
  };

  return (
    <>
      <DialogHeader className="pr-6 text-left">
        <p className="text-xs font-semibold text-blue-700 mb-2">
          Let’s build something that works.
        </p>
        <DialogTitle className="text-3xl font-medium leading-tight">
          {reference ? "Enquiry submitted." : "Tell us about your project."}
        </DialogTitle>
        <DialogDescription className="pt-2 leading-relaxed">
          {reference
            ? `Your request has been accepted for email delivery to ${SALES_EMAIL}. Our team can reply to the work email you provided.`
            : `Share your requirements and we’ll send your enquiry directly to our team at ${SALES_EMAIL}.`}
        </DialogDescription>
      </DialogHeader>
      {reference ? (
        <div className="space-y-5 py-2">
          <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-blue-700">
              <Check className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Thank you, {company}.
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Keep this reference for any follow-up:
              </p>
              <p className="mt-2 break-all font-mono text-xs text-blue-700">
                {reference}
              </p>
            </div>
          </div>
          <Button variant="brand" className="w-full" onClick={onDone}>
            Done
          </Button>
        </div>
      ) : (
        <form
          onSubmit={submit}
          className="space-y-5 mt-1"
          aria-busy={submitting}
        >
          <fieldset disabled={submitting}>
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
                disabled={submitting}
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
                disabled={submitting}
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
                disabled={submitting}
              />
            </label>
            <label className="quote-field" htmlFor="quote-timeline">
              Project timeline
              <Select
                id="quote-timeline"
                name="timeline"
                value={timeline}
                onValueChange={setTimeline}
                options={PROJECT_TIMELINES}
                disabled={submitting}
              />
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
              disabled={submitting}
            />
          </label>
          <div
            className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
            aria-hidden="true"
          >
            <label htmlFor="quote-website">
              Website
              <Input
                id="quote-website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </label>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Have a BOQ or tender document? Mention it here and share the file
            with{" "}
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="underline underline-offset-2"
            >
              {SALES_EMAIL}
            </a>
            .
          </p>
          {siteKey && (
            <EnquiryVerification
              key={verificationVersion}
              siteKey={siteKey}
              onToken={setToken}
            />
          )}
          {error && (
            <p
              role="alert"
              className="rounded-lg border border-red-100 bg-red-50 p-3 text-xs leading-relaxed text-red-700"
            >
              {error}
            </p>
          )}
          <Button
            type="submit"
            variant="brand"
            disabled={
              !services.length ||
              !company.trim() ||
              submitting ||
              (Boolean(siteKey) && !token)
            }
            className="w-full"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending enquiry…
              </>
            ) : (
              <>
                Send enquiry <ArrowUpRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          <p className="text-center text-xs text-slate-500">
            <Mail className="mr-1 inline h-3 w-3" />
            Prefer email?{" "}
            <a
              className="underline underline-offset-2"
              href={`mailto:${SALES_EMAIL}`}
            >
              {SALES_EMAIL}
            </a>
          </p>
        </form>
      )}
    </>
  );
}
