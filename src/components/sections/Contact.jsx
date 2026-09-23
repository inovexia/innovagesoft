import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { WhatsAppLink } from "@/components/ui/WhatsAppButton";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";
import { company, nextSteps } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export function Contact({ tinted = false }) {
  const { address } = company;

  return (
    <Section id="contact" tinted={tinted}>
      <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <Reveal>
          <div className="rounded-3xl border border-hairline bg-surface p-7 md:p-9">
            <h2 className="text-[1.3rem] font-extrabold tracking-[-0.02em]">
              Tell us about your project
            </h2>
            <p className="mt-2 text-[0.97rem] leading-relaxed text-muted">
              The more you can tell us up front, the more useful our first reply
              will be.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-8">
            {/* Fastest route first — most enquiries prefer it to a form. */}
            <div className="rounded-3xl border border-hairline bg-surface p-7">
              <h2 className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted">
                Prefer to message?
              </h2>
              <p className="mt-3 leading-[1.65] text-muted">
                WhatsApp is the quickest way to reach us during business hours.
              </p>
              <WhatsAppLink className="mt-5 w-full justify-center" />
            </div>

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

              <ContactRow icon={ClockIcon} label="Hours">
                <span className="font-bold">{company.hours}</span>
                <span className="mt-1 block text-[0.9rem] font-medium text-muted">
                  Typical reply: {company.responseTime.toLowerCase()}
                </span>
              </ContactRow>
            </ul>

            <div className="rounded-3xl border border-hairline bg-surface p-7">
              <h2 className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-muted">
                What happens next
              </h2>
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
