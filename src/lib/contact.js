import { company } from "./site";

/**
 * The one place the contact form talks to the outside world.
 *
 * reference/content-audit.md §9.6 lists the form backend as an open decision —
 * the live site uses Contact Form 7, which has no equivalent here. Until that
 * call is made, this opens the visitor's mail client with everything they typed
 * already filled in, so the section works today and nothing is silently
 * swallowed.
 *
 * To move to a real backend (Resend, Formspree, a route handler + SMTP),
 * replace the body of this function with a fetch and return the same shape.
 * Nothing else in the UI needs to change.
 *
 * @returns {{ ok: boolean, mode: "mailto" | "api", error?: string }}
 */
export function submitEnquiry(values) {
  const lines = [
    `Name: ${values.name}`,
    `Company: ${values.company || "—"}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "—"}`,
    `Looking to build: ${values.projectType || "—"}`,
    `Rough budget: ${values.budget || "—"}`,
    "",
    values.message,
  ];

  const href =
    `mailto:${company.email}` +
    `?subject=${encodeURIComponent(`Enquiry from ${values.name}`)}` +
    `&body=${encodeURIComponent(lines.join("\n"))}`;

  window.location.href = href;
  return { ok: true, mode: "mailto" };
}
