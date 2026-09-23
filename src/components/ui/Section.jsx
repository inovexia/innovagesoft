import { Reveal } from "./Reveal";

/**
 * Shared section shell. Keeps the container width, vertical rhythm and
 * anchor offset identical everywhere so the page scrolls in a steady beat.
 */
export function Section({ id, children, className = "", tinted = false }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 md:py-32 ${
        tinted ? "border-y border-hairline bg-surface" : ""
      } ${className}`}
    >
      <div className="mx-auto w-[min(100%-2rem,82rem)]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-2.5 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-accent">
      <span className="h-px w-7 bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

/** Eyebrow + heading + optional intro, revealed as one staggered group. */
export function SectionHeading({ eyebrow, heading, intro, align = "left" }) {
  const centered = align === "center";

  return (
    <header className={centered ? "mx-auto max-w-[46rem] text-center" : "max-w-[46rem]"}>
      {eyebrow ? (
        <Reveal className={centered ? "flex justify-center" : undefined}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      ) : null}

      <Reveal delay={80}>
        <h2 className="mt-5 text-[clamp(1.85rem,3.6vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
          {heading}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={160}>
          <p className="mt-5 text-[1.05rem] leading-[1.65] text-muted">{intro}</p>
        </Reveal>
      ) : null}
    </header>
  );
}
