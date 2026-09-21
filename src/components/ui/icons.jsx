/**
 * Line icons. Everything strokes in `currentColor`, so colour is inherited
 * from whatever the icon sits inside and follows the light/dark tokens.
 */

function Icon({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
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

/* ── Why-us ───────────────────────────────────────────────────────────── */

/** A workflow: one step feeding the next. */
export const RouteIcon = (p) => (
  <Icon {...p}>
    <rect x="2.75" y="2.75" width="7.5" height="7.5" rx="2" />
    <rect x="13.75" y="13.75" width="7.5" height="7.5" rx="2" />
    <path d="M10.25 6.5h5a2.25 2.25 0 0 1 2.25 2.25v5" />
    <path d="m15.25 11.5 2.25 2.5 2.25-2.5" />
  </Icon>
);

export const TeamIcon = (p) => (
  <Icon {...p}>
    <circle cx="9.25" cy="7.75" r="3.75" />
    <path d="M2.75 20.25a6.5 6.5 0 0 1 13 0" />
    <path d="M16.5 4.6a3.75 3.75 0 0 1 0 6.3" />
    <path d="M18 14.5a6.5 6.5 0 0 1 3.25 5.75" />
  </Icon>
);

/** Filled rather than stroked: an 11-point leaf outline turns to mush at 24px. */
export const MapleIcon = (p) => (
  <Icon fill="currentColor" stroke="none" {...p}>
    <path d="M12 2.2l1.75 3.3 2.1-.72-.62 3.05 2.9-.45-.72 1.62 4.34 2.7-3.9 1.62.62 1.8-4.1-.62.3 4.1h-1.5l.3-4.1-4.1.62.62-1.8-3.9-1.62 4.34-2.7-.72-1.62 2.9.45-.62-3.05 2.1.72L12 2.2z" />
  </Icon>
);

/** Two overlapping circles — a partnership, and it stays legible small. */
export const PartnershipIcon = (p) => (
  <Icon {...p}>
    <circle cx="9" cy="12" r="6" />
    <circle cx="15" cy="12" r="6" />
  </Icon>
);

/* ── UI ───────────────────────────────────────────────────────────────── */

export const ArrowRightIcon = (p) => (
  <Icon {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Icon>
);

export const ChevronDownIcon = (p) => (
  <Icon {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Icon>
);

export const CheckIcon = (p) => (
  <Icon {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Icon>
);

export const MenuIcon = (p) => (
  <Icon {...p}>
    <path d="M3.5 7h17" />
    <path d="M3.5 12h17" />
    <path d="M3.5 17h17" />
  </Icon>
);

export const CloseIcon = (p) => (
  <Icon {...p}>
    <path d="m6 6 12 12" />
    <path d="m18 6-12 12" />
  </Icon>
);

export const SunIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
  </Icon>
);

export const MoonIcon = (p) => (
  <Icon {...p}>
    <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4 8.2 8.2 0 1 0 20 14.2z" />
  </Icon>
);

/* ── Contact ──────────────────────────────────────────────────────────── */

export const MailIcon = (p) => (
  <Icon {...p}>
    <rect x="2.75" y="5" width="18.5" height="14" rx="2.5" />
    <path d="m4 7.5 7.1 5a1.6 1.6 0 0 0 1.8 0l7.1-5" />
  </Icon>
);

export const PhoneIcon = (p) => (
  <Icon {...p}>
    <path d="M6.2 3.5h2.4l1.5 3.8-1.9 1.3a10.8 10.8 0 0 0 5.2 5.2l1.3-1.9 3.8 1.5v2.4a2.3 2.3 0 0 1-2.5 2.3A15.5 15.5 0 0 1 3.9 6a2.3 2.3 0 0 1 2.3-2.5z" />
  </Icon>
);

export const PinIcon = (p) => (
  <Icon {...p}>
    <path d="M19 10.4c0 4.9-7 11.1-7 11.1s-7-6.2-7-11.1a7 7 0 0 1 14 0z" />
    <circle cx="12" cy="10.2" r="2.6" />
  </Icon>
);

export const ClockIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5.2l3.3 2" />
  </Icon>
);

export const iconMap = {
  route: RouteIcon,
  team: TeamIcon,
  maple: MapleIcon,
  partnership: PartnershipIcon,
};
