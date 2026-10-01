import { productIcons } from "@/components/ui/icons";
import { ocr, pipelines } from "@/lib/teckhub";

/**
 * TeckHub360 explanatory diagrams.
 *
 * The two step flows are markup with SVG icons rather than one wide SVG: a
 * five-node horizontal SVG shrinks its labels to about 8px on a phone, where
 * markup simply reflows and stays readable. The two genuinely diagrammatic
 * pieces below — the brand skins and the role tree — carry few enough labels
 * to be real SVG and scale cleanly.
 */

const FLOW_ICONS = ["checklist", "scan", "pipeline", "shield", "invoice"];

/** Upload → Extract → Suggest → Verify → File. */
export function OcrFlow({ className = "" }) {
  return (
    <ol className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-5 ${className}`}>
      {ocr.steps.map((step, i) => {
        const Icon = productIcons[FLOW_ICONS[i]];
        const isVerify = step.title === "Verify";
        return (
          <li key={step.title} className="relative">
            {/* Connector to the next node; hidden on the last and on stacked layouts. */}
            {i < ocr.steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="absolute right-[-0.75rem] top-9 hidden h-px w-3 bg-hairline lg:block"
              />
            ) : null}

            <div
              className={`h-full rounded-2xl border bg-surface p-5 ${
                isVerify
                  ? "border-[color-mix(in_srgb,var(--accent)_45%,transparent)]"
                  : "border-hairline"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="text-[0.72rem] font-bold tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-[1rem] font-extrabold tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[0.88rem] leading-[1.55] text-muted">{step.body}</p>
              {isVerify ? (
                <p className="mt-3 inline-block rounded-full bg-warn-soft px-2.5 py-1 text-[0.7rem] font-bold text-warn">
                  Human checkpoint
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * The two filing pipelines side by side.
 *
 * Laid out horizontally: a vertical list left most of each card empty, and a
 * left-to-right run of numbered nodes reads as a pipeline rather than a
 * to-do list. It wraps to two rows on narrow screens.
 */
export function PipelineTracks({ className = "" }) {
  return (
    <div className={`grid gap-5 lg:grid-cols-2 ${className}`}>
      {pipelines.map((pipeline) => (
        <div
          key={pipeline.name}
          className="rounded-3xl border border-hairline bg-surface p-7 md:p-8"
        >
          <h3 className="text-[1.15rem] font-extrabold tracking-[-0.02em]">
            {pipeline.name}
          </h3>
          <p className="mt-1 text-[0.8rem] font-bold uppercase tracking-[0.1em] text-accent">
            {pipeline.subtitle}
          </p>

          <ol className="mt-8 flex flex-wrap items-start gap-y-6">
            {pipeline.steps.map((step, i) => (
              <li
                key={step}
                className="relative flex min-w-[104px] flex-1 flex-col items-center text-center"
              >
                {/* Rail to the next node. Inset so it meets the circles, and
                    dropped on the last node and on whichever node ends a row. */}
                {i < pipeline.steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-[calc(50%+1.25rem)] right-[calc(-50%+1.25rem)] top-[1.1rem] h-px bg-hairline"
                  />
                ) : null}

                <span className="relative z-10 grid h-9 w-9 place-items-center rounded-full border border-hairline bg-bg text-[0.82rem] font-extrabold tabular-nums text-accent">
                  {i + 1}
                </span>
                <span className="mt-3 px-1 text-[0.86rem] font-semibold leading-snug">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

/**
 * One portal, three firms' branding. The two non-accent swatches are literal
 * colours on purpose — they stand for other firms' brands, not ours.
 */
export function WhiteLabelDiagram({ className = "" }) {
  const skins = [
    { brand: "var(--accent)", label: "Your firm" },
    { brand: "#0E7490", label: "Another firm" },
    { brand: "#B45309", label: "A third firm" },
  ];

  return (
    <svg
      viewBox="0 0 360 150"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {skins.map((skin, i) => {
        const x = i * 124;
        return (
          <g key={skin.label} transform={`translate(${x}, 8)`}>
            {/* Window */}
            <rect
              x="1"
              y="1"
              width="112"
              height="112"
              rx="9"
              fill="var(--bg)"
              stroke="currentColor"
              strokeOpacity="0.18"
            />
            {/* Title bar */}
            <path
              d="M1 10a9 9 0 0 1 9-9h94a9 9 0 0 1 9 9v10H1z"
              fill="currentColor"
              fillOpacity="0.05"
            />
            <circle cx="11" cy="10.5" r="2" fill="currentColor" fillOpacity="0.22" />
            <circle cx="18" cy="10.5" r="2" fill="currentColor" fillOpacity="0.16" />

            {/* Sidebar with the firm's mark */}
            <rect x="1" y="20" width="34" height="93" fill="currentColor" fillOpacity="0.04" />
            <rect x="8" y="27" width="13" height="13" rx="3.5" fill={skin.brand} />
            {[48, 58, 68, 78].map((y) => (
              <rect
                key={y}
                x="8"
                y={y}
                width="20"
                height="4"
                rx="2"
                fill="currentColor"
                fillOpacity="0.16"
              />
            ))}

            {/* Content */}
            <rect x="43" y="29" width="40" height="5" rx="2.5" fill="currentColor" fillOpacity="0.26" />
            <rect x="43" y="42" width="62" height="20" rx="4" fill={skin.brand} fillOpacity="0.14" />
            <rect x="48" y="49" width="26" height="5" rx="2.5" fill={skin.brand} />
            {[70, 82, 94].map((y) => (
              <rect
                key={y}
                x="43"
                y={y}
                width={y === 94 ? 40 : 62}
                height="4"
                rx="2"
                fill="currentColor"
                fillOpacity="0.12"
              />
            ))}
            {/* Primary button in the firm's colour */}
            <rect x="43" y="104" width="30" height="7" rx="3.5" fill={skin.brand} />

            <text
              x="57"
              y="130"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill="currentColor"
              fillOpacity="0.55"
            >
              {skin.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/** Who sees what: the firm, its accountants, and the clients beneath them. */
export function RoleDiagram({ className = "" }) {
  const clients = [
    { x: 16, label: "Business" },
    { x: 140, label: "Business" },
    { x: 264, label: "Individual" },
  ];

  return (
    <svg
      viewBox="0 0 360 206"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* Connectors drawn first so the cards sit on top */}
      <path
        d="M180 44 V66 M74 66 H286 M74 66 V88 M180 66 V88 M286 66 V88"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
      />
      <path
        d="M74 124 V144 M180 124 V144 M286 124 V144"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />

      {/* Firm admin */}
      <rect x="110" y="8" width="140" height="36" rx="10" fill="var(--accent)" />
      <text x="180" y="31" textAnchor="middle" fontSize="12" fontWeight="800" fill="var(--btn-text)">
        Firm admin
      </text>

      {/* Accountants */}
      {[74, 180, 286].map((cx) => (
        <g key={cx}>
          <rect
            x={cx - 50}
            y="88"
            width="100"
            height="36"
            rx="10"
            fill="var(--bg)"
            stroke="var(--accent)"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          <text x={cx} y="111" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor">
            Accountant
          </text>
        </g>
      ))}

      {/* Clients */}
      {clients.map((client) => (
        <g key={client.x}>
          <rect
            x={client.x}
            y="144"
            width="80"
            height="34"
            rx="9"
            fill="currentColor"
            fillOpacity="0.05"
            stroke="currentColor"
            strokeOpacity="0.18"
          />
          <text
            x={client.x + 40}
            y="166"
            textAnchor="middle"
            fontSize="10"
            fontWeight="700"
            fill="currentColor"
            fillOpacity="0.72"
          >
            {client.label}
          </text>
        </g>
      ))}

      <text
        x="180"
        y="198"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="600"
        fill="currentColor"
        fillOpacity="0.5"
      >
        Each client sees only their own organisation
      </text>
    </svg>
  );
}
