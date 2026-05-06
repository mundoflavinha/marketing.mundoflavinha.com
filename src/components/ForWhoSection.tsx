const CARDS = [
  "Empresas que querem atrair clientes qualificados",
  "Marcas que precisam melhorar a presença digital",
  "Negócios locais que querem se destacar na região",
  "Profissionais que querem organizar a comunicação",
  "Empresas que já anunciam, mas não sabem interpretar resultados",
];

export function ForWhoSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Se você sente que sua marca está nas redes, mas ainda não comunica tudo o que poderia, esse trabalho é para você.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Muitas empresas têm redes sociais, site e anúncios rodando, mas falta estratégia, clareza na mensagem, acompanhamento e direcionamento. O resultado? Investimento sem retorno claro.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CARDS.map((text) => (
            <div
              key={text}
              className="bg-card rounded-xl p-6 border border-border shadow-sm"
            >
              <p className="text-foreground font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}