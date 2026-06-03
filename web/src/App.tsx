import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { DemoWorkSection } from "@/components/DemoWorkSection";
import { WhoWeHelpSection } from "@/components/WhoWeHelpSection";
import { NeedsEvaluator } from "@/components/NeedsEvaluator";
import { ProcessSection } from "@/components/ProcessSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-pearl focus:px-4 focus:py-2 focus:text-espresso"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <DemoWorkSection />
        <WhoWeHelpSection />
        <NeedsEvaluator />
        <ProcessSection />
        <AboutSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
