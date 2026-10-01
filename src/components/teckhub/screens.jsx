import { AppFrame, Pill } from "./AppFrame";
import { ocr } from "@/lib/teckhub";

/* Shared skeleton bars — a stand-in for client names we are not inventing. */
function Bar({ w = "w-20", tone = 16 }) {
  return (
    <span
      className={`block h-1.5 ${w} rounded-full`}
      style={{ background: `color-mix(in srgb, var(--text) ${tone}%, transparent)` }}
    />
  );
}

/* ── Dashboard: info cards, P&L chart, balance sheet ───────────────────── */

export function DashboardScreen({ className }) {
  return (
    <AppFrame
      active="Dashboard"
      title="Dashboard"
      subtitle="Firm overview · FY 2026"
      action="Upload report"
      className={className}
    >
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { label: "Active clients", value: "128" },
          { label: "Returns in progress", value: "34" },
          { label: "Due this month", value: "9", tone: "warn" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-lg border border-hairline bg-surface p-2.5">
            <div className="text-[8.5px] font-bold uppercase tracking-wider text-muted">
              {kpi.label}
            </div>
            <div
              className={`mt-1 text-[15px] font-extrabold tabular-nums tracking-tight ${
                kpi.tone === "warn" ? "text-warn" : ""
              }`}
            >
              {kpi.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2.5 grid gap-2.5 lg:grid-cols-[1.5fr_1fr]">
        {/* Profit & loss */}
        <div className="rounded-lg border border-hairline bg-surface p-3">
          <div className="flex items-center justify-between">
            <span className="text-[8.5px] font-bold uppercase tracking-wider text-muted">
              Profit &amp; loss
            </span>
            <Pill tone="good">+18%</Pill>
          </div>
          <svg viewBox="0 0 300 76" className="mt-2.5 h-[66px] w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="th-pl" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[19, 38, 57].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="300"
                y2={y}
                stroke="currentColor"
                strokeOpacity="0.1"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            <path
              d="M0 62 L37 54 L75 58 L112 40 L150 46 L187 30 L225 34 L262 18 L300 12 L300 76 L0 76 Z"
              fill="url(#th-pl)"
            />
            <path
              d="M0 62 L37 54 L75 58 L112 40 L150 46 L187 30 L225 34 L262 18 L300 12"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        {/* Balance sheet */}
        <div className="rounded-lg border border-hairline bg-surface p-3">
          <span className="text-[8.5px] font-bold uppercase tracking-wider text-muted">
            Balance sheet
          </span>
          <ul className="mt-2.5 space-y-1.5">
            {[
              ["Assets", "412k"],
              ["Liabilities", "188k"],
              ["Equity", "224k"],
            ].map(([label, value]) => (
              <li key={label} className="flex items-center justify-between gap-2">
                <span className="text-[9.5px] font-semibold text-muted">{label}</span>
                <span className="text-[10.5px] font-extrabold tabular-nums">{value}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--text)_10%,transparent)]">
            <div className="h-full w-[54%] rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </AppFrame>
  );
}

/* ── OCR review: the flagship screen ───────────────────────────────────── */

export function OcrReviewScreen({ className }) {
  return (
    <AppFrame
      active="Prep Accounts"
      title="Review before coding"
      subtitle="Step 3 · CRA code summary"
      action="Process with OCR"
      className={className}
    >
      <div className="grid gap-2.5 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Document preview */}
        <div className="rounded-lg border border-hairline bg-surface p-3">
          <div className="flex items-center justify-between">
            <span className="text-[8.5px] font-bold uppercase tracking-wider text-muted">
              PDF reader
            </span>
            <Pill tone="accent">Fuel receipt</Pill>
          </div>
          <div className="mt-2.5 rounded-md border border-hairline bg-bg p-3">
            <Bar w="w-16" tone={24} />
            <div className="mt-2.5 space-y-1.5">
              <Bar w="w-full" tone={10} />
              <Bar w="w-11/12" tone={10} />
              <Bar w="w-9/12" tone={10} />
            </div>
            <div className="mt-3 space-y-1.5 border-t border-hairline pt-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[8.5px] font-semibold text-muted">Subtotal</span>
                <span className="text-[9px] font-extrabold tabular-nums">182.40</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[8.5px] font-semibold text-muted">HST</span>
                <span className="text-[9px] font-extrabold tabular-nums">23.71</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[8.5px] font-bold">Total</span>
                <span className="text-[10px] font-extrabold tabular-nums text-accent">206.11</span>
              </div>
            </div>
          </div>
        </div>

        {/* Extracted + review */}
        <div className="rounded-lg border border-hairline bg-surface p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[8.5px] font-bold uppercase tracking-wider text-muted">
              Suggested coding
            </span>
            <span className="text-[8.5px] font-bold text-ok">OCR confidence: 94%</span>
          </div>

          <div className="mt-2.5 grid gap-2">
            <div className="rounded-md border border-hairline bg-bg p-2.5">
              <div className="text-[8px] font-bold uppercase tracking-wider text-muted">
                CRA GIFI code
              </div>
              <div className="mt-1 flex items-center gap-2">
                <span className="rounded bg-accent-soft px-1.5 py-0.5 text-[10px] font-extrabold tabular-nums text-accent">
                  9281
                </span>
                <span className="text-[10px] font-bold">Motor Vehicle</span>
              </div>
              <p className="mt-1.5 text-[8px] font-semibold text-ok">
                Detected from OCR and retained until you change or save it.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                ["Total value", "206.11"],
                ["Tax value", "23.71"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-hairline bg-bg p-2.5">
                  <div className="text-[8px] font-bold uppercase tracking-wider text-muted">
                    {label}
                  </div>
                  <div className="mt-1 text-[11px] font-extrabold tabular-nums">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* The queue behind it, showing a flagged row */}
          <div className="mt-2.5 space-y-1">
            {ocr.examples.slice(1).map((row) => {
              const low = row.confidence < 70;
              return (
                <div
                  key={row.code}
                  className="flex items-center gap-2 rounded-md border border-hairline bg-bg px-2.5 py-1.5"
                >
                  <span className="w-[70px] shrink-0 truncate text-[8.5px] font-semibold text-muted">
                    {row.type}
                  </span>
                  <span className="shrink-0 text-[9px] font-extrabold tabular-nums">
                    {row.code}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-[8.5px] text-muted">
                    {row.name}
                  </span>
                  <Pill tone={low ? "warn" : "good"}>
                    {low ? `${row.confidence}% · verify` : `${row.confidence}%`}
                  </Pill>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppFrame>
  );
}

/* ── Checklist & document upload ───────────────────────────────────────── */

export function ChecklistScreen({ className }) {
  const rows = [
    { label: "Bank statements — Q1", tone: "good", status: "Approved", w: "w-28" },
    { label: "Fuel receipts", tone: "accent", status: "In review", w: "w-20" },
    { label: "Supplier invoices", tone: "warn", status: "Changes asked", w: "w-24" },
    { label: "Payroll summary", tone: "muted", status: "Not uploaded", w: "w-22" },
  ];

  return (
    <AppFrame
      active="Business Clients"
      title="Checklist & documents"
      subtitle="Expenses · 12 of 18 complete"
      action="Upload"
      className={className}
    >
      {/* Progress */}
      <div className="rounded-lg border border-hairline bg-surface p-3">
        <div className="flex items-center justify-between">
          <span className="text-[8.5px] font-bold uppercase tracking-wider text-muted">
            Completion
          </span>
          <span className="text-[9px] font-extrabold tabular-nums text-accent">67%</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--text)_10%,transparent)]">
          <div className="h-full w-[67%] rounded-full bg-accent" />
        </div>
      </div>

      {/* Three-level checklist */}
      <div className="mt-2.5 space-y-1.5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center gap-2.5 rounded-lg border border-hairline bg-surface px-3 py-2"
          >
            <span
              className={`grid h-4 w-4 shrink-0 place-items-center rounded border ${
                row.tone === "good"
                  ? "border-ok bg-ok-soft"
                  : "border-[color-mix(in_srgb,var(--text)_22%,transparent)]"
              }`}
            >
              {row.tone === "good" ? (
                <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 text-ok" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m4.5 12.5 5 5 10-11" />
                </svg>
              ) : null}
            </span>
            <span className="min-w-0 flex-1 truncate text-[9.5px] font-semibold">
              {row.label}
            </span>
            <Pill tone={row.tone}>{row.status}</Pill>
          </div>
        ))}
      </div>

      <p className="mt-2.5 text-[8.5px] font-semibold text-muted">
        PDF, JPG and PNG · 10 MB per file
      </p>
    </AppFrame>
  );
}

/* ── Deadlines tracker ─────────────────────────────────────────────────── */

export function DeadlinesScreen({ className }) {
  const rows = [
    { period: "GST/HST · Q1", due: "30 Apr", tone: "warn", status: "6 days" },
    { period: "T2 Corporate", due: "30 Jun", tone: "muted", status: "On track" },
    { period: "Payroll · PD7A", due: "15 Apr", tone: "good", status: "Filed" },
    { period: "T4 Summary", due: "28 Feb", tone: "good", status: "Filed" },
  ];

  return (
    <AppFrame
      active="Deadlines"
      title="Deadlines"
      subtitle="All clients · next 90 days"
      className={className}
    >
      <div className="overflow-hidden rounded-lg border border-hairline bg-surface">
        <div className="flex items-center gap-3 border-b border-hairline px-3 py-2">
          {["Client", "Obligation", "Due", "Status"].map((h) => (
            <span
              key={h}
              className={`text-[8px] font-bold uppercase tracking-wider text-muted ${
                h === "Client" ? "w-[66px]" : h === "Obligation" ? "flex-1" : "w-[52px]"
              } ${h === "Status" ? "text-right" : ""}`}
            >
              {h}
            </span>
          ))}
        </div>
        {rows.map((row) => (
          <div
            key={row.period}
            className="flex items-center gap-3 border-b border-hairline px-3 py-2 last:border-b-0"
          >
            <span className="w-[66px] shrink-0">
              <Bar w="w-14" tone={18} />
            </span>
            <span className="min-w-0 flex-1 truncate text-[9.5px] font-semibold">
              {row.period}
            </span>
            <span className="w-[52px] shrink-0 text-[9px] font-bold tabular-nums text-muted">
              {row.due}
            </span>
            <span className="flex w-[52px] shrink-0 justify-end">
              <Pill tone={row.tone}>{row.status}</Pill>
            </span>
          </div>
        ))}
      </div>
    </AppFrame>
  );
}
