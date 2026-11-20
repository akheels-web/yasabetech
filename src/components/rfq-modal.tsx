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
import { useLanguage } from "@/components/language-provider";
import { solutionCategories } from "@/lib/solution-categories";
import {
  PROJECT_TIMELINES,
  PROJECT_TIMELINES_AR,
  SALES_EMAIL,
} from "@/lib/enquiry";

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
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const options = [
    ...solutionCategories.map((category) => ({
      id: category.id,
      label: isAr ? category.enquiryLabelAr : category.enquiryLabel,
    })),
    { id: "hardware-boq", label: t.rfq.hardwareOption },
  ];

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

  const timelineOptions = isAr
    ? PROJECT_TIMELINES.map((item) => PROJECT_TIMELINES_AR[item])
    : PROJECT_TIMELINES;

  const displayedTimeline = isAr
    ? PROJECT_TIMELINES_AR[timeline as (typeof PROJECT_TIMELINES)[number]] ??
      PROJECT_TIMELINES_AR[PROJECT_TIMELINES[0]]
    : timeline;

  const handleTimelineChange = (selectedLabel: string) => {
    if (!isAr) {
      setTimeline(selectedLabel);
      return;
    }
    const matched = PROJECT_TIMELINES.find(
      (key) => PROJECT_TIMELINES_AR[key] === selectedLabel,
    );
    setTimeline(matched ?? PROJECT_TIMELINES[0]);
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (submissionLock.current) return;
    setError("");
    if (!siteKey) {
      setError(`${t.rfq.unavailableErr} ${SALES_EMAIL}.`);
      return;
    }
    if (!token) {
      setError(t.rfq.verifyErr);
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
            : `${t.rfq.genericErr} ${SALES_EMAIL}.`,
        );
      setReference(result.reference);
    } catch (failure) {
      setError(
        failure instanceof Error && failure.name === "Error"
          ? failure.message
          : `${t.rfq.genericErr} ${SALES_EMAIL}.`,
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
      <DialogHeader className="pe-6 text-start">
        <p className="text-xs font-semibold text-[#1D4ED8] mb-2">
          {t.rfq.eyebrow}
        </p>
        <DialogTitle className="text-2xl sm:text-3xl font-semibold leading-tight text-[#08152B]">
          {reference ? t.rfq.titleDone : t.rfq.titleIdle}
        </DialogTitle>
        <DialogDescription className="pt-2 leading-relaxed text-[#4A5E7A]">
          {reference
            ? `${t.rfq.descDonePrefix} ${SALES_EMAIL}. ${t.rfq.descDoneSuffix}`
            : `${t.rfq.descIdlePrefix} ${SALES_EMAIL}.`}
        </DialogDescription>
      </DialogHeader>

      {reference ? (
        <div className="space-y-5 py-2">
          <div className="flex items-start gap-3 rounded-xl border border-[#BFDBFE] bg-[#EAF2FF] p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#07142B] text-[#7DD3FC]">
              <Check className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#08152B]">
                {t.rfq.thankYou} {company}.
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#4A5E7A]">
                {t.rfq.referenceNote}
              </p>
              <p className="mt-2 break-all font-mono text-xs text-[#1D4ED8]">
                {reference}
              </p>
            </div>
          </div>
          <Button variant="brand" className="w-full" onClick={onDone}>
            {t.rfq.doneBtn}
          </Button>
        </div>
      ) : (
        <form
          onSubmit={submit}
          className="space-y-5 mt-1"
          aria-busy={submitting}
        >
          <fieldset disabled={submitting}>
            <legend className="text-xs font-semibold text-[#08152B] mb-2">
              {t.rfq.servicesLegend}
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
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="quote-field" htmlFor="quote-company">
              {t.rfq.companyLabel}
              <Input
                id="quote-company"
                name="organization"
                autoComplete="organization"
                required
                maxLength={120}
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                placeholder={t.rfq.companyPlaceholder}
                disabled={submitting}
              />
            </label>
            <label className="quote-field" htmlFor="quote-email">
              {t.rfq.emailLabel}
              <Input
                id="quote-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={180}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={t.rfq.emailPlaceholder}
                disabled={submitting}
              />
            </label>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <label className="quote-field" htmlFor="quote-phone">
              {t.rfq.phoneLabel}
              <Input
                id="quote-phone"
                name="tel"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder={t.rfq.phonePlaceholder}
                disabled={submitting}
              />
            </label>
            <label className="quote-field" htmlFor="quote-timeline">
              {t.rfq.timelineLabel}
              <Select
                id="quote-timeline"
                name="timeline"
                value={displayedTimeline}
                onValueChange={handleTimelineChange}
                options={timelineOptions}
                disabled={submitting}
              />
            </label>
          </div>

          <label className="quote-field" htmlFor="quote-scope">
            {t.rfq.scopeLabel}
            <Textarea
              id="quote-scope"
              rows={4}
              maxLength={2000}
              value={scope}
              onChange={(event) => setScope(event.target.value)}
              placeholder={t.rfq.scopePlaceholder}
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
            {t.rfq.boqNote}{" "}
            <a
              href={`mailto:${SALES_EMAIL}`}
              className="font-semibold text-[#1D4ED8] underline underline-offset-2"
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
                <Loader2 className="me-2 h-4 w-4 animate-spin" />
                {t.rfq.submitBusy}
              </>
            ) : (
              <>
                {t.rfq.submitIdle}
                <ArrowUpRight className="ms-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-center text-xs text-slate-500">
            <Mail className="me-1 inline h-3 w-3" />
            {t.rfq.preferEmail}{" "}
            <a
              className="font-semibold text-[#07142B] underline underline-offset-2"
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
