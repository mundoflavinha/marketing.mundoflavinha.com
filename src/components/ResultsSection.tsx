const RESULTS = [
  "Mais de 100 mil pessoas alcançadas em campanhas locais.",
  "Milhares de interações com anúncios.",
  "Dezenas de conversas iniciadas no WhatsApp.",
  "Relatórios simples para decisões mais estratégicas.",
];

export function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Números importam, mas estratégia é o que dá direção a eles.
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Acompanho indicadores como alcance, impressões, cliques, conversas iniciadas, custo por resultado, crescimento de visibilidade e aprendizados sobre público, criativos e atendimento.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {RESULTS.map((text) => (
            <div key={text} className="bg-card border border-border rounded-xl p-6 flex items-start gap-3">
              <span className="text-primary text-xl font-bold">✦</span>
              <p className="text-foreground font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}