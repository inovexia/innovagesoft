import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WhyInnovage } from "@/components/sections/WhyInnovage";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/ui/CtaBand";
import { company } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "Innovage is a small senior team of designers and engineers in Mississauga, Ontario, building custom software for growing Canadian businesses since 2015.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A small senior team that builds like owners."
        intro={`We're ${company.name}, a team of designers and engineers based in Mississauga, Ontario. For over ten years we've helped growing businesses across Canada replace slow, manual work with software that just works.`}
        media={
          <Photo
            name="team-collaboration"
            alt="The Innovage team working together around a desk"
            ratio="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        }
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Photo
              name="office-space"
              alt="The Innovage studio: an open-plan office with desks by the windows"
              ratio="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal delay={80}>
              <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.025em]">
                Why we started
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-[54ch] text-[1.05rem] leading-[1.75] text-muted">
                We started {company.name} because we kept seeing businesses stuck
                between off-the-shelf tools that didn&rsquo;t fit and big agencies
                that didn&rsquo;t listen. One side made you rebuild your process
                around a product; the other billed you for a process nobody ever
                explained.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-5 max-w-[54ch] text-[1.05rem] leading-[1.75] text-muted">
                We keep the team small on purpose. Every project gets senior people
                from the first call to the last deploy, and we only take on work we
                can do well. That is a harder business to scale, and a much easier
                one to be proud of.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section tinted>
        <SectionHeading
          eyebrow="How we operate"
          heading="Three commitments we don't negotiate on."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "You own everything",
              body: "The repository, the infrastructure accounts, the documentation. No licence to keep paying, no hostage situation if you decide to move on.",
            },
            {
              title: "We'll tell you not to build",
              body: "If an off-the-shelf tool solves your problem, we will say so and lose the sale. A project that shouldn't exist is bad for both of us.",
            },
            {
              title: "Fixed scope, fixed price",
              body: "Discovery produces a scope and a number. If something changes mid-project we re-scope openly rather than quietly billing the difference.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="h-full rounded-3xl border border-hairline bg-bg p-7">
                <span className="text-[0.8rem] font-bold tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.18rem] font-extrabold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-[1.65] text-muted">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <WhyInnovage tinted={false} image="screen-review" imageAlt="Two colleagues reviewing an interface together" />

      <Section tinted>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal>
            <Photo
              name="city-towers"
              alt="Office towers seen from street level in a Canadian city"
              ratio="aspect-[3/4]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>

          <div>
            <Reveal delay={80}>
              <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-extrabold leading-[1.12] tracking-[-0.025em]">
                Canadian, end to end
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[52ch] text-[1.05rem] leading-[1.75] text-muted">
                We work from {company.address.city}, in your time zone, on your
                business hours. When data residency matters — healthcare records,
                financial documents, anything that touches PIPEDA or PHIPA — we host
                in Canadian regions and can show you exactly where your data sits.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <dl className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
                {[
                  ["Head office", `${company.address.city}, ${company.address.region}`],
                  ["Working hours", company.hours],
                  ["Typical reply", company.responseTime],
                  ["Team", "Senior, in-house"],
                ].map(([label, value]) => (
                  <div key={label} className="bg-bg p-5">
                    <dt className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-muted">
                      {label}
                    </dt>
                    <dd className="mt-1.5 font-bold">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Section>

      <Stats />
      <Testimonials />
      <CtaBand />
    </>
  );
}
