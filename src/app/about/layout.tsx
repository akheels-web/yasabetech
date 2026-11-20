import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Misyatech | Gulf Technology Partner for Oman & Dubai",
  description:
    "Meet Misyatech — an architecture-led enterprise technology partner bringing networking, private AI infrastructure, BOQ validation and managed IT together across Oman and Dubai.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Misyatech | Oman & Dubai Enterprise Technology Partner",
    description:
      "From BOQ validation and staging to clean handover and managed continuity across Muscat and Dubai.",
    url: "/about/",
    images: [
      {
        url: "/images/og-misyatech.webp",
        width: 1200,
        height: 630,
        alt: "About Misyatech — Gulf Enterprise Technology Partner",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
