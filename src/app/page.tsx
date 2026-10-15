"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Cpu,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RFQModal } from "@/components/rfq-modal";
import { PartnersBanner } from "@/components/partners-banner";

const services = [
  {
    id: "networking",
    icon: Network,
    title: "Networks that keep you connected.",
    label: "Enterprise networking",
    description:
      "From the campus to the data center. Build resilient SD-WAN, high-density wireless and high-speed network fabrics around the way your business works.",
    image: "/service-networking.webp",
    tags: ["SD-WAN", "Wi-Fi 7", "Data center fabrics"],
  },
  {
    id: "ai",
    icon: Cpu,
    title: "Your AI. Your infrastructure.",
    label: "Private AI & compute",
    description:
      "Bring intelligence closer to your data with GPU infrastructure, private language models and on-premise inference designed for your workloads.",
    image: "/service-ai.webp",
    tags: ["GPU clusters", "Private LLMs", "Data sovereignty"],
  },
  {
    id: "managed-it",
    icon: Server,
    title: "Operations with people behind them.",
    label: "Managed IT & security",
    description:
      "Keep your infrastructure in experienced hands. Monitoring, storage, backup and incident support, brought together under a clearly defined service agreement.",
    image: "/service-managed.webp",
    tags: ["24/7 monitoring", "Hybrid cloud", "Backup & recovery"],
  },
];
const process = [
  {
    title: "Understand & architect",
    description:
      "We review your requirements, existing environment and BOQ. Compatibility, capacity and risk are considered before procurement.",
  },
  {
    title: "Source & validate",
    description:
      "Hardware sourcing, configuration and pre-staging come together so your equipment arrives ready for the deployment plan.",
  },
  {
    title: "Deploy & support",
    description:
      "From commissioning and documentation to ongoing monitoring, your team has a clear path from handover to operations.",
  },
];

export default function HomePage() {
  const [category, setCategory] = useState("networking");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = (value = "networking") => {
    setCategory(value);
    setQuoteOpen(true);
  };
  return (
    <div>
      <section className="home-hero">
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <p className="hero-intro">
              <span /> Connect. Secure. Empower.
            </p>
            <h1>
              Built for what
              <br className="hidden sm:block" /> comes next.
            </h1>
            <p className="hero-description">
              The networks, private AI and IT infrastructure your business moves
              on. Expertly designed. Carefully delivered. Continuously
              supported.
            </p>
            <div className="hero-actions">
              <Button variant="brand" size="lg" onClick={() => openQuote()}>
                Let’s build your solution{" "}
                <ArrowUpRight className="ml-3 h-4 w-4" />
              </Button>
              <Link href="/solutions" className="text-link">
                Explore our expertise <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="hero-note">
              <ShieldCheck className="h-4 w-4" />
              <span>One partner, from architecture to operations.</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-label">
              <span className="status-dot" /> Infrastructure, working together
            </div>
            <Image
              src="/hero-graphic.webp"
              alt="Illustration of interconnected AI compute, networking and server infrastructure"
              width={1200}
              height={896}
              sizes="(max-width: 900px) 100vw, 58vw"
              preload
              className="hero-art"
            />
            <div className="hero-visual-caption">
              <Network className="h-5 w-5" />
              <div>
                <strong>Connected by design.</strong>
                <span>Network. Compute. Security.</span>
              </div>
              <span className="caption-line" />
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="site-container hero-bottom">
          <span>Enterprise technology. End to end.</span>
          <a href="#expertise">
            Discover Yasabe <ArrowDown className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>
      <PartnersBanner />
      <section id="expertise" className="section-space site-container">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Our expertise</p>
            <h2>
              Complex technology.
              <br />A clear way forward.
            </h2>
          </div>
          <p>
            Three connected practices. One team to bring your infrastructure
            together, from the first conversation to everyday operations.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, ...service }) => (
            <article className="service-card" key={service.id}>
              <Link
                href={`/solutions#${service.id}`}
                className="service-image-link"
                aria-label={`Explore ${service.label.toLowerCase()}`}
              >
                <Image
                  src={service.image}
                  alt={`${service.label} infrastructure illustration`}
                  width={640}
                  height={640}
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className="service-image"
                />
                <span className="service-image-arrow">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
              <div className="service-card-content">
                <p className="service-label">
                  <Icon className="h-4 w-4" />
                  {service.label}
                </p>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-tags">
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <button
                  className="text-link"
                  onClick={() => openQuote(service.id)}
                >
                  Discuss your project <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="approach-section">
        <div className="site-container approach-layout">
          <div className="approach-copy">
            <p className="section-kicker">The Yasabe approach</p>
            <h2>
              Good infrastructure
              <br />
              starts long before
              <br />
              the first connection.
            </h2>
            <p>
              A hardware list is only the beginning. We look at the whole
              environment: how systems connect, where your data lives and what
              your people need to keep moving.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">
                Meet your technology partner{" "}
                <ArrowUpRight className="ml-3 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="process-list">
            {process.map((step, i) => (
              <article className="process-step" key={step.title}>
                <span className="process-number">0{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="site-container section-space">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Designed around your business</p>
            <h2>
              Your next challenge.
              <br />
              Our starting point.
            </h2>
          </div>
          <Link href="/solutions#calculator" className="text-link">
            Build your project scope <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="needs-grid">
          {[
            {
              title: "Connect a growing enterprise",
              description:
                "Bring branches, people and applications together with a network designed to grow with you.",
              category: "networking",
              tag: "Connectivity",
            },
            {
              title: "Put private AI to work",
              description:
                "Plan the compute and data environment for inference, fine-tuning and enterprise knowledge.",
              category: "ai",
              tag: "Intelligence",
            },
            {
              title: "Take control of daily operations",
              description:
                "Give your internal team the visibility, backup and operational support it needs.",
              category: "managed-it",
              tag: "Continuity",
            },
          ].map((item) => (
            <Link
              className="need-item"
              href={`/solutions#${item.category}`}
              key={item.title}
            >
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="site-container contact-layout">
          <div>
            <p className="section-kicker">Start a conversation</p>
            <h2>
              Let’s make your next
              <br />
              move a confident one.
            </h2>
            <p>
              Have a BOQ, a brief or a challenge to solve?
              <br />
              Tell us what you’re working on.
            </p>
            <div className="contact-checks">
              <span>
                <Check /> Architecture review
              </span>
              <span>
                <Check /> Hardware sourcing
              </span>
              <span>
                <Check /> Ongoing support
              </span>
            </div>
          </div>
          <div className="contact-actions">
            <Button
              variant="brand"
              size="lg"
              onClick={() => openQuote("hardware-boq")}
            >
              Talk to our team <ArrowUpRight className="ml-4 h-5 w-5" />
            </Button>
            <a href="mailto:rfq@yasabetech.com">
              rfq@yasabetech.com <ArrowUpRight className="h-4 w-4" />
            </a>
            <span>Prefer to share a document? Attach it to your email.</span>
          </div>
        </div>
      </section>
      <RFQModal
        key={category}
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        initialCategory={category}
      />
    </div>
  );
}
