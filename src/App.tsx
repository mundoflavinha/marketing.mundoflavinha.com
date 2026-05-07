import { AboutSection } from "./components/AboutSection";
import { ClientsSection } from "./components/ClientsSection";
import { CtaSection } from "./components/CtaSection";
import { DifferentialSection } from "./components/DifferentialSection";
import { ForWhoSection } from "./components/ForWhoSection";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ResultsSection } from "./components/ResultsSection";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export function App() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <HeroSection />
        <ForWhoSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <ResultsSection />
        <DifferentialSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Flavia Guimaraes. Todos os direitos reservados.
      </footer>
    </>
  );
}
