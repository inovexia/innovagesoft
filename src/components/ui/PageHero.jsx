import { Reveal } from "./Reveal";
import { Eyebrow } from "./Section";

/**
 * Shared hero for every page except the homepage, which has its own.
 * Clears the fixed header and keeps the vertical rhythm consistent.
 *
 * `media` turns it into two columns. Without it the copy sits alone in a
 * wide container and the right half reads as a dead zone, so every page
 * that has a relevant image should pass one.
 */
export function PageHero({ eyebrow, title, intro, media, children }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-hairline">
      {/* Soft accent wash so inner pages are not a cold white slab */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[26rem] w-[26rem] rounded-full bg-accent opacity-[0.13] blur-[100px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-[22rem] w-[22rem] rounded-full bg-accent opacity-[0.08] blur-[100px]"
      />

      <div
        className={`mx-auto w-[min(100%-2rem,82rem)] pb-16 pt-32 md:pb-24 md:pt-40 ${
          media
            ? "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
            : ""
        }`}
      >
        <div>
          {eyebrow ? (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          ) : null}

          <Reveal delay={80}>
            <h1 className="mt-5 max-w-[20ch] text-[clamp(2.1rem,5vw,3.8rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
              {title}
            </h1>
          </Reveal>

          {intro ? (
            <Reveal delay={160}>
              <p className="mt-6 max-w-[56ch] text-[clamp(1.02rem,1.4vw,1.2rem)] leading-[1.6] text-muted">
                {intro}
              </p>
            </Reveal>
          ) : null}

          {children ? <Reveal delay={240}>{children}</Reveal> : null}
        </div>

        {media ? <Reveal delay={200}>{media}</Reveal> : null}
      </div>
    </section>
  );
}
