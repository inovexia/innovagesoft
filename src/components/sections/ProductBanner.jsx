import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { ArrowRightIcon } from "@/components/ui/icons";
import { DashboardScreen } from "@/components/teckhub/screens";
import { highlights, product } from "@/lib/teckhub";

/**
 * Homepage introduction to TeckHub360. Sits after the services grid: services
 * establish what we do for clients, this shows what we've built and sell.
 */
export function ProductBanner() {
  return (
    <section
      aria-labelledby="product-banner-heading"
      className="relative isolate overflow-hidden border-y border-hairline bg-surface py-24 md:py-28"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-accent opacity-[0.14] blur-[110px]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-32 h-[26rem] w-[26rem] rounded-full bg-accent opacity-[0.1] blur-[110px]"
      />

      <div className="relative mx-auto grid w-[min(100%-2rem,82rem)] items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>Our own product</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <h2
              id="product-banner-heading"
              className="mt-5 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.06] tracking-[-0.03em]"
            >
              {product.name}
            </h2>
            <p className="mt-3 max-w-[22ch] text-[clamp(1.1rem,2vw,1.4rem)] font-bold leading-[1.25] text-accent">
              {product.tagline}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-[52ch] text-[1.05rem] leading-[1.65] text-muted">
              {product.shortPitch}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.label}>
                  <dt className="sr-only">{item.label}</dt>
                  <dd>
                    <span className="block text-[1.5rem] font-extrabold leading-none tracking-[-0.03em] text-accent">
                      {item.value}
                    </span>
                    <span className="mt-2 block text-[0.84rem] font-semibold leading-snug text-muted">
                      {item.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/products/teckhub360"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[0.9rem] font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px"
              >
                Explore {product.name}
                <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={product.demoHref}
                className="inline-flex items-center rounded-full border border-[color-mix(in_srgb,var(--text)_25%,transparent)] px-7 py-[0.9rem] font-bold transition-transform duration-200 hover:-translate-y-px"
              >
                Book a demo
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <DashboardScreen />
        </Reveal>
      </div>
    </section>
  );
}
