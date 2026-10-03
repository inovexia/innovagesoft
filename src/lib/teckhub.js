/**
 * TeckHub360 product copy.
 *
 * Every claim here was checked against the product repo (inovexia/mscportal)
 * — the in-app handbook at /documentation, `.mex/ROUTER.md`, and the
 * `codex/complete-ocr-branding` branch. Where a capability lives only on that
 * branch it is marked `shipping: "rolling-out"` so the badge is driven by data
 * rather than remembered. Update this file when the branch merges.
 */

export const product = {
  name: "TeckHub360",
  /* The portal is still branded "MSC Portal" inside the app; AppLogo.jsx
     falls back to that string. Renaming it there is a separate task. */
  internalName: "MSC Portal",
  tagline: "The portal Canadian accounting firms run filing season on.",
  positioning:
    "One place for your clients to send documents, for your team to code and file them, and for everyone to see where a return actually stands.",
  shortPitch:
    "A white-label client portal built for Canadian accounting firms — document intake, OCR that maps receipts to CRA GIFI codes, GST/HST and personal filing pipelines, financial invoices and payroll, under your own branding.",
  demoHref: "/contact?enquiry=teckhub360-demo",
  pricingHref: "/contact?enquiry=teckhub360-pricing",
};

/** Headline proof points for the homepage banner. */
export const highlights = [
  { value: "OCR", label: "Receipts coded to CRA GIFI" },
  { value: "2", label: "Filing pipelines, business and personal" },
  { value: "10+", label: "Modules in one portal" },
  { value: "100%", label: "White-label, your branding" },
];

/* ── Who it's for ──────────────────────────────────────────────────────── */

export const audience = [
  {
    icon: "team",
    title: "Accounting firms",
    body: "Several accountants, a shared client load, and a partner who wants to see what is outstanding without asking anyone.",
  },
  {
    icon: "route",
    title: "Bookkeeping practices",
    body: "High document volume and clients who send receipts by whatever means is nearest to hand.",
  },
  {
    icon: "partnership",
    title: "Firms with both client types",
    body: "Incorporated businesses and individual filers in one portal rather than two systems.",
  },
];

/* ── Modules ───────────────────────────────────────────────────────────── */

export const modules = [
  { icon: "building", title: "Business clients", body: "Organisations, their users, agreements and year ends." },
  { icon: "userCheck", title: "Individual filers", body: "Personal-return clients and their assigned accountant." },
  { icon: "checklist", title: "Checklists & documents", body: "A structured request list clients work through themselves." },
  {
    icon: "scan",
    title: "OCR & CRA coding",
    body: "Receipts read and matched to CRA GIFI codes.",
    shipping: "rolling-out",
  },
  { icon: "pipeline", title: "Filing pipelines", body: "Ordered stages from documents in to return filed." },
  {
    icon: "invoice",
    title: "Financial invoices",
    body: "One-off and T4 invoices, standing agreements and two payment ledgers.",
  },
  {
    icon: "chart",
    title: "Financial reports",
    body: "Profit & loss and balance sheet, driving live dashboards.",
    shipping: "rolling-out",
  },
  { icon: "calendar", title: "Deadlines & calendar", body: "Every obligation across the whole book in one tracker." },
  {
    icon: "payroll",
    title: "Payroll",
    body: "Pay runs, payslips, PD7A and T4 against each client.",
    shipping: "rolling-out",
  },
  { icon: "shield", title: "Roles & security", body: "Role-scoped access, two-factor login and activity logs." },
];

/* ── OCR ───────────────────────────────────────────────────────────────── */

export const ocr = {
  heading: "Receipts in. CRA GIFI codes out. A human still signs off.",
  intro:
    "Coding a shoebox of receipts is the least pleasant, most repetitive part of the job. TeckHub360 reads each uploaded document, pulls out the totals and the tax, and matches it against the CRA's General Index of Financial Information.",
  honesty:
    "It does not file anything on its own. Every extraction carries a confidence score, low-confidence results are flagged for manual verification, and an accountant confirms the code before it moves on. The value is in removing the typing, not the judgement.",
  /* Shown in the review mockup. The full ranking behaviour, thresholds and
     correction flow are deliberately not described here — that is what the
     demo is for. */
  examples: [
    { type: "Fuel receipt", code: "9281", name: "Motor Vehicle", confidence: 94 },
    { type: "Restaurant receipt", code: "8523", name: "Meals and entertainment", confidence: 88 },
    { type: "Supplier invoice", code: "8962", name: "Repairs and maintenance", confidence: 61 },
    { type: "Bank statement", code: "9270", name: "Other expenses", confidence: 42 },
  ],
};

/* ── Filing pipelines ──────────────────────────────────────────────────── */

/* Stage counts and the two ends only. Naming every stage hands over the
   workflow; walking a firm through it is the demo. */
export const pipelines = [
  {
    name: "Prep Accounts",
    subtitle: "Business clients · GST/HST",
    count: 5,
    first: "Documents in",
    last: "Filed with CRA",
  },
  {
    name: "Finalize Account",
    subtitle: "Individual filers · Personal return",
    count: 4,
    first: "Documents in",
    last: "Return filed",
  },
];

/* ── Billing ───────────────────────────────────────────────────────────── */

export const billing = {
  heading: "Billing that knows which client it is looking at.",
  intro:
    "Invoicing sits inside the portal rather than beside it, so what you billed and what they paid are attached to the same client record as the return.",
  items: [
    {
      icon: "invoice",
      title: "Financial invoices",
      body: "One-off invoices for business clients and T4 invoices for individual filers, each with its own numbering and client view.",
    },
    {
      icon: "pipeline",
      title: "Standing agreements",
      body: "Agreed terms on the record, with the invoices raised against them in one place.",
      shipping: "rolling-out",
    },
    {
      icon: "chart",
      title: "Two payment ledgers",
      body: "Business and individual payments tracked separately, because they reconcile differently.",
    },
  ],
};

/* ── White-label ───────────────────────────────────────────────────────── */

export const whiteLabel = {
  heading: "Your firm's portal, not ours.",
  intro:
    "Clients log in to something that looks like you. Upload your logo and favicon, set heading, body and button colours, pick the typeface, and choose light, dark or a fully custom theme.",
  points: [
    "Logo and favicon uploaded per firm",
    "Custom heading, body and button colours",
    "Light, dark or custom theme",
    "Applied before first paint, so there is no flash of our colours",
  ],
};

/* ── Security ──────────────────────────────────────────────────────────── */

export const security = [
  { icon: "shield", title: "Two-factor on every login", body: "A one-time code each time, not just on a new device." },
  { icon: "clock", title: "Idle auto-logout", body: "An unattended screen is not an open door." },
  { icon: "userCheck", title: "Role-scoped access", body: "A client sees their own organisation and nothing else." },
  { icon: "list", title: "Activity logs", body: "Who did what, and when, on every record that matters." },
];

/* ── Rolling out soon ──────────────────────────────────────────────────── */

/**
 * Every item here is already in build — taken from the product's own
 * "Not yet built" list in `.mex/ROUTER.md`, not invented for the page.
 * Deliberately no dates: say "soon" on a website and you can keep the
 * promise; name a month and you cannot.
 */
export const rollingOut = [
  {
    icon: "invoice",
    title: "Recurring invoice agreements",
    body: "Standing agreements that raise invoices on a schedule, with client acceptance and automatic reminders.",
  },
  {
    icon: "chat",
    title: "Secure in-portal messaging",
    body: "Firm-to-client conversations against the client record, so decisions stop living in someone's inbox.",
  },
  {
    icon: "pipeline",
    title: "More return types",
    body: "T2, PD7A and T4 pipelines alongside the GST/HST and personal flows.",
  },
  {
    icon: "chart",
    title: "Combined financial import",
    body: "One upload carrying both the profit & loss and the balance sheet.",
  },
  {
    icon: "payroll",
    title: "Payroll dashboards",
    body: "A per-company payroll overview for the accountant alongside the client's.",
  },
  {
    icon: "building",
    title: "Self-serve branding",
    body: "Upload your own logo, favicon and theme from settings without asking us.",
  },
];

/* ── FAQ ───────────────────────────────────────────────────────────────── */

export const faqs = [
  {
    q: "Does the OCR file returns automatically?",
    a: "No, and that is on purpose. It extracts the figures and proposes a CRA GIFI code with a confidence score; an accountant confirms every code before it reaches a return. We will show you exactly how that review step works on a demo.",
  },
  {
    q: "Can we use our own branding?",
    a: "Yes — logo, favicon, colours and typeface, per firm. Your clients never see our name.",
  },
  {
    q: "Does it handle both businesses and individual filers?",
    a: "Both, with a separate filing pipeline, invoice type and payment ledger for each.",
  },
  {
    q: "Where is client data hosted?",
    a: "Canadian regions. Tax documents and SINs are exactly the kind of data residency rules exist for, and we will show you where it sits.",
  },
];
