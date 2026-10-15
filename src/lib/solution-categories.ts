export const solutionCategories = [
  {
    id: "networking",
    label: "Networking",
    enquiryLabel: "Enterprise networking",
  },
  {
    id: "ai",
    label: "AI & IoT",
    enquiryLabel: "Private AI, IoT & smart systems",
  },
  {
    id: "managed-it",
    label: "ICT & managed IT",
    enquiryLabel: "Cloud, cybersecurity & managed IT",
  },
  {
    id: "telecom",
    label: "Mobility & telecom",
    enquiryLabel: "Mobility & telecom",
  },
  {
    id: "av-elv",
    label: "AV, UC & ELV",
    enquiryLabel: "AV, communications & building systems",
  },
  {
    id: "digital",
    label: "Digital",
    enquiryLabel: "Digital platforms & services",
  },
] as const;

export type SolutionCategory = (typeof solutionCategories)[number]["id"];
