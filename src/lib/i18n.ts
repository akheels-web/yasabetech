export type Language = "en" | "ar";

export const copy = {
  en: {
    brand: "Misyatech",
    brandTagline: "Connect. Secure. Empower.",
    utilityBarLeft:
      "Muscat · Dubai · Enterprise Networking, Private AI & Managed IT",
    nav: {
      home: "Home",
      solutions: "Solutions",
      about: "About Misyatech",
      cta: "Discuss your project",
      openMenu: "Open navigation",
      closeMenu: "Close navigation",
      langToggle: "العربية",
      langLabel: "Switch website language to Arabic",
    },
    hero: {
      eyebrow: "Muscat · Dubai · Enterprise Infrastructure",
      titleStart: "Engineering what",
      titleAccent: "ambitious enterprises run on.",
      description:
        "Misyatech architects high-availability networks, private AI compute and managed IT across Oman and Dubai — from initial BOQ review to live operations.",
      primaryCta: "Discuss your project",
      secondaryCta: "Explore solutions",
      bottomLink: "Explore delivery journey",
      scenes: [
        {
          id: "muscat",
          tab: "Muscat",
          coord: "23.59° N · 58.38° E",
          label: "Oman Enterprise & Industrial",
          caption:
            "Resilient campus switching, fiber backbones and private infrastructure built for Oman Vision 2040 organizations.",
          image: "/images/home-business-hero.webp",
          alt: "Contemporary limestone architectural atrium facing Oman coastal mountains",
        },
        {
          id: "dubai",
          tab: "Dubai",
          coord: "25.20° N · 55.27° E",
          label: "Dubai High-Velocity Operations",
          caption:
            "Multi-branch SD-WAN, boardroom workplace systems and hybrid cloud delivered to match Dubai’s rollout pace.",
          image: "/images/workspace-hero.webp",
          alt: "Modern glass innovation atrium overlooking the Dubai skyline at dusk",
        },
        {
          id: "private-ai",
          tab: "Private AI",
          coord: "On-Premise Boundary",
          label: "Sovereign Bilingual Compute",
          caption:
            "Dedicated GPU clusters and Arabic/English enterprise knowledge platforms governed inside your own perimeter.",
          image: "/images/oman-dubai-skyline.webp",
          alt: "Architectural executive gallery with travertine colonnades overlooking the Arabian Gulf",
        },
      ],
    },
    marquee: {
      intro: "Built on the enterprise platforms Oman & Dubai organizations depend on.",
    },
    practices: {
      eyebrow: "Core Practices",
      title: "Three pillars. One accountable architecture.",
      aside:
        "Select any practice to inspect capabilities, engineering scope and integration options.",
      allSolutions: "All 8 solution areas",
      discussCta: "Discuss this practice",
      items: [
        {
          id: "networking",
          index: "01",
          tab: "Connect every site",
          label: "Enterprise Networking",
          title: "Every branch. Every campus. Connected.",
          description:
            "Deterministic Wi-Fi 7, core switching and SD-WAN topologies uniting headquarters, ports and regional branches across Oman and the UAE.",
          image: "/images/connected-workplace.webp",
          alt: "Contemporary enterprise workspace with glass meeting rooms and lounge",
          includes: [
            "Enterprise Wi-Fi 7 & predictive RF surveys",
            "Multi-site SD-WAN linking Muscat, Sohar & Dubai",
            "Core switching, segmentation & access policies",
          ],
          linkText: "Explore networking",
        },
        {
          id: "ai",
          index: "02",
          tab: "Deploy Private AI",
          label: "Private AI & Compute",
          title: "Your models. Your data. Your boundary.",
          description:
            "Production GPU clusters, Arabic/English enterprise RAG search and smart-site telemetry hosted strictly within your own governance boundary.",
          image: "/images/ai-innovation.webp",
          alt: "Technology architect working on a private AI prototype in a sunlit studio",
          includes: [
            "GPU compute sizing, power & thermal design",
            "Private Arabic & English enterprise knowledge search",
            "Connected facility IoT & operational telemetry",
          ],
          linkText: "Explore private AI",
        },
        {
          id: "managed-it",
          index: "03",
          tab: "Strengthen IT Operations",
          label: "Managed IT & Security",
          title: "Steady continuity across every workload.",
          description:
            "Unify hybrid cloud, immutable backup, perimeter security and structured escalation under one clear operational mandate.",
          image: "/images/technology-operations.webp",
          alt: "Enterprise IT specialists reviewing systems planning together",
          includes: [
            "Servers, virtualization, storage & hybrid cloud",
            "Next-gen firewalls, zero-trust & endpoint defense",
            "Proactive monitoring, patching & escalation",
          ],
          linkText: "Explore managed IT",
        },
      ],
    },
    scrollStory: {
      eyebrow: "Execution Discipline",
      title: "From BOQ validation to steady-state operations.",
      chapters: [
        {
          id: "architecture",
          step: "01",
          tag: "Architecture & BOQ Review",
          title: "Verified compatibility before procurement starts.",
          description:
            "We audit your existing environment, check licensing dependencies, and validate transceivers, rack power and uplink capacity across Oman and Dubai sites.",
          highlights: [
            "Vendor-neutral compatibility & BOM review",
            "Phased capacity & licensing alignment",
          ],
          image: "/images/workspace-hero.webp",
          alt: "Architectural business atrium overlooking Dubai",
        },
        {
          id: "sovereign-ai",
          step: "02",
          tag: "Private AI & Compute",
          title: "Confidential compute engineered for sensitive data.",
          description:
            "Host proprietary documents, bilingual Arabic/English knowledge search and site analytics on infrastructure controlled completely by your IT team.",
          highlights: [
            "Dedicated on-premise or regional private GPUs",
            "Zero external exposure of enterprise records",
          ],
          image: "/images/private-ai-datacenter.webp",
          alt: "Private executive briefing and computing suite with smoked glass",
        },
        {
          id: "connectivity",
          step: "03",
          tag: "Staging & Regional Rollout",
          title: "Pre-configured before arriving on site.",
          description:
            "Every switch, firewall and wireless controller is bench-staged and tested against policy templates prior to dispatch across Muscat, Sohar, Duqm or Dubai.",
          highlights: [
            "Bench pre-staging & configuration sign-off",
            "Uniform policy across wired & wireless edges",
          ],
          image: "/images/connected-workplace.webp",
          alt: "Modern connected Gulf office collaboration space",
        },
        {
          id: "handover",
          step: "04",
          tag: "Handover & Operations",
          title: "Complete documentation & dependable continuity.",
          description:
            "Projects conclude with as-built network schematics, verified failover results, staff handover sessions and an agreed maintenance schedule.",
          highlights: [
            "As-built diagrams, configs & operational runbooks",
            "Structured monitoring & engineering escalation",
          ],
          image: "/images/team-collaboration.webp",
          alt: "Enterprise technology consultants reviewing architectural blueprints",
        },
      ],
    },
    regionalSection: {
      eyebrow: "Regional Footprint",
      title: "Engineered for Oman’s vision and Dubai’s velocity.",
      subtitle:
        "One technical standard across the Sultanate and the UAE — coordinating fit-outs, multi-branch connectivity and procurement without fragmentation.",
      cards: [
        {
          code: "OM · 01",
          title: "Sultanate of Oman",
          cities: "Muscat · Sohar · Duqm · Salalah",
          description:
            "Campus networks, industrial fiber links, cyber segmentation and private AI foundations supporting modern enterprise growth across Oman.",
        },
        {
          code: "AE · 02",
          title: "Dubai & UAE",
          cities: "Dubai Commercial · Hospitality · Multi-Site",
          description:
            "Rapid BOQ validation, executive boardroom AV/ELV, hybrid cloud and multi-branch SD-WAN built around strict project timelines.",
        },
      ],
      skylineCaption: "Unified architectural standards from Muscat to Dubai.",
      skylineImageAlt:
        "Luxury Gulf architectural gallery with travertine colonnades overlooking the Arabian Gulf skyline",
    },
    capabilityIndex: {
      eyebrow: "Capability Index",
      title: "Eight focused solutions under one roof.",
      subtitle: "Select any capability to inspect scope or initiate an enquiry.",
      plannerCta: "Open Scope Planner",
      useCasePrefix: "Ideal for",
      moreLink: "Inspect full details",
      discussLink: "Request scope",
    },
    serviceSuites: {
      eyebrow: "Specialized Services & Digital Platforms",
      title: "Business apps, AI voice, identity & core IT services.",
      subtitle:
        "From bilingual websites, CRM, HRM and fleet management to AI voice calling, Microsoft Intune, Active Directory, NTP, DHCP failover, DNS and Project AMC.",
      searchPlaceholder:
        "Search any service (e.g. Intune, DHCP, NTP, DNS, AD, AMC, CRM, HRM, Fleet, Voice)...",
      searchEmpty: "No matching service found. Try another term or clear the search.",
      clearSearch: "Show all suites",
      outcomesLabel: "Regional Outcome",
      discussService: "Discuss this service",
      servicesCountLabel: "services",
    },
    faq: {
      eyebrow: "Executive FAQ",
      title: "Direct answers before engagement.",
      items: [
        {
          q: "Does Misyatech deliver projects across both Oman and Dubai?",
          a: "Yes. Misyatech designs, sources, stages and supports enterprise networking, private AI and managed IT across Oman (Muscat, Sohar, Duqm, Salalah) and Dubai / the UAE, including multi-branch cross-border topologies.",
        },
        {
          q: "Can Misyatech audit an existing BOQ or tender specification before purchasing?",
          a: "Yes. Reviewing your Bill of Quantities early allows our engineers to catch missing transceivers, power mismatches or licensing gaps before orders are finalized.",
        },
        {
          q: "How is enterprise data kept private in your AI deployments?",
          a: "Our private AI architectures run on dedicated GPU compute inside your chosen on-premise or regional private boundary, ensuring corporate records and bilingual Arabic/English queries never leave your control.",
        },
        {
          q: "Can we engage Misyatech for hardware sourcing without a managed services contract?",
          a: "Yes. Clients work with us strictly on architecture & BOQ fulfillment, turnkey implementation, or ongoing managed monitoring depending on internal team preference.",
        },
      ],
    },
    solutionsPage: {
      kicker: "Oman & Dubai Solution Portfolio",
      titleStart: "Enterprise IT solutions for",
      titleAccent: "Oman & Dubai.",
      description:
        "Resilient multi-site networks, sovereign private AI, workplace AV/ELV and transparent BOQ sourcing — engineered end-to-end.",
      primaryCta: "Discuss your project",
      secondaryCta: "Project Scope Planner",
      figureCaption: "Architecture, sourcing and operational continuity in one plan.",
      filterAll: "All solutions",
      areasKicker: "Solution Areas",
      areasTitle: "Eight technical practices.",
      areasSubtitle:
        "Filter by domain, inspect technical deliverables or carry any solution straight into your project brief.",
      useCaseLabel: "Ideal for:",
      moreDetails: "Inspect scope",
      supportKicker: "Delivery Framework",
      supportTitle: "How Misyatech supports every project.",
      supportSubtitle:
        "A four-stage engineering sequence designed for organizations across Oman and the UAE.",
      supportSteps: [
        {
          title: "Review & Architect",
          description:
            "Audit sites, workloads and existing BOQs to design a verified, compatible technical architecture.",
        },
        {
          title: "Source & Pre-Stage",
          description:
            "Coordinate genuine OEM equipment, licensing and bench pre-configuration prior to site dispatch.",
        },
        {
          title: "Deploy & Commission",
          description:
            "Execute structured cutovers, failover testing and full as-built documentation for clean handover.",
        },
        {
          title: "Monitor & Evolve",
          description:
            "Provide ongoing maintenance, security posture reviews and engineering escalation.",
        },
      ],
      dialogKicker: "Solution Scope",
      dialogHelpHeading: "How Misyatech delivers this",
      dialogCta: "Discuss this solution",
    },
    estimator: {
      eyebrow: "Scope Planner",
      title: "Configure your project brief.",
      subtitle:
        "Select your operating region, target capabilities and deployment scale to pre-fill an engineering enquiry.",
      stepRegion: "1. Operating Region",
      regions: [
        { id: "oman", label: "Oman (Muscat / Sohar / Duqm)" },
        { id: "dubai", label: "Dubai & UAE" },
        { id: "cross-border", label: "Cross-Border Oman + Dubai" },
      ],
      stepPillars: "2. Capabilities Needed",
      stepModules: "3. Specialized Platforms & Core IT Services (optional)",
      modules: [
        "Website Designing",
        "CRM",
        "HRM",
        "Fleet Management",
        "AI Voice Calling",
        "Project AMC",
        "Microsoft Intune",
        "AD Management",
        "NTP Server",
        "DHCP Failover",
        "DNS Management",
      ],
      stepScale: "4. Deployment Scale",
      scales: [
        { id: "hq", label: "Single HQ / Executive Office" },
        { id: "multi", label: "Multi-Site Branches (3–15)" },
        { id: "campus", label: "Enterprise Campus / Data Center" },
      ],
      outputEyebrow: "Delivery Plan",
      outputTitle: "Configured Scope Summary",
      outputStages: [
        "Architecture & BOQ Compatibility Review",
        "OEM Sourcing & Bench Pre-Staging",
        "Phased Commissioning & Failover QA",
        "As-Built Documentation & Handover",
      ],
      outputCta: "Carry brief into Enquiry",
      summaryLabel: "Active Selection",
    },
    aboutPage: {
      kicker: "About Misyatech",
      titleLine1: "Precision engineering.",
      titleLine2: "Built for the Gulf.",
      description:
        "Misyatech unites enterprise networking, private AI infrastructure and managed IT into one accountable partnership for Oman and Dubai.",
      primaryCta: "Start a conversation",
      secondaryCta: "Explore solutions",
      storyKicker: "Connect. Secure. Empower.",
      storyTitle: "Reliable infrastructure begins with disciplined architecture.",
      storyP1:
        "Procuring switches, servers or GPU nodes is only one piece of the puzzle. Long-term reliability happens when connectivity, compute, cybersecurity, rack power and lifecycle support are designed as one cohesive whole.",
      storyP2:
        "Misyatech brings BOQ validation, solution architecture, pre-staged deployment and ongoing operational support into a single workflow — giving technology leaders across Muscat and Dubai clarity from day one.",
      regionsKicker: "Regional Coverage",
      regionsTitle: "Serving Oman and Dubai under one standard.",
      regions: [
        {
          code: "OM · 01",
          title: "Sultanate of Oman",
          subtitle: "Muscat · Sohar · Duqm · Salalah",
          description:
            "Supporting Omani enterprises, logistics corridors and industrial sites with resilient campus networks, cyber defense and private AI platforms.",
        },
        {
          code: "AE · 02",
          title: "Dubai & United Arab Emirates",
          subtitle: "Dubai Commercial · Hospitality · Multi-Branch",
          description:
            "Delivering high-velocity office buildouts, boardroom collaboration systems, hybrid cloud and multi-branch SD-WAN across the UAE.",
        },
      ],
      principlesKicker: "Engineering Ethos",
      principlesTitle: "Thought through from diagram to daily operations.",
      principles: [
        {
          title: "Architecture before equipment",
          description:
            "Workloads, licensing, redundancy, fiber paths and rack power belong in the blueprint before hardware orders are placed.",
        },
        {
          title: "Transparent BOQ clarity",
          description:
            "Clear line-by-line specifications, genuine licensing structures and full as-built documentation keep your leadership in control.",
        },
        {
          title: "End-to-end accountability",
          description:
            "Networks, GPU compute, storage and perimeter security work best when one engineering team owns how they fit together.",
        },
      ],
      processKicker: "How We Work",
      processTitle: "A structured path from brief to handover.",
      processSubtitle:
        "Four clear engineering phases keep timelines, dependencies and support responsibilities unambiguous.",
      process: [
        {
          title: "Review the requirement",
          description:
            "Bring your BOQ, RFP or operational goal. We verify compatibility, capacity and site constraints.",
        },
        {
          title: "Plan the delivery",
          description:
            "Align the architecture, equipment sourcing, staging milestones and operational support expectations.",
        },
        {
          title: "Stage & commission",
          description:
            "Pre-configure and validate systems before deployment, followed by clean on-site commissioning.",
        },
        {
          title: "Support the operation",
          description:
            "Transition smoothly into documented monitoring, maintenance and engineering escalation.",
        },
      ],
    },
    rfq: {
      eyebrow: "Misyatech Engineering Desk",
      titleIdle: "Tell us about your project.",
      titleDone: "Enquiry submitted.",
      descIdlePrefix:
        "Share your requirements or BOQ scope and we’ll route your enquiry directly to our team at",
      descDonePrefix: "Your request has been accepted for delivery to",
      descDoneSuffix:
        "Our engineers will review your brief and reply to the work email you provided.",
      thankYou: "Thank you,",
      referenceNote: "Reference ID for follow-up:",
      doneBtn: "Done",
      servicesLegend: "Which capabilities do you need? Select at least one.",
      hardwareOption: "Hardware sourcing / BOQ",
      companyLabel: "Company *",
      companyPlaceholder: "Your organization",
      emailLabel: "Work email *",
      emailPlaceholder: "you@company.com",
      phoneLabel: "Phone (optional)",
      phonePlaceholder: "Include country code (+968 / +971)",
      timelineLabel: "Project timeline",
      scopeLabel: "Project details",
      scopePlaceholder:
        "Share your sites (Oman / Dubai), hardware BOQ, workloads or support needs.",
      boqNote: "Have a BOQ or tender file? Mention it here and email the file to",
      submitIdle: "Send enquiry",
      submitBusy: "Sending enquiry…",
      preferEmail: "Prefer email?",
      unavailableErr: "Online enquiries are temporarily unavailable. Please email",
      verifyErr: "Please complete the verification and try again.",
      genericErr: "We couldn’t confirm your submission. Please try again or email",
    },
    footer: {
      ctaEyebrow: "Ready to plan",
      ctaTitle: "Let’s architect your next enterprise environment.",
      ctaButton: "Discuss your project",
      copyEmail: "Copy email",
      copiedEmail: "Copied",
      summary:
        "Enterprise networking, private AI compute and managed IT engineered for organizations across Oman and Dubai.",
      expertiseTitle: "Expertise",
      linksExpertise: [
        { label: "Enterprise networking", href: "/solutions#networking" },
        { label: "Private AI & voice calling", href: "/solutions#ai" },
        { label: "Web, CRM, HRM & Fleet", href: "/solutions#specialized-services" },
        { label: "AMC, Intune, AD & Core IT", href: "/solutions#managed-it" },
      ],
      discoverTitle: "Company",
      linksDiscover: [
        { label: "About Misyatech", href: "/about" },
        { label: "How we work", href: "/about#approach" },
        { label: "All 8 solutions", href: "/solutions" },
        { label: "Regional coverage", href: "/#regional-footprint" },
      ],
      connectTitle: "Oman & Dubai",
      regions: "Muscat, Oman · Dubai, UAE",
      timeLabel: "Muscat & Dubai Time (GST)",
      copyright: "Misyatech. All rights reserved.",
      backToTop: "Back to top ↑",
    },
  },
  ar: {
    brand: "ميسياتك",
    brandTagline: "نربط. نحمي. نُمكّن.",
    utilityBarLeft:
      "مسقط · دبي · الشبكات المؤسسية، الذكاء الاصطناعي الخاص، والخدمات المُدارة",
    nav: {
      home: "الرئيسية",
      solutions: "الحلول التقنية",
      about: "عن ميسياتك",
      cta: "ناقش مشروعك",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      langToggle: "EN",
      langLabel: "Switch website language to English",
    },
    hero: {
      eyebrow: "مسقط · دبي · البنية التحتية المؤسسية",
      titleStart: "هندسة تقنية تعتمد عليها",
      titleAccent: "المؤسسات الطموحة.",
      description:
        "تصمم ميسياتك شبكات عالية التوافر، ومنصات ذكاء اصطناعي خاصة، وخدمات تقنية مُدارة في عُمان ودبي — من مراجعة جدول الكميات BOQ حتى التشغيل المستقر.",
      primaryCta: "ناقش مشروعك",
      secondaryCta: "استكشف الحلول",
      bottomLink: "منهجية التنفيذ",
      scenes: [
        {
          id: "muscat",
          tab: "مسقط",
          coord: "23.59° N · 58.38° E",
          label: "قطاع الأعمال والصناعة في عُمان",
          caption:
            "شبكات مجمعات اعتمادية، وبنية ألياف ضوئية، وحوسبة خاصة متوائمة مع رؤية عُمان ٢٠٤٠.",
          image: "/images/home-business-hero.webp",
          alt: "رواق معماري حجري حديث يطل على جبال مسقط",
        },
        {
          id: "dubai",
          tab: "دبي",
          coord: "25.20° N · 55.27° E",
          label: "عمليات الأعمال السريعة في دبي",
          caption:
            "ربط فروع SD-WAN، وأنظمة قاعات الاجتماعات الذكية، والسحابة الهجينة وفق جداول تسليم دقيقة.",
          image: "/images/workspace-hero.webp",
          alt: "بهو مؤسسي زجاجي حديث يطل على أفق دبي عند الغروب",
        },
        {
          id: "private-ai",
          tab: "الذكاء الخاص",
          coord: "نطاق مؤسسي خاص",
          label: "حوسبة سيادية ثنائية اللغة",
          caption:
            "عناقيد GPU مخصصة ومحركات بحث معرفي باللغتين العربية والإنجليزية داخل حدود مؤسستك.",
          image: "/images/oman-dubai-skyline.webp",
          alt: "رواق معماري من الحجر العماني يطل على الخليج العربي",
        },
      ],
    },
    marquee: {
      intro: "منظومة حلول مبنية على كبرى المنصات التقنية الموثوقة في عُمان ودبي.",
    },
    practices: {
      eyebrow: "الركائز الأساسية",
      title: "ثلاث ركائز. هندسة مسؤولة واحدة.",
      aside:
        "اختر أي مجال لاستعراض القدرات التقنية ونطاق التنفيذ وخيارات التكامل.",
      allSolutions: "جميع الحلول الثمانية",
      discussCta: "ناقش هذا المجال",
      items: [
        {
          id: "networking",
          index: "٠١",
          tab: "ربط المواقع",
          label: "الشبكات المؤسسية",
          title: "كل فرع. كل مقر. باتصال موحد.",
          description:
            "شبكات Wi-Fi 7، ومبدلات مراكز البيانات، وحلول SD-WAN التي تربط المقار الرئيسية والموانئ والفروع في عُمان والإمارات.",
          image: "/images/connected-workplace.webp",
          alt: "بيئة عمل مؤسسية حديثة تضم قاعات اجتماعات زجاجية",
          includes: [
            "شبكات Wi-Fi 7 المؤسسية ومسوحات التغطية اللاسلكية",
            "ربط الفروع عبر SD-WAN بين مسقط وصحار ودبي",
            "تبديل مركزي عالي الاعتمادية وسياسات التحكم بالوصول",
          ],
          linkText: "استكشف الشبكات",
        },
        {
          id: "ai",
          index: "٠٢",
          tab: "الذكاء الاصطناعي الخاص",
          label: "الذكاء الاصطناعي والحوسبة",
          title: "نماذجك. بياناتك. داخل حدودك.",
          description:
            "عناقيد GPU إنتاجية، وبحث معرفي مؤسسي باللغتين العربية والإنجليزية، وأنظمة قياس ذكية ضمن بيئتك الخاصة.",
          image: "/images/ai-innovation.webp",
          alt: "مهندسة تقنية تطور نموذج ذكاء اصطناعي خاص في استوديو حديث",
          includes: [
            "تقدير قدرات خوادم GPU ومتطلبات الطاقة والتبريد",
            "بحث معرفي خاص (RAG) بالعربية والإنجليزية",
            "ربط حساسات المواقع ولوحات البيانات التشغيلية",
          ],
          linkText: "استكشف الذكاء الخاص",
        },
        {
          id: "managed-it",
          index: "٠٣",
          tab: "الأمن والخدمات المُدارة",
          label: "تقنية المعلومات والأمان",
          title: "استقرار مستمر لكل أحمال العمل.",
          description:
            "تكامل الخوادم والسحابة الهجينة، والنسخ الاحتياطي المحصّن، والأمن السيبراني ضمن نطاق خدمة واضح.",
          image: "/images/technology-operations.webp",
          alt: "مختصان في تقنية المعلومات يراجعان خطط التشغيل",
          includes: [
            "الخوادم والمحاكاة الافتراضية والتخزين والسحابة الهجينة",
            "جدران الحماية المتقدمة وتجزئة الشبكات وحماية الأجهزة",
            "مراقبة استباقية، تحديثات دورية، وتصعيد فني منظم",
          ],
          linkText: "استكشف الخدمات المُدارة",
        },
      ],
    },
    scrollStory: {
      eyebrow: "انضباط التنفيذ",
      title: "من تدقيق جدول الكميات BOQ إلى التشغيل المستقر.",
      chapters: [
        {
          id: "architecture",
          step: "٠١",
          tag: "الهندسة ومراجعة BOQ",
          title: "التحقق من التوافق التقني قبل الشراء.",
          description:
            "نراجع البيئة الحالية والتراخيص ومنافذ الألياف ومتطلبات الطاقة في مواقعك بعُمان ودبي قبل إصدار أي طلب توريد.",
          highlights: [
            "تدقيق مستقل للتوافق ومكونات BOQ",
            "مواءمة السعات والتراخيص والتوسع المرحلي",
          ],
          image: "/images/workspace-hero.webp",
          alt: "بهو مؤسسي يطل على دبي",
        },
        {
          id: "sovereign-ai",
          step: "٠٢",
          tag: "الذكاء الاصطناعي الخاص",
          title: "حوسبة سرية مصممة لحماية البيانات الحساسة.",
          description:
            "تشغيل وثائق مؤسستك ومحركات البحث العربية والإنجليزية وتحليلات التشغيل داخل بنية يتحكم بها فريقك بالكامل.",
          highlights: [
            "عناقيد GPU محلية أو ضمن نطاق إقليمي خاص",
            "عدم مشاركة أي بيانات مؤسسية مع أطراف خارجية",
          ],
          image: "/images/private-ai-datacenter.webp",
          alt: "قاعة تنفيذية بحجر عماني وزجاج داكن",
        },
        {
          id: "connectivity",
          step: "٠٣",
          tag: "التهيئة المسبقة والإطلاق",
          title: "برمجة واختبار كامل قبل الوصول إلى الموقع.",
          description:
            "تتم تهيئة المبدلات وجدران الحماية ووحدات الواي فاي في المختبر ومطابقتها مع السياسات الأمنية قبل التوجيه إلى مسقط أو صحار أو الدقم أو دبي.",
          highlights: [
            "تهيئة مسبقة واعتماد الإعدادات قبل الشحن",
            "سياسات أمنية موحدة للشبكة السلكية واللاسلكية",
          ],
          image: "/images/connected-workplace.webp",
          alt: "مساحة عمل خليجية حديثة متصلة",
        },
        {
          id: "handover",
          step: "٠٤",
          tag: "التسليم واستدامة التشغيل",
          title: "توثيق هندسي متكامل ودعم مستمر.",
          description:
            "نختتم كل مشروع بمخططات تنفيذية دقيقة (As-Built)، واختبارات تحوّل احتياطي، ونقل معرفة عملي وجدول صيانة واضح.",
          highlights: [
            "مخططات تشغيلية وأدلة إدارة موثقة",
            "مراقبة مستمرة ومسارات تصعيد هندسية",
          ],
          image: "/images/team-collaboration.webp",
          alt: "مستشارو تقنية يراجعون مخططات هندسية",
        },
      ],
    },
    regionalSection: {
      eyebrow: "الحضور الإقليمي",
      title: "مصممة لرؤية عُمان وسرعة التنفيذ في دبي.",
      subtitle:
        "معيار هندسي واحد في السلطنة والإمارات — ينسق تجهيز المقار الجديدة وربط الفروع وتوريد الأنظمة دون تشتت.",
      cards: [
        {
          code: "OM · ٠١",
          title: "سلطنة عُمان",
          cities: "مسقط · صحار · الدقم · صلالة",
          description:
            "شبكات المجمعات، ووصلات الألياف الصناعية، والتجزئة الأمنية، ومنصات الذكاء الاصطناعي الخاص الداعمة لنمو المؤسسات العُمانية.",
        },
        {
          code: "AE · ٠٢",
          title: "دبي والإمارات",
          cities: "القطاع التجاري · الضيافة · الفروع المتعددة",
          description:
            "تدقيق سريع لجداول الكميات، وأنظمة مجالس الإدارة السمعية والبصرية، والسحابة الهجينة، وربط الفروع وفق الجداول الزمنية الصارمة.",
        },
      ],
      skylineCaption: "معايير هندسية موحدة تمتد من مسقط إلى دبي.",
      skylineImageAlt:
        "معرض معماري فاخر من الحجر العماني يطل على أفق الخليج العربي",
    },
    capabilityIndex: {
      eyebrow: "فهرس القدرات",
      title: "ثمانية حلول متكاملة تحت سقف واحد.",
      subtitle: "اختر أي مجال لاستعراض نطاق العمل أو طلب عرض فني.",
      plannerCta: "افتح مخطط المشروع",
      useCasePrefix: "مناسب لـ",
      moreLink: "التفاصيل الكاملة",
      discussLink: "طلب عرض فني",
    },
    serviceSuites: {
      eyebrow: "الخدمات المتخصصة والمنصات الرقمية",
      title: "تطبيقات الأعمال، الاتصال الذكي، الهوية وخدمات الشبكة الأساسية.",
      subtitle:
        "من تصميم المواقع وCRM وHRM وإدارة الأساطيل إلى الاتصال الصوتي بالذكاء الاصطناعي وIntune وActive Directory وNTP وDHCP Failover وDNS وعقود الصيانة AMC.",
      searchPlaceholder:
        "ابحث عن خدمة (مثل Intune، DHCP، NTP، DNS، AD، AMC، CRM، HRM، الأساطيل)...",
      searchEmpty: "لا توجد نتائج مطابقة. جرّب كلمة أخرى أو أعِد تعيين البحث.",
      clearSearch: "عرض جميع الباقات",
      outcomesLabel: "الأثر الإقليمي",
      discussService: "ناقش هذه الخدمة",
      servicesCountLabel: "خدمات",
    },
    faq: {
      eyebrow: "أسئلة تنفيذية",
      title: "إجابات مباشرة قبل بدء المشروع.",
      items: [
        {
          q: "هل تغطي ميسياتك المشاريع في كل من سلطنة عُمان ودبي؟",
          a: "نعم. تتولى ميسياتك التصميم الهندسي والتوريد والتهيئة والدعم لمشاريع الشبكات المؤسسية والذكاء الاصطناعي الخاص والخدمات المُدارة في عُمان (مسقط، صحار، الدقم، صلالة) ودبي والإمارات.",
        },
        {
          q: "هل يمكنكم مراجعة جدول كميات (BOQ) أو مواصفات مناقصة قبل الشراء؟",
          a: "نعم. المراجعة المبكرة لجدول الكميات تتيح لمهندسينا اكتشاف أي نواقص في الوصلات الضوئية أو متطلبات الطاقة أو التراخيص قبل اعتماد طلب الشراء.",
        },
        {
          q: "كيف تحافظون على سرية البيانات في مشاريع الذكاء الاصطناعي الخاص؟",
          a: "تعمل حلول الذكاء الاصطناعي الخاص على خوادم GPU مخصصة داخل نطاقك المحلي أو السحابة الخاصة الإقليمية، دون إرسال أي وثائق أو استفسارات إلى نماذج عامة خارجية.",
        },
        {
          q: "هل يمكننا التعاقد لتوريد الأجهزة فقط دون عقد خدمات مُدارة؟",
          a: "بالتأكيد. يتعاون معنا العملاء بمرونة لمراجعة وتوريد جدول الكميات فقط، أو للتنفيذ الكامل، أو لإدارة التشغيل المستمر وفق احتياج فريقك.",
        },
      ],
    },
    solutionsPage: {
      kicker: "منظومة الحلول في عُمان ودبي",
      titleStart: "حلول تقنية المعلومات",
      titleAccent: "في عُمان ودبي.",
      description:
        "شبكات مؤسسية متعددة المواقع، ذكاء اصطناعي خاص، تجهيز قاعات الإدارة، وتوريد BOQ بشفافية كاملة.",
      primaryCta: "ناقش مشروعك",
      secondaryCta: "مخطط نطاق المشروع",
      figureCaption: "الهندسة والتوريد واستمرارية التشغيل في خطة واحدة.",
      filterAll: "جميع الحلول",
      areasKicker: "مجالات الحلول",
      areasTitle: "ثمانية تخصصات هندسية.",
      areasSubtitle:
        "صنّف حسب المجال، وراجع المخرجات الفنية، أو انقل أي حل مباشرة إلى طلب المشروع.",
      useCaseLabel: "مناسب لـ:",
      moreDetails: "استعراض النطاق",
      supportKicker: "منهجية التنفيذ",
      supportTitle: "كيف تدعم ميسياتك كل مشروع.",
      supportSubtitle:
        "إطار هندسي من أربع مراحل مترابطة يخدم المؤسسات في عُمان والإمارات.",
      supportSteps: [
        {
          title: "المراجعة والتصميم",
          description:
            "دراسة المواقع والأحمال وجداول الكميات لتصميم بنية متوافقة وقابلة للتوسع.",
        },
        {
          title: "التوريد والتهيئة المسبقة",
          description:
            "تأمين الأجهزة والرخص الأصلية وتجهيز الإعدادات في المختبر قبل الوصول للموقع.",
        },
        {
          title: "التركيب والاعتماد",
          description:
            "تنفيذ التشغيل المنظم واختبارات التحوّل الاحتياطي وتسليم المخططات التنفيذية كاملة.",
        },
        {
          title: "المتابعة والتطوير",
          description:
            "توفير الصيانة والمراقبة ومراجعات الأمان والتصعيد الهندسي المعتمد.",
        },
      ],
      dialogKicker: "نطاق الحل",
      dialogHelpHeading: "كيف تنفذ ميسياتك هذا المجال",
      dialogCta: "ناقش هذا الحل",
    },
    estimator: {
      eyebrow: "مخطط المشروع",
      title: "حدّد نطاق مشروعك.",
      subtitle:
        "اختر المنطقة الجغرافية، والقدرات المطلوبة، وحجم البيئة لتجهيز ملخص طلبك الهندسي.",
      stepRegion: "١. النطاق الجغرافي",
      regions: [
        { id: "oman", label: "عُمان (مسقط / صحار / الدقم)" },
        { id: "dubai", label: "دبي والإمارات" },
        { id: "cross-border", label: "مواقع مشتركة عُمان + دبي" },
      ],
      stepPillars: "٢. القدرات المطلوبة",
      stepModules: "٣. الأنظمة والخدمات المتخصصة (اختياري)",
      modules: [
        "تصميم المواقع",
        "نظام CRM",
        "نظام HRM",
        "إدارة الأساطيل",
        "الاتصال الصوتي AI",
        "عقد صيانة AMC",
        "Microsoft Intune",
        "إدارة AD",
        "خادم NTP",
        "DHCP Failover",
        "إدارة DNS",
      ],
      stepScale: "٤. حجم البيئة التشغيلية",
      scales: [
        { id: "hq", label: "مقر رئيسي / مكتب تنفيذي" },
        { id: "multi", label: "فروع متعددة (٣ إلى ١٥ موقعاً)" },
        { id: "campus", label: "مجمع مؤسسي / مركز بيانات" },
      ],
      outputEyebrow: "خطة التنفيذ",
      outputTitle: "ملخص النطاق المختار",
      outputStages: [
        "مراجعة الهندسة والتوافق التقني للـ BOQ",
        "التوريد المعتمد والتهيئة المسبقة",
        "التشغيل المرحلي واختبارات الاعتمادية",
        "التوثيق الكامل وتسليم العمليات",
      ],
      outputCta: "انقل النطاق إلى طلب المشروع",
      summaryLabel: "التكوين المختار",
    },
    aboutPage: {
      kicker: "عن ميسياتك",
      titleLine1: "دقة هندسية.",
      titleLine2: "مصممة للخليج.",
      description:
        "تجمع ميسياتك بين الشبكات المؤسسية، وبنية الذكاء الاصطناعي الخاص، والخدمات المُدارة في شراكة واحدة موثوقة في عُمان ودبي.",
      primaryCta: "ابدأ محادثة",
      secondaryCta: "استكشف الحلول",
      storyKicker: "نربط. نحمي. نُمكّن.",
      storyTitle: "البنية التحتية الموثوقة تبدأ من هندسة منضبطة.",
      storyP1:
        "توريد المبدلات أو الخوادم أو وحدات GPU هو مجرد خطوة واحدة. الاعتمادية المستدامة تتحقق عندما تتكامل الشبكات والحوسبة والأمن السيبراني والطاقة والدعم كمنظومة واحدة.",
      storyP2:
        "توحد ميسياتك مراجعة جدول الكميات BOQ، والتصميم الهندسي، والتهيئة المسبقة، والدعم التشغيلي في مسار واحد واضح يمنح فرق التقنية في مسقط ودبي رؤية كاملة منذ اليوم الأول.",
      regionsKicker: "التغطية الإقليمية",
      regionsTitle: "خدمة عُمان ودبي بمعيار هندسي موحد.",
      regions: [
        {
          code: "OM · ٠١",
          title: "سلطنة عُمان",
          subtitle: "مسقط · صحار · الدقم · صلالة",
          description:
            "دعم الشركات العُمانية والمناطق اللوجستية والصناعية بشبكات اعتمادية وحماية سيبرانية ومنصات ذكاء اصطناعي خاص.",
        },
        {
          code: "AE · ٠٢",
          title: "دبي ودولة الإمارات",
          subtitle: "القطاع التجاري · الضيافة · الفروع المتعددة",
          description:
            "تنفيذ مشاريع المقار الإدارية الحديثة، وأنظمة مجالس الإدارة، والسحابة الهجينة، وربط الفروع بسرعة وانضباط.",
        },
      ],
      principlesKicker: "المبادئ الهندسية",
      principlesTitle: "تخطيط دقيق من المخطط الأول إلى التشغيل اليومي.",
      principles: [
        {
          title: "الهندسة قبل التوريد",
          description:
            "تحديد الأحمال والتراخيص والتوافر ومسارات الألياف والطاقة يسبق دائماً طلب أي أجهزة.",
        },
        {
          title: "شفافية جداول الكميات BOQ",
          description:
            "مواصفات واضحة لكل بند، وتراخيص نظامية، وتوثيق تنفيذي كامل يبقي القرار التقني بيد مؤسستك.",
        },
        {
          title: "مسؤولية شاملة",
          description:
            "تعمل الشبكات والحوسبة والتخزين والأمان بأفضل كفاءة حين يتولى فريق واحد تكاملها.",
        },
      ],
      processKicker: "منهجية العمل",
      processTitle: "مسار منظم من الدراسة إلى التسليم.",
      processSubtitle:
        "أربع مراحل واضحة تحافظ على دقة الجداول الزمنية ومتطلبات الاعتماد والتشغيل.",
      process: [
        {
          title: "دراسة المتطلبات",
          description:
            "مراجعة جدول الكميات أو كراسة المشروع للتحقق من التوافق والسعات وظروف الموقع.",
        },
        {
          title: "تخطيط التنفيذ",
          description:
            "اعتماد التصميم الهندسي ومصادر التوريد ومعالم التجهيز ونطاق الدعم المطلوب.",
        },
        {
          title: "التهيئة والاعتماد",
          description:
            "البرمجة والاختبار المسبق قبل التركيب الميداني وإجراء اختبارات التسليم.",
        },
        {
          title: "دعم التشغيل",
          description:
            "الانتقال السلس إلى المراقبة الموثقة والصيانة والتصعيد الهندسي.",
        },
      ],
    },
    rfq: {
      eyebrow: "فريق الهندسة في ميسياتك",
      titleIdle: "أخبرنا عن مشروعك.",
      titleDone: "تم إرسال الطلب بنجاح.",
      descIdlePrefix:
        "شاركنا متطلباتك أو نطاق جدول الكميات وسنوجّه رسالتك مباشرة إلى فريقنا على",
      descDonePrefix: "تم قبول طلبك لتسليمه عبر البريد إلى",
      descDoneSuffix:
        "سيراجع مهندسونا ملخصك ويتواصلون عبر بريد العمل الذي قمت بتزويده.",
      thankYou: "شكراً لك،",
      referenceNote: "رقم المرجع للمتابعة:",
      doneBtn: "إغلاق",
      servicesLegend: "ما المجالات التي نساعدك فيها؟ اختر واحداً على الأقل.",
      hardwareOption: "توريد الأجهزة ومراجعة BOQ",
      companyLabel: "الشركة / المؤسسة *",
      companyPlaceholder: "اسم المؤسسة",
      emailLabel: "بريد العمل الإلكتروني *",
      emailPlaceholder: "name@company.com",
      phoneLabel: "رقم الهاتف (اختياري)",
      phonePlaceholder: "مع رمز الدولة (+968 / +971)",
      timelineLabel: "الإطار الزمني المتوقع",
      scopeLabel: "تفاصيل المشروع",
      scopePlaceholder:
        "اذكر المواقع (عُمان / دبي)، متطلبات الشبكات أو الذكاء الاصطناعي أو جدول الكميات.",
      boqNote: "هل لديك ملف BOQ أو كراسة مناقصة؟ أشر إليه هنا وأرسل الملف إلى",
      submitIdle: "إرسال الطلب",
      submitBusy: "جارٍ الإرسال…",
      preferEmail: "تفضل البريد المباشر؟",
      unavailableErr: "النماذج المباشرة غير متاحة مؤقتاً. يرجى مراسلتنا عبر",
      verifyErr: "يرجى إتمام التحقق الأمني والمحاولة مرة أخرى.",
      genericErr: "تعذّر تأكيد الإرسال. يرجى المحاولة مرة أخرى أو مراسلتنا على",
    },
    footer: {
      ctaEyebrow: "جاهز للتخطيط",
      ctaTitle: "لنصمم بنيتك المؤسسية القادمة.",
      ctaButton: "ناقش مشروعك",
      copyEmail: "نسخ البريد",
      copiedEmail: "تم النسخ",
      summary:
        "شبكات مؤسسية، ذكاء اصطناعي خاص وخدمات تقنية مُدارة مصممة للمؤسسات في عُمان ودبي.",
      expertiseTitle: "التخصصات",
      linksExpertise: [
        { label: "الشبكات، DNS وDHCP وNTP", href: "/solutions#networking" },
        { label: "الذكاء الاصطناعي والصوت الذكي", href: "/solutions#ai" },
        { label: "المواقع وCRM وHRM والأساطيل", href: "/solutions#specialized-services" },
        { label: "عقود AMC وIntune وAD", href: "/solutions#managed-it" },
      ],
      discoverTitle: "الشركة",
      linksDiscover: [
        { label: "عن ميسياتك", href: "/about" },
        { label: "منهجية العمل", href: "/about#approach" },
        { label: "جميع الحلول", href: "/solutions" },
        { label: "الحضور الإقليمي", href: "/#regional-footprint" },
      ],
      connectTitle: "عُمان ودبي",
      regions: "مسقط، عُمان · دبي، الإمارات",
      timeLabel: "التوقيت المحلي مسقط ودبي (GST)",
      copyright: "ميسياتك (Misyatech). جميع الحقوق محفوظة.",
      backToTop: "العودة للأعلى ↑",
    },
  },
} as const;
