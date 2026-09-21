/**
 * Single source of copy for the site, transcribed from `content.md`.
 *
 * Anything carrying `placeholder: true` is sample content that must be
 * replaced before launch — see reference/content-audit.md §2, which flags
 * the live site's fabricated testimonials as a credibility problem. Filter
 * on that flag rather than deleting entries by hand.
 */

/**
 * Master switch for sample content. Flip to `false` and every entry marked
 * `placeholder: true` disappears from the page — the audit's launch blocker
 * becomes a one-line change rather than a hunt through components.
 */
export const showPlaceholders = true;

export const company = {
  name: "Innovage",
  legalName: "Innovage Softwares Inc.",
  wordmark: "innovagesoft",
  tagline: "Custom software for growing Canadian businesses.",
  email: "innovage@innovagesoft.com",
  phone: "+1 (905) 232-0482",
  phoneHref: "+19052320482",
  address: {
    street: "36-4181 Sladeview Cres",
    city: "Mississauga",
    region: "ON",
    postalCode: "L5L 5R2",
    country: "Canada",
  },
  responseTime: "Within one business day",
};

/* ── 4. Solutions ──────────────────────────────────────────────────────── */

export const solutions = [
  {
    id: "custom-software",
    title: "Custom Software & SaaS",
    navLabel: "Custom Software & SaaS",
    blurb: "Portals, internal tools and multi-tenant products.",
    body: "Customer portals, internal tools, dashboards, approval workflows and multi-user SaaS platforms. From first prototype to a product with paying subscribers — we handle architecture, billing, multi-tenant setup and the admin side.",
    highlights: ["Customer portals", "Dashboards & reporting", "Billing & multi-tenant"],
  },
  {
    id: "web",
    title: "Web Apps & Websites",
    navLabel: "Web Apps & Websites",
    blurb: "Fast, secure sites that turn visitors into customers.",
    body: "Fast, secure websites and web applications that work on every device and turn visitors into customers. Built on WordPress, Laravel and React.",
    highlights: ["WordPress", "Laravel", "React"],
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    navLabel: "Mobile Apps",
    blurb: "iOS and Android on one shared codebase.",
    body: "Native-feeling iOS and Android apps built on a shared codebase, connected to the same backend as your web product so nothing gets out of sync.",
    highlights: ["iOS", "Android", "Shared backend"],
  },
  {
    id: "automation",
    title: "Automation & Integrations",
    navLabel: "Automation & Integrations",
    blurb: "Make the systems you already run talk to each other.",
    body: "Connect the systems you already use — accounting, CRM, inventory, payment providers — so data moves on its own and your team stops re-entering it.",
    highlights: ["Accounting & CRM", "Inventory", "Payments"],
  },
  {
    id: "sitecare",
    title: "Sitecare — ongoing website care",
    navLabel: "Sitecare",
    blurb: "Updates, security, backups and monthly edit hours.",
    body: "Updates, security, backups, monitoring, speed fixes and monthly edit hours on a monthly plan. You get a team that knows your site, not a ticket queue.",
    highlights: ["Monthly plan", "Monitoring", "Edit hours"],
  },
];

/** Sitecare gets a dedicated section further down; the rest are cards. */
export function solutionHref(id) {
  return id === "sitecare" ? "#sitecare" : `#solution-${id}`;
}

export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "Customers", href: "#customers" },
  ],
  solutionsHref: "#solutions",
  cta: { label: "Get in Touch", href: "#contact" },
};

/* ── 2. Hero ───────────────────────────────────────────────────────────── */

export const hero = {
  headline: "Custom software built around how your business actually works.",
  sub: "We design and build web apps, customer portals, SaaS platforms and mobile apps for growing businesses across Canada ",
  primary: { label: "Get in Touch", href: "#contact" },
  secondary: { label: "See our customers", href: "#customers" },
};

/* ── 3. Client logos strip ─────────────────────────────────────────────── */

export const clients = [
  { name: "Mattressville", industry: "Retail", city: "Mississauga" },
  { name: "Inovexia", industry: "Technology", city: "Mississauga" },
  { name: "Klej", industry: "Retail", city: "Mississauga" },
  { name: "Expert Rubber", industry: "Manufacturing", city: "Ontario" },
  { name: "MN Aluminum", industry: "Manufacturing", city: "Ontario" },
];

/* ── 5. Why us ─────────────────────────────────────────────────────────── */

export const whyUs = [
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

/* ── 6. Process ────────────────────────────────────────────────────────── */

export const process = [
  {
    title: "Discover",
    body: "Workshops with your team, process mapping, and a clear scope with fixed pricing. You walk away with a plan you can use even if you don't build with us.",
  },
  {
    title: "Design",
    body: "Clickable prototypes of the real screens before any code is written, so you can react to something concrete and we fix problems while they're cheap.",
  },
  {
    title: "Build",
    body: "Work is delivered in short cycles. You see progress at every stage, test features as they land and adjust priorities as you learn.",
  },
  {
    title: "Launch",
    body: "We test everything, handle deployment, data migration, training and go-live support.",
  },
  {
    title: "Improve",
    body: "We move onto a monthly plan for monitoring, maintenance and new features as your business grows.",
  },
];

/* ── 7. Featured customers ─────────────────────────────────────────────── */

export const caseStudies = [
  {
    client: "Mattressville",
    project: "Online store & order management",
    industry: "Retail",
    type: "E-commerce + internal system",
    body: "Replaced phone-and-spreadsheet ordering with a connected storefront and back office, so sales, stock and fulfilment all read from the same data.",
    stack: ["WordPress", "WooCommerce", "Laravel"],
  },
  {
    client: "Inovexia",
    project: "Accountant client portal",
    industry: "Professional services",
    type: "SaaS platform",
    body: "A secure portal where accountants and their clients exchange documents, track returns and sign off on filings without email threads.",
    stack: ["Next.js", "PostgreSQL"],
  },
  {
    client: "Klej",
    project: "Brand site & catalogue",
    industry: "Retail",
    type: "Web app",
    body: "A fast, search-friendly catalogue the team updates themselves, built to load quickly on the mobile connections their customers actually use.",
    stack: ["React", "Headless CMS"],
  },
  {
    client: "Northline Freight",
    project: "Dispatch & driver portal",
    industry: "Logistics",
    type: "Web app + mobile app",
    body: "Replaced a whiteboard-and-phone dispatch process with a live dispatch board and a driver app for proof of delivery. Dispatchers now handle 40% more loads per day with the same headcount.",
    stack: ["React", "Node.js", "PostgreSQL", "React Native"],
    placeholder: true,
  },
  {
    client: "Maple & Co. Dental",
    project: "Patient portal",
    industry: "Healthcare",
    type: "Customer portal",
    body: "Online booking, intake forms, treatment plans and payments for a multi-location dental group. Front-desk phone volume dropped by a third in the first two months.",
    stack: ["Next.js", "Stripe", "Canadian hosting"],
    placeholder: true,
  },
];

/* ── 8. Testimonials — all placeholder, see content.md §8 ──────────────── */

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

/* ── 9. Stats band ─────────────────────────────────────────────────────── */

export const stats = [
  { value: "10+", label: "Years in business" },
  { value: "100+", label: "Projects delivered" },
  { value: "100%", label: "Canadian team" },
  { value: "5 yrs", label: "Average client relationship", placeholder: true },
];

/* ── 11. Sitecare ──────────────────────────────────────────────────────── */

export const sitecareIncludes = [
  "Software and plugin updates",
  "Security monitoring and protection",
  "Daily backups",
  "Uptime monitoring",
  "Speed checks and fixes",
  "Bug fixes",
  "Monthly hours for content edits",
  "Monthly report",
  "Priority support",
];

/* ── 13. Contact ───────────────────────────────────────────────────────── */

export const projectTypes = [
  "Custom software",
  "Website or web app",
  "Mobile app",
  "Automation",
  "Sitecare",
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

/* ── 14. Footer ────────────────────────────────────────────────────────── */

export const footerColumns = [
  {
    heading: "Solutions",
    links: solutions.map((s) => ({ label: s.navLabel, href: solutionHref(s.id) })),
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Customers", href: "#customers" },
      { label: "Get in Touch", href: "#contact" },
      { label: "Careers", href: "#contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];
