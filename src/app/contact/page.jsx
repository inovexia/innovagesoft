import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/ui/Faq";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Contact",
  description:
    "Talk to Innovage about custom software, SaaS, web and mobile apps or automation. Mississauga, Ontario — we reply within one business day.",
  alternates: { canonical: "/contact" },
};

const faqs = [
  {
    q: "What should I have ready before we talk?",
    a: "Nothing formal. A description of the process that is costing you time is plenty. If you already have a spec or a wireframe, bring it, but we do not need one to have a useful first conversation.",
  },
  {
    q: "Do you charge for the first call?",
    a: "No. The first call is 30 minutes and free, and we will tell you if we think you do not need custom software.",
  },
  {
    q: "Do you work with clients outside Ontario?",
    a: "Yes — across Canada, and occasionally beyond. We work Eastern time, which covers most of the country's business day.",
  },
  {
    q: "What size projects do you take?",
    a: "Most engagements start between $25k and $150k. Below that a smaller shop is usually a better fit, and we are happy to point you at one.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about what you're trying to build."
        intro="A 30-minute call, no pitch deck. We'll ask about your business, tell you honestly whether custom software is the right move, and if it is, what it would take."
        media={
          <Photo
            name="office-space"
            alt="The Innovage office, with desks beside floor-to-ceiling windows"
            ratio="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        }
      />

      <Contact />

      <Section tinted>
        <Faq items={faqs} heading="Before you write" />
      </Section>
    </>
  );
}
