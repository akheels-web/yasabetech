import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "IT Solutions & Services in Oman & Dubai | Web, CRM, HRM, Fleet, AI Voice & Core IT",
  description:
    "Explore Misyatech services across Oman and Dubai: website designing, CRM, HRM, fleet management, AI voice calling, Project AMC, Intune, Active Directory, NTP server, DHCP failover, DNS management, networking and private AI.",
  alternates: { canonical: "/solutions/" },
  openGraph: {
    title: "IT Solutions & Services for Oman & Dubai | Misyatech",
    description:
      "Bilingual web design, CRM, HRM, fleet management, AI voice calling, Project AMC, Intune, AD, NTP, DHCP failover, DNS and enterprise networking across Oman and Dubai.",
    url: "/solutions/",
    images: [
      {
        url: "/images/og-misyatech.webp",
        width: 1200,
        height: 630,
        alt: "Misyatech Enterprise IT Solutions for Oman and Dubai",
      },
    ],
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
