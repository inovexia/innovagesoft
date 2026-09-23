import { PageHero } from "@/components/ui/PageHero";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProjectIncludes } from "@/components/sections/ProjectIncludes";
import { Sitecare } from "@/components/sections/Sitecare";
import { CtaBand } from "@/components/ui/CtaBand";

export const metadata = {
  title: "Services",
  description:
    "Custom software, SaaS product development, web and mobile apps, and AI and automation — built for Canadian businesses by a senior in-house team.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Four things we do, and do properly."
        intro="We are deliberately not a full-service agency. These are the areas we have shipped repeatedly for Canadian businesses, and the ones we will take responsibility for end to end."
        media={<ProductVisual className="px-2 sm:px-8 lg:px-0" />}
      />

      <ServicesGrid
        eyebrow="What we build"
        heading="Pick the shape of your problem."
        intro="Most engagements start in one of these four and grow into another. The delivery process is identical whichever door you come in through."
      />

      <ProjectIncludes tinted />
      <Sitecare tinted={false} />
      <CtaBand />
    </>
  );
}
