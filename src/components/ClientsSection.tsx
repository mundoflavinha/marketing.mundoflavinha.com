const CLIENTS = [
  "Baby Gym",
  "Gelpet",
  "Body Harmony",
  "Cirandinha",
  "Espiral Filmes",
  "Floarte",
  "Odi Digital",
  "AMACLIN Saúde Integrada",
  "Clara Badini",
  "Bio Active Personal Trainer",
  "Projetos Imobiliários",
];

export function ClientsSection() {
  return (
    <section id="clients" className="py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Algumas marcas e projetos que já passaram pela minha estratégia
          </h2>
          <p className="mt-3 text-muted-foreground">
            Já atuei em diferentes segmentos — saúde, educação, bem-estar, audiovisual, imobiliário e serviços — sempre com foco em estratégia e resultados.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENTS.map((name) => (
            <div
              key={name}
              className="bg-card border border-border rounded-xl p-5 flex items-center justify-center text-center"
            >
              <span className="text-sm font-medium text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}