import { PageHero } from "@/components/ui/PageHero";
import { Photo } from "@/components/ui/Photo";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = {
  title: "Industries",
  description:
    "Custom software for retail, logistics, manufacturing, healthcare, professional services and SaaS companies across Canada.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="We've seen your problem before."
        intro="Ten years of building for Canadian businesses means we usually arrive already knowing the shape of the problem — and where the expensive surprises tend to hide."
        media={
          <Photo
            name="manufacturing"
            alt="An engineer operating equipment on a production line"
            ratio="aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority
          />
        }
      />

      <IndustriesGrid
        eyebrow="Who we work with"
        heading="Six sectors we know well."
        intro="We are not limited to these, but this is where we have the most pattern recognition — and where discovery moves fastest because we already know the right questions."
      />

      <CaseStudyGrid
        tinted
        limit={3}
        eyebrow="Proof"
        heading="What that looks like in practice."
      />

      <CtaBand heading="Not sure your sector fits?" body="Tell us what your team spends its week doing. If we have not built for your industry before, we will say so — and tell you whether that matters." />
    </>
  );
}
