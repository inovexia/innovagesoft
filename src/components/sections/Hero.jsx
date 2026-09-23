import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { clients } from "@/lib/site";
import { HeroMesh } from "./HeroMesh";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh items-center overflow-hidden">
      <HeroMesh />

      <div className="mx-auto grid w-[min(100%-2rem,82rem)] items-center gap-14 pb-24 pt-32 lg:grid-cols-[1.02fr_1fr] lg:gap-16 lg:pb-28 lg:pt-36">
      
        <div>
         
          <Reveal delay={80}>
            <h1 className="max-w-[15ch] text-[clamp(2.1rem,5.2vw,4.1rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
              Custom software built around how your business actually works.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[50ch] text-[clamp(1.02rem,1.5vw,1.22rem)] leading-[1.55] text-muted">
              We design and build web apps, customer portals, SaaS platforms and
              mobile apps for growing businesses across Canada — and stay with you
              long after launch.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[0.95rem] font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px"
              >
                Get in Touch
                <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center rounded-full border border-[color-mix(in_srgb,var(--text)_25%,transparent)] px-7 py-[0.95rem] font-bold text-text transition-transform duration-200 hover:-translate-y-px"
              >
                See our work
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 border-t border-hairline pt-6">
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-muted">
                Trusted by businesses across Canada
              </p>
              <ul className="mt-3.5 flex flex-wrap items-center gap-x-7 gap-y-2">
                {clients.map((name) => (
                  <li
                    key={name}
                    className="text-[0.97rem] font-bold tracking-[-0.01em] text-muted"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* ── Product visual ─────────────────────────────────────────── */}
        {/* Narrow screens get the dashboard alone; the phone and automation
            chip inside it drop out at their own breakpoints. */}
        <Reveal delay={200} className="px-2 sm:px-8 lg:px-0">
          <ProductVisual />
        </Reveal>
      </div>
    </section>
  );
}
