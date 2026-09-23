import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { nav } from "@/lib/site";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-dvh w-[min(100%-2rem,52rem)] flex-col justify-center py-32">
      <p className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-accent">
        404
      </p>
      <h1 className="mt-5 text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
        We can&rsquo;t find that page.
      </h1>
      <p className="mt-5 max-w-[48ch] text-[1.05rem] leading-[1.65] text-muted">
        It may have moved during our site rebuild. Here is where most people are
        heading.
      </p>

      <ul className="mt-10 flex flex-wrap gap-2.5">
        {nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-block rounded-full border border-hairline bg-surface px-5 py-2.5 font-semibold transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--accent)_40%,transparent)] hover:text-accent"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px"
      >
        Get in Touch
        <ArrowRightIcon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:translate-x-0.5" />
      </Link>
    </section>
  );
}
