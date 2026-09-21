/**
 * Text wordmark — the live site's 140×34 PNG is too low-resolution to carry
 * over (reference/content-audit.md §8). Set in the site typeface so it stays
 * crisp at any size and follows the theme tokens.
 */
export function Wordmark({ className = "" }) {
  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className="text-text">innovage</span>
      <span className="text-accent">soft</span>
    </span>
  );
}
