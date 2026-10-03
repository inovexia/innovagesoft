import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";
import { ArrowRightIcon, CheckIcon, productIcons } from "@/components/ui/icons";
import {
  DashboardScreen,
  OcrReviewScreen,
  ChecklistScreen,
  DeadlinesScreen,
} from "@/components/teckhub/screens";
import {
  PipelineTracks,
  RoleDiagram,
  WhiteLabelDiagram,
} from "@/components/teckhub/diagrams";
import {
  audience,
  billing,
  faqs,
  modules,
  ocr,
  product,
  rollingOut,
  security,
  whiteLabel,
} from "@/lib/teckhub";

export const metadata = {
  title: `${product.name} — client portal for Canadian accounting firms`,
  description: product.shortPitch,
  alternates: { canonical: "/products/teckhub360" },
  openGraph: {
    title: `${product.name} by Innovage`,
    description: product.shortPitch,
  },
};

/** Marks capability that is built but not yet on the main release. */
function RollingOut() {
  return (
    <span className="shrink-0 rounded-full bg-warn-soft px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-warn">
      Rolling out
    </span>
  );
}

function Ctas({ className = "" }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link
        href={product.demoHref}
        className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[0.9rem] font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px"
      >
        Book a demo
        <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
      <Link
        href={product.pricingHref}
        className="inline-flex items-center rounded-full border border-[color-mix(in_srgb,var(--text)_25%,transparent)] px-7 py-[0.9rem] font-bold transition-transform duration-200 hover:-translate-y-px"
      >
        Request pricing
      </Link>
    </div>
  );
}

export default function TeckHubPage() {
  return (
    <>
      <PageHero
        title={product.tagline}
        intro={product.positioning}
        media={<DashboardScreen />}
      >
        <Ctas className="mt-9" />
      </PageHero>

      {/* ── Who it's for ─────────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          heading="Built for the firms doing the filing, not for enterprise procurement."
          intro="TeckHub360 came out of building portals for Canadian practices one at a time. It handles both sides of a typical firm's book — incorporated businesses on GST/HST, and individuals on personal returns."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {audience.map((item, i) => {
            const Icon = productIcons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 70}>
                <div className="h-full rounded-3xl border border-hairline bg-surface p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-[1.15rem] font-extrabold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 leading-[1.65] text-muted">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ── Module map ───────────────────────────────────────────────── */}
      <Section tinted>
        <SectionHeading
          heading="Ten modules, one login."
          intro="Everything a practice touches during filing season, in one portal — rather than a document tool, a billing tool, a spreadsheet and an inbox. A demo goes into any of them in depth."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {modules.map((module, i) => {
            const Icon = productIcons[module.icon];
            return (
              <Reveal key={module.title} delay={i * 50}>
                <div className="flex h-full flex-col rounded-2xl border border-hairline bg-bg p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)]">
                  <div className="flex items-start justify-between gap-2">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    {module.shipping === "rolling-out" ? <RollingOut /> : null}
                  </div>
                  <h3 className="mt-5 text-[1.02rem] font-extrabold tracking-[-0.02em]">
                    {module.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-[1.6] text-muted">
                    {module.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ── OCR: the flagship ────────────────────────────────────────── */}
      <Section>
        <Reveal>
          <RollingOut />
        </Reveal>

        <Reveal delay={60}>
          <h2 className="mt-5 max-w-[22ch] text-[clamp(1.85rem,3.6vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
            {ocr.heading}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 max-w-[62ch] text-[1.05rem] leading-[1.7] text-muted">
            {ocr.intro}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-5 max-w-[62ch] border-l-2 border-accent pl-6 text-[1.05rem] leading-[1.7]">
            {ocr.honesty}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-14">
            <OcrReviewScreen />
          </div>
        </Reveal>
      </Section>

      {/* ── Mid-page conversion point ────────────────────────────────── */}
      <section className="pb-24 md:pb-28">
        <div className="mx-auto w-[min(100%-2rem,82rem)]">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-hairline bg-surface p-8 md:flex-row md:items-center md:p-10">
              <div>
                <h2 className="text-[1.35rem] font-extrabold tracking-[-0.02em]">
                  Easier to show than to describe.
                </h2>
                <p className="mt-2 max-w-[54ch] leading-[1.6] text-muted">
                  Bring one of your own filing scenarios and we&rsquo;ll run it
                  through the portal on the call.
                </p>
              </div>
              <Ctas className="shrink-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Filing pipelines ─────────────────────────────────────────── */}
      <Section tinted>
        <SectionHeading
          heading="Two ordered paths, so nothing gets filed out of sequence."
          intro="Each stage unlocks the next, and a partner can see exactly where any client sits without asking the accountant handling it."
        />
        <div className="mt-16">
          <PipelineTracks />
        </div>
      </Section>

      {/* ── Billing ──────────────────────────────────────────────────── */}
      <Section>
        <SectionHeading heading={billing.heading} intro={billing.intro} />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {billing.items.map((item, i) => {
            const Icon = productIcons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 70}>
                <div className="flex h-full flex-col rounded-3xl border border-hairline bg-surface p-7">
                  <div className="flex items-start justify-between gap-2">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent-soft text-accent">
                      <Icon className="h-[22px] w-[22px]" />
                    </span>
                    {item.shipping === "rolling-out" ? <RollingOut /> : null}
                  </div>
                  <h3 className="mt-5 text-[1.1rem] font-extrabold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-[1.6] text-muted">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ── Documents & deadlines ────────────────────────────────────── */}
      <Section tinted>
        <SectionHeading
          heading="Chasing paperwork, without the chasing."
          intro="Clients work from a checklist rather than a reply-all thread, and your team sees every obligation across the whole book in one tracker."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <ChecklistScreen />
          </Reveal>
          <Reveal delay={80}>
            <DeadlinesScreen />
          </Reveal>
        </div>
      </Section>

      {/* ── White-label ──────────────────────────────────────────────── */}
      <Section>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="max-w-[16ch] text-[clamp(1.85rem,3.6vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                {whiteLabel.heading}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-[50ch] text-[1.05rem] leading-[1.7] text-muted">
                {whiteLabel.intro}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ul className="mt-8 grid gap-3.5">
                {whiteLabel.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                      <CheckIcon className="h-3 w-3" strokeWidth={2.6} />
                    </span>
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="rounded-3xl border border-hairline bg-bg p-7 text-text md:p-9">
              <WhiteLabelDiagram className="w-full" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Roles & security ─────────────────────────────────────────── */}
      <Section tinted>
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <div className="rounded-3xl border border-hairline bg-bg p-7 text-text md:p-9">
              <RoleDiagram className="w-full" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="max-w-[18ch] text-[clamp(1.85rem,3.6vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
                Tax documents deserve more than a password.
              </h2>
            </Reveal>

            <div className="mt-9 grid gap-7">
              {security.map((item, i) => {
                const Icon = productIcons[item.icon];
                return (
                  <Reveal key={item.title} delay={160 + i * 60}>
                    <div className="flex gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                        <Icon className="h-[22px] w-[22px]" />
                      </span>
                      <div>
                        <h3 className="text-[1.05rem] font-extrabold tracking-[-0.02em]">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 max-w-[46ch] leading-[1.6] text-muted">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Rolling out soon ─────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          heading="And a good deal more on the way."
          intro="These are in build now. A demo covers where each one sits and what lands first — we would rather tell you that on a call than put a date on a web page."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rollingOut.map((item, i) => {
            const Icon = productIcons[item.icon];
            return (
              <Reveal key={item.title} delay={i * 50}>
                <div className="flex h-full gap-4 rounded-2xl border border-dashed border-[color-mix(in_srgb,var(--text)_22%,transparent)] bg-surface p-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-[1rem] font-extrabold tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[0.9rem] leading-[1.55] text-muted">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tinted>
        <Faq items={faqs} heading={`${product.name} questions`} />
      </Section>

      {/* ── Closing CTA ──────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto w-[min(100%-2rem,82rem)]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-surface px-7 py-16 text-center md:px-16 md:py-24">
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
                  See {product.name} on your own client list.
                </h2>
                <p className="mx-auto mt-6 max-w-[52ch] text-[1.05rem] leading-[1.65] text-muted">
                  A 30-minute walkthrough with one of your real filing scenarios, not
                  a canned demo account. We will tell you honestly whether it fits how
                  your practice already works.
                </p>
                <div className="mt-10 flex justify-center">
                  <Ctas />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
