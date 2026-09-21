import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PlaceholderBadge } from "@/components/ui/PlaceholderBadge";
import { showPlaceholders, testimonials } from "@/lib/site";

export function Testimonials() {
  const shown = testimonials.filter((t) => showPlaceholders || !t.placeholder);
  if (shown.length === 0) return null;

  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="What customers say"
        heading="Don't take our word for it."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-3">
        {shown.map((t, i) => (
          <Reveal key={t.company} delay={i * 70}>
            <figure className="flex h-full flex-col rounded-3xl border border-hairline bg-surface p-7 md:p-8">
              {/* Decorative quote mark, drawn rather than typed so it can't be read aloud. */}
              <svg
                viewBox="0 0 32 24"
                className="h-6 w-8 text-accent"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13 24V13.6C13 6.4 17.3 1.6 25 0l1.4 3.4C22 4.9 19.6 7.5 19.2 11H25v13h-12zm-13 0V13.6C0 6.4 4.3 1.6 12 0l1.4 3.4C9 4.9 6.6 7.5 6.2 11H12v13H0z" />
              </svg>

              <blockquote className="mt-6 flex-1 text-[1.05rem] leading-[1.6]">
                {t.quote}
              </blockquote>

              <figcaption className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-hairline pt-6">
                <span>
                  <span className="block font-extrabold">{t.name}</span>
                  <span className="block text-[0.9rem] text-muted">
                    {t.title}, {t.company}
                  </span>
                </span>
                {t.placeholder ? <PlaceholderBadge className="ml-auto" /> : null}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
