"use client";

import { MoonIcon, SunIcon } from "./icons";

/**
 * Reads and writes the same `data-theme` attribute the head script sets, so
 * the two never disagree. Which icon shows is decided in CSS (`.only-light` /
 * `.only-dark`) rather than in React state — that keeps the server render
 * correct for both modes and avoids an icon flash on hydration.
 */
export function ThemeToggle({ className = "" }) {
  const toggle = () => {
    const root = document.documentElement;
    const stored = root.dataset.theme;
    const current =
      stored === "light" || stored === "dark"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or blocked storage — the choice just won't persist.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch colour theme"
      title="Switch colour theme"
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-[color-mix(in_srgb,var(--bg)_70%,transparent)] text-text backdrop-blur-md transition-colors duration-200 hover:bg-surface-strong ${className}`}
    >
      <SunIcon className="only-dark h-[18px] w-[18px]" />
      <MoonIcon className="only-light h-[18px] w-[18px]" />
    </button>
  );
}
