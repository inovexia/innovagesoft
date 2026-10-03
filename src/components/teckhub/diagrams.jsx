import { pipelines } from "@/lib/teckhub";

/**
 * TeckHub360 explanatory diagrams.
 *
 * These show the shape of the product, not its mechanics. The filing tracks
 * give the stage count and the two ends rather than naming every step —
 * walking a firm through the middle is what the demo is for.
 */

/** The two filing pipelines: how many stages, and where each one starts and ends. */
export function PipelineTracks({ className = "" }) {
  return (
    <div className={`grid gap-5 lg:grid-cols-2 ${className}`}>
      {pipelines.map((pipeline) => (
        <div
          key={pipeline.name}
          className="rounded-3xl border border-hairline bg-surface p-7 md:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-[1.15rem] font-extrabold tracking-[-0.02em]">
                {pipeline.name}
              </h3>
              <p className="mt-1 text-[0.92rem] font-semibold text-accent">
                {pipeline.subtitle}
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-[0.78rem] font-bold text-accent">
              {pipeline.count} stages
            </span>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <Endpoint label={pipeline.first} />

            {/* The stages in between, as dots rather than labels. */}
            <span className="flex flex-1 items-center gap-1.5" aria-hidden="true">
              <span className="h-px flex-1 bg-hairline" />
              {Array.from({ length: pipeline.count - 2 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-accent opacity-60" />
              ))}
              <span className="h-px flex-1 bg-hairline" />
            </span>

            <Endpoint label={pipeline.last} />
          </div>

          <p className="mt-6 text-[0.9rem] leading-[1.6] text-muted">
            A return cannot jump a stage. We&rsquo;ll walk you through the{" "}
            {pipeline.count - 2} in between on a demo.
          </p>
        </div>
      ))}
    </div>
  );
}

function Endpoint({ label }) {
  return (
    <span className="max-w-[7.5rem] shrink-0 rounded-xl border border-hairline bg-bg px-3 py-2.5 text-center text-[0.82rem] font-bold leading-tight">
      {label}
    </span>
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
