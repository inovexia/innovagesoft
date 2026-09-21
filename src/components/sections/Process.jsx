import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { process } from "@/lib/site";

export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="How we work"
        heading="Five steps from idea to a product your team relies on."
      />

      <ol className="relative mt-16 grid gap-10 md:gap-0">
        {/* The spine. Sits behind the numbered markers and stops at the last one. */}
        <span
          aria-hidden="true"
          className="absolute left-[23px] top-3 bottom-3 w-px bg-hairline md:left-[27px]"
        />

        {process.map((step, i) => (
          <Reveal key={step.title} as="li" delay={i * 80} className="relative">
            <div className="flex gap-6 md:gap-8 md:pb-14">
              <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-hairline bg-bg text-[0.95rem] font-extrabold tabular-nums text-accent md:h-14 md:w-14 md:text-[1.05rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-2 md:pt-3">
                <h3 className="text-[1.2rem] font-extrabold tracking-[-0.02em] md:text-[1.35rem]">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-[58ch] leading-[1.65] text-muted">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
