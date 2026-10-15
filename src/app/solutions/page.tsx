"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, Cpu, Layers,
  Network, Radio, Server, ShieldCheck, ShoppingBag, Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { RFQModal } from "@/components/rfq-modal";
import { solutionAreas, type SolutionArea } from "@/lib/solution-areas";

const areaIcons = {
  networking: Network, "managed-it": Server, cybersecurity: ShieldCheck,
  ai: Cpu, telecom: Radio, "av-elv": Video, digital: Layers, "hardware-boq": ShoppingBag,
};
const supportSteps = [
  { title: "Review & design", description: "Your requirements, sites and existing systems shape the plan." },
  { title: "Source & configure", description: "Equipment, licensing and configuration aligned with your scope." },
  { title: "Deploy & hand over", description: "Coordinated installation, testing and a clear handover to your team." },
  { title: "Monitor & support", description: "Maintenance, monitoring and escalation agreed around your needs." },
];

export default function SolutionsPage() {
  const detailsTrigger = useRef<HTMLButtonElement | null>(null);
  const [selectedArea, setSelectedArea] = useState<SolutionArea | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState("networking");
  const [quoteScope, setQuoteScope] = useState("");
  const openQuote = (area?: SolutionArea) => {
    setQuoteCategory(area?.category ?? "networking");
    setQuoteScope(area ? `I would like to discuss: ${area.title}` : "");
    setSelectedArea(null);
    setQuoteOpen(true);
  };

  return (
    <div>
      <section className="page-hero solutions-hero">
        <div className="site-container solutions-hero-layout">
          <div>
            <p className="section-kicker">Technology that moves you forward</p>
            <h1>IT solutions for <span>Oman &amp; Saudi Arabia.</span></h1>
            <p className="page-hero-description">
              Connect your business. Protect what matters. From infrastructure to
              everyday IT, find the right solution for your next move.
            </p>
            <div className="hero-actions">
              <Button variant="brand" onClick={() => openQuote()}>
                Discuss your project <ArrowUpRight className="ml-3 h-4 w-4" />
              </Button>
              <a href="#solution-areas" className="text-link">
                Explore solutions <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
          <figure className="solutions-hero-visual">
            <Image
              src="/images/team-collaboration.webp"
              alt="Business team reviewing project plans in a bright contemporary workspace"
              width={1200} height={900}
              sizes="(max-width: 900px) 100vw, 45vw" preload
            />
            <figcaption><span />Your ambition. A clear technology plan.</figcaption>
          </figure>
        </div>
      </section>

      <section className="site-container solution-areas" id="solution-areas" aria-labelledby="solution-areas-title">
        <div className="section-heading compact-heading">
          <div>
            <p className="section-kicker">Find your fit</p>
            <h2 id="solution-areas-title">Solution areas.</h2>
          </div>
          <p>Start with what your business needs. We’ll help bring it together.</p>
        </div>
        <div className="solution-area-grid">
          {solutionAreas.map((area) => {
            const Icon = areaIcons[area.id];
            return (
              <article className="solution-area-card" id={area.id} key={area.id}>
                <span className="solution-area-icon"><Icon aria-hidden="true" size={21} strokeWidth={1.7} /></span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <p className="solution-use-cases"><span>Use cases:</span> {area.useCases}</p>
                <button className="text-link" aria-label={`More details: ${area.title}`} onClick={(event) => {
                  detailsTrigger.current = event.currentTarget;
                  setSelectedArea(area);
                }}>
                  More details <ArrowRight aria-hidden="true" size={14} />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="solution-support" aria-labelledby="solution-support-title">
        <div className="site-container">
          <div className="section-heading compact-heading">
            <div>
              <p className="section-kicker">From first brief to ongoing support</p>
              <h2 id="solution-support-title">How we support each solution.</h2>
            </div>
            <p>One coordinated approach, tailored to your project in Oman or Saudi Arabia.</p>
          </div>
          <div className="solution-support-grid">
            {supportSteps.map((step, index) => (
              <article key={step.title}>
                <span className="support-step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className="solution-start" id="calculator">
            <div><h3>Have a project or a BOQ?</h3><p>Share your requirements. Let’s plan the next step.</p></div>
            <Button variant="brand" onClick={() => openQuote()}>
              Talk to our team <ArrowUpRight className="ml-3 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={Boolean(selectedArea)} onOpenChange={(open) => { if (!open) setSelectedArea(null); }}>
        <DialogContent className="w-[calc(100%-24px)] rounded-2xl sm:max-w-lg" onCloseAutoFocus={(event) => {
          event.preventDefault();
          if (!quoteOpen) detailsTrigger.current?.focus();
        }}>
          {selectedArea && (
            <>
              <DialogHeader className="pr-5 text-left">
                <p className="section-kicker">Explore the solution</p>
                <DialogTitle className="text-2xl font-medium">{selectedArea.title}</DialogTitle>
                <DialogDescription className="pt-2 leading-relaxed">{selectedArea.description}</DialogDescription>
              </DialogHeader>
              <ul className="solution-detail-list">
                {selectedArea.includes.map((item) => <li key={item}><Check aria-hidden="true" size={16} />{item}</li>)}
              </ul>
              <div className="solution-detail-support"><h3>How we help</h3><p>{selectedArea.support}</p></div>
              <Button variant="brand" onClick={() => openQuote(selectedArea)}>
                Discuss this solution <ArrowUpRight className="ml-3 h-4 w-4" />
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
      <RFQModal open={quoteOpen} onOpenChange={setQuoteOpen} initialCategory={quoteCategory} initialScope={quoteScope} />
    </div>
  );
}
