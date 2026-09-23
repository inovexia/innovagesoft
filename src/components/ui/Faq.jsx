import { ChevronDownIcon } from "./icons";
import { Reveal } from "./Reveal";

/**
 * Native <details> rather than a JS accordion: it works before hydration,
 * is keyboard accessible for free, and the browser handles the open state.
 */
export function Faq({ items, heading = "Common questions" }) {
  if (!items?.length) return null;

  return (
    <div>
      <Reveal>
        <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold tracking-[-0.025em]">
          {heading}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-3">
        {items.map((item, i) => (
          <Reveal key={item.q} delay={i * 60}>
            <details className="group rounded-2xl border border-hairline bg-surface px-6 py-5 transition-colors duration-200 open:bg-surface-strong">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-4 max-w-[68ch] leading-[1.7] text-muted">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
