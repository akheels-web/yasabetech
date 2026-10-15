"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ClipboardCheck,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RFQModal } from "@/components/rfq-modal";

const principles = [
  {
    icon: ClipboardCheck,
    title: "Architecture before equipment.",
    description:
      "A compatible system starts with the right questions. Requirements, workloads, licensing, connectivity and power all belong in the conversation before a hardware order.",
  },
  {
    icon: ShieldCheck,
    title: "Clarity at every step.",
    description:
      "Clear sourcing, configuration and handover documentation help your team understand what is being delivered and how it will be supported.",
  },
  {
    icon: Network,
    title: "The whole environment.",
    description:
      "Networking, compute, storage and security work best when they are considered together. We connect those disciplines around your operational needs.",
  },
];
const process = [
  {
    title: "Review the requirement",
    description:
      "Bring your BOQ, technical brief or business challenge. We review compatibility, capacity and deployment constraints with your team.",
  },
  {
    title: "Plan the delivery",
    description:
      "Agree the architecture, equipment, sourcing requirements, implementation scope and support expectations.",
  },
  {
    title: "Prepare & commission",
    description:
      "Configure, validate and stage the environment before deployment, with commissioning and documentation for handover.",
  },
  {
    title: "Support the operation",
    description:
      "Establish monitoring, maintenance and escalation arrangements around your agreed service requirements.",
  },
];

export default function AboutPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  return (
    <div>
      <section className="page-hero">
        <div className="site-container">
          <p className="section-kicker">About Yasabe Technologies</p>
          <h1>
            A technology partner.
            <br />
            From the ground up.
          </h1>
          <p className="page-hero-description">
            We bring enterprise networking, private AI infrastructure and
            managed IT together. One connected approach to the systems your
            business depends on.
          </p>
          <div className="hero-actions">
            <Button variant="brand" onClick={() => setQuoteOpen(true)}>
              Let’s talk about your project{" "}
              <ArrowUpRight className="ml-3 h-4 w-4" />
            </Button>
            <Link className="text-link" href="/solutions">
              Explore our solutions <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-space site-container">
        <div className="approach-layout">
          <div className="about-story">
            <p className="section-kicker">Connect. Secure. Empower.</p>
            <h2 className="about-statement">
              Technology is only as strong as the thinking behind it.
            </h2>
            <p>
              Buying the right hardware is one part of building dependable
              infrastructure. The real work is making sure each component fits
              your environment, your people and your next stage of growth.
            </p>
            <p>
              Yasabe brings architecture, sourcing, implementation and support
              into the same conversation. From a campus network to private GPU
              compute, we help turn a technical requirement into a practical
              delivery plan.
            </p>
          </div>
          <Image
            src="/images/team-collaboration.webp"
            alt="Illustrative scene of technology consultants reviewing a project plan together"
            width={1200}
            height={900}
            sizes="(max-width: 900px) 100vw, 50vw"
            className="about-image"
          />
        </div>
      </section>
      <section className="approach-section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">What guides our work</p>
              <h2>
                Thought through.
                <br />
                From end to end.
              </h2>
            </div>
          </div>
          <div className="about-principles">
            {principles.map(({ icon: Icon, title, description }) => (
              <article key={title}>
                <Icon className="h-6 w-6" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space site-container" id="approach">
        <div className="section-heading">
          <div>
            <p className="section-kicker">How we work</p>
            <h2>
              A clear path from
              <br />
              brief to business as usual.
            </h2>
          </div>
          <p>
            Every environment is different. Our delivery process gives your team
            a shared understanding of the scope, the milestones and what happens
            next.
          </p>
        </div>
        <div className="about-process">
          {process.map((step, index) => (
            <article key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-section">
        <div className="site-container contact-layout">
          <div>
            <p className="section-kicker">Based in Riyadh. Built around you.</p>
            <h2>
              Your infrastructure.
              <br />
              Our shared responsibility.
            </h2>
            <p>Start with a conversation about what you need.</p>
          </div>
          <div className="contact-actions">
            <Button
              variant="brand"
              size="lg"
              onClick={() => setQuoteOpen(true)}
            >
              Discuss your project <ArrowUpRight className="ml-3 h-4 w-4" />
            </Button>
            <a href="mailto:sales@yasabetech.com">
              sales@yasabetech.com <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <RFQModal open={quoteOpen} onOpenChange={setQuoteOpen} />
    </div>
  );
}
