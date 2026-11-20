"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Cpu,
  Layers,
  Network,
  Radio,
  Server,
  ShieldCheck,
  ShoppingBag,
  Video,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { RFQModal } from "@/components/rfq-modal";
import { PageJsonLd } from "@/components/seo-jsonld";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { ScopeEstimator } from "@/components/interactive/scope-estimator";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { ServiceSuites } from "@/components/interactive/service-suites";
import { TiltCard } from "@/components/interactive/tilt-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { solutionAreas, type SolutionArea } from "@/lib/solution-areas";
import { solutionCategories } from "@/lib/solution-categories";
import { cn } from "@/lib/utils";

const areaIcons = {
  networking: Network,
  "managed-it": Server,
  cybersecurity: ShieldCheck,
  ai: Cpu,
  telecom: Radio,
  "av-elv": Video,
  digital: Layers,
  "hardware-boq": ShoppingBag,
} as const;

export default function SolutionsPage() {
  const { lang, t } = useLanguage();
  const isAr = lang === "ar";

  const detailsTrigger = useRef<HTMLButtonElement | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedArea, setSelectedArea] = useState<SolutionArea | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState("networking");
  const [quoteScope, setQuoteScope] = useState("");

  const openQuote = (category = "networking", scope = "") => {
    setQuoteCategory(category);
    setQuoteScope(scope);
    setSelectedArea(null);
    setQuoteOpen(true);
  };

  const openAreaQuote = (area: SolutionArea) => {
    const title = isAr ? area.titleAr : area.title;
    openQuote(area.category, title);
  };

  const filteredAreas =
    activeFilter === "all"
      ? solutionAreas
      : solutionAreas.filter(
          (area) => area.category === activeFilter || area.id === activeFilter,
        );

  return (
    <div className="bg-white text-[#08152B]">
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions/" },
        ]}
        faqItems={t.faq.items}
      />

      {/* Deep Navy Architectural Hero */}
      <section className="relative overflow-hidden bg-[#07142B] text-[#F4F8FF] py-14 lg:py-20 border-b border-[#93C5FD]/15">
        <div
          aria-hidden="true"
          className="bg-architectural-grid pointer-events-none absolute inset-0"
        />

        <div className="site-container relative z-10 grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7DD3FC] mb-5">
              <span className="h-1.5 w-6 rounded-full bg-[#38BDF8]" />
              <span>{t.solutionsPage.kicker}</span>
            </p>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-white">
              {t.solutionsPage.titleStart}{" "}
              <span className="block text-[#7DD3FC] mt-1">
                {t.solutionsPage.titleAccent}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-[#DCE6F5]">
              {t.solutionsPage.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton
                variant="azure"
                size="lg"
                label={t.solutionsPage.primaryCta}
                onClick={() => openQuote()}
              />

              <Button variant="glass" size="lg" asChild>
                <a href="#calculator">
                  <span>{t.solutionsPage.secondaryCta}</span>
                  <ArrowDown aria-hidden="true" className="ms-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <figure className="group relative m-0 overflow-hidden rounded-2xl border border-[#A78BFA]/35 bg-[#1B1145] shadow-[0_24px_56px_-22px_rgba(79,70,229,0.45)]">
            <Image
              src="/images/team-collaboration.webp"
              alt="Gulf technology consultants reviewing enterprise IT blueprints"
              width={1200}
              height={900}
              sizes="(max-width: 1024px) 100vw, 45vw"
              preload
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div
              aria-hidden="true"
              className="img-veil-soft pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-50"
            />
            <figcaption className="absolute bottom-4 inset-x-4 flex items-center gap-2.5 rounded-xl border border-[#C4B5FD]/30 bg-[#1B1145]/75 px-4 py-3 text-xs font-medium text-[#F4F8FF] backdrop-blur-md">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#A78BFA]" />
              <span>{t.solutionsPage.figureCaption}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Solution Areas Grid + Filter Bar */}
      <section
        id="solution-areas"
        aria-labelledby="solution-areas-title"
        className="site-container py-16 lg:py-24 scroll-mt-24"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
              {t.solutionsPage.areasKicker}
            </p>
            <h2
              id="solution-areas-title"
              className="font-heading text-3xl sm:text-4xl font-semibold text-[#08152B]"
            >
              {t.solutionsPage.areasTitle}
            </h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm text-[#4A5E7A] leading-relaxed">
            {t.solutionsPage.areasSubtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          role="group"
          aria-label="Filter solutions by category"
          className="mb-8 flex flex-wrap gap-2"
        >
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold transition-all cursor-pointer",
              activeFilter === "all"
                ? "border-[#07142B] bg-[#07142B] text-[#7DD3FC]"
                : "border-[#DCE6F5] bg-[#F4F8FF] text-[#4A5E7A] hover:border-[#2563EB]",
            )}
          >
            {t.solutionsPage.filterAll}
          </button>
          {solutionCategories.map((cat) => {
            const active = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold transition-all cursor-pointer",
                  active
                    ? "border-[#07142B] bg-[#07142B] text-[#7DD3FC]"
                    : "border-[#DCE6F5] bg-[#F4F8FF] text-[#4A5E7A] hover:border-[#2563EB]",
                )}
              >
                {isAr ? cat.labelAr : cat.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setActiveFilter("hardware-boq")}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold transition-all cursor-pointer",
              activeFilter === "hardware-boq"
                ? "border-[#07142B] bg-[#07142B] text-[#7DD3FC]"
                : "border-[#DCE6F5] bg-[#F4F8FF] text-[#4A5E7A] hover:border-[#2563EB]",
            )}
          >
            {isAr ? "توريد BOQ" : "Hardware / BOQ"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredAreas.map((area, idx) => {
            const Icon = areaIcons[area.id];
            const title = isAr ? area.titleAr : area.title;
            const description = isAr ? area.descriptionAr : area.description;
            const useCases = isAr ? area.useCasesAr : area.useCases;

            return (
              <TiltCard
                key={area.id}
                id={area.id}
                variant="white"
                className="flex flex-col p-6 scroll-mt-28"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#1D4ED8]">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-[#4A5E7A]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-semibold text-[#08152B]">
                  {title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#4A5E7A]">
                  {description}
                </p>

                <p className="mt-4 mb-5 text-[11px] leading-relaxed text-[#1D4ED8] font-medium">
                  <span className="text-slate-400">
                    {t.solutionsPage.useCaseLabel}{" "}
                  </span>
                  {useCases}
                </p>

                <button
                  type="button"
                  aria-label={`${t.solutionsPage.moreDetails}: ${title}`}
                  onClick={(event) => {
                    detailsTrigger.current = event.currentTarget;
                    setSelectedArea(area);
                  }}
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#07142B] hover:text-[#1D4ED8] transition-colors cursor-pointer"
                >
                  <span>{t.solutionsPage.moreDetails}</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 rtl:rotate-180"
                  />
                </button>
              </TiltCard>
            );
          })}
        </div>
      </section>

      {/* Specialized Services Searchable Showcase (Web, CRM, HRM, Fleet, AI Voice, AMC, Intune, AD, NTP, DHCP, DNS) */}
      <div className="border-t border-[#DCE6F5] bg-white">
        <ServiceSuites
          enableSearch
          onOpenQuote={(_, cat, scope) => openQuote(cat, scope)}
        />
      </div>

      {/* Interactive Scope Estimator */}
      <ScopeEstimator
        onApplyBlueprint={(cat, scope) => openQuote(cat, scope)}
      />

      {/* 4-Step Delivery Support */}
      <section
        aria-labelledby="solution-support-title"
        className="site-container py-16 lg:py-20"
      >
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
                {t.solutionsPage.supportKicker}
              </p>
              <h2
                id="solution-support-title"
                className="font-heading text-3xl sm:text-4xl font-semibold text-[#08152B]"
              >
                {t.solutionsPage.supportTitle}
              </h2>
            </div>
            <p className="max-w-sm text-xs sm:text-sm text-[#4A5E7A] leading-relaxed">
              {t.solutionsPage.supportSubtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.solutionsPage.supportSteps.map((step, index) => (
            <div
              key={step.title}
              className="border-t-2 border-[#38BDF8]/60 pt-5"
            >
              <span className="block font-heading text-xs font-bold text-[#1D4ED8] mb-3">
                0{index + 1}
              </span>
              <h3 className="font-heading text-xl font-semibold text-[#08152B]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#4A5E7A]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions FAQ */}
      <section
        aria-labelledby="solutions-faq-title"
        className="bg-[#F4F8FF] py-16 border-t border-[#DCE6F5]"
      >
        <div className="site-container max-w-4xl">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
              {t.faq.eyebrow}
            </p>
            <h2
              id="solutions-faq-title"
              className="font-heading text-3xl sm:text-4xl font-semibold text-[#08152B]"
            >
              {t.faq.title}
            </h2>
          </div>

          <Accordion type="single" collapsible>
            {t.faq.items.map((item, idx) => (
              <AccordionItem key={item.q} value={`sol-faq-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Solution Detail Dialog */}
      <Dialog
        open={Boolean(selectedArea)}
        onOpenChange={(open) => {
          if (!open) setSelectedArea(null);
        }}
      >
        <DialogContent
          className="w-[calc(100%-24px)] rounded-2xl sm:max-w-lg"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            if (!quoteOpen) detailsTrigger.current?.focus();
          }}
        >
          {selectedArea && (
            <>
              <DialogHeader className="pe-6 text-start">
                <p className="text-xs font-semibold text-[#1D4ED8]">
                  {t.solutionsPage.dialogKicker}
                </p>
                <DialogTitle className="text-2xl font-semibold text-[#08152B]">
                  {isAr ? selectedArea.titleAr : selectedArea.title}
                </DialogTitle>
                <DialogDescription className="pt-2 leading-relaxed text-[#4A5E7A]">
                  {isAr
                    ? selectedArea.descriptionAr
                    : selectedArea.description}
                </DialogDescription>
              </DialogHeader>

              <ul className="space-y-3 py-2">
                {(isAr ? selectedArea.includesAr : selectedArea.includes).map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-[#08152B]"
                    >
                      <Check
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-[#1D4ED8] mt-1"
                      />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>

              <div className="rounded-xl border border-[#DCE6F5] bg-[#F4F8FF] p-4">
                <h3 className="text-xs font-bold text-[#08152B] mb-1.5">
                  {t.solutionsPage.dialogHelpHeading}
                </h3>
                <p className="text-xs leading-relaxed text-[#4A5E7A]">
                  {isAr ? selectedArea.supportAr : selectedArea.support}
                </p>
              </div>

              <Button
                variant="brand"
                className="w-full"
                onClick={() => openAreaQuote(selectedArea)}
              >
                <span>{t.solutionsPage.dialogCta}</span>
                <ArrowUpRight aria-hidden="true" className="ms-2 h-4 w-4" />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>

      <RFQModal
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        initialCategory={quoteCategory}
        initialScope={quoteScope}
      />
    </div>
  );
}
