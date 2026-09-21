import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";
import { hero } from "@/lib/site";
import { HeroMesh } from "./HeroMesh";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-dvh items-center overflow-hidden"
    >
      <HeroMesh />

      <div className="mx-auto w-[min(100%-2rem,76rem)] pb-56 pt-32 md:pb-28 md:pt-36">
      

        <Reveal delay={80}>
          <h1 className="max-w-[16ch] text-[clamp(2.2rem,6.2vw,4.6rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-[52ch] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.55] text-muted">
            {hero.sub}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3.5">
            <a
              href={hero.primary.href}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[0.95rem] font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px"
            >
              {hero.primary.label}
              <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href={hero.secondary.href}
              className="inline-flex items-center rounded-full border border-[color-mix(in_srgb,var(--text)_25%,transparent)] px-7 py-[0.95rem] font-bold text-text transition-transform duration-200 hover:-translate-y-px"
            >
              {hero.secondary.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
