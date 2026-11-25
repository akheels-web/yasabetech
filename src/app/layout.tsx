import type { Metadata, Viewport } from "next";
import {
  Cairo,
  IBM_Plex_Sans_Arabic,
  Outfit,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgressRail } from "@/components/interactive/scroll-progress";
import { SiteJsonLd } from "@/components/seo-jsonld";
import { siteUrl } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07142B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Misyatech | Enterprise IT, Networking & Private AI in Oman & Dubai",
    template: "%s | Misyatech",
  },
  description:
    "Misyatech delivers enterprise networking, private AI, AI voice calling, website designing, CRM, HRM, fleet management, Microsoft Intune, Active Directory, NTP, DHCP failover, DNS and Project AMC across Oman and Dubai.",
  keywords: [
    "Misyatech",
    "ميسياتك",
    "Enterprise IT Oman",
    "IT Solutions Muscat",
    "Enterprise Networking Dubai",
    "Website Designing Oman Dubai",
    "CRM HRM Software Muscat Dubai",
    "Fleet Management Oman UAE",
    "AI Voice Calling Arabic English",
    "Project AMC IT Support",
    "Microsoft Intune MDM",
    "Active Directory Management",
    "NTP Server Time Sync",
    "DHCP Failover",
    "DNS Management",
  ],
  authors: [{ name: "Misyatech", url: siteUrl }],
  creator: "Misyatech",
  publisher: "Misyatech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_OM", "ar_AE"],
    siteName: "Misyatech",
    title: "Misyatech | Enterprise IT, Networking & Private AI in Oman & Dubai",
    description:
      "Architecture-led enterprise networking, private AI compute and managed IT across Muscat, Oman and Dubai, UAE.",
    url: "/",
    images: [
      {
        url: "/images/og-misyatech.webp",
        width: 1200,
        height: 630,
        alt: "Misyatech contemporary architectural workspace serving Oman and Dubai enterprises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Misyatech | Oman & Dubai Enterprise IT & Private AI",
    description:
      "Enterprise networking, private AI compute, cybersecurity and BOQ sourcing across Oman and Dubai.",
    images: ["/images/og-misyatech.webp"],
  },
  other: {
    "geo.region": "OM;AE",
    "geo.placename": "Muscat, Oman; Dubai, UAE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${jakarta.variable} ${outfit.variable} ${cairo.variable} ${ibmArabic.variable} light scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-white text-[#08152B] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
        <LanguageProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <ScrollProgressRail />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        <SiteJsonLd />
      </body>
    </html>
  );
}
