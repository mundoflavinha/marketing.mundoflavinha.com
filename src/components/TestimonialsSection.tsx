const TESTIMONIALS = [
  "Flávia conseguiu organizar nossa comunicação e nos mostrar com clareza o que estava acontecendo nas campanhas.",
  "Além de cuidar dos anúncios, ela trouxe ideias, direcionamento e um olhar estratégico para o nosso negócio.",
  "Foi importante ter alguém que explicasse os números de forma simples e ajudasse a pensar não só no tráfego, mas também no atendimento e na comunicação.",
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
          O que dizem sobre o trabalho
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((text, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 space-y-4">
              <span className="text-primary text-3xl font-display">"</span>
              <p className="text-foreground text-sm leading-relaxed italic">{text}</p>
              <p className="text-muted-foreground text-xs">— Cliente</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}