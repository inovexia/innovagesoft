import { Reveal } from "@/components/ui/Reveal";
import { Section, Eyebrow } from "@/components/ui/Section";
import { MapleIcon, PinIcon, TeamIcon } from "@/components/ui/icons";
import { company } from "@/lib/site";

const facts = [
  { icon: PinIcon, label: "Based in", value: "Mississauga, Ontario" },
  { icon: TeamIcon, label: "Team", value: "Small and senior by design" },
  { icon: MapleIcon, label: "Hosting", value: "Canadian regions available" },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>About us</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 max-w-[20ch] text-[clamp(1.85rem,3.6vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
              A small senior team that builds like owners.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-[56ch] text-[1.05rem] leading-[1.7] text-muted">
              We&rsquo;re {company.name}, a team of designers and engineers based in
              Mississauga, Ontario. For over ten years we&rsquo;ve helped growing
              businesses across Canada replace slow, manual work with software that
              just works.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-5 max-w-[56ch] text-[1.05rem] leading-[1.7] text-muted">
              We started {company.name} because we kept seeing businesses stuck
              between off-the-shelf tools that didn&rsquo;t fit and big agencies that
              didn&rsquo;t listen. We keep the team small on purpose. Every project
              gets senior people from the first call to the last deploy, and we only
              take on work we can do well.
            </p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <ul className="grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline">
            {facts.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4 bg-bg p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-[22px] w-[22px]" />
                </span>
                <span>
                  <span className="block text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted">
                    {label}
                  </span>
                  <span className="mt-1 block font-bold">{value}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
