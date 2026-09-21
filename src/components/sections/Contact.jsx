import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import { company, nextSteps } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { address } = company;

  return (
    <Section id="contact" tinted>
      <Reveal>
        <h2 className="text-[clamp(1.85rem,3.6vw,2.9rem)] font-extrabold leading-[1.1] tracking-[-0.025em]">
          Get in touch
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <Reveal delay={80}>
          <div className="rounded-3xl border border-hairline bg-bg p-7 md:p-9">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="grid gap-8">
            <ul className="grid gap-5">
              <ContactRow icon={MailIcon} label="Email">
                <a
                  href={`mailto:${company.email}`}
                  className="font-bold transition-colors duration-200 hover:text-accent"
                >
                  {company.email}
                </a>
              </ContactRow>

              <ContactRow icon={PhoneIcon} label="Phone">
                <a
                  href={`tel:${company.phoneHref}`}
                  className="font-bold transition-colors duration-200 hover:text-accent"
                >
                  {company.phone}
                </a>
              </ContactRow>

              <ContactRow icon={PinIcon} label="Address">
                <address className="font-bold not-italic leading-relaxed">
                  {address.street}
                  <br />
                  {address.city}, {address.region} {address.postalCode}
                </address>
              </ContactRow>

              <ContactRow icon={ClockIcon} label="Response time">
                <span className="font-bold">{company.responseTime}</span>
              </ContactRow>
            </ul>

            <div className="rounded-3xl border border-hairline bg-bg p-7">
              <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted">
                What happens next
              </h3>
              <ol className="mt-5 grid gap-4">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent-soft text-[0.82rem] font-extrabold tabular-nums text-accent">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-[0.95rem] leading-snug text-muted">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function ContactRow({ icon: Icon, label, children }) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
        <Icon className="h-[22px] w-[22px]" />
      </span>
      <span>
        <span className="block text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted">
          {label}
        </span>
        <span className="mt-1 block">{children}</span>
      </span>
    </li>
  );
}
