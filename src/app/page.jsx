import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProductBanner } from "@/components/sections/ProductBanner";
import { ProjectIncludes } from "@/components/sections/ProjectIncludes";
import { WhyInnovage } from "@/components/sections/WhyInnovage";
import { CaseStudyGrid } from "@/components/sections/CaseStudyGrid";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/ui/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProductBanner />
      <ProjectIncludes />
      <WhyInnovage tinted={false} />
      <CaseStudyGrid limit={3} tinted />
      <IndustriesGrid />
      <Stats />
      <Testimonials />
      <CtaBand />
    </>
  );
}
