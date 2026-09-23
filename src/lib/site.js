/**
 * Every word of site copy, in one place.
 *
 * Entries marked `placeholder: true` are sample content that must be replaced
 * before launch. Filter on that flag via `showPlaceholders` rather than
 * deleting entries by hand — the live WordPress site has been publishing
 * fabricated testimonials, and a single switch is the reliable guard.
 */

export const showPlaceholders = true;

export const company = {
  name: "Innovage",
  legalName: "Innovage Softwares Inc.",
  tagline: "Custom software for growing Canadian businesses.",
  email: "innovage@innovagesoft.com",
  phone: "+1 (905) 232-0482",
  phoneHref: "+19052320482",
  /* Digits only, country code first — wa.me rejects spaces and punctuation.
     Confirm this line is registered with WhatsApp Business before launch. */
  whatsapp: "19052320482",
  whatsappMessage:
    "Hi Innovage — I'd like to talk about a project.",
  address: {
    street: "36-4181 Sladeview Cres",
    city: "Mississauga",
    region: "ON",
    postalCode: "L5L 5R2",
    country: "Canada",
  },
  hours: "Mon–Fri, 9:00–17:00 ET",
  responseTime: "Within one business day",
};

export const whatsappHref = `#`;

/* ── Services ──────────────────────────────────────────────────────────── */

export const services = [
  {
    slug: "custom-software",
    navLabel: "Custom Software",
    title: "Custom Software Development",
    blurb: "Portals, internal tools and line-of-business systems.",
    headline: "Software shaped around how your business already works.",
    intro:
      "Off-the-shelf tools make you change your process to match theirs. We map how work actually moves through your business, then build the system around it — customer portals, internal tools, dashboards and approval workflows that your team adopts because it fits.",
    image: "dashboard-screen",
    imageAlt: "A reporting dashboard open on a laptop screen",
    build: [
      {
        title: "Customer & partner portals",
        body: "Give clients a secure place to submit, track and approve work instead of trading email attachments.",
      },
      {
        title: "Internal tools & admin systems",
        body: "Replace the spreadsheet that runs a critical process with something auditable, permissioned and hard to break.",
      },
      {
        title: "Dashboards & reporting",
        body: "One place where the numbers agree, pulled live from the systems that produce them.",
      },
      {
        title: "Approval & workflow engines",
        body: "Multi-step routing with roles, escalations and a full history of who approved what and when.",
      },
    ],
    outcomes: [
      "A system your team actually uses, because it matches how they work",
      "Auditable history on every record that matters",
      "Role-based access that satisfies your compliance review",
      "Documentation and training so knowledge is not stuck in one head",
    ],
    stack: ["React", "Next.js", "Node.js", "Laravel", "PostgreSQL", "Azure"],
    faqs: [
      {
        q: "How long does a first version take?",
        a: "Most first releases land in 10 to 16 weeks. We scope a working slice you can put in front of real users early, then build out from there rather than disappearing for six months.",
      },
      {
        q: "Do we own the code?",
        a: "Yes. You own the repository, the infrastructure accounts and the documentation. There is no licence to keep paying and no lock-in to us.",
      },
      {
        q: "Can you work with our existing systems?",
        a: "Usually. Most projects we take on have to coexist with an accounting package, a CRM or a legacy database. We plan the integration during Discovery rather than discovering it late.",
      },
    ],
    caseStudySlugs: ["mattressville", "inovexia"],
  },
  {
    slug: "saas-development",
    navLabel: "SaaS Development",
    title: "SaaS Product Development",
    blurb: "From first prototype to a product with paying subscribers.",
    headline: "Take a product from prototype to paying subscribers.",
    intro:
      "Building a product other businesses pay for is a different problem from building software for one company. Multi-tenancy, billing, onboarding, usage limits and the admin side all have to work on day one. We have shipped that stack before and we build it in from the start.",
    image: "analytics-dashboard",
    imageAlt: "Analytics charts on a dark dashboard interface",
    build: [
      {
        title: "Multi-tenant architecture",
        body: "Tenant isolation, per-account configuration and data separation designed in early, not retrofitted after your first enterprise customer asks.",
      },
      {
        title: "Billing & subscriptions",
        body: "Plans, trials, upgrades, proration and dunning wired to Stripe, with the edge cases handled.",
      },
      {
        title: "Onboarding & activation",
        body: "The first ten minutes decide whether a trial converts. We design that path deliberately.",
      },
      {
        title: "Admin & support tooling",
        body: "The internal console your team needs to impersonate, debug and fix customer problems without a developer.",
      },
    ],
    outcomes: [
      "A product that can take its first paying customer safely",
      "Billing that survives upgrades, downgrades and refunds",
      "Usage and conversion metrics instrumented from launch",
      "An admin console so support does not escalate everything to engineering",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis", "Vercel"],
    faqs: [
      {
        q: "We have an idea but no product yet. Where do we start?",
        a: "With Discovery and a clickable prototype. You get real screens to test with prospective customers before committing to a build budget — and a scope you can take elsewhere if you decide not to work with us.",
      },
      {
        q: "Can you take over an existing SaaS codebase?",
        a: "Often, yes. We start with a technical audit — architecture, dependencies, test coverage, security — and give you an honest read on whether to extend it or rebuild.",
      },
      {
        q: "Where is the data hosted?",
        a: "Canadian regions where residency matters to your customers or your compliance obligations. We will tell you plainly when it does not matter and a cheaper region is fine.",
      },
    ],
    caseStudySlugs: ["inovexia", "northline-freight"],
  },
  {
    slug: "web-mobile-apps",
    navLabel: "Web & Mobile Apps",
    title: "Web & Mobile App Development",
    blurb: "Fast, secure apps and sites on every device.",
    headline: "One product, every screen your customers use.",
    intro:
      "Websites and web applications that load fast and convert, plus native-feeling iOS and Android apps built on a shared codebase and connected to the same backend — so your web and mobile experiences never drift out of sync.",
    image: "mobile-laptop",
    imageAlt: "A phone and laptop being used side by side",
    build: [
      {
        title: "Marketing sites that convert",
        body: "Fast, accessible, search-friendly sites your team can edit without filing a ticket.",
      },
      {
        title: "Web applications",
        body: "Secure, responsive applications your customers and staff can reach from anywhere.",
      },
      {
        title: "iOS & Android apps",
        body: "A shared React Native codebase, native where it counts, published to both stores.",
      },
      {
        title: "E-commerce",
        body: "Storefronts wired to the inventory, pricing and fulfilment systems you already run.",
      },
    ],
    outcomes: [
      "Core Web Vitals in the green, not a lighthouse score you never look at again",
      "One backend feeding web and mobile, so nothing gets out of sync",
      "Accessible to WCAG 2.2 AA",
      "A CMS your marketing team can actually use",
    ],
    stack: ["Next.js", "React Native", "WordPress", "Laravel", "Tailwind", "Shopify"],
    faqs: [
      {
        q: "Do we need a native app or is a web app enough?",
        a: "Often a web app is enough, and we will say so. You need native when you depend on push notifications, offline use, the camera or hardware — we will walk through which of those actually apply to you.",
      },
      {
        q: "Can you rebuild our WordPress site without losing our SEO?",
        a: "Yes. We map every existing URL to its new route and ship permanent redirects at launch, so indexed pages and inbound links keep working.",
      },
      {
        q: "Who maintains it afterwards?",
        a: "We do, if you want. Support is part of every project, and Sitecare covers updates, security, backups and monthly edit hours on a monthly plan.",
      },
    ],
    caseStudySlugs: ["klej", "maple-co-dental"],
  },
  {
    slug: "ai-automation",
    navLabel: "AI & Automation",
    title: "AI & Automation",
    blurb: "Connect your systems and cut the manual re-entry.",
    headline: "Stop paying people to move data between systems.",
    intro:
      "Most businesses lose hours every week to copying data between accounting, CRM, inventory and email. We connect the systems you already run, automate the handoffs, and apply AI where it genuinely helps — document extraction, classification, drafting — rather than where it just sounds impressive.",
    image: "ai-automation",
    imageAlt: "Abstract rendering of the letters A and I in blue light",
    build: [
      {
        title: "System integrations",
        body: "Accounting, CRM, inventory, payments and shipping, talking to each other on a schedule or in real time.",
      },
      {
        title: "Workflow automation",
        body: "The recurring sequence of emails, approvals and data entry your team does by hand, running on its own.",
      },
      {
        title: "Document processing",
        body: "Pull structured data out of invoices, forms and PDFs, with a human checkpoint where accuracy matters.",
      },
      {
        title: "AI assistants on your data",
        body: "Retrieval over your own documents and records, scoped and permissioned, so answers cite a source instead of inventing one.",
      },
    ],
    outcomes: [
      "Hours a week returned to your team, measured before and after",
      "One source of truth instead of four systems that disagree",
      "A human checkpoint wherever a wrong answer would be costly",
      "Clear logging, so you can see what ran and what it changed",
    ],
    stack: ["Python", "Node.js", "Claude API", "Zapier", "Make", "PostgreSQL"],
    faqs: [
      {
        q: "Is our data used to train someone else's model?",
        a: "Not in anything we build. We use business-tier APIs that exclude your data from training, and we will show you the provider's terms in writing.",
      },
      {
        q: "What if the AI gets it wrong?",
        a: "We design for that. Anything with a real cost of error gets a human approval step, and every automated action is logged so you can trace what happened.",
      },
      {
        q: "How do we know it is worth it?",
        a: "We measure the manual process first — how many hours, how many errors — so the before-and-after is a number, not a feeling.",
      },
    ],
    caseStudySlugs: ["northline-freight", "mattressville"],
  },
];

export function serviceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

/* ── Sitecare ──────────────────────────────────────────────────────────── */

export const sitecare = {
  heading: "A website isn't finished at launch.",
  intro:
    "Plugins go out of date, security gaps appear, pages slow down and forms quietly stop working. Sitecare handles all of it every month so you never have to think about it.",
  includes: [
    "Software and plugin updates",
    "Security monitoring and protection",
    "Daily backups",
    "Uptime monitoring",
    "Speed checks and fixes",
    "Bug fixes",
    "Monthly hours for content edits",
    "Monthly report",
    "Priority support",
  ],
  plans: "Essential · Standard · Premium",
  plansPlaceholder: true,
};

/* ── Every project includes — the seven delivery stages ────────────────── */

export const projectIncludes = [
  {
    icon: "discovery",
    title: "Discovery",
    body: "Understand your business and requirements.",
    detail:
      "Workshops with your team, process mapping and a clear scope with fixed pricing. You walk away with a plan you can use even if you don't build with us.",
    image: "workshop",
    imageAlt: "A team running a workshop around sticky notes on a wall",
  },
  {
    icon: "design",
    title: "UX/UI",
    body: "Design the actual screens and user flows.",
    detail:
      "Clickable prototypes of the real screens before any code is written, so you react to something concrete and we fix problems while they are still cheap.",
    image: "meeting-notes",
    imageAlt: "People reviewing notes and sketches around a table",
  },
  {
    icon: "code",
    title: "Development",
    body: "Frontend + backend + database + integrations.",
    detail:
      "Delivered in short cycles against the approved design. You see working software at every stage and adjust priorities as you learn.",
    image: "dev-desks",
    imageAlt: "Developers working at desks beside a bright window",
  },
  {
    icon: "shield",
    title: "Testing",
    body: "Functional, security and performance testing.",
    detail:
      "Automated test coverage on the paths that matter, a security review before release, and load testing against the traffic you actually expect.",
    image: "screen-review",
    imageAlt: "Two people reviewing an interface on screen together",
  },
  {
    icon: "rocket",
    title: "Deployment",
    body: "Production deployment and configuration.",
    detail:
      "Infrastructure, environments, domains, certificates, monitoring and data migration — handled, with a rollback plan if go-live goes sideways.",
    image: "datacenter",
    imageAlt: "Technicians working in a data centre aisle",
  },
  {
    icon: "book",
    title: "Documentation",
    body: "Technical and user documentation.",
    detail:
      "Architecture notes and runbooks for whoever maintains it next, plus plain-language guides for the people who use it daily.",
    image: "presentation",
    imageAlt: "A team being walked through a presentation in a meeting room",
  },
  {
    icon: "support",
    title: "Support",
    body: "Post-launch maintenance and improvements.",
    detail:
      "A monthly plan for monitoring, maintenance and new features. Launch is the start of the relationship, not the end of the engagement.",
    image: "launch-celebration",
    imageAlt: "Two colleagues celebrating at a desk",
  },
];

/* ── Why Innovage ──────────────────────────────────────────────────────── */

export const whyInnovage = [
  {
    icon: "route",
    title: "We start with your process",
    body: "Before writing code we spend time understanding how work actually flows through your business, then design around that.",
  },
  {
    icon: "team",
    title: "Senior team, no handoffs",
    body: "The people you meet in the first call are the people who build your product. No account managers, no outsourced dev shop.",
  },
  {
    icon: "maple",
    title: "Canadian, end to end",
    body: "Based in Mississauga, working in your time zone, with data hosted in Canadian regions where it matters for compliance.",
  },
  {
    icon: "partnership",
    title: "Long-term partnership",
    body: "Most of our clients have been with us for years. Launch is the start of the relationship, not the end.",
  },
];

/* ── Industries ────────────────────────────────────────────────────────── */

export const industries = [
  {
    slug: "retail-ecommerce",
    name: "Retail & E-commerce",
    image: "retail-store",
    imageAlt: "The interior of a modern retail store",
    problem:
      "Orders arrive by phone, email and storefront, and none of those three agree about what is in stock.",
    build: [
      "Connected storefront and back office",
      "Inventory and pricing sync",
      "Order and fulfilment tracking",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics & Transportation",
    image: "warehouse",
    imageAlt: "Racking and pallets in a distribution warehouse",
    problem:
      "Dispatch runs on a whiteboard and a phone, and proof of delivery arrives as a photo in someone's texts.",
    build: [
      "Live dispatch boards",
      "Driver apps with proof of delivery",
      "Route and capacity reporting",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    image: "manufacturing",
    imageAlt: "An engineer operating equipment on a production line",
    problem:
      "Production, quoting and quality records live in separate spreadsheets that only one person understands.",
    build: [
      "Job and work-order tracking",
      "Quoting and BOM tools",
      "Quality and compliance records",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    image: "healthcare",
    imageAlt: "A clinician typing on a laptop beside a stethoscope",
    problem:
      "Front desk drowns in phone calls for bookings, forms and results that patients could handle themselves.",
    build: [
      "Patient portals and online booking",
      "Intake forms and consent",
      "PHIPA-aware Canadian hosting",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    image: "accounting",
    imageAlt: "Tax paperwork and a calculator on a desk",
    problem:
      "Client documents move by email attachment, and nobody is certain which version is the current one.",
    build: [
      "Secure client portals",
      "Document exchange and e-signature",
      "Engagement and deadline tracking",
    ],
  },
  {
    slug: "saas-technology",
    name: "SaaS & Technology",
    image: "datacenter",
    imageAlt: "Server racks lit in a data centre",
    problem:
      "The product works, but billing, onboarding and the admin console were never really built.",
    build: [
      "Multi-tenant architecture",
      "Billing and subscription flows",
      "Admin and support tooling",
    ],
  },
];

/* ── Case studies ──────────────────────────────────────────────────────── */

export const caseStudies = [
  {
    slug: "mattressville",
    client: "Mattressville",
    project: "Online store & order management",
    industry: "Retail",
    type: "E-commerce + internal system",
    image: "pos-terminal",
    imageAlt: "A point-of-sale terminal being used in a shop",
    summary:
      "Replaced phone-and-spreadsheet ordering with a connected storefront and back office, so sales, stock and fulfilment all read from the same data.",
    challenge:
      "Orders came in three ways and were re-keyed by hand into a spreadsheet. Stock counts were a day behind, and oversells were a weekly occurrence.",
    approach:
      "We mapped the real order path end to end, then built a storefront wired directly to the back-office system, with one inventory record shared by both.",
    stack: ["WordPress", "WooCommerce", "Laravel", "MySQL"],
    results: [
      "One stock figure across storefront and back office",
      "Manual order re-entry removed from the daily routine",
      "Fulfilment status visible to staff without asking",
    ],
  },
  {
    slug: "inovexia",
    client: "Inovexia",
    project: "Accountant client portal",
    industry: "Professional services",
    type: "SaaS platform",
    image: "accounting",
    imageAlt: "Tax documents and a calculator on a desk",
    summary:
      "A secure portal where accountants and their clients exchange documents, track returns and sign off on filings without email threads.",
    challenge:
      "Client documents arrived as email attachments in a dozen formats. Chasing signatures and finding the current version of a return ate hours every week during filing season.",
    approach:
      "A multi-tenant portal with per-firm branding, document versioning, structured request lists and an audit trail on every approval.",
    stack: ["Next.js", "PostgreSQL", "Azure", "Stripe"],
    results: [
      "Document exchange moved out of email entirely",
      "Every approval carries a timestamped audit trail",
      "Filing-season chasing reduced to a single outstanding list",
    ],
  },
  {
    slug: "klej",
    client: "Klej",
    project: "Brand site & catalogue",
    industry: "Retail",
    type: "Web application",
    image: "retail-store",
    imageAlt: "A bright retail interior with product displays",
    summary:
      "A fast, search-friendly catalogue the team updates themselves, built to load quickly on the mobile connections their customers actually use.",
    challenge:
      "The previous site took seconds to load on mobile and every content change needed a developer.",
    approach:
      "A statically generated catalogue backed by a headless CMS, with image optimisation and a structure the marketing team can edit without help.",
    stack: ["React", "Headless CMS", "Vercel"],
    results: [
      "Content edits no longer require a developer",
      "Catalogue pages prerendered for fast mobile loads",
      "Structured data added for product search results",
    ],
  },
  {
    slug: "northline-freight",
    client: "Northline Freight",
    project: "Dispatch & driver portal",
    industry: "Logistics",
    type: "Web app + mobile app",
    image: "warehouse",
    imageAlt: "A logistics warehouse with stacked pallets",
    summary:
      "Replaced a whiteboard-and-phone dispatch process with a live dispatch board and a driver app for proof of delivery.",
    challenge:
      "Dispatchers tracked loads on a whiteboard and confirmed delivery by phone. Nothing was searchable after the fact.",
    approach:
      "A live dispatch board backed by a shared data model, plus a React Native driver app for status updates, signatures and delivery photos.",
    stack: ["React", "Node.js", "PostgreSQL", "React Native"],
    results: [
      "Dispatchers handle 40% more loads per day with the same headcount",
      "Proof of delivery captured in the app, not in text messages",
      "Load history searchable for the first time",
    ],
    placeholder: true,
  },
  {
    slug: "maple-co-dental",
    client: "Maple & Co. Dental",
    project: "Patient portal",
    industry: "Healthcare",
    type: "Customer portal",
    image: "healthcare",
    imageAlt: "A clinician working at a laptop",
    summary:
      "Online booking, intake forms, treatment plans and payments for a multi-location dental group.",
    challenge:
      "The front desk spent most of the morning on the phone booking appointments and chasing intake paperwork.",
    approach:
      "A patient portal with real-time availability across locations, digital intake and consent, and card payments — hosted in a Canadian region.",
    stack: ["Next.js", "Stripe", "Canadian hosting"],
    results: [
      "Front-desk phone volume dropped by a third in two months",
      "Intake forms completed before arrival",
      "Booking available across all locations in one view",
    ],
    placeholder: true,
  },
];

export function caseStudyBySlug(slug) {
  return caseStudies.find((c) => c.slug === slug);
}

/* ── Blog ──────────────────────────────────────────────────────────────── */

export const posts = [
  {
    slug: "choosing-custom-software-vs-off-the-shelf",
    title: "Custom software or off-the-shelf? A straight answer",
    category: "Strategy",
    date: "2026-08-18",
    readingTime: "6 min read",
    image: "meeting-notes",
    imageAlt: "Notes and sketches spread across a meeting table",
    excerpt:
      "Custom is not automatically better. Here is the test we actually apply before recommending a build, and the three situations where we tell clients to buy instead.",
    body: [
      {
        heading: "Start with the cost of the workaround",
        paragraphs: [
          "Every business running off-the-shelf software has a set of workarounds: the spreadsheet that bridges two systems, the naming convention everyone has to remember, the person who re-keys orders every morning. The question is not whether those workarounds exist — they always do — but what they cost you.",
          "Put a number on it. Hours per week, multiplied by the loaded cost of the people doing it, plus the cost of the errors it produces. If that number is small, buy the tool and keep the workaround. If it is a full salary, the maths changes.",
        ],
      },
      {
        heading: "Three times you should buy, not build",
        paragraphs: [
          "When the process is genuinely standard. Payroll, accounting and email are solved problems, and no custom build will beat a mature product at them.",
          "When the requirement is still moving. If you cannot describe the process consistently two weeks running, you are not ready to freeze it into software.",
          "When nobody will own it. Custom software needs a person inside your business who cares whether it works. Without that, it decays.",
        ],
      },
      {
        heading: "What building actually buys you",
        paragraphs: [
          "The honest answer is fit. A custom system does the thing your business does, in the order your business does it, with the vocabulary your team already uses. Adoption stops being a training problem.",
          "The second thing is leverage. Once the data is in one place and correct, reporting, automation and integrations become cheap. That compounding is usually worth more than the original feature list.",
        ],
      },
    ],
  },
  {
    slug: "what-a-discovery-phase-should-produce",
    title: "What a discovery phase should actually produce",
    category: "Process",
    date: "2026-07-29",
    readingTime: "5 min read",
    image: "workshop",
    imageAlt: "A facilitator leading a workshop at a sticky-note wall",
    excerpt:
      "If you finish discovery with a deck and a rough estimate, you were sold a sales process. Here is what you should be holding instead.",
    body: [
      {
        heading: "A scope you can take elsewhere",
        paragraphs: [
          "The test of a good discovery phase is simple: could you hand the output to a different development firm and get a comparable quote? If not, what you bought was a pitch.",
          "That means process maps, a prioritised feature list, the integration points named specifically, and the open risks written down rather than glossed over.",
        ],
      },
      {
        heading: "Fixed pricing on the next phase",
        paragraphs: [
          "Discovery exists to remove enough uncertainty that the following phase can be priced with confidence. If the estimate afterwards is still a wide range, the discovery did not do its job.",
        ],
      },
      {
        heading: "The problems found early",
        paragraphs: [
          "The most valuable output is usually the unwelcome one — the integration that turns out to be undocumented, the compliance requirement nobody mentioned, the process that three departments describe differently. Finding those in week two costs a conversation. Finding them in month five costs the budget.",
        ],
      },
    ],
  },
  {
    slug: "ai-automation-where-it-actually-helps",
    title: "Where AI actually helps a mid-sized business",
    category: "AI & Automation",
    date: "2026-07-08",
    readingTime: "7 min read",
    image: "ai-automation",
    imageAlt: "Abstract blue rendering of the letters AI",
    excerpt:
      "Most AI pitches aimed at operations teams are solving problems those teams do not have. Four places it genuinely earns its cost — and where a plain script is the better answer.",
    body: [
      {
        heading: "Document extraction",
        paragraphs: [
          "Pulling structured fields out of invoices, purchase orders and forms is the clearest win available today. The documents are semi-structured, the volume is high, and the work is tedious enough that people make mistakes.",
          "Keep a human checkpoint on anything that moves money. Review a queue of extracted values rather than trusting them straight into the ledger.",
        ],
      },
      {
        heading: "Classification and routing",
        paragraphs: [
          "Sorting inbound email, support tickets or applications into the right queue is low-risk and saves real time. A wrong classification is annoying, not expensive, which makes it a good fit.",
        ],
      },
      {
        heading: "Search over your own documents",
        paragraphs: [
          "Retrieval over your policies, contracts and past projects, scoped and permissioned, answers questions that would otherwise interrupt a colleague. Insist that answers cite the source document — an answer you cannot verify is worse than no answer.",
        ],
      },
      {
        heading: "Where a plain script wins",
        paragraphs: [
          "If the rule is deterministic — move this field from system A to system B, flag anything over a threshold — write the script. It is cheaper, faster, testable and it will not surprise you. Reaching for a model on a problem a conditional would solve is how automation projects lose credibility.",
        ],
      },
    ],
  },
  {
    slug: "replatforming-without-losing-seo",
    title: "Replatforming without losing your search traffic",
    category: "Web",
    date: "2026-06-16",
    readingTime: "6 min read",
    image: "desk-devices",
    imageAlt: "Laptops and devices arranged on a desk from above",
    excerpt:
      "The rebuild is the easy part. The redirect map is what decides whether your traffic survives the switch.",
    body: [
      {
        heading: "Inventory every URL first",
        paragraphs: [
          "Before any design work, pull the full list of live URLs from the sitemap, the server logs and Search Console. The sitemap alone will miss pages that still earn traffic.",
          "For each one, decide: carry over, merge, or drop. Every carried and merged URL needs a permanent redirect to its new address on day one.",
        ],
      },
      {
        heading: "Watch for the quiet killers",
        paragraphs: [
          "Trailing slashes, uppercase paths, query strings and www versus apex are where redirect maps silently fail. Test them explicitly rather than assuming the framework handles it.",
          "Staging domains leaking into production links are the other common one. Grep the built output for your dev hostname before you ship.",
        ],
      },
      {
        heading: "Measure the switch",
        paragraphs: [
          "Record impressions and clicks for your top fifty pages the week before launch. Check them at seven, thirty and ninety days. A short dip is normal; a page that never recovers usually means a redirect that never fired.",
        ],
      },
    ],
  },
  {
    slug: "client-portal-worth-building",
    title: "Is a client portal worth building?",
    category: "Strategy",
    date: "2026-05-27",
    readingTime: "5 min read",
    image: "screen-review",
    imageAlt: "Two people reviewing an interface together",
    excerpt:
      "Portals are the most requested thing we build and the most frequently abandoned. The difference comes down to one question.",
    body: [
      {
        heading: "The question that predicts adoption",
        paragraphs: [
          "Does the portal save your client time, or only save you time? Portals built purely to reduce your own admin load get ignored, and you end up maintaining both the portal and the email process it was meant to replace.",
          "The ones that stick remove a real irritation for the customer: seeing status without phoning, submitting a form once instead of three times, finding last year's documents without asking.",
        ],
      },
      {
        heading: "Start with one workflow",
        paragraphs: [
          "Pick the single interaction that generates the most inbound email and build only that. A portal that does one thing well gets used; a portal that does nine things adequately gets a login nobody remembers.",
        ],
      },
    ],
  },
  {
    slug: "what-software-maintenance-really-covers",
    title: "What software maintenance really covers",
    category: "Support",
    date: "2026-05-06",
    readingTime: "4 min read",
    image: "notes-laptop",
    imageAlt: "Hands taking notes beside a laptop",
    excerpt:
      "Maintenance sounds like a line item you could skip. Here is what is actually inside it, and what happens the year you do skip it.",
    body: [
      {
        heading: "It is mostly other people's changes",
        paragraphs: [
          "Your software sits on dependencies, browsers, operating systems, payment APIs and hosting platforms, and all of those move whether or not you touch your code. Most maintenance work is absorbing changes you did not choose.",
          "Skip it for a year and the upgrade stops being routine. Dependencies go several major versions behind, security patches no longer apply cleanly, and a one-day update becomes a two-week project.",
        ],
      },
      {
        heading: "What a plan should include",
        paragraphs: [
          "Updates and security patching, monitored backups, uptime and error monitoring, a performance check, and a named person who already knows your system. If a maintenance quote does not list those, ask what you are paying for.",
        ],
      },
    ],
  },
];

export function postBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

/* ── Proof ─────────────────────────────────────────────────────────────── */

export const clients = [
  "Mattressville",
  "Inovexia",
  "Klej",
  "Expert Rubber",
  "MN Aluminum",
];

export const stats = [
  { value: "10+", label: "Years in business" },
  { value: "100+", label: "Projects delivered" },
  { value: "100%", label: "Canadian team" },
  { value: "5 yrs", label: "Average client relationship", placeholder: true },
];

export const testimonials = [
  {
    quote:
      "They understood our process better than we did. Six months in, I can't imagine running the business without the system they built.",
    name: "[Name]",
    title: "[Title]",
    company: "Mattressville",
    placeholder: true,
  },
  {
    quote:
      "We'd been burned by two agencies before. This was the first team that actually shipped what they showed us in the prototype, on the date they said.",
    name: "[Name]",
    title: "[Title]",
    company: "Inovexia",
    placeholder: true,
  },
  {
    quote:
      "They built it like it was their own product. Years later they're still the first people we call when we want to add something.",
    name: "[Name]",
    title: "[Title]",
    company: "Klej",
    placeholder: true,
  },
];

/* ── Navigation ────────────────────────────────────────────────────────── */

export const nav = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.navLabel,
      href: `/services/${s.slug}`,
      blurb: s.blurb,
    })),
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
];

export const navCta = { label: "Get in Touch", href: "/contact" };

/* ── Contact ───────────────────────────────────────────────────────────── */

export const projectTypes = [
  "Custom software",
  "SaaS product",
  "Website or web app",
  "Mobile app",
  "AI & automation",
  "Sitecare / support",
  "Not sure yet",
];

export const budgets = [
  "Under $25k",
  "$25k–$75k",
  "$75k–$150k",
  "$150k+",
  "Not sure yet",
];

export const nextSteps = [
  "We read your message and reply within a business day.",
  "We set up a short call to understand your needs.",
  "You get a clear proposal with scope, timeline and cost.",
];

/* ── Footer ────────────────────────────────────────────────────────────── */

export const footerColumns = [
  {
    heading: "Services",
    links: services.map((s) => ({
      label: s.navLabel,
      href: `/services/${s.slug}`,
    })),
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Industries", href: "/industries" },
      { label: "Process", href: "/process" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Get started",
    links: [
      { label: "Get in Touch", href: "/contact" },
      { label: "WhatsApp us", href: whatsappHref, external: true },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];
