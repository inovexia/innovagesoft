import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { iconMap } from "@/components/ui/icons";
import { whyUs } from "@/lib/site";

export function WhyUs() {
  return (
    <Section id="why-us" tinted>
      <SectionHeading eyebrow="Why work with us" heading="Built by people who stay." />

      <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {whyUs.map((point, i) => {
          const Icon = iconMap[point.icon];
          return (
            <Reveal key={point.title} delay={i * 70}>
              <div className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-[1.15rem] font-extrabold tracking-[-0.02em]">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 max-w-[46ch] leading-[1.65] text-muted">
                    {point.body}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
