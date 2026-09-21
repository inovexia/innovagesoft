"use client";

import { useEffect, useRef } from "react";

/**
 * Fades and lifts its children into view once, then stops observing.
 * The hidden state lives in CSS under `.js` (see globals.css), so this only
 * ever has to flip one attribute — and a no-JS visitor sees everything
 * already in place.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.delay]      Stagger within a group, in milliseconds.
 * @param {string} [props.className]
 * @param {React.ElementType} [props.as]
 * @param {string} [props.rootMargin] How far into the viewport before it fires.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  rootMargin = "0px 0px -12% 0px",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.setAttribute("data-reveal-visible", "true");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { rootMargin, threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
