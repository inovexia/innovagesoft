"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "@/components/ui/icons";
import { nav, solutionHref, solutions } from "@/lib/site";
import { Wordmark } from "./Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef(null);

  // Swap the header to its frosted state once the hero starts moving past it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes whichever surface is open; a click outside closes the dropdown.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setSolutionsOpen(false);
      setMenuOpen(false);
    };
    const onPointerDown = (e) => {
      if (!solutionsRef.current?.contains(e.target)) {
        setSolutionsOpen(false);
      }
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

  const closeAll = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || menuOpen
          ? "border-b border-hairline bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-[min(100%-2rem,76rem)] items-center justify-between gap-6">
        <Link
          href="#top"
          onClick={closeAll}
          className="rounded-md text-[1.15rem] font-extrabold tracking-[-0.03em]"
          aria-label="Innovage — home"
        >
          <Wordmark />
        </Link>

        {/* ── Desktop nav ────────────────────────────────────────────── */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <NavLink href={nav.links[0].href}>{nav.links[0].label}</NavLink>

          <div
            ref={solutionsRef}
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              aria-expanded={solutionsOpen}
              aria-controls="solutions-menu"
              onClick={() => setSolutionsOpen((v) => !v)}
              className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.95rem] font-semibold text-muted transition-colors duration-200 hover:text-text"
            >
              Solutions
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-300 ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="solutions-menu"
              className={`absolute left-1/2 top-full w-[21rem] -translate-x-1/2 pt-3 transition-[opacity,transform] duration-200 ${
                solutionsOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              <ul className="overflow-hidden rounded-2xl border border-hairline bg-[color-mix(in_srgb,var(--bg)_94%,transparent)] p-2 shadow-[0_24px_60px_-20px_rgba(23,18,43,0.28)] backdrop-blur-xl">
                {solutions.map((s) => (
                  <li key={s.id}>
                    <a
                      href={solutionHref(s.id)}
                      onClick={closeAll}
                      className="block rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-surface-strong"
                    >
                      <span className="block text-[0.93rem] font-bold">
                        {s.navLabel}
                      </span>
                      <span className="mt-0.5 block text-[0.82rem] leading-snug text-muted">
                        {s.blurb}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <NavLink href={nav.links[1].href}>{nav.links[1].label}</NavLink>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={nav.cta.href}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-[0.95rem] font-bold text-btn-text transition-transform duration-200 hover:-translate-y-px sm:inline-block"
          >
            {nav.cta.label}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-text transition-colors duration-200 hover:bg-surface-strong lg:hidden"
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile panel ─────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-hairline bg-[color-mix(in_srgb,var(--bg)_96%,transparent)] backdrop-blur-xl lg:hidden"
      >
        <nav
          className="mx-auto w-[min(100%-2rem,76rem)] py-6"
          aria-label="Mobile"
        >
          <p className="px-1 pb-2 text-[0.75rem] font-bold uppercase tracking-[0.14em] text-muted">
            Solutions
          </p>
          <ul className="grid gap-1 pb-4">
            {solutions.map((s) => (
              <li key={s.id}>
                <a
                  href={solutionHref(s.id)}
                  onClick={closeAll}
                  className="block rounded-xl px-1 py-2.5 font-semibold transition-colors duration-200 hover:text-accent"
                >
                  {s.navLabel}
                </a>
              </li>
            ))}
          </ul>

          <ul className="grid gap-1 border-t border-hairline pt-4">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={closeAll}
                  className="block rounded-xl px-1 py-2.5 font-semibold transition-colors duration-200 hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={nav.cta.href}
            onClick={closeAll}
            className="mt-5 block rounded-full bg-accent px-5 py-3.5 text-center font-bold text-btn-text"
          >
            {nav.cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-full px-3.5 py-2 text-[0.95rem] font-semibold text-muted transition-colors duration-200 hover:text-text"
    >
      {children}
    </a>
  );
}
