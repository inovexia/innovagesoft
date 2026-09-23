import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SolutionArt } from "@/components/ui/SolutionArt";
import { ArrowRightIcon } from "@/components/ui/icons";
import { services } from "@/lib/site";

/** Maps a service slug to the diagram drawn for it. */
const artFor = {
  "custom-software": "custom-software",
  "saas-development": "custom-software",
  "web-mobile-apps": "web",
  "ai-automation": "automation",
};

export function ServicesGrid({ tinted = false, heading, eyebrow, intro }) {
  return (
    <Section id="services" tinted={tinted}>
      <SectionHeading
        eyebrow={eyebrow ?? "What we build"}
        heading={heading ?? "Software that fits your business, not the other way around."}
        intro={
          intro ??
          "Off-the-shelf tools make you change your process to match theirs. We build around the way your team already works, then make it faster."
        }
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 70}>
            <Link
              href={`/services/${service.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-hairline bg-surface p-7 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] hover:bg-surface-strong md:p-9"
            >
              <SolutionArt
                id={artFor[service.slug]}
                className="h-[76px] w-[120px] text-muted transition-colors duration-300 group-hover:text-text"
              />

              <h3 className="mt-7 text-[1.3rem] font-extrabold tracking-[-0.02em]">
                {service.title}
              </h3>
              <p className="mt-3 max-w-[54ch] flex-1 leading-[1.65] text-muted">
                {service.intro}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {service.stack.slice(0, 4).map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-accent-soft px-3 py-1 text-[0.78rem] font-bold text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <span className="mt-7 inline-flex items-center gap-2 font-bold text-accent">
                Explore {service.navLabel}
                <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
