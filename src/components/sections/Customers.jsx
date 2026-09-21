import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { ArrowRightIcon } from "@/components/ui/icons";
import { caseStudies, showPlaceholders } from "@/lib/site";

export function Customers() {
  const shown = caseStudies.filter((c) => showPlaceholders || !c.placeholder);

  return (
    <Section id="customers" tinted>
      <SectionHeading eyebrow="Selected projects" heading="Work we're proud of." />

      <div className="mt-16 grid gap-5 lg:grid-cols-2">
        {shown.map((study, i) => (
          <Reveal key={study.client} delay={i * 70}>
            <article className="flex h-full flex-col rounded-3xl border border-hairline bg-bg p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] md:p-9">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-[1.25rem] font-extrabold tracking-[-0.02em]">
                  {study.client}
                </h3>
                {study.placeholder ? <PlaceholderBadge /> : null}
              </div>

              <p className="mt-1.5 text-[1.05rem] font-semibold text-accent">
                {study.project}
              </p>

              <p className="mt-4 text-[0.85rem] font-bold uppercase tracking-[0.1em] text-muted">
                {study.industry} <span aria-hidden="true">·</span> {study.type}
              </p>

              <p className="mt-4 flex-1 leading-[1.65] text-muted">{study.body}</p>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-hairline pt-6">
                {study.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-surface-strong px-3 py-1 text-[0.78rem] font-bold text-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <a
          href="#contact"
          className="group mt-12 inline-flex items-center gap-2 font-bold text-accent"
        >
          View all customers
          <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </Reveal>
    </Section>
  );
}
