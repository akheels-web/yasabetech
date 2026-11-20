export const solutionAreas = [
  {
    id: "networking",
    category: "networking",
    title: "Networking, DNS, DHCP & NTP",
    titleAr: "الشبكات، DNS، تجاوز فشل DHCP وNTP",
    description:
      "Enterprise Wi-Fi 7, campus switching, SD-WAN, split-horizon DNS, DHCP failover clusters and Stratum NTP time infrastructure.",
    descriptionAr:
      "شبكات Wi-Fi 7، والمبدلات المركزية، وSD-WAN، وإدارة DNS، وعناقيد DHCP عالية التوافر، وخوادم الوقت الدقيقة NTP.",
    useCases: "Headquarters, regional branches & hospitality",
    useCasesAr: "المقار الرئيسية، الفروع الإقليمية، والضيافة",
    includes: [
      "Enterprise Wi-Fi 7, core switching & multi-site SD-WAN",
      "DHCP failover clusters & IPAM resilience across VLANs",
      "Split-horizon DNS management, DNSSEC & RPZ filtering",
      "Dedicated Stratum NTP time sync for identity & logs",
    ],
    includesAr: [
      "شبكات Wi-Fi 7 المؤسسية والتبديل المركزي وربط الفروع SD-WAN",
      "أنظمة DHCP Failover وإدارة العناوين IPAM لجميع شبكات VLAN",
      "إدارة أنظمة DNS وتقوية النطاقات وتوقيع DNSSEC",
      "خوادم مزامنة الوقت الدقيقة NTP لربط الأنظمة والسجلات",
    ],
    support:
      "We assess coverage and IP/name architecture, stage failover pairs and support multi-site rollout.",
    supportAr:
      "نصمم التغطية وبنية العناوين والأسماء، ونهيئ أنظمة تجاوز الفشل مسبقاً لضمان إطلاق مستقر.",
  },
  {
    id: "managed-it",
    category: "managed-it",
    title: "AD, Intune, Servers & Project AMC",
    titleAr: "إدارة AD وIntune والخوادم وعقود AMC",
    description:
      "Active Directory & Entra ID management, Microsoft Intune MDM, compute/storage infrastructure and structured Project AMC support.",
    descriptionAr:
      "إدارة Active Directory وEntra ID، ونظام Microsoft Intune للأجهزة الطرفية، والخوادم والتخزين، وعقود الصيانة السنوية Project AMC.",
    useCases: "Identity governance, endpoint fleets & 12-month AMC",
    useCasesAr: "حوكمة الهوية، إدارة الأجهزة الطرفية، وعقود الصيانة السنوية",
    includes: [
      "Active Directory hardening, GPO cleanup & Entra ID sync",
      "Microsoft Intune Autopilot & endpoint compliance",
      "Servers, HCI virtualization, immutable backup & DR",
      "Project AMC quarterly audits, RMA & priority escalation",
    ],
    includesAr: [
      "تحصين Active Directory وتنظيم سياسات GPO والربط السحابي",
      "تهيئة Microsoft Intune وAutopilot وإدارة الأجهزة عن بُعد",
      "الخوادم والبنية فائقة التقارب والنسخ الاحتياطي المحصّن",
      "عقود Project AMC للصيانة الوقائية والتصعيد الهندسي السريع",
    ],
    support:
      "We stabilize identity and endpoint fleets, size compute/backup capacity and maintain systems year-round under Project AMC.",
    supportAr:
      "نعزز استقرار الهوية والأجهزة الطرفية، ونصمم قدرات الخوادم، ونتولى الصيانة الدورية طوال العام عبر عقود AMC.",
  },
  {
    id: "cybersecurity",
    category: "managed-it",
    title: "Cybersecurity & protection",
    titleAr: "الأمن السيبراني وحماية الأصول",
    description:
      "Zero-trust network segmentation, next-gen firewalls and endpoint governance tailored to regional enterprise environments.",
    descriptionAr:
      "تجزئة شبكية وفق مبدأ الثقة الصفرية، وجدران حماية متقدمة، وحماية للأجهزة بما يلائم بيئات الأعمال الخليجية.",
    useCases: "Secure remote access & operational resilience",
    useCasesAr: "الوصول الآمن عن بُعد واستمرارية الأعمال",
    includes: [
      "Next-generation firewalls & micro-segmentation",
      "Endpoint protection & identity governance",
      "Vulnerability posture reviews & remediation",
      "Structured security monitoring & escalation",
    ],
    includesAr: [
      "جدران الحماية الحديثة والتجزئة الدقيقة للشبكات",
      "حماية الأجهزة الطرفية وإدارة الهويات والصلاحيات",
      "مراجعة الثغرات الأمنية ووضع خطط المعالجة",
      "رصد الحوادث الأمنية ومسارات التصعيد المعتمدة",
    ],
    support:
      "We evaluate perimeter and internal exposure, deploy layered defenses and document escalation paths.",
    supportAr:
      "نراجع نقاط التعرض الداخلية والخارجية، وننفذ طبقات الحماية المناسبة، ونوثق إجراءات الاستجابة.",
  },
  {
    id: "ai",
    category: "ai",
    title: "AI Voice Calling & Private AI",
    titleAr: "الاتصال الصوتي الذكي والذكاء الاصطناعي الخاص",
    description:
      "24/7 bilingual Gulf Arabic & English AI voice calling agents, private GPU compute and sovereign RAG knowledge platforms.",
    descriptionAr:
      "وكلاء اتصال صوتي بالذكاء الاصطناعي بالعربية والإنجليزية، وخوادم GPU خاصة، ومنصات بحث معرفي داخل نطاقك.",
    useCases: "Automated voice desks, private LLMs & smart sites",
    useCasesAr: "مراكز الاتصال الذكية، النماذج اللغوية الخاصة، والمرافق المتصلة",
    includes: [
      "Bilingual Arabic & English AI Voice Calling agents",
      "On-premise GPU compute & cluster sizing",
      "Private RAG knowledge bases & internal AI assistants",
      "IoT sensors, telemetry & operational dashboards",
    ],
    includesAr: [
      "وكلاء AI Voice Calling للرد والمكالمات بالعربية والإنجليزية",
      "تخطيط وتجهيز خوادم الحوسبة الرسومية GPU محلياً",
      "قواعد المعرفة الخاصة والبحث الذكي داخل وثائق المؤسسة",
      "حساسات إنترنت الأشياء ولوحات المتابعة التشغيلية",
    ],
    support:
      "We connect AI voice workflows with your PBX/CRM and size private GPU compute strictly inside your data boundary.",
    supportAr:
      "نربط أنظمة الاتصال الذكي مع السنترال والـ CRM، ونصمم قدرات GPU الخاصة مع بقاء بياناتك داخل مؤسستك.",
  },
  {
    id: "telecom",
    category: "telecom",
    title: "Telecom & connectivity",
    titleAr: "الاتصالات والألياف الضوئية والتغطية الداخلية",
    description:
      "Structured fiber backbones, in-building wireless coverage and operational communications across campuses and industrial sites.",
    descriptionAr:
      "شبكات الألياف الضوئية، وتغطية الاتصالات داخل المباني الكبرى، وأنظمة الاتصال التشغيلي للمواقع الصناعية والتجارية.",
    useCases: "Towers, ports, logistics hubs & multi-site campuses",
    useCasesAr: "الأبراج التجارية، الموانئ، المراكز اللوجستية، والمجمعات",
    includes: [
      "Campus & building fiber optic backbones",
      "In-building wireless & coverage planning",
      "Operational dispatch & control-room comms",
      "Link testing, certification & maintenance plans",
    ],
    includesAr: [
      "شبكات العمود الفقري بالألياف الضوئية للمجمعات والمباني",
      "تخطيط التغطية الخلوية واللاسلكية داخل الأبراج والمرافق",
      "اتصالات غرف التحكم والعمليات الميدانية",
      "فحص الوصلات وتوثيق الاختبارات وخطط الصيانة",
    ],
    support:
      "We survey site infrastructure, coordinate cabling and active telecom layers and validate signal quality on handover.",
    supportAr:
      "نعاين الموقع ميدانياً، وننسق تمديدات الألياف والأنظمة الفعالة، ونختبر جودة الإشارة عند التسليم.",
  },
  {
    id: "av-elv",
    category: "av-elv",
    title: "Workplace & building systems",
    titleAr: "بيئات العمل الذكية والأنظمة السمعية والبصرية",
    description:
      "Executive boardrooms, unified communications, IP CCTV, access control and structured ELV systems engineered seamlessly.",
    descriptionAr:
      "تجهيز مجالس الإدارة، والاتصالات الموحدة، وكاميرات المراقبة IP، والتحكم بالدخول، وأنظمة التيار الخفيف بتكامل تام.",
    useCases: "Executive majlis boardrooms, offices & towers",
    useCasesAr: "قاعات مجالس الإدارة، المكاتب الحديثة، والأبراج الإدارية",
    includes: [
      "Boardroom AV, acoustic & video conferencing",
      "IP CCTV, access control & visitor systems",
      "Structured cabling, smart racks & UPS power",
      "Unified communications & contact-center setup",
    ],
    includesAr: [
      "الأنظمة السمعية والبصرية والاجتماعات المرئية لقاعات الإدارة",
      "أنظمة المراقبة CCTV والتحكم بالدخول وإدارة الزوار",
      "الكوابل المهيكلة، الخزائن الذكية، ومزودات الطاقة UPS",
      "الاتصالات الموحدة ومراكز خدمة العملاء المؤسسية",
    ],
    support:
      "We coordinate space-by-space design, integrate ELV and collaboration platforms and train your staff before launch.",
    supportAr:
      "نصمم كل مساحة حسب وظيفتها، ونربط أنظمة المباني والتعاون الرقمي مع تدريب فريقك قبل التشغيل.",
  },
  {
    id: "digital",
    category: "digital",
    title: "Web, CRM, HRM & Fleet Platforms",
    titleAr: "تصميم المواقع وCRM وHRM وإدارة الأساطيل",
    description:
      "Bilingual website designing, enterprise CRM pipelines, GCC-ready HRM platforms and real-time GPS fleet management systems.",
    descriptionAr:
      "تصميم المواقع المؤسسية، ومنصات CRM للمبيعات، وأنظمة الموارد البشرية HRM، وحلول تتبع وإدارة الأساطيل Fleet Management.",
    useCases: "Digital growth, workforce HR & logistics fleets",
    useCasesAr: "النمو الرقمي، الموارد البشرية، وإدارة أساطيل النقل",
    includes: [
      "Bilingual EN/AR website designing & SEO architecture",
      "CRM pipelines, BOQ quoting & WhatsApp/email automation",
      "HRM attendance, leave workflows & payroll preparation",
      "GPS fleet management, geofencing & maintenance alerts",
    ],
    includesAr: [
      "تصميم مواقع ثنائية اللغة بسرعة فائقة وتوافق SEO",
      "أنظمة CRM لمتابعة الفرص وجداول الكميات والأتمتة",
      "منصات HRM للحضور والموافقات ومسيرات الرواتب",
      "حلول إدارة الأساطيل والتتبع اللحظي GPS والصيانة",
    ],
    support:
      "We design, customize and integrate customer-facing websites, CRM, HRM and fleet platforms into your existing ERP and identity.",
    supportAr:
      "نصمم ونخصص ونربط المواقع وأنظمة CRM وHRM وإدارة الأساطيل مع أنظمة ERP والهوية المؤسسية لديك.",
  },
  {
    id: "hardware-boq",
    category: "hardware-boq",
    title: "Hardware & software sourcing",
    titleAr: "توريد الأجهزة والبرمجيات ومراجعة BOQ",
    description:
      "Transparent BOQ validation, multi-vendor enterprise procurement, licensing alignment and staged delivery across Oman and Dubai.",
    descriptionAr:
      "مراجعة دقيقة لجداول الكميات BOQ، وتوريد الأجهزة والرخص المؤسسية من كبرى الشركات العالمية مع تخطيط التسليم في عُمان ودبي.",
    useCases: "New office buildouts, tenders & hardware refreshes",
    useCasesAr: "تجهيز المكاتب الجديدة، المناقصات، وتحديث البنية التحتية",
    includes: [
      "Technical BOQ review & SKU compatibility checks",
      "Servers, networking, endpoints & rack gear",
      "Enterprise software licensing & renewals",
      "Pre-configuration, staging & phased rollout",
    ],
    includesAr: [
      "مراجعة جداول الكميات BOQ والتحقق من توافق القطع والرخص",
      "توريد الخوادم، أجهزة الشبكات، محطات العمل، والملحقات",
      "تراخيص البرمجيات المؤسسية وتجديد عقود الدعم",
      "التهيئة المسبقة والاختبار والجدولة المرحلية للتسليم",
    ],
    support:
      "We verify technical compatibility, confirm lead times and licensing terms and coordinate procurement directly to site.",
    supportAr:
      "نتحقق من التوافق التقني ومواعيد التوريد وشروط التراخيص لضمان وصول التجهيزات جاهزة للتشغيل في موقعك.",
  },
] as const;

export type SolutionArea = (typeof solutionAreas)[number];
