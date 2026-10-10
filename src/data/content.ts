export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  headlineOutcome: string;
  heroVisualTag: string;
  previewDescription: string;
  previewImage?: string;
  liveUrl?: string;
  metrics: { label: string; value: string }[];
  challenge: {
    overview: string;
    painPoints: string[];
  };
  approach: {
    discovery: string;
    insight: string;
  };
  solution: {
    whatWeBuilt: string;
    coreFeatures: string[];
  };
  experience: {
    customerPerspective: string;
    teamPerspective: string;
  };
  outcome: {
    summary: string;
    achievements: string[];
  };
  systemComponents: {
    name: string;
    role: string;
    description: string;
  }[];
}

export interface SolutionCategory {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  targetAudience: string;
  capabilities: string[];
  outcome: string;
  iconName: string;
}

export interface PricingTier {
  id: string;
  name: string;
  stage: string;
  tagline: string;
  idealFor: string;
  timeline: string;
  typicalInvestmentRange: string;
  highlights: string[];
  deliverables: string[];
  supportWarranty: string;
  isPopular?: boolean;
  ctaText: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "the-spice-grille-hospitality",
    slug: "the-spice-grille",
    title: "The Spice Grille Digital Platform",
    subtitle: "Direct guest ordering, kitchen dispatch & guest retention engine",
    industry: "Hospitality & Food Service",
    liveUrl: "https://www.thespicegrille.com/",
    headlineOutcome: "100% of order money kept by the restaurant. $0 delivery app fees.",
    heroVisualTag: "Live Food Ordering",
    previewDescription:
      "Direct food ordering website that cuts out delivery app fees and sends orders straight to the kitchen.",
    previewImage: "/images/projects/spicegrille.png",
    metrics: [
      { label: "Commission Saved", value: "30%+" },
      { label: "Avg Prep Ticket", value: "12 min" },
      { label: "Guest Rating", value: "4.9 ★" },
      { label: "Direct Orders", value: "100%" },
    ],
    challenge: {
      overview:
        "Delivery apps like DoorDash took 30% of every order, and taking orders over the phone during busy dinner hours caused lost tickets and long customer waits.",
      painPoints: [
        "30%+ delivery app fees cutting into food profits.",
        "Front-desk staff overwhelmed by phone calls during dinner rush.",
        "No direct customer database to bring diners back for repeat visits.",
      ],
    },
    approach: {
      discovery:
        "Diners were happy to order directly from the restaurant as long as the online menu was fast, easy to use on mobile, and let them customize their meals.",
      insight:
        "When ordering directly is faster and easier than a third-party app, customers will always order directly.",
    },
    solution: {
      whatWeBuilt:
        "A direct online ordering website where customers order straight from the restaurant, keeping 100% of the money and sending orders directly to the kitchen.",
      coreFeatures: [
        "Direct digital ordering with Apple Pay, credit cards, and instant receipting",
        "Real-time kitchen ticket display with prep priority and modifier highlights",
        "Table reservation booking system with automatic SMS confirmations",
        "Automated loyalty program rewarding frequent orders with instant discounts",
      ],
    },
    experience: {
      customerPerspective:
        "Explore rich dish photography, customize spice levels, and order directly on mobile in under 60 seconds with instant pickup ETA alerts.",
      teamPerspective:
        "Front desk focuses on hospitality while orders print directly to the line; kitchen monitors real-time order pacing without phone interruption.",
    },
    outcome: {
      summary:
        "Recaptured tens of thousands in delivery commissions, eliminated phone bottlenecks during rush hours, and built an owned database of high-frequency local diners.",
      achievements: [
        "100% retention of order margins by eliminating 3rd-party marketplace commissions",
        "Order-to-kitchen turnaround cut to under 12 minutes during peak dinner hours",
        "Thousands of repeat customers enrolled into the proprietary rewards program",
      ],
    },
    systemComponents: [
      { name: "Guest Ordering Portal", role: "Consumer UX", description: "Mobile-first visual menu, modifier selector, and instant checkout" },
      { name: "Kitchen Dispatch Display", role: "Back-of-House", description: "Live order queue, station routing, and prep-time pacing" },
      { name: "Guest Loyalty & CRM Engine", role: "Retention", description: "Automated points ledger, SMS dispatch, and repeat order re-engagement" },
    ],
  },
  {
    id: "new-vision-dental-clinic",
    slug: "new-vision-dental-clinic",
    title: "New Vision Dental Patient Hub",
    subtitle: "Multi-branch clinical booking, triage & patient education portal",
    industry: "Healthcare & Clinical Operations",
    liveUrl: "https://www.newvisiondentalclinic.com/",
    headlineOutcome: "Patients book 24/7 in under a minute with instant WhatsApp confirmation.",
    heroVisualTag: "Online Clinic Booking",
    previewDescription:
      "Online booking and appointment scheduling across 3 dental clinics in Accra.",
    previewImage: "/images/projects/newvisiondental-v2.png",
    metrics: [
      { label: "Patients Served", value: "10,000+" },
      { label: "Patient Rating", value: "4.9 ★" },
      { label: "Clinic Branches", value: "3 Locs" },
      { label: "Online Booking", value: "24/7" },
    ],
    challenge: {
      overview:
        "Managing three clinics by phone meant receptionists were buried in calls all day, leading to missed calls and frustrated patients who gave up trying to book.",
      painPoints: [
        "Receptionists overwhelmed coordinating appointments across 3 physical clinics.",
        "Patients had no way to see service prices or open appointment times online.",
        "High missed-appointment rates because reminders were tracked manually by hand.",
      ],
    },
    approach: {
      discovery:
        "Patients felt anxious about dental visits. Giving them clear pricing and an easy way to pick their own doctor and time on mobile made booking stress-free.",
      insight:
        "When people know exactly what to expect and can book in two taps, they don't delay care.",
    },
    solution: {
      whatWeBuilt:
        "A simple online booking site where patients pick their nearest clinic, choose a treatment, and book an appointment in under a minute with WhatsApp confirmation.",
      coreFeatures: [
        "Live calendar showing open appointment slots across all 3 branches",
        "Direct WhatsApp confirmation and automatic reminder messages",
        "Clear pricing and guides for cleanings, braces, veneers, and emergency care",
        "Automatic schedule sync with clinic management software",
      ],
    },
    experience: {
      customerPerspective:
        "Pick your nearest clinic branch, choose your preferred time, and get confirmed on WhatsApp in 60 seconds.",
      teamPerspective:
        "Daily rosters update automatically, freeing receptionists to welcome patients instead of answering the phone all day.",
    },
    outcome: {
      summary:
        "Handled booking for over 10,000 patients, drastically reduced phone volume, and made dental care easy to access.",
      achievements: [
        "Connected booking for North Legon, Ashaley Botwe & ACP Estate",
        "Over 65% reduction in repetitive phone scheduling calls",
        "Maintained 4.9/5 patient review rating across public platforms",
      ],
    },
    systemComponents: [
      { name: "Branch Booking Gateway", role: "Patient Intake", description: "Multi-location scheduling engine with doctor specialization filters" },
      { name: "Clinical Knowledge Base", role: "Patient Education", description: "Interactive procedure guides and post-op care advisories" },
      { name: "DentalKing Integration Bridge", role: "EMR Sync", description: "Automated schedule sync with on-premise clinic management software" },
    ],
  },
  {
    id: "fileforge-converter-suite",
    slug: "fileforge",
    title: "FileForge Converter Suite",
    subtitle: "Privacy-first in-browser file converter and developer tools",
    industry: "Developer Tools & SaaS Utility",
    liveUrl: "https://fileforge-iota.vercel.app/",
    headlineOutcome: "0 bytes uploaded to any server. 21+ tools running 100% in your browser.",
    heroVisualTag: "In-Browser Converter",
    previewDescription:
      "Convert files directly in your browser without uploading them to external servers.",
    previewImage: "/images/projects/fileforge.png",
    metrics: [
      { label: "Data Uploads", value: "0 B" },
      { label: "Active Tools", value: "21+" },
      { label: "Max File Size", value: "50MB" },
      { label: "Conversion Cost", value: "100% Free" },
    ],
    challenge: {
      overview:
        "Most free online file converters make you upload private files to external servers, force you to wait in line, and charge monthly fees.",
      painPoints: [
        "Private documents and spreadsheets uploaded to unknown cloud servers.",
        "Annoying pop-up ads and sudden paywalls after just two conversions.",
        "Slow upload and download times on large files.",
      ],
    },
    approach: {
      discovery:
        "Modern web browsers are powerful enough to convert images and documents right on the user's computer using WebAssembly, with no server upload required.",
      insight:
        "If a file never leaves your computer, your private data can never be stolen or leaked.",
    },
    solution: {
      whatWeBuilt:
        "A free web tool that converts images and files directly on your computer inside the browser, so your files never touch an external server.",
      coreFeatures: [
        "In-browser WebAssembly image conversion with zero server-side telemetry",
        "Client-side background removal and lossy/lossless compression",
        "Universal document format engine (PDF, DOCX, XLSX, PPTX)",
        "Ephemeral batch processing with instant zero-retention auto-purge",
      ],
    },
    experience: {
      customerPerspective:
        "Drop files and download immediately. Zero ads, zero accounts to create, zero concern that proprietary designs or spreadsheets are being stored on external servers.",
      teamPerspective:
        "A micro-footprint architecture with virtually zero cloud compute overhead because client hardware handles the heavy lifting.",
    },
    outcome: {
      summary:
        "Built a lightning-fast utility trusted by developers, designers, and privacy-sensitive professionals, eliminating friction and privacy vulnerabilities.",
      achievements: [
        "100% client-side privacy for image and vector processing pipelines",
        "Zero conversion lag or cloud wait queues for high-resolution files",
        "No subscription walls or dark patterns, establishing high user trust",
      ],
    },
    systemComponents: [
      { name: "Client Wasm Pipeline", role: "Browser Engine", description: "Direct in-memory file transformation without server roundtrips" },
      { name: "Universal Format Parser", role: "File System", description: "MIME-type detection and client-side stream buffer management" },
      { name: "Ephemeral Worker Bus", role: "Document Backend", description: "Stateless container microservice with immediate file unlinking" },
    ],
  },
  {
    id: "wylde-bespoke-atelier",
    slug: "wylde-atelier",
    title: "WYLDE Bespoke Fine Jewelry Atelier",
    subtitle: "Interactive website for custom fine jewelry",
    industry: "High-Ticket Luxury & E-Commerce",
    liveUrl: "https://wylde-or.vercel.app/",
    headlineOutcome: "Buyers inspect fine jewelry in 360° and book private atelier appointments.",
    heroVisualTag: "Interactive 360° Atelier",
    previewDescription:
      "Interactive website for custom fine jewelry where buyers can spin and inspect pieces up close.",
    previewImage: "/images/projects/wylde.png",
    metrics: [
      { label: "Piece Value", value: "$10k–$85k+" },
      { label: "Craft Hours", value: "200+ hrs" },
      { label: "Global Edition", value: "25 Pcs" },
      { label: "Interaction", value: "60 FPS" },
    ],
    challenge: {
      overview:
        "Selling luxury jewelry on a normal online shop doesn't work because flat photos cannot show how the gold shines or how well the pieces are made.",
      painPoints: [
        "Normal photos failed to show the gold craft and fine details of high-end pieces.",
        "A generic web checkout felt cheap for custom jewelry worth tens of thousands of dollars.",
        "Overseas buyers had no way to inspect pieces closely without traveling to an atelier.",
      ],
    },
    approach: {
      discovery:
        "By letting buyers spin and zoom in smoothly on screen like holding a jeweler's magnifying glass, customers could see the real craft and felt confident booking a viewing.",
      insight:
        "When people can see real quality and craftsmanship up close on screen, they trust the jeweler.",
    },
    solution: {
      whatWeBuilt:
        "An interactive website where buyers can smoothly spin, zoom in, and inspect each piece up close on screen, then book a private in-person viewing.",
      coreFeatures: [
        "Smooth 360-degree interactive video rotation on phone and desktop",
        "Clear provenance records and materials breakdown for each custom release",
        "Story of the artisan craft and hand-hammered gold benchwork",
        "Private VIP appointment booking to see pieces in person",
      ],
    },
    experience: {
      customerPerspective:
        "Spin a high-end gold necklace smoothly on your screen, inspect the fine details, and book a private viewing.",
      teamPerspective:
        "Brings in serious, high-value inquiries who already understand the quality before reaching out.",
    },
    outcome: {
      summary:
        "Turned an ordinary online store into an intimate luxury experience, bringing in private buyers from around the world.",
      achievements: [
        "Interactive 360-degree viewing experience far beyond normal e-commerce",
        "Attracted qualified private buyers for limited-edition bespoke pieces",
        "High visitor engagement with average time on site over 4 minutes",
      ],
    },
    systemComponents: [
      { name: "Scrubbed Video Canvas", role: "Interaction Core", description: "Hardware-accelerated frame interpolation mapped to scroll delta" },
      { name: "Artisanal Provenance Ledger", role: "Curation Engine", description: "Collection metadata, gem certification, and numbered release registry" },
      { name: "VIP Concierge Pipeline", role: "Client Intake", description: "Private booking scheduler and commission inquiry coordinator" },
    ],
  },
  {
    id: "link-platform-infrastructure",
    slug: "link-platform",
    title: "LinkPlatform URL Infrastructure",
    subtitle: "Fast link shortener with live stats and free QR codes",
    industry: "Infrastructure & Marketing Systems",
    liveUrl: "https://link-platform-two.vercel.app/",
    headlineOutcome: "Links open in under 10 milliseconds with live click stats and zero monthly fees.",
    heroVisualTag: "Fast Link Shortener",
    previewDescription:
      "Fast link shortener that opens in milliseconds, provides free QR codes, and tracks clicks without monthly fees.",
    previewImage: "/images/projects/linkplatform-v2.png",
    metrics: [
      { label: "Redirect Latency", value: "<10ms" },
      { label: "Click Telemetry", value: "Real-Time" },
      { label: "QR Generation", value: "Instant" },
      { label: "Access Security", value: "Protected" },
    ],
    challenge: {
      overview:
        "Services like Bitly charge $35 to $300 a month just for custom links, and their links take multiple seconds to redirect people on mobile.",
      painPoints: [
        "Slow link redirects hurting marketing campaign results.",
        "Expensive monthly subscriptions just to use a custom short link.",
        "No free QR codes or click expiration options.",
      ],
    },
    approach: {
      discovery:
        "Short links should open instantly without extra hops, and marketing teams shouldn't have to pay expensive monthly software fees just to track clicks.",
      insight:
        "Fast links protect marketing budgets: speed keeps people from bouncing, and simple tools don't need steep subscriptions.",
    },
    solution: {
      whatWeBuilt:
        "A fast link shortener that opens in less than 10 milliseconds, creates free vector QR codes, and tracks clicks by country with zero monthly fees.",
      coreFeatures: [
        "Instant link redirects opening in under 10 milliseconds worldwide",
        "Live click tracking showing visitor countries and devices",
        "Free instant QR code generator for print and physical materials",
        "Password protection and link expiration dates",
      ],
    },
    experience: {
      customerPerspective:
        "Make a short link or QR code in two clicks, and watch real-time clicks come in live.",
      teamPerspective:
        "Run marketing and ad campaigns with zero monthly fees for short links.",
    },
    outcome: {
      summary:
        "Delivered a fast, reliable link tool that saves money while giving teams full control over their links.",
      achievements: [
        "Under 10ms redirect speeds ensuring zero drop-off on ads",
        "Full real-time click and location stats",
        "Zero monthly software fees for marketing teams",
      ],
    },
    systemComponents: [
      { name: "Edge Redirect Engine", role: "Core Routing", description: "Sub-10ms URL resolution and header-forwarding network" },
      { name: "Telemetry Ingestion Bus", role: "Analytics", description: "Real-time event collector for geo, referrer, and user-agent data" },
      { name: "Vector QR Synthesis Engine", role: "Creative Tooling", description: "Client-side SVG/PNG QR generation with error correction control" },
    ],
  },
  {
    id: "prophet-intelligence-platform",
    slug: "prophet-market-intelligence",
    title: "PROPHET Market Intelligence Platform",
    subtitle: "Turn spreadsheets into clear business charts in seconds",
    industry: "Data Analytics & Intelligence",
    liveUrl: "https://prophet-delta.vercel.app/",
    headlineOutcome: "Drop a spreadsheet and get clean business charts in under 60 seconds.",
    heroVisualTag: "Instant Business Charts",
    previewDescription:
      "Turn messy spreadsheets into clear business charts in seconds with complete privacy.",
    previewImage: "/images/projects/prophet.png",
    metrics: [
      { label: "Analysis Setup", value: "<60s" },
      { label: "Data Privacy", value: "Local-First" },
      { label: "File Support", value: "CSV & Excel" },
      { label: "Code Needed", value: "Zero" },
    ],
    challenge: {
      overview:
        "Business owners spend hours making charts from messy spreadsheets, or get stuck trying to learn complicated tools like PowerBI that are hard to use.",
      painPoints: [
        "Complicated BI software takes days to learn and costs expensive monthly seat licenses.",
        "Uploading private company financial spreadsheets to cloud tools creates privacy risks.",
        "Formatting charts by hand in Excel takes hours every single week.",
      ],
    },
    approach: {
      discovery:
        "Most business owners don't need complex database tools; they just want to drop in a CSV file and get clear charts automatically without writing formulas.",
      insight:
        "The fastest path to clarity is zero setup: drop the file, see the chart, and share the results.",
    },
    solution: {
      whatWeBuilt:
        "A simple analytics tool where you drop in any spreadsheet and get clear, presentation-ready charts in seconds, with everything staying private on your computer.",
      coreFeatures: [
        "Automatic spreadsheet reading with zero formulas needed",
        "Clean interactive charts created in under 60 seconds",
        "100% private in-browser analysis — financial numbers never touch the cloud",
        "One-click export ready for executive and team presentations",
      ],
    },
    experience: {
      customerPerspective:
        "Drop in a raw CSV spreadsheet and immediately see clear bar charts and growth trends.",
      teamPerspective:
        "Saves hours of formatting every week before meetings and reviews.",
    },
    outcome: {
      summary:
        "Enabled non-technical teams to produce executive-grade intelligence reports in seconds, drastically cutting reporting cycles while safeguarding data privacy.",
      achievements: [
        "Turnaround from raw CSV to presentation dashboard reduced from hours to under 60 seconds",
        "Complete confidentiality guaranteed through client-side data parsing",
        "Adopted by operators and consultants for rapid recurring audit reporting",
      ],
    },
    systemComponents: [
      { name: "In-Browser Parser Engine", role: "Data Intake", description: "High-speed CSV/Excel parsing and automated column type inference" },
      { name: "Reactive Charting Engine", role: "Visualization", description: "Interactive canvas chart renderer with sorting and aggregation" },
      { name: "Executive Report Synthesizer", role: "Export", description: "One-click printable report layout with responsive data grids" },
    ],
  },
];

export const SOLUTION_CATEGORIES: SolutionCategory[] = [
  {
    id: "digital-presence",
    slug: "digital-presence",
    title: "Websites & Stores",
    tagline: "Sites that tell your story and turn visitors into customers.",
    problem: "Your website looks dated, loads slowly, or fails to explain your value.",
    targetAudience:
      "Businesses, professionals, and retail brands that need a credible modern face.",
    capabilities: [
      "Corporate websites",
      "High-converting landing pages",
      "Booking & scheduling engines",
      "E-commerce storefronts",
      "Mobile performance",
      "Search engine optimization",
    ],
    outcome: "A presence that makes clients trust you on the first visit.",
    iconName: "Globe",
  },
  {
    id: "business-systems",
    slug: "business-systems",
    title: "Business Systems",
    tagline: "Internal tools and portals that bring operations together.",
    problem: "Your team loses hours weekly to spreadsheets, copy-pasting, and lost emails.",
    targetAudience: "Growing companies and institutions that need clean internal workflows.",
    capabilities: [
      "Operations dashboards",
      "Client & partner portals",
      "Inventory tracking",
      "Team management software",
      "Database design & migration",
      "Role-based access",
    ],
    outcome: "One backbone where work moves without administrative chaos.",
    iconName: "LayoutDashboard",
  },
  {
    id: "digital-products",
    slug: "digital-products",
    title: "Web Apps & Products",
    tagline: "Applications and platforms people actually enjoy using.",
    problem: "You have a product idea or a customer platform to build — and need it done right.",
    targetAudience: "Startups and businesses launching new digital services.",
    capabilities: [
      "Full-stack web apps",
      "SaaS architecture",
      "Multi-sided marketplaces",
      "Customer portals",
      "MVP prototypes",
      "Cloud infrastructure",
    ],
    outcome: "A product customers love and investors take seriously.",
    iconName: "AppWindow",
  },
  {
    id: "automation-ai",
    slug: "automation-ai",
    title: "Automation & AI",
    tagline: "Smart workflows that handle the repetitive work for you.",
    problem: "Skilled staff are stuck doing mechanical data entry instead of real work.",
    targetAudience: "Teams with heavy admin overhead who want to scale without hiring.",
    capabilities: [
      "Task automation",
      "AI document processing",
      "Custom AI assistants",
      "API integrations",
      "Lead enrichment & routing",
      "Intelligent alerts",
    ],
    outcome: "The business runs around the clock; your team does the human work.",
    iconName: "Sparkles",
  },
  {
    id: "digital-transformation",
    slug: "digital-transformation",
    title: "Modernization",
    tagline: "Legacy systems brought up to present-day standards.",
    problem: "Your software is slow, isolated, or risky — and it's holding growth back.",
    targetAudience: "Established organizations that need low-risk system evolution.",
    capabilities: [
      "Legacy modernization",
      "Data migrations",
      "Process redesign",
      "Old-to-new tool connectors",
      "Performance & security",
      "Digital strategy",
    ],
    outcome: "A foundation that protects your history and unlocks what's next.",
    iconName: "RefreshCw",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "start",
    name: "START",
    stage: "Presence",
    tagline: "A digital home that earns trust and converts visitors.",
    idealFor: "Startups, professionals, and small businesses.",
    timeline: "2 – 4 Weeks",
    typicalInvestmentRange: "Scoped by page count & integrations",
    highlights: [
      "Custom design — no templates",
      "Mobile-first build",
      "Sub-second loads & technical SEO",
      "Lead capture that works",
      "Plain-English guidance throughout",
    ],
    deliverables: [
      "Complete website & identity application",
      "Home, About, Solutions, Contact pages",
      "Spam-protected contact forms",
      "Analytics & Search Console setup",
      "Easy content updates",
      "Full device testing",
    ],
    supportWarranty: "30-day post-launch warranty + training session",
    ctaText: "Explore Start",
  },
  {
    id: "grow",
    name: "GROW",
    stage: "Systems",
    tagline: "Attract, sell, serve, and automate — end to end.",
    idealFor: "Growing businesses, clinics, hospitality, and service companies.",
    timeline: "4 – 8 Weeks",
    typicalInvestmentRange: "Scoped by workflows, user roles & payments",
    isPopular: true,
    highlights: [
      "Web apps & customer portals",
      "Booking, ordering, checkout engines",
      "Automated email & SMS notifications",
      "CRM / calendar / Stripe sync",
      "Conversion-focused UX",
    ],
    deliverables: [
      "Everything in Start, plus a portal/app",
      "Secure sign-up & accounts",
      "Payment gateway integration",
      "Automated status tracking",
      "Interactive discovery flows",
      "Database with daily backups",
    ],
    supportWarranty: "60-day warranty + priority Slack/WhatsApp channel",
    ctaText: "Explore Grow",
  },
  {
    id: "transform",
    name: "TRANSFORM",
    stage: "Operations",
    tagline: "Replace messy manual workflows with a custom platform.",
    idealFor: "Established companies and high-volume operations.",
    timeline: "8 – 14 Weeks",
    typicalInvestmentRange: "Scoped by complexity, migration & AI depth",
    highlights: [
      "Bespoke internal platforms",
      "Workflow automation & AI tools",
      "Multi-role permissions",
      "Spreadsheet & database migration",
      "End-to-end operational visibility",
    ],
    deliverables: [
      "Custom operations command center",
      "Multi-system sync & data pipelines",
      "AI assistance for documents & inquiries",
      "Role-based access & audit logging",
      "Full data migration",
      "Staff onboarding & video docs",
    ],
    supportWarranty: "90-day hypercare + ongoing optimization reviews",
    ctaText: "Explore Transform",
  },
  {
    id: "custom",
    name: "CUSTOM",
    stage: "Products",
    tagline: "Novel platforms and ecosystems that don't fit a package.",
    idealFor: "Funded startups, institutions, and enterprise transformations.",
    timeline: "Staged Sprints",
    typicalInvestmentRange: "Sprint allocations with milestone sign-offs",
    highlights: [
      "Dedicated senior team",
      "Web, API & mobile architecture",
      "Continuous prototyping",
      "Full IP ownership",
      "Custom SLAs",
    ],
    deliverables: [
      "Discovery, wireframes & architecture",
      "Production-grade infrastructure",
      "Sprint releases with live demos",
      "Technical & API documentation",
      "Long-term roadmap execution",
    ],
    supportWarranty: "Ongoing maintenance SLA & roadmap partnership",
    ctaText: "Let's Figure It Out",
  },
];

export const PROCESS_STAGES = [
  {
    number: "01",
    name: "DISCOVER",
    headline: "Tell us what you're trying to solve.",
    description:
      "No 30-page brief needed. Tell us what's broken, what's slow, or what opportunity you want.",
    detail: "We ask the right questions before suggesting any code.",
    icon: "Compass",
  },
  {
    number: "02",
    name: "UNDERSTAND",
    headline: "We map your users, team, and bottlenecks.",
    description:
      "Who uses it, what you already pay for, and where time gets lost today.",
    detail: "We find the root problem — usually simpler than feared.",
    icon: "Search",
  },
  {
    number: "03",
    name: "DESIGN",
    headline: "We shape the simplest, most effective experience.",
    description:
      "You see and feel the exact flow and screens before production code starts.",
    detail: "Interactive wireframes anyone can review.",
    icon: "PenTool",
  },
  {
    number: "04",
    name: "BUILD",
    headline: "We build, integrate, test, and refine.",
    description:
      "Battle-tested technology, wired into your existing tools and data.",
    detail: "Solid on every phone, tablet, and desktop.",
    icon: "Code2",
  },
  {
    number: "05",
    name: "LAUNCH",
    headline: "We bring it into the real world.",
    description: "Smooth deployment, staff training, verified integrations.",
    detail: "We stand by through rollout.",
    icon: "Rocket",
  },
  {
    number: "06",
    name: "EVOLVE",
    headline: "We keep refining as you grow.",
    description: "New capabilities as new opportunities appear.",
    detail: "The platform grows with your revenue.",
    icon: "TrendingUp",
  },
];

export const WHO_WE_HELP_SECTORS = [
  {
    title: "Startups & Innovators",
    badge: "Velocity",
    description:
      "Turn ideas into real products people pay for — without months of overbuilt prototypes.",
    examples: "MVPs, web apps, early-stage SaaS",
    icon: "Zap",
  },
  {
    title: "Growing Businesses",
    badge: "Scale",
    description:
      "Infrastructure that grows with sales, so you serve twice the customers without doubling staff.",
    examples: "Online ordering, appointments, portals, invoicing",
    icon: "Building2",
  },
  {
    title: "Established Organizations",
    badge: "Modernize",
    description:
      "Replace slow legacy tools and messy spreadsheets with one custom platform.",
    examples: "Operations hubs, CRM integrations, staff dashboards",
    icon: "Layers",
  },
  {
    title: "Institutions & Public Sector",
    badge: "Trust",
    description:
      "Complex services made simple and accessible for everyone, on every device.",
    examples: "Patient access, educational portals, community tools",
    icon: "ShieldCheck",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Our takeout process went from chaos to a smooth system. We stopped paying 30% commission and the kitchen runs calmer on weekends.",
    author: "Elena Rostova",
    role: "Operating Partner",
    organization: "Savor Hospitality Group",
    project: "KitchenSync Platform",
  },
  {
    quote:
      "Other agencies pitched cloud microservices we didn't need. OVERKILL asked where patients were getting stuck — and fixed that.",
    author: "Dr. Marcus Chen",
    role: "Clinical Director",
    organization: "Apex Care Medical Network",
    project: "Patient Access Gateway",
  },
  {
    quote:
      "We ran a multi-million-dollar pipeline on 14 spreadsheets. The new hub paid for itself in two months through eliminated errors.",
    author: "Sarah Lindqvist",
    role: "Head of Operations",
    organization: "Nordic Freight & Cargo",
    project: "OpsPulse Operations Hub",
  },
];

export const FAQS = [
  {
    question: "Do I need to know what technology I need?",
    answer:
      "No. You only need to know what's not working or what you're trying to achieve. Figuring out the simplest reliable solution is our job.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. Websites, web apps, internal software, portals, automations, and AI tools — we're a full digital solutions studio.",
  },
  {
    question: "Can you fix an existing system instead of starting over?",
    answer:
      "Yes. We modernize legacy software, connect disconnected tools, redesign confusing journeys, and automate manual steps — while keeping your data.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "By scope and outcomes, not guesswork. Workflows, integrations, and data migration drive cost. You get fixed milestones before any work begins.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A focused website: 2–4 weeks. Customer systems: 4–8 weeks. Deep custom platforms: 8–14 weeks. Exact dates come out of discovery.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Every project includes a 30–90 day warranty — monitoring, fixes, and training. After that, ongoing support if you want it.",
  },
  {
    question: "What does the name OVERKILL mean?",
    answer:
      "We don't stop at good enough. We keep listening, refining, and persisting until the solution genuinely makes your business better.",
  },
];
