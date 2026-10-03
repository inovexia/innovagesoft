/**
 * Homepage hero artwork: what an agency engagement does, as one picture.
 *
 * Reads left to right — the work we hand over (the two cards), the compounding
 * result (ascending modular columns), and the trajectory out of them (the arc
 * and its arrowhead). The columns are drawn as stacked segments rather than
 * plain bars so they read as something built, not just a chart, and the arc's
 * tail emerges from behind the cards so the two halves connect without needing
 * a leader line.
 *
 * Structure strokes in `currentColor`, so it inherits the text token and works
 * in both themes; emphasis is `var(--accent)`. Knockout lines on the solid
 * column use `var(--bg)` rather than white, which would smear in dark mode.
 *
 * Decorative: the hero's copy carries the real message.
 */
export function GrowthArt({ className = "" }) {
  const columns = [
    { x: 158, h: 96, fill: "soft" },
    { x: 226, h: 132, fill: "soft" },
    { x: 294, h: 174, fill: "mid" },
    { x: 362, h: 222, fill: "strong" },
    { x: 430, h: 272, fill: "solid" },
  ];
  const BASE = 380;
  const W = 54;

  const tone = {
    soft: { fill: "currentColor", opacity: 0.07, stroke: 0.2 },
    mid: { fill: "var(--accent)", opacity: 0.18, stroke: 0.3 },
    strong: { fill: "var(--accent)", opacity: 0.42, stroke: 0 },
    solid: { fill: "var(--accent)", opacity: 1, stroke: 0 },
  };

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Accent bloom, same treatment as the rest of the site's hero art */}
      <span className="pointer-events-none absolute -right-8 top-0 h-64 w-64 rounded-full bg-accent opacity-[0.18] blur-[80px]" />
      <span className="pointer-events-none absolute -left-10 bottom-4 h-56 w-56 rounded-full bg-accent opacity-[0.12] blur-[80px]" />

      <svg
        viewBox="0 0 560 410"
        className="relative w-full"
        fill="none"
        focusable="false"
      >
        <defs>
          {/* Fades the trajectory in from the left so it reads as a direction */}
          <linearGradient id="ga-arc" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
            <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* ── The trajectory, behind nothing — it clears every column ── */}
        <path
          d="M130 272 C240 232 332 176 396 112 C428 80 464 54 488 42"
          stroke="url(#ga-arc)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* ── Ascending columns, each built from stacked segments ────── */}
        <g>
          {columns.map((col) => {
            const t = tone[col.fill];
            const y = BASE - col.h;
            /* Segment seams every 48px up from the base, so each column
               reads as something assembled. */
            const seams = [];
            for (let offset = 48; offset < col.h - 16; offset += 48) {
              seams.push(BASE - offset);
            }
            return (
              <g key={col.x}>
                <rect
                  x={col.x}
                  y={y}
                  width={W}
                  height={col.h}
                  rx="12"
                  fill={t.fill}
                  fillOpacity={t.opacity}
                  stroke={t.stroke ? "currentColor" : "none"}
                  strokeOpacity={t.stroke || 0}
                  strokeWidth="1.5"
                />
                {seams.map((sy) => (
                  <line
                    key={sy}
                    x1={col.x + 11}
                    y1={sy}
                    x2={col.x + W - 11}
                    y2={sy}
                    stroke={col.fill === "solid" ? "var(--bg)" : "currentColor"}
                    strokeOpacity={col.fill === "solid" ? 0.35 : 0.18}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                ))}
              </g>
            );
          })}
        </g>

        {/* Ground line */}
        <line
          x1="120"
          y1={BASE}
          x2="516"
          y2={BASE}
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* ── Arrowhead on the trajectory ─────────────────────────────── */}
        <circle cx="488" cy="42" r="23" fill="var(--accent)" />
        <path
          d="M480 50 L497 33 M487 32 h10 v10"
          stroke="var(--btn-text)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ── What we hand over ───────────────────────────────────────── */}
        {/* A build card: angle brackets */}
        <g>
          <rect
            x="40"
            y="98"
            width="96"
            height="60"
            rx="15"
            fill="var(--bg)"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
          <path
            d="M70 118 L60 128 L70 138 M106 118 L116 128 L106 138 M94 114 L82 142"
            stroke="var(--accent)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* A design card: stacked layers */}
        <g>
          <rect
            x="46"
            y="186"
            width="104"
            height="62"
            rx="15"
            fill="var(--bg)"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="1.5"
          />
          <path
            d="M98 200 L120 211 L98 222 L76 211 Z"
            fill="var(--accent)"
            fillOpacity="0.9"
          />
          <path
            d="M76 222 L98 233 L120 222"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Texture, top right */}
        <circle cx="420" cy="36" r="4" fill="var(--accent)" fillOpacity="0.45" />
        <circle cx="528" cy="110" r="3" fill="var(--accent)" fillOpacity="0.35" />
        <circle cx="350" cy="62" r="2.5" fill="currentColor" fillOpacity="0.2" />
      </svg>
    </div>
  );
}
