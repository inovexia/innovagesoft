import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { caseStudies, showPlaceholders } from "@/lib/site";

export const metadata = {
  title: "Case Studies",
  description:
    "How we replaced manual processes with software for retail, logistics, healthcare and professional-services businesses across Canada.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  const shown = caseStudies.filter((c) => showPlaceholders || !c.placeholder);

  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Work we're proud of."
        intro="Each of these started as a manual process someone had learned to live with. Here is what was broken, what we built, and what changed afterwards."
        media={
          <Photo
            name="analytics-dashboard"
            alt="An analytics dashboard showing usage charts"
            ratio="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        }
      />

      <Section>
        <div className="grid gap-20 md:gap-28">
          {shown.map((study, i) => (
            <article
              key={study.slug}
              id={study.slug}
              className="scroll-mt-28 grid gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal
                /* Alternate which side the photo sits on so a long page of
                   case studies does not read as one repeating block. */
                className={i % 2 === 1 ? "lg:order-2" : undefined}
              >
                <Photo
                  name={study.image}
                  alt={study.imageAlt}
                  ratio="aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </Reveal>

              <div className="flex flex-col justify-center">
                <Reveal delay={80}>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[0.8rem] font-bold uppercase tracking-[0.12em] text-accent">
                      {study.industry} <span aria-hidden="true">·</span> {study.type}
                    </p>
                    {study.placeholder ? <PlaceholderBadge /> : null}
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-[1.12] tracking-[-0.025em]">
                    {study.client}
                  </h2>
                  <p className="mt-1.5 text-[1.1rem] font-semibold text-muted">
                    {study.project}
                  </p>
                </Reveal>

                <Reveal delay={180}>
                  <div className="mt-7 grid gap-5">
                    <div>
                      <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-muted">
                        The problem
                      </h3>
                      <p className="mt-2 max-w-[54ch] leading-[1.7]">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-muted">
                        What we built
                      </h3>
                      <p className="mt-2 max-w-[54ch] leading-[1.7]">{study.approach}</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={240}>
                  <ul className="mt-7 grid gap-3 rounded-2xl border border-hairline bg-surface p-6">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                          <CheckIcon className="h-3 w-3" strokeWidth={2.6} />
                        </span>
                        <span className="leading-snug">{result}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={300}>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {study.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-surface-strong px-3 py-1 text-[0.8rem] font-bold text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </article>
          ))}
        </div>

        <Reveal>
          <div className="mt-24 rounded-3xl border border-hairline bg-surface p-8 text-center md:p-12">
            <h2 className="text-[clamp(1.4rem,2.6vw,2rem)] font-extrabold tracking-[-0.02em]">
              Your situation is probably not on this page.
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] leading-[1.65] text-muted">
              Most of what we build is specific to one business. Tell us the process
              that is costing you time and we will tell you honestly whether software
              is the answer.
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px"
            >
              Start a conversation
              <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Section>

      <Stats />
      <Testimonials />
      <CtaBand />
    </>
  );
}
