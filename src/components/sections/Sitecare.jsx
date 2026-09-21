import { Reveal } from "@/components/ui/Reveal";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CheckIcon } from "@/components/ui/icons";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { sitecareIncludes } from "@/lib/site";

export function Sitecare() {
  return (
    <Section id="sitecare" tinted>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>Ongoing website care</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 max-w-[16ch] text-[clamp(1.85rem,3.6vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
              A website isn&rsquo;t finished at launch.
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[50ch] text-[1.05rem] leading-[1.7] text-muted">
              Plugins go out of date, security gaps appear, pages slow down and forms
              quietly stop working. Sitecare handles all of it every month so you
              never have to think about it.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 rounded-2xl border border-hairline bg-bg p-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted">
                  Plans
                </p>
                {/* content.md §11 leaves the tiers and price unset. */}
                <PlaceholderBadge />
              </div>
              <p className="mt-2 font-bold">
                Essential · Standard · Premium
              </p>
              <a
                href="#contact"
                className="mt-5 inline-block rounded-full bg-accent px-6 py-3 font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px"
              >
                See Sitecare plans
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="rounded-3xl border border-hairline bg-bg p-7 md:p-9">
            <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted">
              What&rsquo;s included
            </h3>
            <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {sitecareIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                    <CheckIcon className="h-3 w-3" strokeWidth={2.6} />
                  </span>
                  <span className="text-[0.97rem] leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
