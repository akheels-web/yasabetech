"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { RFQModal } from "@/components/rfq-modal";
import { PageJsonLd } from "@/components/seo-jsonld";
import { MagneticButton } from "@/components/interactive/magnetic-button";
import { ScrollReveal } from "@/components/interactive/scroll-reveal";
import { TiltCard } from "@/components/interactive/tilt-card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const { t } = useLanguage();
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="bg-white text-[#08152B]">
      <PageJsonLd
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About Misyatech", path: "/about/" },
        ]}
      />

      {/* About Deep Navy Hero */}
      <section className="relative overflow-hidden bg-[#07142B] text-[#F4F8FF] py-16 lg:py-24 border-b border-[#93C5FD]/15">
        <div
          aria-hidden="true"
          className="bg-architectural-grid pointer-events-none absolute inset-0"
        />

        <div className="site-container relative z-10 max-w-4xl">
          <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#7DD3FC] mb-5">
            <span className="h-1.5 w-6 rounded-full bg-[#38BDF8]" />
            <span>{t.aboutPage.kicker}</span>
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-white">
            {t.aboutPage.titleLine1}
            <span className="block text-[#7DD3FC] mt-1">
              {t.aboutPage.titleLine2}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-[#DCE6F5]">
            {t.aboutPage.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton
              variant="azure"
              size="lg"
              label={t.aboutPage.primaryCta}
              onClick={() => setQuoteOpen(true)}
            />

            <Button variant="glass" size="lg" asChild>
              <Link href="/solutions">
                <span>{t.aboutPage.secondaryCta}</span>
                <ArrowRight
                  aria-hidden="true"
                  className="ms-2 h-4 w-4 rtl:rotate-180"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Editorial Narrative & Architectural Atrium Image */}
      <section className="site-container py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8]">
                {t.aboutPage.storyKicker}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#08152B] leading-tight">
                {t.aboutPage.storyTitle}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#4A5E7A]">
                {t.aboutPage.storyP1}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#4A5E7A]">
                {t.aboutPage.storyP2}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <div className="group relative overflow-hidden rounded-2xl border border-[#A78BFA]/35 bg-[#1B1145] shadow-[0_24px_56px_-22px_rgba(79,70,229,0.28)]">
              <Image
                src="/images/workspace-hero.webp"
                alt="Contemporary Gulf innovation atrium with warm stone staircase and Dubai horizon"
                width={1200}
                height={900}
                sizes="(max-width: 1024px) 100vw, 48vw"
                preload
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div
                aria-hidden="true"
                className="img-veil-soft pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-50"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Oman & Dubai Regional Alignment Strip */}
      <section className="bg-[#F4F8FF] py-16 lg:py-20 border-y border-[#DCE6F5]">
        <div className="site-container">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
              {t.aboutPage.regionsKicker}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#08152B]">
              {t.aboutPage.regionsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.aboutPage.regions.map((region) => (
              <TiltCard
                key={region.title}
                variant="white"
                className="p-7 sm:p-8"
              >
                <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-[#1D4ED8] mb-3">
                  <span className="inline-flex items-center gap-2">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    <span>{region.subtitle}</span>
                  </span>
                  <span className="font-mono text-[#4A5E7A]">{region.code}</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-[#08152B]">
                  {region.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A5E7A]">
                  {region.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles (Clean Architectural Editorial Columns) */}
      <section className="site-container py-16 lg:py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
            {t.aboutPage.principlesKicker}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#08152B]">
            {t.aboutPage.principlesTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.aboutPage.principles.map((item, idx) => (
            <ScrollReveal key={item.title} delayMs={idx * 60}>
              <article className="border-t-2 border-[#1D4ED8] pt-6">
                <span className="block font-mono text-xs font-bold text-[#1D4ED8] mb-4">
                  0{idx + 1}
                </span>
                <h3 className="font-heading text-xl font-semibold text-[#08152B]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A5E7A]">
                  {item.description}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Four-Step Approach */}
      <section
        id="approach"
        className="bg-[#F4F8FF] py-16 lg:py-24 border-t border-[#DCE6F5] scroll-mt-24"
      >
        <div className="site-container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1D4ED8] mb-3">
                {t.aboutPage.processKicker}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-[#08152B]">
                {t.aboutPage.processTitle}
              </h2>
            </div>
            <p className="max-w-sm text-xs sm:text-sm text-[#4A5E7A] leading-relaxed">
              {t.aboutPage.processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.aboutPage.process.map((step, index) => (
              <TiltCard
                key={step.title}
                variant="white"
                className="p-6"
              >
                <span className="inline-block font-heading text-xs font-bold text-[#1D4ED8] mb-4">
                  0{index + 1}
                </span>
                <h3 className="font-heading text-xl font-semibold text-[#08152B]">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-[#4A5E7A]">
                  {step.description}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <RFQModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </div>
  );
}
