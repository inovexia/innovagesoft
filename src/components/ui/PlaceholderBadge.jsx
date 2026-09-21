/**
 * Marks sample content that has to be replaced before launch. Deliberately
 * visible rather than a code comment — reference/content-audit.md §2 records
 * that the live site has been publishing fabricated testimonials, and the
 * only reliable guard against repeating that is making it obvious on screen.
 */
export function PlaceholderBadge({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-dashed border-[color-mix(in_srgb,var(--text)_35%,transparent)] px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-muted ${className}`}
      title="Sample content — replace before launch"
    >
      Sample
    </span>
  );
}
