import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { CheckIcon } from "@/components/ui/icons";
import { industries } from "@/lib/site";

export function IndustriesGrid({ tinted = false, bare = false, heading, eyebrow, intro }) {
  const grid = (
    <div className={bare ? "grid gap-5 md:grid-cols-2 xl:grid-cols-3" : "mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3"}>
      {industries.map((industry, i) => (
        <Reveal key={industry.slug} delay={i * 60}>
          <article
            id={industry.slug}
            className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-hairline bg-surface transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)]"
          >
            <Photo
              name={industry.image}
              alt={industry.imageAlt}
              ratio="aspect-[16/10]"
              rounded="rounded-none"
              className="border-0 border-b border-hairline"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />

            <div className="flex flex-1 flex-col p-7">
              <h3 className="text-[1.2rem] font-extrabold tracking-[-0.02em]">
                {industry.name}
              </h3>
              <p className="mt-3 flex-1 leading-[1.65] text-muted">{industry.problem}</p>

              <ul className="mt-6 grid gap-2.5 border-t border-hairline pt-5">
                {industry.build.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                      <CheckIcon className="h-3 w-3" strokeWidth={2.6} />
                    </span>
                    <span className="text-[0.94rem] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );

  if (bare) return grid;

  return (
    <Section id="industries" tinted={tinted}>
      <SectionHeading
        eyebrow={eyebrow ?? "Who we work with"}
        heading={heading ?? "We've seen your problem before."}
        intro={
          intro ??
          "Ten years of building for Canadian businesses means we arrive already knowing the shape of the problem — and where the expensive surprises usually hide."
        }
      />
      {grid}
    </Section>
  );
}
