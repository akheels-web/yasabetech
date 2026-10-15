import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Yasabe",
  description:
    "Meet your technology partner for enterprise networking, private AI and managed IT, from architecture and sourcing to deployment and support.",
  alternates: { canonical: "/about/" },
  openGraph: { title: "About Yasabe Technologies", url: "/about/" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
