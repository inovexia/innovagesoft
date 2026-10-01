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

/* ── Delivery stages ──────────────────────────────────────────────────── */

/** Discovery: a magnifier over a process. */
export const DiscoveryIcon = (p) => (
  <Icon {...p}>
    <circle cx="10.5" cy="10.5" r="6.75" />
    <path d="m15.5 15.5 5 5" />
    <path d="M7.75 10.5h5.5" />
    <path d="M10.5 7.75v5.5" />
  </Icon>
);

/** UX/UI: a frame with a cursor on it. */
export const DesignIcon = (p) => (
  <Icon {...p}>
    <rect x="2.75" y="3.75" width="18.5" height="14.5" rx="2.5" />
    <path d="M2.75 8h18.5" />
    <path d="m10 11.5 5.5 7 1-3 3-1z" />
  </Icon>
);

/** Development: angle brackets. */
export const CodeIcon = (p) => (
  <Icon {...p}>
    <path d="m8.5 8.5-4.5 3.5 4.5 3.5" />
    <path d="m15.5 8.5 4.5 3.5-4.5 3.5" />
    <path d="m13.5 4.5-3 15" />
  </Icon>
);

/** Testing: a shield with a check. */
export const ShieldIcon = (p) => (
  <Icon {...p}>
    <path d="M12 2.75 20 6v6.5c0 5-3.4 8.3-8 9.75-4.6-1.45-8-4.75-8-9.75V6z" />
    <path d="m8.75 11.75 2.25 2.25 4.25-4.5" />
  </Icon>
);

/** Deployment: a launch. */
export const RocketIcon = (p) => (
  <Icon {...p}>
    <path d="M13.5 3.5c3.5 1 6 4 7 7.5l-4.25 4.25-6.5-6.5z" />
    <path d="m9.75 8.75-4.5 1.5-1.75 3.5 3.75.75" />
    <path d="m15.25 15.25-1.5 4.5-3.5 1.75-.75-3.75" />
    <circle cx="14.75" cy="9.25" r="1.5" />
  </Icon>
);

/** Documentation: an open book. */
export const BookIcon = (p) => (
  <Icon {...p}>
    <path d="M12 6.5C10.5 5 8.5 4.25 4.75 4.25v13C8.5 17.25 10.5 18 12 19.5c1.5-1.5 3.5-2.25 7.25-2.25v-13C15.5 4.25 13.5 5 12 6.5z" />
    <path d="M12 6.5v13" />
  </Icon>
);

/** Support: a headset. */
export const SupportIcon = (p) => (
  <Icon {...p}>
    <path d="M4.25 14.5v-2.25a7.75 7.75 0 0 1 15.5 0v2.25" />
    <rect x="2.75" y="13.25" width="4" height="6" rx="2" />
    <rect x="17.25" y="13.25" width="4" height="6" rx="2" />
    <path d="M19.75 19.25a3.5 3.5 0 0 1-3.5 3.5h-2" />
  </Icon>
);

/** WhatsApp — filled glyph, so it reads at small sizes on a coloured chip. */
export const WhatsAppIcon = (p) => (
  <Icon fill="currentColor" stroke="none" {...p}>
    <path d="M12.04 2.25c-5.4 0-9.79 4.39-9.79 9.79 0 1.73.45 3.41 1.31 4.9L2.25 21.75l4.94-1.29a9.75 9.75 0 0 0 4.85 1.29h.01c5.4 0 9.79-4.39 9.79-9.79s-4.4-9.71-9.8-9.71zm0 17.94h-.01a8.13 8.13 0 0 1-4.14-1.13l-.3-.18-3.07.8.82-3-.19-.31a8.11 8.11 0 0 1-1.24-4.33c0-4.49 3.65-8.14 8.14-8.14 2.17 0 4.21.85 5.75 2.39a8.08 8.08 0 0 1 2.38 5.76c0 4.49-3.65 8.14-8.14 8.14zm4.46-6.1c-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.97-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.97-1.21-.73-.65-1.22-1.45-1.36-1.7-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.85.83-.85 2.03s.88 2.35 1 2.51c.12.16 1.72 2.63 4.17 3.69.58.25 1.04.4 1.39.51.59.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.17.2-.57.2-1.06.14-1.17-.06-.1-.22-.16-.46-.28z" />
  </Icon>
);

/** External link, for footer/nav links that leave the site. */
export const ExternalIcon = (p) => (
  <Icon {...p}>
    <path d="M13.5 4.5h6v6" />
    <path d="m19.5 4.5-8 8" />
    <path d="M18.5 14v4.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2H10" />
  </Icon>
);

/* ── TeckHub360 modules ───────────────────────────────────────────────── */

export const BuildingIcon = (p) => (
  <Icon {...p}>
    <path d="M3.75 20.5h16.5" />
    <path d="M5.5 20.5V5a1.5 1.5 0 0 1 1.5-1.5h6A1.5 1.5 0 0 1 14.5 5v15.5" />
    <path d="M14.5 10h3.5a1.5 1.5 0 0 1 1.5 1.5v9" />
    <path d="M8.5 7.5h3M8.5 11h3M8.5 14.5h3" />
  </Icon>
);

export const UserCheckIcon = (p) => (
  <Icon {...p}>
    <circle cx="9.5" cy="7.75" r="3.75" />
    <path d="M3 20.25a6.5 6.5 0 0 1 11.25-4.4" />
    <path d="m14.75 17.5 2 2 4-4.25" />
  </Icon>
);

export const ChecklistIcon = (p) => (
  <Icon {...p}>
    <rect x="4.25" y="3.25" width="15.5" height="17.5" rx="2.5" />
    <path d="m7.75 8.5 1.5 1.5 2.75-3" />
    <path d="m7.75 15 1.5 1.5 2.75-3" />
    <path d="M14.5 9h2.75M14.5 15.5h2.75" />
  </Icon>
);

/** OCR: a document under a scan line. */
export const ScanIcon = (p) => (
  <Icon {...p}>
    <path d="M3.25 7.75V5.5a2.25 2.25 0 0 1 2.25-2.25h2.25" />
    <path d="M20.75 7.75V5.5a2.25 2.25 0 0 0-2.25-2.25h-2.25" />
    <path d="M3.25 16.25v2.25a2.25 2.25 0 0 0 2.25 2.25h2.25" />
    <path d="M20.75 16.25v2.25a2.25 2.25 0 0 1-2.25 2.25h-2.25" />
    <path d="M3.25 12h17.5" />
    <path d="M8 8.75h5M8 15.25h8" opacity={0.55} />
  </Icon>
);

/** The filing pipeline: ordered stages. */
export const PipelineIcon = (p) => (
  <Icon {...p}>
    <circle cx="5" cy="12" r="2.25" />
    <circle cx="12" cy="12" r="2.25" />
    <circle cx="19" cy="12" r="2.25" />
    <path d="M7.25 12h2.5M14.25 12h2.5" />
  </Icon>
);

export const ChartIcon = (p) => (
  <Icon {...p}>
    <path d="M3.75 3.75v14.5a2 2 0 0 0 2 2h14.5" />
    <path d="M7.75 16.5v-3.75M11.75 16.5v-7.5M15.75 16.5v-5.25M19.75 16.5V7" />
  </Icon>
);

export const CalendarIcon = (p) => (
  <Icon {...p}>
    <rect x="3.25" y="5" width="17.5" height="15.75" rx="2.5" />
    <path d="M3.25 9.75h17.5" />
    <path d="M8 3.25v3.5M16 3.25v3.5" />
    <path d="M7.5 13.5h2.25M7.5 17h2.25M14.25 13.5h2.25" />
  </Icon>
);

export const InvoiceIcon = (p) => (
  <Icon {...p}>
    <path d="M5.5 2.75h13v18.5l-2.6-1.75-2.6 1.75-2.6-1.75-2.6 1.75V2.75z" />
    <path d="M9 8h6M9 12h6M9 15.5h3.5" opacity={0.7} />
  </Icon>
);

export const PayrollIcon = (p) => (
  <Icon {...p}>
    <rect x="2.75" y="5.75" width="18.5" height="12.5" rx="2.5" />
    <circle cx="12" cy="12" r="2.75" />
    <path d="M6 9.5v5M18 9.5v5" />
  </Icon>
);

export const ListIcon = (p) => (
  <Icon {...p}>
    <path d="M8.5 6.5h12M8.5 12h12M8.5 17.5h12" />
    <path d="M4 6.5h.01M4 12h.01M4 17.5h.01" strokeWidth={2.4} />
  </Icon>
);

export const productIcons = {
  building: BuildingIcon,
  userCheck: UserCheckIcon,
  checklist: ChecklistIcon,
  scan: ScanIcon,
  pipeline: PipelineIcon,
  chart: ChartIcon,
  calendar: CalendarIcon,
  invoice: InvoiceIcon,
  payroll: PayrollIcon,
  shield: ShieldIcon,
  clock: ClockIcon,
  list: ListIcon,
  team: TeamIcon,
  route: RouteIcon,
  partnership: PartnershipIcon,
};

export const stageIcons = {
  discovery: DiscoveryIcon,
  design: DesignIcon,
  code: CodeIcon,
  shield: ShieldIcon,
  rocket: RocketIcon,
  book: BookIcon,
  support: SupportIcon,
};

export const iconMap = {
  route: RouteIcon,
  team: TeamIcon,
  maple: MapleIcon,
  partnership: PartnershipIcon,
};
