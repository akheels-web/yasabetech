export const solutionCategories = [
  {
    id: "networking",
    label: "Networking",
    labelAr: "الشبكات والربط",
    enquiryLabel: "Enterprise networking",
    enquiryLabelAr: "الشبكات المؤسسية واللاسلكية",
  },
  {
    id: "ai",
    label: "AI & IoT",
    labelAr: "الذكاء الاصطناعي الخاص",
    enquiryLabel: "Private AI, IoT & smart systems",
    enquiryLabelAr: "الذكاء الاصطناعي الخاص وإنترنت الأشياء",
  },
  {
    id: "managed-it",
    label: "ICT & managed IT",
    labelAr: "تقنية المعلومات والأمن",
    enquiryLabel: "Cloud, cybersecurity & managed IT",
    enquiryLabelAr: "السحابة والأمن السيبراني والإدارة التقنية",
  },
  {
    id: "telecom",
    label: "Mobility & telecom",
    labelAr: "الاتصالات والألياف",
    enquiryLabel: "Mobility & telecom",
    enquiryLabelAr: "الاتصالات المؤسسية والبنية اللاسلكية",
  },
  {
    id: "av-elv",
    label: "AV, UC & ELV",
    labelAr: "أنظمة المباني والاجتماعات",
    enquiryLabel: "AV, communications & building systems",
    enquiryLabelAr: "أنظمة قاعات الاجتماعات والمباني الذكية",
  },
  {
    id: "digital",
    label: "Digital",
    labelAr: "المنصات الرقمية والأتمتة",
    enquiryLabel: "Digital platforms & services",
    enquiryLabelAr: "المنصات الرقمية وأتمتة الأعمال",
  },
] as const;

export type SolutionCategory = (typeof solutionCategories)[number]["id"];
