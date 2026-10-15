import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { siteUrl } from "@/lib/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yasabe Technologies | Built for what comes next",
    template: "%s | Yasabe Technologies",
  },
  description:
    "Enterprise networking, private AI infrastructure and managed IT. Yasabe Technologies brings architecture, hardware sourcing and ongoing support together. Connect. Secure. Empower.",
  keywords: [
    "Enterprise Networking",
    "AI Services",
    "Managed IT Services",
    "Yasabe Technologies",
    "SD-WAN",
    "Wi-Fi 7",
    "GPU Compute",
    "Private AI Infrastructure",
    "Enterprise IT Support",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Yasabe Technologies",
    title: "Yasabe Technologies | Built for what comes next",
    description:
      "Enterprise networks, private AI and managed IT. One connected approach from architecture to operations.",
    url: "/",
    images: [
      {
        url: "/images/workspace-hero.webp",
        width: 1200,
        height: 900,
        alt: "A contemporary workspace built around people and possibility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasabe Technologies",
    description:
      "Built for what comes next. Enterprise networking, private AI and managed IT.",
    images: ["/images/workspace-hero.webp"],
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
      className={`${jakarta.variable} ${outfit.variable} light scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-900">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
