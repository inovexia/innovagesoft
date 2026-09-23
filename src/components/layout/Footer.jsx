import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { ExternalIcon } from "@/components/ui/icons";
import { company, footerColumns } from "@/lib/site";

export function Footer() {
  const { address } = company;

  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="mx-auto w-[min(100%-2rem,82rem)] py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-8">
          <div>
            <Wordmark className="text-[1.25rem] font-extrabold tracking-[-0.03em]" />
            <p className="mt-4 max-w-[26ch] text-[0.95rem] leading-relaxed text-muted">
              {company.tagline}
            </p>
            <address className="mt-6 space-y-1 text-[0.9rem] not-italic leading-relaxed text-muted">
              <div>{address.street}</div>
              <div>
                {address.city}, {address.region} {address.postalCode}
              </div>
              <div>{company.hours}</div>
            </address>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-muted">
                {col.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[0.93rem] font-medium transition-colors duration-200 hover:text-accent"
                      >
                        {link.label}
                        <ExternalIcon className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[0.93rem] font-medium transition-colors duration-200 hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-8 text-[0.88rem] text-muted md:flex-row md:items-center md:justify-between">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <a
              href={`tel:${company.phoneHref}`}
              className="font-medium transition-colors duration-200 hover:text-accent"
            >
              {company.phone}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${company.email}`}
              className="font-medium transition-colors duration-200 hover:text-accent"
            >
              {company.email}
            </a>
          </p>
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.{" "}
            <span aria-hidden="true">·</span> Made in Canada{" "}
            <span role="img" aria-label="Canada">🇨🇦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
