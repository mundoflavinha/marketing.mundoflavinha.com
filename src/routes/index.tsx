import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flávia Guimarães — Estrategista Digital e Gestora de Tráfego Pago" },
      { name: "description", content: "Estratégia digital para negócios que querem aparecer melhor, atrair mais clientes e vender com mais clareza." },
      { property: "og:title", content: "Flávia Guimarães — Estrategista Digital" },
      { property: "og:description", content: "Ajudo empresas e marcas a transformarem presença digital em oportunidades reais de venda." },
    ],
  }),
  component: Index,
});

import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { ForWhoSection } from "../components/ForWhoSection";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { ClientsSection } from "../components/ClientsSection";
import { ResultsSection } from "../components/ResultsSection";
import { DifferentialSection } from "../components/DifferentialSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { CtaSection } from "../components/CtaSection";

function Index() {
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
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Flávia Guimarães. Todos os direitos reservados.
      </footer>
    </>
  );
}
