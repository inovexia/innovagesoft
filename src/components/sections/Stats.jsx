import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { showPlaceholders, stats } from "@/lib/site";

export function Stats() {
  const shown = stats.filter((s) => showPlaceholders || !s.placeholder);

  return (
    <section
      aria-label="Innovage by the numbers"
      className="border-y border-hairline bg-surface py-16 md:py-20"
    >
      <dl className="mx-auto grid w-[min(100%-2rem,76rem)] grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {shown.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 70}>
            <div className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold leading-none tracking-[-0.04em] text-accent tabular-nums">
                  {stat.value}
                </span>
                <span className="mt-3 block text-[0.95rem] font-semibold text-muted">
                  {stat.label}
                </span>
                {stat.placeholder ? (
                  <PlaceholderBadge className="mt-3" />
                ) : null}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
