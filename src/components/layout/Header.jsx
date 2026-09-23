"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { nav, navCta } from "@/lib/site";
import { Wordmark } from "./Wordmark";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Frost the header once the page starts moving under it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Any navigation closes whatever was open. Adjusting state during render
     rather than in an effect: this is React's documented pattern for resetting
     on a changed input, it avoids the extra render pass an effect would cost,
     and unlike an onClick handler it also covers browser back/forward. */
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpenDropdown(null);
      setMenuOpen(false);
    };
    const onPointerDown = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setOpenDropdown(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  // Don't let the page scroll behind the open mobile panel.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || menuOpen
          ? "border-b border-hairline bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-[min(100%-2rem,82rem)] items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 rounded-md text-[1.15rem] font-extrabold tracking-[-0.03em]"
          aria-label="Innovage — home"
        >
          <Wordmark />
        </Link>

        {/* ── Desktop nav ────────────────────────────────────────────── */}
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                ref={openDropdown === item.href ? dropdownRef : null}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  aria-expanded={openDropdown === item.href}
                  onClick={() => setOpenDropdown(null)}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-[0.93rem] font-semibold transition-colors duration-200 ${
                    isActive(item.href) ? "text-text" : "text-muted hover:text-text"
                  }`}
                >
                  {item.label}
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openDropdown === item.href ? "rotate-180" : ""
                    }`}
                  />
                </Link>

                <div
                  className={`absolute left-1/2 top-full w-[21rem] -translate-x-1/2 pt-3 transition-[opacity,transform] duration-200 ${
                    openDropdown === item.href
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <ul className="overflow-hidden rounded-2xl border border-hairline bg-[color-mix(in_srgb,var(--bg)_95%,transparent)] p-2 shadow-[0_24px_60px_-20px_rgba(23,18,43,0.3)] backdrop-blur-xl">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-surface-strong"
                        >
                          <span className="block text-[0.92rem] font-bold">
                            {child.label}
                          </span>
                          <span className="mt-0.5 block text-[0.81rem] leading-snug text-muted">
                            {child.blurb}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-[0.93rem] font-semibold transition-colors duration-200 ${
                  isActive(item.href) ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link
            href={navCta.href}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-[0.93rem] font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px sm:inline-block"
          >
            {navCta.label}
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-text transition-colors duration-200 hover:bg-surface-strong xl:hidden"
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile panel ─────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-hairline bg-[color-mix(in_srgb,var(--bg)_97%,transparent)] backdrop-blur-xl xl:hidden"
      >
        <nav className="mx-auto w-[min(100%-2rem,82rem)] py-6" aria-label="Mobile">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-hairline py-3 first:pt-0">
              <Link
                href={item.href}
                className={`block py-1.5 font-bold transition-colors duration-200 ${
                  isActive(item.href) ? "text-accent" : "hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
              {item.children ? (
                <ul className="mt-1 grid gap-0.5 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block py-2 text-[0.93rem] font-semibold text-muted transition-colors duration-200 hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}

          <Link
            href={navCta.href}
            className="mt-6 block rounded-full bg-accent px-5 py-3.5 text-center font-bold text-btn-text"
          >
            {navCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
