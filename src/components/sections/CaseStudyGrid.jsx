import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { ArrowRightIcon } from "@/components/ui/icons";
import { caseStudies, showPlaceholders } from "@/lib/site";

export function CaseStudyGrid({
  tinted = true,
  /** Explicit list wins; otherwise fall back to all case studies. */
  items,
  limit,
  heading = "Work we're proud of.",
  eyebrow = "Selected projects",
  showAllLink = true,
  bare = false,
}) {
  const source = items ?? caseStudies;
  const shown = source
    .filter((c) => showPlaceholders || !c.placeholder)
    .slice(0, limit ?? source.length);

  const grid = (
    <>
      <div className={bare ? "grid gap-5 lg:grid-cols-2" : "mt-16 grid gap-5 lg:grid-cols-2"}>
        {shown.map((study, i) => (
          <Reveal key={study.slug} delay={i * 70}>
            <Link
              href={`/case-studies#${study.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-bg transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)]"
            >
              <Photo
                name={study.image}
                alt={study.imageAlt}
                ratio="aspect-[16/9]"
                rounded="rounded-none"
                className="border-0 border-b border-hairline"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              <div className="flex flex-1 flex-col p-7 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-[1.2rem] font-extrabold tracking-[-0.02em]">
                    {study.client}
                  </h3>
                  {study.placeholder ? <PlaceholderBadge /> : null}
                </div>

                <p className="mt-1.5 font-semibold text-accent">{study.project}</p>

                <p className="mt-3.5 text-[0.82rem] font-bold uppercase tracking-[0.1em] text-muted">
                  {study.industry} <span aria-hidden="true">·</span> {study.type}
                </p>

                <p className="mt-4 flex-1 leading-[1.65] text-muted">{study.summary}</p>

                <span className="mt-6 inline-flex items-center gap-2 border-t border-hairline pt-5 font-bold text-accent">
                  Read the case study
                  <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {showAllLink ? (
        <Reveal delay={120}>
          <Link
            href="/case-studies"
            className="group mt-12 inline-flex items-center gap-2 font-bold text-accent"
          >
            View all case studies
            <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      ) : null}
    </>
  );

  if (bare) return grid;

  return (
    <Section id="case-studies" tinted={tinted}>
      <SectionHeading eyebrow={eyebrow} heading={heading} />
      {grid}
    </Section>
  );
}
