/**
 * The hero's product visual: a client portal on desktop with the companion
 * mobile app overlapping it, plus an automation chip.
 *
 * Built from markup and one inline SVG rather than a screenshot. A stock
 * photo of "a dashboard" is always someone else's product at someone else's
 * brand colours, and it blurs on retina. This stays sharp at any density,
 * recolours itself in dark mode from the same tokens as the rest of the
 * page, and actually depicts what we sell.
 *
 * Decorative: the surrounding section carries the real text, so the whole
 * thing is hidden from assistive tech.
 */
export function ProductVisual({ className = "" }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Accent bloom behind the glass */}
      <span className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full bg-accent opacity-20 blur-[80px]" />
      <span className="pointer-events-none absolute -bottom-16 -left-12 h-56 w-56 rounded-full bg-accent opacity-[0.14] blur-[80px]" />

      {/* ── Desktop window ─────────────────────────────────────────── */}
      <div className="relative overflow-hidden rounded-2xl border border-hairline bg-bg shadow-[0_32px_80px_-24px_rgba(23,18,43,0.35)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-hairline bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--text)_22%,transparent)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--text)_16%,transparent)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--text)_12%,transparent)]" />
          <span className="ml-3 hidden h-5 flex-1 items-center rounded-full bg-[color-mix(in_srgb,var(--text)_6%,transparent)] px-3 text-[9px] font-semibold tracking-wide text-muted sm:flex">
            portal.yourcompany.ca
          </span>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-[132px] shrink-0 border-r border-hairline bg-surface p-3.5 sm:block">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-accent text-[10px] font-extrabold text-btn-text">
                i
              </span>
              <span className="h-2 w-12 rounded-full bg-[color-mix(in_srgb,var(--text)_18%,transparent)]" />
            </div>
            <div className="mt-5 space-y-1.5">
              {["Overview", "Orders", "Clients", "Documents", "Reports"].map(
                (item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                      i === 0 ? "bg-accent-soft" : ""
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-sm ${
                        i === 0
                          ? "bg-accent"
                          : "bg-[color-mix(in_srgb,var(--text)_22%,transparent)]"
                      }`}
                    />
                    <span
                      className={`text-[9.5px] font-semibold ${
                        i === 0 ? "text-accent" : "text-muted"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Main panel */}
          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2.5 w-24 rounded-full bg-[color-mix(in_srgb,var(--text)_26%,transparent)]" />
                <div className="mt-2 h-1.5 w-16 rounded-full bg-[color-mix(in_srgb,var(--text)_12%,transparent)]" />
              </div>
              <span className="rounded-full bg-accent px-3 py-1.5 text-[9.5px] font-bold text-btn-text">
                New order
              </span>
            </div>

            {/* KPI row */}
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              {[
                { label: "Open orders", value: "142" },
                { label: "This month", value: "$86k" },
                { label: "Avg. cycle", value: "3.2d" },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-lg border border-hairline bg-surface p-2.5"
                >
                  <div className="text-[8.5px] font-bold uppercase tracking-wider text-muted">
                    {kpi.label}
                  </div>
                  <div className="mt-1 text-[15px] font-extrabold tabular-nums tracking-tight">
                    {kpi.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="mt-2.5 rounded-lg border border-hairline bg-surface p-3">
              <div className="flex items-center justify-between">
                <span className="text-[8.5px] font-bold uppercase tracking-wider text-muted">
                  Orders processed
                </span>
                <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[8.5px] font-bold text-accent">
                  +24%
                </span>
              </div>
              <svg
                viewBox="0 0 300 70"
                className="mt-2 h-[58px] w-full"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="pv-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 56 L30 50 L60 54 L90 38 L120 44 L150 28 L180 33 L210 18 L240 24 L270 10 L300 14 L300 70 L0 70 Z"
                  fill="url(#pv-fill)"
                />
                <path
                  d="M0 56 L30 50 L60 54 L90 38 L120 44 L150 28 L180 33 L210 18 L240 24 L270 10 L300 14"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {/* Table rows */}
            <div className="mt-2.5 space-y-1.5">
              {[
                { w: "w-20", badge: "Approved", tone: "accent" },
                { w: "w-28", badge: "In review", tone: "muted" },
                { w: "w-24", badge: "Approved", tone: "accent" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-hairline bg-surface px-3 py-2"
                >
                  <span className="h-5 w-5 shrink-0 rounded-full bg-[color-mix(in_srgb,var(--text)_10%,transparent)]" />
                  <span
                    className={`h-1.5 ${row.w} rounded-full bg-[color-mix(in_srgb,var(--text)_16%,transparent)]`}
                  />
                  <span
                    className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-[8.5px] font-bold ${
                      row.tone === "accent"
                        ? "bg-accent-soft text-accent"
                        : "bg-[color-mix(in_srgb,var(--text)_8%,transparent)] text-muted"
                    }`}
                  >
                    {row.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile app, overlapping ────────────────────────────────── */}
      <div className="absolute -bottom-8 -left-12 hidden w-[132px] overflow-hidden rounded-[1.4rem] border border-hairline bg-bg p-1.5 shadow-[0_24px_50px_-16px_rgba(23,18,43,0.4)] sm:block">
        <div className="overflow-hidden rounded-[1.05rem] bg-surface">
          <div className="flex items-center justify-center py-1.5">
            <span className="h-1 w-8 rounded-full bg-[color-mix(in_srgb,var(--text)_18%,transparent)]" />
          </div>
          <div className="px-2.5 pb-3">
            <div className="h-2 w-14 rounded-full bg-[color-mix(in_srgb,var(--text)_26%,transparent)]" />
            <div className="mt-2.5 rounded-lg bg-bg p-2">
              <div className="text-[8px] font-bold uppercase tracking-wider text-muted">
                Today
              </div>
              <div className="mt-0.5 text-[13px] font-extrabold tabular-nums">
                18 stops
              </div>
            </div>
            <div className="mt-1.5 space-y-1.5">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 rounded-lg bg-bg px-2 py-1.5"
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === 0 ? "bg-accent" : "bg-[color-mix(in_srgb,var(--text)_20%,transparent)]"
                    }`}
                  />
                  <span className="h-1 w-12 rounded-full bg-[color-mix(in_srgb,var(--text)_14%,transparent)]" />
                </div>
              ))}
            </div>
            <div className="mt-2 rounded-full bg-accent py-1.5 text-center text-[8.5px] font-bold text-btn-text">
              Confirm delivery
            </div>
          </div>
        </div>
      </div>

      {/* ── Automation chip ────────────────────────────────────────── */}
      {/* Sits mostly outside the window and below the KPI row — overlapping
          further in covered the third metric. */}
      <div className="absolute -right-8 top-[58%] hidden items-center gap-2 rounded-xl border border-hairline bg-bg px-3 py-2.5 shadow-[0_18px_40px_-14px_rgba(23,18,43,0.35)] lg:flex">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent-soft">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z" />
          </svg>
        </span>
        <span>
          <span className="block text-[8.5px] font-bold uppercase tracking-wider text-muted">
            Automation
          </span>
          <span className="block text-[10.5px] font-extrabold">Synced to Xero</span>
        </span>
      </div>
    </div>
  );
}
