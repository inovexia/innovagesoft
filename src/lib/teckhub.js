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
    "A white-label client portal built for Canadian accounting firms — document intake, OCR that maps receipts to CRA GIFI codes, GST/HST and personal filing pipelines, invoicing and payroll, under your own branding.",
  demoHref: "/contact?enquiry=teckhub360-demo",
  pricingHref: "/contact?enquiry=teckhub360-pricing",
};

/** Headline proof points for the homepage banner. */
export const highlights = [
  { value: "OCR", label: "Receipts coded to CRA GIFI" },
  { value: "2", label: "Filing pipelines, business and personal" },
  { value: "10", label: "Modules in one portal" },
  { value: "100%", label: "White-label, your branding" },
];

/* ── Who it's for ──────────────────────────────────────────────────────── */

export const audience = [
  {
    icon: "team",
    title: "Accounting firms",
    body: "Multiple accountants, shared client load, and a partner who needs to see what is outstanding without asking anyone.",
  },
  {
    icon: "route",
    title: "Bookkeeping practices",
    body: "High document volume, repetitive coding work, and clients who send receipts by whatever means is nearest to hand.",
  },
  {
    icon: "partnership",
    title: "Firms with both client types",
    body: "Incorporated businesses on GST/HST and individual filers on personal returns, in one portal rather than two systems.",
  },
];

/* ── Modules ───────────────────────────────────────────────────────────── */

export const modules = [
  {
    icon: "building",
    title: "Business clients",
    body: "Organisations with their own users, logos, agreements and financial year end. The due date derives from the year end automatically.",
  },
  {
    icon: "userCheck",
    title: "Individual filers",
    body: "Personal-return clients, their assigned accountant, and the categories that generate their checklist.",
  },
  {
    icon: "checklist",
    title: "Checklists & documents",
    body: "A three-level checklist with a firm-wide default library, upload limits and a review step on every document.",
  },
  {
    icon: "scan",
    title: "OCR & CRA coding",
    body: "Extract figures from uploaded receipts and invoices, suggest a GIFI code, and show a confidence score before anyone accepts it.",
    shipping: "rolling-out",
  },
  {
    icon: "pipeline",
    title: "Prep Accounts",
    body: "Five ordered steps taking a business client from a pile of receipts to a filed GST/HST return with the CRA confirmation on file.",
  },
  {
    icon: "chart",
    title: "Financial reports",
    body: "Profit & loss and balance sheet uploads driving dashboard charts and info cards.",
    shipping: "rolling-out",
  },
  {
    icon: "calendar",
    title: "Deadlines & calendar",
    body: "A cross-client deadline tracker with the scheduling rules the calendar enforces, so nothing turns up as a surprise.",
  },
  {
    icon: "invoice",
    title: "Invoices & payments",
    body: "One-off and recurring agreements, T4 invoices for individual filers, and two payment ledgers — business and personal.",
  },
  {
    icon: "payroll",
    title: "Payroll",
    body: "The pay-run cycle from agreement to processed run, with payslips, PD7A and T4 documents filed against the client.",
    shipping: "rolling-out",
  },
  {
    icon: "shield",
    title: "Roles & security",
    body: "Role-scoped menus, three invitation paths, OTP two-factor login, idle auto-logout and a full activity log.",
  },
];

/* ── OCR ───────────────────────────────────────────────────────────────── */

export const ocr = {
  heading: "Receipts in. CRA GIFI codes out. A human still signs off.",
  intro:
    "Coding a shoebox of receipts is the least pleasant, most repetitive part of the job. TeckHub360 reads each uploaded document, pulls out the totals and tax, and proposes a CRA GIFI code against the full General Index of Financial Information.",
  honesty:
    "It does not file anything on its own. Every extraction carries a confidence score, anything below 70% is flagged for manual verification, and an accountant confirms or corrects the code before it moves on. That is deliberate — the value is in removing the typing, not the judgement.",
  steps: [
    {
      title: "Upload",
      body: "The client uploads against a checklist item, or your team adds it directly.",
    },
    {
      title: "Extract",
      body: "OCR reads the document and returns the raw text, the total and the tax.",
    },
    {
      title: "Suggest",
      body: "The text is ranked against the CRA GIFI index and a code is proposed, with the reason.",
    },
    {
      title: "Verify",
      body: "Confidence under 70% is flagged. The accountant confirms or picks a different code.",
    },
    {
      title: "File",
      body: "Coded figures roll into the GST/HST return and the CRA confirmation is stored.",
    },
  ],
  examples: [
    { type: "Fuel receipt", code: "9281", name: "Motor Vehicle", confidence: 94 },
    { type: "Restaurant receipt", code: "8523", name: "Meals and entertainment", confidence: 88 },
    { type: "Supplier invoice", code: "8962", name: "Repairs and maintenance", confidence: 61 },
    { type: "Bank statement", code: "9270", name: "Other expenses", confidence: 42 },
  ],
};

/* ── Filing pipelines ──────────────────────────────────────────────────── */

export const pipelines = [
  {
    name: "Prep Accounts",
    subtitle: "Business clients · GST/HST",
    steps: [
      "Subcategories",
      "Documents",
      "Code summary",
      "Return form",
      "Filed with CRA",
    ],
  },
  {
    name: "Finalize Account",
    subtitle: "Individual filers · Personal return",
    steps: ["Subcategories", "Documents", "Code summary", "Tax return form"],
  },
];

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
  {
    icon: "shield",
    title: "Two-factor on every login",
    body: "A one-time code is required each time, not just on a new device.",
  },
  {
    icon: "clock",
    title: "Idle auto-logout",
    body: "Sessions end on their own, so an unattended screen in a client's office is not an open door.",
  },
  {
    icon: "userCheck",
    title: "Role-scoped access",
    body: "The sidebar and the data behind it are both filtered by role. A client sees their own organisation and nothing else.",
  },
  {
    icon: "list",
    title: "Activity logs",
    body: "Who did what, and when, against every record that matters.",
  },
];

/* ── FAQ ───────────────────────────────────────────────────────────────── */

export const faqs = [
  {
    q: "Does the OCR file returns automatically?",
    a: "No, and that is on purpose. It extracts the figures and proposes a CRA GIFI code with a confidence score; anything under 70% is flagged for manual verification. An accountant confirms or corrects every code before it reaches a return.",
  },
  {
    q: "Can we use our own branding?",
    a: "Yes. Logo, favicon, heading and body colours, button colours and typeface are all configurable per firm, with light, dark or fully custom themes. Clients never see our name.",
  },
  {
    q: "Does it handle both businesses and individual filers?",
    a: "Both, with a pipeline for each — five steps for a business GST/HST return, four for a personal return — plus separate payment ledgers and an invoice type for each.",
  },
  {
    q: "Where is client data hosted?",
    a: "Canadian regions. Tax documents and SINs are exactly the kind of data residency rules exist for, and we will show you where it sits.",
  },
  {
    q: "Can our clients use it without training?",
    a: "The portal ships with a built-in handbook covering every screen, and the client side is deliberately narrow — a checklist, an upload button and a status. Your staff get the complicated screens, not your clients.",
  },
  {
    q: "Can we migrate our existing client list?",
    a: "Yes. Organisations, individual filers, users and historical documents can be imported. We scope the migration during onboarding rather than discovering it afterwards.",
  },
];
