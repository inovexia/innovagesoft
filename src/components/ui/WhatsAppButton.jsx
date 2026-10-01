import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/site";

/**
 * Floating WhatsApp entry point, present on every page.
 *
 * Sits bottom-right above the fold line. `wa.me` opens the desktop app or
 * web client on desktop and the native app on mobile, with the message
 * pre-filled so the visitor does not have to open with "hi".
 */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:-translate-y-0.5 sm:pr-5"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-[0.92rem] font-bold sm:inline">WhatsApp</span>
    </a>
  );
}

/**
 * Inline variant for the contact page and CTA blocks.
 *
 * Filled rather than outlined: WhatsApp green as text fails contrast on
 * white, and Tailwind's `dark:` keys off prefers-color-scheme, which would
 * ignore our data-theme override.
 */
export function WhatsAppLink({ className = "", label = "Chat on WhatsApp" }) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white transition-transform duration-200 hover:-translate-y-px ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </a>
  );
}
