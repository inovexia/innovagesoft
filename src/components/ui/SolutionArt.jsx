/**
 * A small diagram per solution — each one shows the shape of the thing being
 * sold rather than a generic glyph. Structure strokes in `currentColor`
 * (inherits the muted/text token); the one element worth pointing at is
 * filled with `var(--accent)`.
 */

function Frame({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 120 76"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** A portal: sidebar, header, and a chart where one column is the metric. */
function CustomSoftwareArt(p) {
  return (
    <Frame {...p}>
      <rect x="6" y="8" width="108" height="60" rx="6" />
      <path d="M6 20h108" />
      <path d="M34 20v48" />
      <circle cx="13.5" cy="14" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="19.5" cy="14" r="1.6" fill="currentColor" stroke="none" />
      <path d="M12 28h16M12 35h12M12 42h16M12 49h10" opacity={0.55} />
      <rect x="44" y="46" width="9" height="14" rx="2" opacity={0.6} />
      <rect x="58" y="38" width="9" height="22" rx="2" opacity={0.6} />
      <rect x="72" y="28" width="9" height="32" rx="2" fill="var(--accent)" stroke="none" />
      <rect x="86" y="42" width="9" height="18" rx="2" opacity={0.6} />
      <path d="M44 30h22" opacity={0.55} />
    </Frame>
  );
}

/** One layout, two viewports: a desktop frame with a phone overlapping it. */
function WebArt(p) {
  return (
    <Frame {...p}>
      <rect x="6" y="8" width="84" height="52" rx="5" />
      <path d="M6 18h84" />
      <path d="M14 28h34M14 35h26M14 42h30" opacity={0.55} />
      <rect x="14" y="48" width="20" height="6" rx="3" fill="var(--accent)" stroke="none" />
      <path d="M36 66h24" />
      <path d="M48 60v6" />
      <rect x="82" y="26" width="30" height="46" rx="5" fill="var(--bg)" />
      <path d="M94 31h6" opacity={0.6} />
      <path d="M88 40h18M88 47h13M88 54h18" opacity={0.55} />
      <rect x="88" y="60" width="12" height="5" rx="2.5" fill="var(--accent)" stroke="none" />
    </Frame>
  );
}

/** Two devices, one shared backend node feeding both. */
function MobileArt(p) {
  return (
    <Frame {...p}>
      <rect x="10" y="6" width="30" height="50" rx="5" />
      <path d="M21 11h8" opacity={0.6} />
      <path d="M16 20h18M16 27h12M16 34h18" opacity={0.55} />
      <rect x="16" y="41" width="13" height="5" rx="2.5" fill="var(--accent)" stroke="none" />
      <rect x="54" y="6" width="30" height="50" rx="5" />
      <path d="M65 11h8" opacity={0.6} />
      <path d="M60 20h18M60 27h12M60 34h18" opacity={0.55} />
      <rect x="60" y="41" width="13" height="5" rx="2.5" fill="var(--accent)" stroke="none" />
      <rect x="92" y="22" width="22" height="18" rx="4" />
      <path d="M96 31h14" opacity={0.6} />
      <path d="M25 56v6a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4v-6" opacity={0.7} />
      <path d="M103 40v22a4 4 0 0 1-4 4H69" opacity={0.7} />
      <circle cx="49" cy="66" r="2.6" fill="var(--accent)" stroke="none" />
    </Frame>
  );
}

/** Three systems on a loop — data moving without anyone retyping it. */
function AutomationArt(p) {
  return (
    <Frame {...p}>
      <rect x="6" y="10" width="30" height="20" rx="4" />
      <path d="M12 20h18" opacity={0.6} />
      <rect x="84" y="10" width="30" height="20" rx="4" />
      <path d="M90 20h18" opacity={0.6} />
      <rect x="45" y="48" width="30" height="20" rx="4" />
      <path d="M51 58h18" opacity={0.6} />
      <path d="M36 20h48" />
      <path d="m78 16 6 4-6 4" />
      <path d="M99 30v14a6 6 0 0 1-6 6H75" />
      <path d="m81 46-6 4 6 4" />
      <path d="M45 58H27a6 6 0 0 1-6-6V30" />
      <path d="m17 36 4-6 4 6" />
      <circle cx="60" cy="20" r="4.5" fill="var(--accent)" stroke="none" />
    </Frame>
  );
}

/** A shield with a check, orbited by the recurring monthly work. */
function SitecareArt(p) {
  return (
    <Frame {...p}>
      <path d="M60 8 84 16v18c0 14-10 24-24 30-14-6-24-16-24-30V16z" />
      <path d="m50 36 7.5 7.5L72 30" stroke="var(--accent)" strokeWidth={2.2} />
      <path d="M26 24a38 38 0 0 0 0 28" opacity={0.5} />
      <path d="M94 24a38 38 0 0 1 0 28" opacity={0.5} />
      <circle cx="26" cy="24" r="2.4" fill="currentColor" stroke="none" opacity={0.7} />
      <circle cx="26" cy="52" r="2.4" fill="currentColor" stroke="none" opacity={0.7} />
      <circle cx="94" cy="24" r="2.4" fill="currentColor" stroke="none" opacity={0.7} />
      <circle cx="94" cy="52" r="2.4" fill="currentColor" stroke="none" opacity={0.7} />
    </Frame>
  );
}

const art = {
  "custom-software": CustomSoftwareArt,
  web: WebArt,
  mobile: MobileArt,
  automation: AutomationArt,
  sitecare: SitecareArt,
};

export function SolutionArt({ id, ...props }) {
  const Art = art[id];
  return <Art {...props} />;
}
