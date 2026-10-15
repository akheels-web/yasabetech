"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Cpu,
  Layers,
  Network,
  Radio,
  Search,
  Server,
  SlidersHorizontal,
  Video,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RFQModal } from "@/components/rfq-modal";
import { solutionsList } from "@/lib/solutions";
import {
  solutionCategories,
  type SolutionCategory,
} from "@/lib/solution-categories";

type Category = SolutionCategory;
const categoryIcons = {
  networking: Network,
  ai: Cpu,
  "managed-it": Server,
  telecom: Radio,
  "av-elv": Video,
  digital: Layers,
};
const categories = solutionCategories.map((category) => ({
  ...category,
  icon: categoryIcons[category.id],
}));
const blueprints = {
  networking: {
    site: "Dual-ISP SD-WAN gateway, enterprise wireless, access switching and monitoring.",
    enterprise:
      "Multi-site SD-WAN, campus switching, Wi-Fi 7 and segmented security policies.",
    datacenter:
      "Spine-leaf network fabric, redundant data center interconnects and telemetry.",
  },
  ai: {
    site: "Private AI or connected-device use case assessment, with compute, sensors and a local data dashboard sized to the workload.",
    enterprise:
      "Private AI compute or a multi-site IoT platform, with device onboarding, access policies and operational dashboards.",
    datacenter:
      "GPU compute, high-throughput fabric and workload orchestration, with IoT data ingestion and command-platform integration where required.",
  },
  "managed-it": {
    site: "Virtualization, shared storage, immutable backups and infrastructure monitoring.",
    enterprise:
      "Hyperconverged cluster, redundant switching, backup and managed operations.",
    datacenter:
      "Multi-site storage and compute, disaster recovery planning and continuous monitoring.",
  },
  telecom: {
    site: "Site coverage assessment, in-building connectivity, fiber links and telecom equipment integration.",
    enterprise:
      "Multi-site mobile and fixed connectivity, operational communications and coordinated telecom monitoring.",
    datacenter:
      "Redundant telecom access and transport, fiber interconnects, control-room communications and infrastructure monitoring.",
  },
  "av-elv": {
    site: "Meeting-room collaboration, structured cabling, access control, CCTV and facility monitoring sized to the site.",
    enterprise:
      "Standardized room AV, unified communications, contact-center integration and centrally managed building systems.",
    datacenter:
      "Structured cabling and rack planning, UPS requirements, video surveillance, access control and environmental monitoring.",
  },
  digital: {
    site: "Business application and workflow assessment, with cloud service selection and an initial integration plan.",
    enterprise:
      "Connected business applications, shared data workflows and a governed cloud platform for distributed teams.",
    datacenter:
      "Private or hybrid service platforms, data protection, integration infrastructure and workload governance.",
  },
};
const faqs = [
  {
    q: "Can I share an existing BOQ or tender document?",
    a: "Yes. Prepare an enquiry using the project form, then attach your spreadsheet, PDF or tender document in your email app. You can also email rfq@yasabetech.com directly.",
  },
  {
    q: "How do I choose the right infrastructure?",
    a: "Start with your workloads, sites and operational needs. Our scope builder provides an illustrative starting point. Final equipment, capacity, licensing and commercial terms require an architecture review.",
  },
  {
    q: "Can AI workloads stay within our environment?",
    a: "On-premise deployments can keep models, vector stores and inference within your own infrastructure. The design should define network boundaries, access controls and data residency requirements for your organization.",
  },
  {
    q: "What does ongoing support include?",
    a: "Support can include monitoring, maintenance, backup and incident escalation. Coverage hours, response targets, exclusions and service levels are agreed as part of your project scope.",
  },
];

export default function SolutionsPage() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [query, setQuery] = useState("");
  const [domain, setDomain] = useState<Category>("networking");
  const [scale, setScale] = useState<"site" | "enterprise" | "datacenter">(
    "enterprise",
  );
  const [support, setSupport] = useState("24/7 coverage");
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState("networking");
  const [quoteScope, setQuoteScope] = useState("");
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.slice(1);
      if (categories.some((item) => item.id === hash)) {
        setFilter(hash as Category);
        setQuery("");
      }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);
  const visible = solutionsList.filter(
    (item) =>
      (filter === "all" || item.category === filter) &&
      `${item.title} ${item.description} ${item.supportedTech} ${item.features.join(" ")}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const openQuote = (category: string, scope = "") => {
    setQuoteCategory(category);
    setQuoteScope(scope);
    setQuoteOpen(true);
  };
  const changeFilter = (category: Category | "all") => {
    setFilter(category);
    window.history.replaceState(
      null,
      "",
      category === "all" ? window.location.pathname : `#${category}`,
    );
  };
  const blueprint = blueprints[domain][scale];
  const scope = `Project scope builder\nService: ${categories.find((item) => item.id === domain)?.label}\nScale: ${scale === "site" ? "Single site" : scale === "enterprise" ? "Multi-site enterprise" : "Data center"}\nSupport: ${support}\n\nInitial architecture:\n${blueprint}\n\nPlease review the architecture and confirm sizing, availability and commercial terms.`;

  return (
    <div>
      <section className="page-hero">
        <div className="site-container">
          <p className="section-kicker">Our solutions</p>
          <h1>
            The right foundation.
            <br />
            For your next ambition.
          </h1>
          <p className="page-hero-description">
            Explore networking, AI and IoT, cloud, cybersecurity, telecom,
            workplace systems and digital platforms. Start with what you need.
            We’ll help with what comes next.
          </p>
          <div className="hero-actions">
            <Button variant="brand" onClick={() => openQuote("networking")}>
              Discuss your requirements{" "}
              <ArrowUpRight className="ml-3 h-4 w-4" />
            </Button>
            <a href="#calculator" className="text-link">
              <SlidersHorizontal className="h-4 w-4" />
              Build your project scope
            </a>
          </div>
        </div>
      </section>
      <section
        className="site-container solutions-catalog"
        aria-label="Solutions catalog"
      >
        <div className="solution-toolbar">
          <div className="solution-filters" aria-label="Filter solutions">
            <button
              aria-pressed={filter === "all"}
              onClick={() => changeFilter("all")}
            >
              All solutions <span>{solutionsList.length}</span>
            </button>
            {categories.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                aria-pressed={filter === id}
                onClick={() => changeFilter(id)}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}
          </div>
          <div className="solution-search">
            <Search className="h-4 w-4" />
            <input
              aria-label="Search solutions"
              type="search"
              placeholder="Search solutions or technology"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button aria-label="Clear search" onClick={() => setQuery("")}>
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
        <p aria-live="polite" className="results-count">
          {visible.length} {visible.length === 1 ? "solution" : "solutions"}
          {query.trim() ? ` matching “${query.trim()}”` : " to explore"}
        </p>
        {visible.length ? (
          categories
            .filter((category) => filter === "all" || category.id === filter)
            .map(({ id, label, icon: Icon }) => {
              const items = visible.filter((item) => item.category === id);
              return (
                items.length > 0 && (
                  <section className="solution-group" id={id} key={id}>
                    <h2>
                      <Icon className="h-5 w-5" />
                      {label}
                    </h2>
                    <div className="solution-grid">
                      {items.map((item) => (
                        <article
                          key={item.id}
                          id={item.id}
                          className="solution-card"
                        >
                          <div className="solution-card-heading">
                            <span>
                              {item.deploymentTime
                                ? `${item.deploymentTime} indicative`
                                : "Scope confirmed after review"}
                            </span>
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          <ul>
                            {item.features.map((feature) => (
                              <li key={feature}>
                                <Check className="h-3.5 w-3.5" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="solution-tech">
                            {item.supportedTech}
                          </div>
                          <button
                            className="text-link"
                            onClick={() =>
                              openQuote(
                                item.category,
                                `I would like to discuss: ${item.title}`,
                              )
                            }
                          >
                            Discuss this solution{" "}
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </article>
                      ))}
                    </div>
                  </section>
                )
              );
            })
        ) : (
          <div className="empty-solutions">
            <Search className="h-7 w-7" />
            <h2>No matching solutions</h2>
            <p>Try “SD-WAN”, “GPU”, “backup” or clear your filters.</p>
            <Button
              variant="outline"
              onClick={() => {
                setQuery("");
                changeFilter("all");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
        <p className="catalog-note">
          Architectures, delivery times and equipment are indicative. Final
          specifications, availability and service levels are confirmed during
          project scoping.
        </p>
      </section>
      <section className="approach-section" id="calculator">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Project scope builder</p>
              <h2>
                Make a start.
                <br />
                We’ll work out the details.
              </h2>
            </div>
            <p>
              Explore a starting architecture. This is an illustrative guide; a
              final design needs a review of your environment.
            </p>
          </div>
          <div className="scope-builder">
            <div className="scope-inputs">
              <fieldset>
                <legend>1. What are you planning?</legend>
                {categories.map((item) => (
                  <label key={item.id}>
                    <input
                      name="domain"
                      type="radio"
                      value={item.id}
                      checked={domain === item.id}
                      onChange={() => setDomain(item.id)}
                    />
                    {item.label}
                  </label>
                ))}
              </fieldset>
              <fieldset>
                <legend>2. What is the scale?</legend>
                {[
                  { id: "site" as const, label: "Single site" },
                  { id: "enterprise" as const, label: "Multi-site enterprise" },
                  { id: "datacenter" as const, label: "Data center" },
                ].map((item) => (
                  <label key={item.id}>
                    <input
                      name="scale"
                      type="radio"
                      value={item.id}
                      checked={scale === item.id}
                      onChange={() => setScale(item.id)}
                    />
                    {item.label}
                  </label>
                ))}
              </fieldset>
              <fieldset>
                <legend>3. What support do you need?</legend>
                {["24/7 coverage", "Business hours", "Help me decide"].map(
                  (item) => (
                    <label key={item}>
                      <input
                        name="support"
                        type="radio"
                        value={item}
                        checked={support === item}
                        onChange={() => setSupport(item)}
                      />
                      {item}
                    </label>
                  ),
                )}
              </fieldset>
            </div>
            <div className="scope-output" aria-live="polite">
              <p>Suggested starting point</p>
              <h3>{blueprint}</h3>
              <span>
                {support} · Final scope subject to architecture review
              </span>
              <Button variant="brand" onClick={() => openQuote(domain, scope)}>
                Discuss this project scope{" "}
                <ArrowUpRight className="ml-3 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="site-container section-space faq-section">
        <div>
          <p className="section-kicker">Before we get started</p>
          <h2>
            A few things
            <br />
            you might be wondering.
          </h2>
        </div>
        <div>
          {faqs.map((item, index) => (
            <article className="faq-item" key={item.q}>
              <h3>
                <button
                  aria-expanded={faqOpen === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  {item.q}
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 ${faqOpen === index ? "rotate-180" : ""}`}
                  />
                </button>
              </h3>
              <div id={`faq-answer-${index}`} hidden={faqOpen !== index}>
                <p>{item.a}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <RFQModal
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        initialCategory={quoteCategory}
        initialScope={quoteScope}
      />
    </div>
  );
}
