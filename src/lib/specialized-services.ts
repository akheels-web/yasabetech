export interface SpecializedService {
  id: string;
  category: "digital" | "ai" | "managed-it" | "networking";
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  deliverables: string[];
  deliverablesAr: string[];
  outcome: string;
  outcomeAr: string;
}

export interface ServiceSuite {
  id: string;
  label: string;
  labelAr: string;
  image: string;
  imageAlt: string;
  imageAltAr: string;
  caption: string;
  captionAr: string;
  services: SpecializedService[];
}

export const serviceSuites: ServiceSuite[] = [
  {
    id: "web-crm-hrm",
    label: "Web, CRM & HRM",
    labelAr: "المواقع وCRM وHRM",
    image: "/images/creative-web-crm-hrm.webp",
    imageAlt:
      "Modern Gulf digital product and executive enterprise workspace at twilight",
    imageAltAr:
      "مساحة عمل تنفيذية حديثة لتطوير المواقع ومنصات الأعمال الرقمية",
    caption: "Digital experience, customer pipelines and workforce governance.",
    captionAr: "تصميم المواقع، وإدارة علاقات العملاء، ومنظومات الموارد البشرية.",
    services: [
      {
        id: "website-designing",
        category: "digital",
        title: "Website Designing",
        titleAr: "تصميم وتطوير المواقع المؤسسية",
        tagline:
          "High-craft bilingual EN/AR corporate websites engineered for speed, SEO and executive conversion.",
        taglineAr:
          "مواقع مؤسسية ثنائية اللغة (عربي/إنجليزي RTL) مصممة للسرعة ومحركات البحث وتجربة الزوار.",
        deliverables: [
          "Custom bilingual Arabic RTL & English UX/UI architecture",
          "Sub-second Next.js static or hybrid cloud delivery",
          "Technical SEO, JSON-LD schema & WebP media pipelines",
          "Integrated RFQ, tender & lead capture routing",
        ],
        deliverablesAr: [
          "تصميم واجهات ثنائية اللغة (عربية RTL وإنجليزية)",
          "أداء فائق السرعة مع استضافة سحابية آمنة",
          "تهيئة SEO شاملة، بيانات JSON-LD، وضغط صور WebP",
          "ربط نماذج الطلبات وعروض الأسعار مباشرة بالبريد والـ CRM",
        ],
        outcome: "Corporate launches & brand transformations in Oman & Dubai",
        outcomeAr: "إطلاق المواقع المؤسسية والتحول الرقمي في عُمان ودبي",
      },
      {
        id: "crm",
        category: "digital",
        title: "CRM Systems",
        titleAr: "أنظمة إدارة علاقات العملاء (CRM)",
        tagline:
          "Unify sales pipelines, tender follow-ups, WhatsApp/email touchpoints and executive forecasting.",
        taglineAr:
          "توحيد مسارات المبيعات، ومتابعة المناقصات، والتواصل متعدد القنوات، وتقارير الإدارة التنفيذية.",
        deliverables: [
          "Lead capture, deal stages & BOQ quotation tracking",
          "Bilingual Arabic/English customer portals & notifications",
          "Email, telephony & WhatsApp Business workflow integration",
          "Role-based permissions & regional revenue dashboards",
        ],
        deliverablesAr: [
          "إدارة العملاء المحتملين ومراحل الصفقات وجداول الكميات",
          "بوابات عملاء وتنبيهات باللغتين العربية والإنجليزية",
          "ربط البريد الإلكتروني والاتصال وواتساب للأعمال",
          "صلاحيات مخصصة ولوحات مؤشرات أداء دقيقة",
        ],
        outcome: "Faster sales velocity & zero missed regional enquiries",
        outcomeAr: "تسريع دورة المبيعات وعدم ضياع أي فرصة تجارية",
      },
      {
        id: "hrm",
        category: "digital",
        title: "HRM & Workforce Platforms",
        titleAr: "منصات الموارد البشرية وشؤون الموظفين (HRM)",
        tagline:
          "Streamline attendance, leave approvals, payroll readiness and employee self-service across branches.",
        taglineAr:
          "تنظيم الحضور والانصراف، والموافقات، ومسيرات الرواتب، والخدمة الذاتية عبر كافة الفروع.",
        deliverables: [
          "Employee records, contract alerts & document vault",
          "Biometric & geo-fenced attendance synchronization",
          "Multi-tier leave, expense & approval workflows",
          "GCC WPS-aligned payroll preparation & payslip portal",
        ],
        deliverablesAr: [
          "ملفات الموظفين وتنبيهات انتهاء العقود والوثائق",
          "مزامنة أجهزة البصمة والحضور عبر الفروع والمواقع",
          "مسارات آلية للإجازات والعهد والموافقات الإدارية",
          "تجهيز مسيرات الرواتب المتوافقة مع أنظمة حماية الأجور",
        ],
        outcome: "Centralized HR visibility across Muscat & Dubai teams",
        outcomeAr: "رؤية موحدة لشؤون الموظفين بين مسقط ودبي",
      },
    ],
  },
  {
    id: "fleet-mobility",
    label: "Fleet Management",
    labelAr: "إدارة الأساطيل",
    image: "/images/creative-fleet-management.webp",
    imageAlt:
      "Glass executive terrace overlooking illuminated Gulf expressway and logistics corridor at twilight",
    imageAltAr:
      "شرفة زجاجية مطلة على طريق سريع وممر لوجستي خليجي مضاء عند الغسق",
    caption: "Real-time fleet visibility across highways, ports and yards.",
    captionAr: "رؤية لحظية لحركة الأساطيل عبر الطرق السريعة والموانئ.",
    services: [
      {
        id: "fleet-management",
        category: "digital",
        title: "Fleet Management",
        titleAr: "إدارة الأساطيل والتتبع الذكي (Fleet Management)",
        tagline:
          "Monitor live vehicle telemetry, driver behavior, geofences, fuel usage and preventive servicing.",
        taglineAr:
          "متابعة المركبات لحظياً عبر GPS، والسياج الجغرافي، وسلوك القيادة، واستهلاك الوقود، وجداول الصيانة.",
        deliverables: [
          "Live GPS tracking, route playback & corridor geofencing",
          "Driver safety scoring, harsh braking & speed alerts",
          "Fuel telemetry, idle-time reduction & cost analytics",
          "Scheduled maintenance, registration & insurance reminders",
        ],
        deliverablesAr: [
          "تتبع GPS لحظي، واستعراض المسارات، وتنبيهات السياج الجغرافي",
          "تقييم سلامة القيادة وتنبيهات السرعة والتوقف الطويل",
          "مراقبة استهلاك الوقود وتقارير خفض التكاليف التشغيلية",
          "تنبيهات الصيانة الدورية وتجديد التراخيص والتأمين",
        ],
        outcome: "Built for Sohar, Duqm, Muscat & Dubai logistics corridors",
        outcomeAr: "مصمم لممرات النقل والخدمات اللوجستية في صحار والدقم ومسقط ودبي",
      },
      {
        id: "field-dispatch",
        category: "digital",
        title: "Field Dispatch & Asset Tracking",
        titleAr: "إدارة المهام الميدانية وتتبع الأصول",
        tagline:
          "Coordinate field engineers, delivery schedules, proof-of-delivery and high-value equipment.",
        taglineAr:
          "تنسيق الفنيين الميدانيين، وجداول التوصيل، وإثبات التسليم، وتتبع المعدات عالية القيمة.",
        deliverables: [
          "Automated trip assignment & driver mobile checklists",
          "Digital proof-of-delivery & cold-chain temperature alerts",
          "Cross-border Oman–UAE transit milestone visibility",
          "ERP/CRM API webhooks for automated customer updates",
        ],
        deliverablesAr: [
          "توزيع المهام آلياً وقوائم فحص المركبة الرقمية",
          "إثبات التسليم الإلكتروني ومراقبة درجات الحرارة الحساسة",
          "متابعة مراحل العبور بين سلطنة عُمان والإمارات",
          "ربط برمجي مع أنظمة ERP وCRM لإشعار العملاء تلقائياً",
        ],
        outcome: "Higher on-time delivery with full operational audit trails",
        outcomeAr: "التزام أعلى بمواعيد التسليم مع سجل تشغيلي متكامل",
      },
    ],
  },
  {
    id: "ai-voice-automation",
    label: "AI Voice Calling",
    labelAr: "الاتصال الصوتي بالذكاء الاصطناعي",
    image: "/images/creative-ai-voice.webp",
    imageAlt:
      "Executive studio table with sculptural prism glass wave catching sky-blue and violet light",
    imageAltAr:
      "استوديو تنفيذي يضم مجسماً زجاجياً للموجات الصوتية بإضاءة زرقاء وبنفسجية",
    caption: "Natural bilingual Arabic & English AI voice reception and routing.",
    captionAr: "وكلاء اتصال ذكاء اصطناعي يتحدثون العربية والإنجليزية بطلاقة.",
    services: [
      {
        id: "ai-voice-calling",
        category: "ai",
        title: "AI Voice Calling",
        titleAr: "الاتصال الصوتي الذكي (AI Voice Calling)",
        tagline:
          "24/7 natural Gulf Arabic and English AI voice agents for inbound reception, bookings and outbound follow-ups.",
        taglineAr:
          "وكلاء صوت بالذكاء الاصطناعي يتحدثون العربية الخليجية والإنجليزية على مدار الساعة للاستقبال وحجز المواعيد والمتابعة.",
        deliverables: [
          "Low-latency Gulf Arabic & English conversational speech",
          "Appointment scheduling, lead qualification & order status",
          "Warm SIP/PBX handoff to live agents with call summary",
          "Automated transcripts & CRM ticket/lead logging",
        ],
        deliverablesAr: [
          "تفاعل صوتي فوري باللهجة الخليجية واللغة الإنجليزية",
          "حجز المواعيد، وتأهيل العملاء المحتملين، والرد على الاستفسارات",
          "تحويل سلس للموظف المختص مع ملخص فوري للمكالمة",
          "تفريغ نصي تلقائي وتسجيل المكالمة داخل نظام CRM",
        ],
        outcome: "Zero missed customer calls across peak & after-hours windows",
        outcomeAr: "صفر مكالمات فائتة في أوقات الذروة وخارج ساعات الدوام",
      },
      {
        id: "private-ai-assistants",
        category: "ai",
        title: "Private Enterprise AI Assistants",
        titleAr: "مساعدو المعرفة الخاصون بالذكاء الاصطناعي",
        tagline:
          "Customer-hosted bilingual knowledge assistants connected strictly to internal policies, SOPs and manuals.",
        taglineAr:
          "مساعدو معرفة ثنائيو اللغة داخل بيئتك الخاصة مرتبطون بالسياسات الداخلية والأدلة التشغيلية.",
        deliverables: [
          "Private RAG indexing over PDF, SharePoint & internal docs",
          "Strict RBAC permissions so staff see only authorized files",
          "On-premise GPU or regional private boundary hosting",
          "Source citations on every Arabic and English response",
        ],
        deliverablesAr: [
          "فهرسة ذكية للوثائق وملفات SharePoint داخل نطاقك الخاص",
          "صلاحيات وصول دقيقة تضمن سرية الملفات الإدارية",
          "تشغيل محلي على خوادم GPU أو سحابة إقليمية خاصة",
          "توثيق المصادر لكل إجابة باللغتين العربية والإنجليزية",
        ],
        outcome: "Instant answers without exposing proprietary data externally",
        outcomeAr: "إجابات فورية للفرق دون إرسال أي بيانات خارج المؤسسة",
      },
    ],
  },
  {
    id: "core-infra-amc",
    label: "AMC, Intune, AD & Core IT",
    labelAr: "عقود الصيانة وIntune وAD والشبكات الأساسية",
    image: "/images/creative-core-infra-amc.webp",
    imageAlt:
      "Sovereign enterprise infrastructure corridor with smoked glass containment and blue-violet lighting",
    imageAltAr:
      "ممر بنية تحتية مؤسسية محصن بزجاج داكن وإضاءة زرقاء وبنفسجية هادئة",
    caption: "Identity, endpoint control, precision network services and annual support.",
    captionAr: "إدارة الهوية والأجهزة الطرفية وخدمات الشبكة الأساسية وعقود الصيانة السنوية.",
    services: [
      {
        id: "project-amc",
        category: "managed-it",
        title: "Project AMC (Annual Maintenance Contract)",
        titleAr: "عقود الصيانة السنوية للمشاريع (Project AMC)",
        tagline:
          "Structured preventive maintenance, quarterly health audits, firmware lifecycle and priority SLA engineering.",
        taglineAr:
          "صيانة وقائية مجدولة، ومراجعات ربع سنوية، وتحديثات البرمجيات، ودعم هندسي وفق SLA محدد.",
        deliverables: [
          "Quarterly on-site & remote preventive health inspections",
          "Firmware patching, backup verification & config snapshots",
          "Hardware RMA coordination & critical spares planning",
          "Priority remote & Muscat / Dubai on-site escalation",
        ],
        deliverablesAr: [
          "فحوصات وقائية دورية ميدانية وعن بُعد لكافة الأنظمة",
          "تحديث الأنظمة والتحقق من النسخ الاحتياطي وحفظ الإعدادات",
          "متابعة ضمانات المصنعين (RMA) وتخطيط قطع الغيار الحرجة",
          "مسار تصعيد سريع عن بُعد وميدانياً في مسقط ودبي",
        ],
        outcome: "Predictable uptime & protected infrastructure investments",
        outcomeAr: "استدامة تشغيلية متوقعة وحماية لاستثمارات البنية التحتية",
      },
      {
        id: "intune",
        category: "managed-it",
        title: "Microsoft Intune (Endpoint MDM)",
        titleAr: "إدارة الأجهزة الطرفية عبر Microsoft Intune",
        tagline:
          "Zero-touch Windows Autopilot, macOS/iOS enrollment, BitLocker enforcement and automated app rollout.",
        taglineAr:
          "تهيئة تلقائية للأجهزة عبر Autopilot، وحماية macOS وiOS، وتشفير BitLocker، وتوزيع التطبيقات مركزياً.",
        deliverables: [
          "Windows Autopilot & corporate device enrollment profiles",
          "Compliance baselines, BitLocker & Defender hardening",
          "Automated Microsoft 365 & line-of-business app deployment",
          "Conditional Access & remote wipe for lost endpoints",
        ],
        deliverablesAr: [
          "أتمتة تجهيز الأجهزة الجديدة عبر Windows Autopilot",
          "سياسات الامتثال وتشفير BitLocker وتقوية Defender",
          "توزيع تطبيقات Microsoft 365 وبرامج الأعمال عن بُعد",
          "الوصول المشروط (Conditional Access) والمسح الآمن عن بُعد",
        ],
        outcome: "Ship laptops ready to work across every branch",
        outcomeAr: "تسليم الأجهزة جاهزة للعمل فوراً في جميع الفروع",
      },
      {
        id: "ad-management",
        category: "managed-it",
        title: "AD Management (Active Directory & Entra ID)",
        titleAr: "إدارة Active Directory وEntra ID",
        tagline:
          "Directory hardening, clean Group Policy architecture, hybrid Entra ID sync and domain health remediation.",
        taglineAr:
          "تحصين الدليل النشط، وتنظيم سياسات المجموعات GPO، والمزامنة الهجينة مع Entra ID، ومعالجة الأعطال.",
        deliverables: [
          "Multi-site domain controller topology & replication QA",
          "Tiered administrative access & Kerberos/LDAP hardening",
          "Clean GPO restructuring & Microsoft Entra Connect sync",
          "Domain consolidations, OU hygiene & audit logging",
        ],
        deliverablesAr: [
          "تصميم وحدات التحكم بالمجال وفحص التزامن بين المواقع",
          "تطبيق الصلاحيات المتدرجة وتحصين Kerberos وLDAP",
          "تنظيم سياسات المجموعات GPO والربط السحابي Entra Connect",
          "دمج النطاقات وترتيب الوحدات التنظيمية وتدقيق السجلات",
        ],
        outcome: "Resilient enterprise identity free of legacy GPO drift",
        outcomeAr: "بنية هوية مؤسسية منضبطة وآمنة بدون تراكمات عشوائية",
      },
      {
        id: "ntp-server",
        category: "networking",
        title: "NTP Server & Precision Time Sync",
        titleAr: "خوادم الوقت الدقيقة (NTP Server)",
        tagline:
          "Dedicated Stratum-1/Stratum-2 internal time servers keeping AD Kerberos, SIEM logs and switches synchronized.",
        taglineAr:
          "خوادم مزامنة وقت داخلية دقيقة لضمان استقرار مصادقة Kerberos وتطابق سجلات الأمن السيبراني SIEM.",
        deliverables: [
          "Redundant on-premise Stratum-1/2 NTP appliance or VM pair",
          "Domain controller, firewall, CCTV & switch hierarchy design",
          "Authenticated NTP (NTS / symmetric key) hardening",
          "Drift alerting for regulatory audit & financial log accuracy",
        ],
        deliverablesAr: [
          "خادما وقت داخليان احتياطيان بمستوى Stratum-1/2",
          "هيكلة مزامنة موحدة للخوادم والمبدلات والجدران والكاميرات",
          "تفعيل مصادقة NTP لمنع التلاعب الزمني بالشبكة",
          "مراقبة انحراف التوقيت لدعم تدقيق السجلات المالية والأمنية",
        ],
        outcome: "Millisecond alignment across security, identity and telecom",
        outcomeAr: "دقة زمنية متطابقة عبر أنظمة الهوية والأمن والاتصالات",
      },
      {
        id: "dhcp-failover",
        category: "networking",
        title: "DHCP Failover & IPAM Resilience",
        titleAr: "أنظمة تجاوز الفشل للـ DHCP وإدارة IPAM",
        tagline:
          "Active-active and hot-standby DHCP failover clusters ensuring uninterrupted IP addressing across VLANs.",
        taglineAr:
          "عناقيد DHCP بنظام نشط-نشط أو احتياطي فوري لضمان استمرار توزيع العناوين عبر جميع شبكات VLAN دون انقطاع.",
        deliverables: [
          "High-availability DHCP failover pairs (Load Balance / Hot Standby)",
          "Multi-VLAN IPv4/IPv6 subnetting, reservations & Option 43/66",
          "IPAM visibility, rogue DHCP snooping & lease auditing",
          "Branch survivability for Muscat, Sohar & Dubai offices",
        ],
        deliverablesAr: [
          "تجهيز زوج خوادم DHCP متزامنين بتقنية تجاوز الفشل التلقائي",
          "هندسة الشبكات الفرعية والحجوزات وإعدادات Option 43/66",
          "إدارة عناوين IPAM وتفعيل الحماية ضد DHCP الدخيلة",
          "استمرارية توزيع العناوين في المكاتب والفروع الإقليمية",
        ],
        outcome: "Zero IP outages during server maintenance or site failover",
        outcomeAr: "استمرار عمل الشبكة دون انقطاع أثناء الصيانة أو الطوارئ",
      },
      {
        id: "dns-management",
        category: "networking",
        title: "DNS Management & Split-Horizon Security",
        titleAr: "إدارة أنظمة DNS والحماية الأمنية",
        tagline:
          "Redundant authoritative and recursive DNS with split-brain architecture, DNSSEC and threat filtering.",
        taglineAr:
          "بنية DNS داخلية وخارجية فائضة الاعتمادية مع فصل النطاقات وتوقيع DNSSEC وحجب النطاقات الضارة.",
        deliverables: [
          "Split-horizon internal/external zone architecture",
          "Primary/secondary DNS redundancy across sites & cloud",
          "DNSSEC validation, DoH/DoT controls & RPZ threat blocking",
          "Low-TTL cutover planning & SPF/DKIM/DMARC record hygiene",
        ],
        deliverablesAr: [
          "هيكلة Split-Horizon للفصل الدقيق بين النطاق الداخلي والخارجي",
          "خوادم DNS أساسية واحتياطية موزعة عبر المواقع والسحابة",
          "تفعيل توقيع DNSSEC وحجب النطاقات الضارة على مستوى DNS",
          "إدارة سجلات البريد SPF/DKIM/DMARC وخطط الانتقال السلس",
        ],
        outcome: "Fast resolution & hardened domain reliability across regions",
        outcomeAr: "استجابة فائقة وحماية شاملة لأسماء النطاقات والبريد",
      },
    ],
  },
];

export const allSpecializedServices = serviceSuites.flatMap((suite) =>
  suite.services.map((service) => ({
    ...service,
    suiteId: suite.id,
    suiteLabel: suite.label,
    suiteLabelAr: suite.labelAr,
    image: suite.image,
  })),
);
