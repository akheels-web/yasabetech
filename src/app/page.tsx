"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { PartnersBanner } from "@/components/partners-banner";
import { RFQModal } from "@/components/rfq-modal";
import { PageJsonLd } from "@/components/seo-jsonld";
import { CapabilityIndex } from "@/components/interactive/capability-index";
import { ExpandingPractices } from "@/components/interactive/expanding-practices";
import { HeroShowcase } from "@/components/interactive/hero-showcase";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { ScrollStory } from "@/components/interactive/scroll-story";
import { ServiceSuites } from "@/components/interactive/service-suites";
import { TiltCard } from "@/components/interactive/tilt-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomePage() {
  const { t } = useLanguage();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [category, setCategory] = useState("networking");
  const [quoteScope, setQuoteScope] = useState("");
  const quoteTrigger = useRef<HTMLButtonElement | null>(null);

  const openQuote = (
    trigger?: HTMLButtonElement | null,
    service = "networking",
    scope = "",
  ) => {
    quoteTrigger.current = trigger ?? null;
    setCategory(service);
    setQuoteScope(scope);
    setQuoteOpen(true);
  };

  const changeQuoteOpen = (open: boolean) => {
    setQuoteOpen(open);
    if (!open) requestAnimationFrame(() => quoteTrigger.current?.focus());
  };

  return (
    <div className="bg-white text-[#08152B]">
      <PageJsonLd
        breadcrumbs={[{ name: "Home", path: "/" }]}
        faqItems={t.faq.items}
      />

      {/* Band 1: Interactive 3-Scene Parallax Hero */}
      <HeroShowcase onOpenQuote={openQuote} />

      {/* Band 2: Continuous 25-Brand Technology Marquee */}
      <PartnersBanner />

      {/* Band 3: Horizontal Expanding Architectural Practice Panels */}
      <ExpandingPractices onOpenQuote={openQuote} />

      {/* Band 4: Specialized Services & Digital Platforms with Bespoke Creatives */}
      <ServiceSuites onOpenQuote={openQuote} />

      {/* Band 5: Scroll-Scrubbed Delivery Narrative */}
      <ScrollStory />

      {/* Band 5: Oman & Dubai Executive Footprint + Interactive Capability Index */}
      <section
        id="regional-footprint"
        aria-labelledby="regional-footprint-title"
        className="bg-[#F4F8FF] py-16 lg:py-24 border-b border-[#DCE6F5] scroll-mt-24"
      >
        <div className="site-container">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
                  {t.regionalSection.eyebrow}
                </p>
                <h2
                  id="regional-footprint-title"
                  className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#08152B]"
                >
                  {t.regionalSection.title}
                </h2>
              </div>
              <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#4A5E7A]">
                {t.regionalSection.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-stretch">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {t.regionalSection.cards.map((card) => (
                <TiltCard
                  key={card.code}
                  variant="white"
                  className="p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8]">
                        <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
                        <span>{card.cities}</span>
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-[#4A5E7A]">
                        {card.code}
                      </span>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-[#08152B]">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#4A5E7A]">
                      {card.description}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>

            <div className="group relative min-h-[280px] sm:min-h-[340px] overflow-hidden rounded-2xl border border-[#C4B5FD]/35 bg-[#1B1145] shadow-lg">
              <Image
                src="/images/oman-dubai-skyline.webp"
                alt={t.regionalSection.skylineImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="img-veil-card pointer-events-none absolute inset-0"
              />
              <div className="relative z-10 flex h-full items-end p-4 sm:p-5">
                <p className="w-full rounded-xl border border-[#C4B5FD]/25 bg-[#1B1145]/65 px-4 py-3 text-xs sm:text-sm font-semibold text-[#F4F8FF] backdrop-blur-md">
                  {t.regionalSection.skylineCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Band 6: Swiss Interactive 01-08 Capability Index */}
      <CapabilityIndex onOpenQuote={openQuote} />

      {/* Band 7: Clean Hairline Executive FAQ */}
      <section
        aria-labelledby="faq-title"
        className="bg-[#F4F8FF] py-16 lg:py-20 border-t border-[#DCE6F5]"
      >
        <div className="site-container max-w-4xl">
          <div className="mb-8 text-start">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
              {t.faq.eyebrow}
            </p>
            <h2
              id="faq-title"
              className="font-heading text-3xl sm:text-4xl font-semibold text-[#08152B]"
            >
              {t.faq.title}
            </h2>
          </div>

          <Accordion type="single" collapsible>
            {t.faq.items.map((item, idx) => (
              <AccordionItem key={item.q} value={`faq-${idx}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <RFQModal
        open={quoteOpen}
        onOpenChange={changeQuoteOpen}
        initialCategory={category}
        initialScope={quoteScope}
      />
    </div>
  );
}
