import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Solutions in Oman & Saudi Arabia",
  description:
    "Explore IT solutions for businesses in Oman and Saudi Arabia: networking, cloud, cybersecurity, private AI, workplace systems and technology sourcing.",
  alternates: { canonical: "/solutions/" },
  openGraph: {
    title: "IT Solutions in Oman & Saudi Arabia | Yasabe Technologies",
    description: "Networking, cloud, cybersecurity and workplace technology, from project planning to ongoing support.",
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
