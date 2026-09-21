import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Solutions } from "@/components/sections/Solutions";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Customers } from "@/components/sections/Customers";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Sitecare } from "@/components/sections/Sitecare";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Solutions />
      <WhyUs />
      <Process />
      <Customers />
      <Testimonials />
      <Stats />
      <About />
      <Sitecare />
      <CallToAction />
      <Contact />
    </>
  );
}
