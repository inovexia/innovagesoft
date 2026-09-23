import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";
import { CtaBand } from "@/components/ui/CtaBand";
import { ProjectIncludes } from "@/components/sections/ProjectIncludes";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { caseStudyBySlug, serviceBySlug, services } from "@/lib/site";

/** Prerender all four service pages at build time. */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const service = serviceBySlug((await params).slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.intro.slice(0, 155),
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const related = service.caseStudySlugs
    .map((s) => caseStudyBySlug(s))
    .filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.headline}
        intro={service.intro}
        media={
          <Photo
            name={service.image}
            alt={service.imageAlt}
            ratio="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        }
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[0.9rem] font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px"
          >
            Talk about your project
            <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center rounded-full border border-[color-mix(in_srgb,var(--text)_25%,transparent)] px-7 py-[0.9rem] font-bold transition-transform duration-200 hover:-translate-y-px"
          >
            How we work
          </Link>
        </div>
      </PageHero>

      {/* ── What we build ────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.025em]">
                What we build
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-8">
              {service.build.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="border-l-2 border-accent pl-6">
                    <h3 className="text-[1.12rem] font-extrabold tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[52ch] leading-[1.65] text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Reveal delay={180}>
              <div className="rounded-3xl border border-hairline bg-surface p-7">
                <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted">
                  What you end up with
                </h3>
                <ul className="mt-5 grid gap-3.5">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                        <CheckIcon className="h-3 w-3" strokeWidth={2.6} />
                      </span>
                      <span className="leading-snug">{outcome}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-8 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted">
                  Typical stack
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-surface-strong px-3 py-1 text-[0.8rem] font-bold text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <ProjectIncludes tinted />

      {/* ── Related work ─────────────────────────────────────────────── */}
      {related.length ? (
        <Section>
          <SectionHeading
            eyebrow="Related work"
            heading={`${service.navLabel} we've shipped.`}
          />
          <div className="mt-16">
            <CaseStudyGrid bare items={related} showAllLink={false} />
          </div>
        </Section>
      ) : null}

      <Section tinted>
        <Faq items={service.faqs} />
      </Section>

      <CtaBand heading={`Thinking about ${service.navLabel.toLowerCase()}?`} />
    </>
  );
}
