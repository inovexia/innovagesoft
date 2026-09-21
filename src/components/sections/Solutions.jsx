import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SolutionArt } from "@/components/ui/SolutionArt";
import { solutions } from "@/lib/site";

export function Solutions() {
  return (
    <Section id="solutions">
      <SectionHeading
        eyebrow="What we build"
        heading="Software that fits your business, not the other way around."
        intro="Off-the-shelf tools make you change your process to match theirs. We build around the way your team already works, then make it faster."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {solutions.map((solution, i) => (
          <Reveal
            key={solution.id}
            delay={i * 70}
            /* The last card is alone on the bottom row at 2-up; let it span. */
            className={i === solutions.length - 1 ? "md:col-span-2" : undefined}
          >
            <article
              id={`solution-${solution.id}`}
              className="group h-full scroll-mt-28 rounded-3xl border border-hairline bg-surface p-7 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] hover:bg-surface-strong md:p-9"
            >
              <SolutionArt
                id={solution.id}
                className="h-[76px] w-[120px] text-muted transition-colors duration-300 group-hover:text-text"
              />

              <h3 className="mt-7 text-[1.3rem] font-extrabold tracking-[-0.02em]">
                {solution.title}
              </h3>
              <p className="mt-3 max-w-[54ch] leading-[1.65] text-muted">
                {solution.body}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {solution.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full bg-accent-soft px-3 py-1 text-[0.8rem] font-bold text-accent"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
