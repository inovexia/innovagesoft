import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Photo } from "@/components/ui/Photo";
import { iconMap } from "@/components/ui/icons";
import { whyInnovage } from "@/lib/site";

export function WhyInnovage({ tinted = true, image = "dev-desks", imageAlt = "Two engineers working side by side at their desks" }) {
  return (
    <Section id="why-innovage" tinted={tinted}>
      <SectionHeading
        eyebrow="Why Innovage"
        heading="Built by people who stay."
      />

      <div className="mt-16 grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <Reveal>
          <Photo
            name={image}
            alt={imageAlt}
            ratio="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </Reveal>

        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-1 lg:gap-y-8">
          {whyInnovage.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <Reveal key={point.title} delay={i * 70}>
                <div className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-[1.12rem] font-extrabold tracking-[-0.02em]">
                      {point.title}
                    </h3>
                    <p className="mt-2 max-w-[48ch] leading-[1.65] text-muted">
                      {point.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
