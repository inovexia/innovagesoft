import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";
import { company } from "@/lib/site";

export function CallToAction() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[min(100%-2rem,76rem)]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-surface px-7 py-16 text-center md:px-16 md:py-24">
            {/* Soft accent wash, echoing the hero bands without the canvas. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-accent opacity-[0.14] blur-[90px]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-accent opacity-[0.12] blur-[90px]"
            />

            <div className="relative">
              <h2 className="mx-auto max-w-[20ch] text-[clamp(1.9rem,4vw,3.1rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
                Let&rsquo;s talk about what you&rsquo;re trying to build.
              </h2>
              <p className="mx-auto mt-6 max-w-[52ch] text-[1.05rem] leading-[1.65] text-muted">
                A 30-minute call, no pitch deck. We&rsquo;ll ask about your business,
                tell you honestly whether custom software is the right move, and if it
                is, what it would take.
              </p>

              <div className="mt-10 flex flex-col items-center gap-5">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px"
                >
                  Get in Touch
                  <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
                <p className="text-[0.95rem] text-muted">
                  Or email{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="font-bold text-text underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-200 hover:text-accent"
                  >
                    {company.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
