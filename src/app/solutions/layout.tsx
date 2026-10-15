import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Solutions",
  description:
    "Explore enterprise networking, AI and IoT, cloud, cybersecurity, telecom, AV, communications and digital platforms. Build your project scope with Yasabe.",
  alternates: { canonical: "/solutions/" },
  openGraph: {
    title: "Enterprise Solutions | Yasabe Technologies",
    url: "/solutions/",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
