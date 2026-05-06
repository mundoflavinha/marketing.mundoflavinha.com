export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-accent border border-border flex items-center justify-center text-muted-foreground text-sm">
            Foto Flávia
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Quem está por trás da estratégia
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Sou publicitária, comunicadora, estrategista digital e gestora de tráfego pago. Minha trajetória passa por comunicação, conteúdo, televisão, projetos culturais, redes sociais e campanhas digitais.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Uno visão criativa, estratégia de comunicação e tráfego pago para ajudar marcas a se posicionarem com clareza e atraírem as oportunidades certas. Cada projeto é tratado com proximidade, profundidade e respeito pelo contexto do cliente.
          </p>
        </div>
      </div>
    </section>
  );
}