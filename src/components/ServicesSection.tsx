const SERVICES = [
  {
    title: "Tráfego Pago Meta Ads",
    description: "Campanhas estratégicas no Instagram e Facebook para atrair clientes qualificados e gerar conversas reais.",
  },
  {
    title: "Google Ads",
    description: "Anúncios na busca e rede de display para captar quem já está procurando pelo seu serviço.",
  },
  {
    title: "Estratégia Digital",
    description: "Planejamento completo de presença digital, posicionamento e comunicação da marca.",
  },
  {
    title: "Landing Pages e páginas de venda",
    description: "Páginas otimizadas para converter visitantes em contatos e oportunidades de negócio.",
  },
  {
    title: "Relatórios e leitura de resultados",
    description: "Análises claras e objetivas para entender o que está funcionando e o que ajustar.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          O que eu faço
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-card rounded-xl p-6 border border-border shadow-sm space-y-3">
              <h3 className="font-semibold text-foreground text-lg">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}