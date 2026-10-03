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

/** Heading + optional intro, revealed as one staggered group. */
export function SectionHeading({ heading, intro, align = "left" }) {
  const centered = align === "center";

  return (
    <header className={centered ? "mx-auto max-w-[46rem] text-center" : "max-w-[46rem]"}>
      <Reveal>
        <h2 className="text-[clamp(1.85rem,3.6vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
          {heading}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={80}>
          <p className="mt-5 text-[1.05rem] leading-[1.65] text-muted">{intro}</p>
        </Reveal>
      ) : null}
    </header>
  );
}
