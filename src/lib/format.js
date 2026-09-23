/**
 * Dates are rendered with an explicit UTC timezone and a fixed locale.
 * Without both, the server formats in its own locale and zone, the browser
 * formats in the visitor's, and React reports a hydration mismatch.
 */
export function formatDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
