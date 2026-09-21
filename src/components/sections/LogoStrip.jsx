import { clients } from "@/lib/site";

/**
 * Client strip. The live site's client logos are low-resolution PNGs
 * (reference/content-audit.md §8), so this sets the names as type until
 * proper SVG marks exist — which also keeps the row crisp and themeable.
 *
 * The list is duplicated so the marquee can loop seamlessly at -50%.
 */
export function LogoStrip() {
  const loop = [...clients, ...clients];

  return (
    <section
      aria-label="Clients"
      className="border-y border-hairline bg-surface py-12"
    >
      <p className="mb-8 text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] text-muted">
        Trusted by businesses across Canada
      </p>

      <div className="marquee relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="marquee-track flex w-max items-center gap-14 px-7">
          {loop.map((client, i) => (
            <li
              key={`${client.name}-${i}`}
              aria-hidden={i >= clients.length ? "true" : undefined}
              className="whitespace-nowrap text-[1.05rem] font-bold tracking-[-0.01em] text-muted transition-colors duration-300 hover:text-text"
            >
              {client.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
