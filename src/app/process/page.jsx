import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";
import { CtaBand } from "@/components/ui/CtaBand";
import { stageIcons } from "@/components/ui/icons";
import { projectIncludes } from "@/lib/site";

export const metadata = {
  title: "Process",
  description:
    "Discovery, UX/UI, development, testing, deployment, documentation and support — the seven stages included in every Innovage project.",
  alternates: { canonical: "/process" },
};

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Discovery is two to four weeks. A first production release is usually 10 to 16 weeks after that, depending on how many systems we have to integrate with. We scope both precisely before you commit.",
  },
  {
    q: "What do we need to provide?",
    a: "Access to the people who actually do the work, and a decision-maker who can answer questions within a day or two. Projects slow down over approvals far more often than over engineering.",
  },
  {
    q: "Can we stop after Discovery?",
    a: "Yes, and some clients do. You keep the process maps, the scope and the fixed-price estimate. It is deliberately useful enough to take to another firm.",
  },
  {
    q: "How do you handle changes mid-project?",
    a: "We re-scope openly. Small adjustments inside a cycle are normal and absorbed; anything that moves the timeline or cost gets written down and agreed before we build it.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Every project includes all seven stages."
        intro="No surprise line items halfway through, and no stage quietly dropped to hit a number. Each one is scoped and priced before we start, and you see working software throughout."
        media={
          <Photo
            name="presentation"
            alt="A team being walked through a project presentation"
            ratio="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        }
      />

      <Section>
        <div className="grid gap-20 md:gap-24">
          {projectIncludes.map((stage, i) => {
            const Icon = stageIcons[stage.icon];
            return (
              <article
                key={stage.title}
                className="grid gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <Reveal className={i % 2 === 1 ? "lg:order-2" : undefined}>
                  <Photo
                    name={stage.image}
                    alt={stage.imageAlt}
                    ratio="aspect-[4/3]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </Reveal>

                <div className="flex flex-col justify-center">
                  <Reveal delay={80}>
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-[0.85rem] font-bold tabular-nums text-muted">
                        Stage {String(i + 1).padStart(2, "0")} of 07
                      </span>
                    </div>
                  </Reveal>

                  <Reveal delay={130}>
                    <h2 className="mt-6 text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-[1.12] tracking-[-0.025em]">
                      {stage.title}
                    </h2>
                    <p className="mt-3 text-[1.15rem] font-semibold text-accent">
                      {stage.body}
                    </p>
                  </Reveal>

                  <Reveal delay={190}>
                    <p className="mt-5 max-w-[54ch] text-[1.03rem] leading-[1.75] text-muted">
                      {stage.detail}
                    </p>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tinted>
        <SectionHeading
          eyebrow="What it costs"
          heading="Fixed price, agreed before we build."
          intro="Discovery is priced on its own and produces a scope precise enough to quote the rest with confidence. If the estimate afterwards is still a wide range, the discovery did not do its job."
        />
        <div className="mt-14">
          <Faq items={faqs} heading="Common questions" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
