import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { stageIcons } from "@/components/ui/icons";
import { projectIncludes } from "@/lib/site";

/**
 * The seven delivery stages, as a compact grid. The Process page renders the
 * same data at full detail with photography; this is the homepage summary.
 */
export function ProjectIncludes({ tinted = false }) {
  return (
    <Section id="includes" tinted={tinted}>
      <SectionHeading
        eyebrow="Every project includes"
        heading="Seven stages, on every engagement."
        intro="No surprise line items halfway through. Discovery to support, each stage is scoped and priced before we start."
      />

      <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projectIncludes.map((stage, i) => {
          const Icon = stageIcons[stage.icon];
          return (
            <Reveal
              key={stage.title}
              as="li"
              delay={i * 60}
              /* Seven into a four-column grid leaves a gap; let the last
                 card span it rather than stranding it alone. */
              className={i === projectIncludes.length - 1 ? "lg:col-span-2" : undefined}
            >
              <div className="flex h-full flex-col rounded-2xl border border-hairline bg-surface p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)]">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[0.78rem] font-bold tabular-nums text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 text-[1.1rem] font-extrabold tracking-[-0.02em]">
                  {stage.title}
                </h3>
                <p className="mt-2 leading-[1.6] text-muted">{stage.body}</p>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
