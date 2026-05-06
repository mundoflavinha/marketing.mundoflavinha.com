const STEPS = [
  { number: "01", title: "Diagnóstico", description: "Entendo o momento da sua marca, seus objetivos e desafios." },
  { number: "02", title: "Estratégia", description: "Crio um plano personalizado com canais, mensagens e metas." },
  { number: "03", title: "Gestão e acompanhamento", description: "Coloco a estratégia em prática com monitoramento contínuo." },
  { number: "04", title: "Análise dos resultados", description: "Apresento relatórios claros e ajusto o que for necessário." },
];

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
          Como funciona
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center space-y-3">
              <span className="text-4xl font-bold text-primary/30 font-display">{step.number}</span>
              <h3 className="font-semibold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}