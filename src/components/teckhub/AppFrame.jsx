import { productIcons } from "@/components/ui/icons";

/**
 * Shared chrome for the TeckHub360 screen mockups: browser bar, role-scoped
 * sidebar, page header. The screens that go inside it are in screens.jsx.
 *
 * These are drawn in markup rather than captured as screenshots — no client
 * data to redact, sharp at any pixel density, and they recolour themselves in
 * dark mode from the same tokens as the rest of the page. Nav labels and page
 * titles match the real routes in the product's `config/routes.js`.
 *
 * Decorative throughout: the surrounding section carries the real text.
 */

const NAV = [
  { key: "chart", label: "Dashboard" },
  { key: "building", label: "Business Clients" },
  { key: "userCheck", label: "Individual Clients" },
  { key: "pipeline", label: "Prep Accounts" },
  { key: "calendar", label: "Deadlines" },
  { key: "invoice", label: "Invoices" },
  { key: "payroll", label: "Payroll" },
];

export function AppFrame({
  active = "Dashboard",
  title,
  subtitle,
  action,
  children,
  className = "",
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-hairline bg-bg shadow-[0_32px_80px_-24px_rgba(23,18,43,0.35)] ${className}`}
      aria-hidden="true"
    >
      {/* Browser bar */}
      <div className="flex items-center gap-2 border-b border-hairline bg-surface px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--text)_22%,transparent)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--text)_16%,transparent)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[color-mix(in_srgb,var(--text)_12%,transparent)]" />
        <span className="ml-3 hidden h-5 flex-1 items-center rounded-full bg-[color-mix(in_srgb,var(--text)_6%,transparent)] px-3 text-[9px] font-semibold tracking-wide text-muted sm:flex">
          portal.yourfirm.ca
        </span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <nav className="hidden w-[146px] shrink-0 border-r border-hairline bg-surface p-3 md:block">
          <div className="flex items-center gap-2 px-1">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-accent text-[10px] font-extrabold text-btn-text">
              Y
            </span>
            <span className="h-2 w-14 rounded-full bg-[color-mix(in_srgb,var(--text)_18%,transparent)]" />
          </div>

          <ul className="mt-4 space-y-0.5">
            {NAV.map((item) => {
              const Icon = productIcons[item.key];
              const current = item.label === active;
              return (
                <li key={item.label}>
                  <span
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                      current ? "bg-accent-soft" : ""
                    }`}
                  >
                    <Icon
                      className={`h-3.5 w-3.5 shrink-0 ${
                        current ? "text-accent" : "text-muted"
                      }`}
                    />
                    <span
                      className={`truncate text-[9.5px] font-semibold ${
                        current ? "text-accent" : "text-muted"
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Main */}
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-[13px] font-extrabold tracking-[-0.01em]">
                {title}
              </h3>
              {subtitle ? (
                <p className="mt-0.5 truncate text-[9.5px] font-semibold text-muted">
                  {subtitle}
                </p>
              ) : null}
            </div>
            {action ? (
              <span className="shrink-0 rounded-full bg-accent px-3 py-1.5 text-[9.5px] font-bold text-btn-text">
                {action}
              </span>
            ) : null}
          </div>

          <div className="mt-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

/** Small status pill used across the screens. */
export function Pill({ tone = "muted", children }) {
  const tones = {
    accent: "bg-accent-soft text-accent",
    good: "bg-ok-soft text-ok",
    warn: "bg-warn-soft text-warn",
    muted: "bg-[color-mix(in_srgb,var(--text)_8%,transparent)] text-muted",
  };
  return (
    <span
      className={`shrink-0 rounded-full px-2 py-0.5 text-[8.5px] font-bold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
