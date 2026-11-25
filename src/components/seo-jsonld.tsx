import { siteUrl } from "@/lib/site";
import { SALES_EMAIL } from "@/lib/enquiry";
import { solutionAreas } from "@/lib/solution-areas";
import { allSpecializedServices } from "@/lib/specialized-services";

export function SiteJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Misyatech",
        alternateName: ["ميسياتك", "Misyatech Technologies"],
        url: siteUrl,
        logo: `${siteUrl}/icon.webp`,
        image: `${siteUrl}/logo.webp`,
        email: SALES_EMAIL,
        description:
          "Enterprise networking, private AI compute and managed IT infrastructure partner serving organizations in Muscat, Oman and Dubai, UAE.",
        areaServed: [
          { "@type": "Country", name: "Oman" },
          { "@type": "City", name: "Muscat" },
          { "@type": "City", name: "Sohar" },
          { "@type": "City", name: "Duqm" },
          { "@type": "City", name: "Salalah" },
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "City", name: "Dubai" },
          { "@type": "City", name: "Abu Dhabi" },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: SALES_EMAIL,
            areaServed: ["OM", "AE"],
            availableLanguage: ["English", "Arabic"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Misyatech | Oman & Dubai Enterprise IT & Private AI",
        inLanguage: ["en", "ar"],
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Misyatech Enterprise Infrastructure & Private AI",
        url: siteUrl,
        image: `${siteUrl}/images/og-misyatech.webp`,
        email: SALES_EMAIL,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: ["Oman", "Muscat", "Dubai", "United Arab Emirates"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Misyatech Enterprise Technology & Software Services",
          itemListElement: [
            ...solutionAreas.map((area) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: area.title,
                description: area.description,
              },
            })),
            ...allSpecializedServices.map((svc) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: svc.title,
                description: svc.tagline,
              },
            })),
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export function PageJsonLd({
  breadcrumbs,
  faqItems,
}: {
  breadcrumbs: { name: string; path: string }[];
  faqItems?: readonly { q: string; a: string }[];
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.path}`,
    })),
  };

  const faqSchema = faqItems?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
