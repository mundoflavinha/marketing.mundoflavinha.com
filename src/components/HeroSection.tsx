const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Fl%C3%A1via!%20Vim%20pela%20sua%20p%C3%A1gina%20e%20gostaria%20de%20conversar%20sobre%20estrat%C3%A9gia%20digital%20para%20o%20meu%20neg%C3%B3cio.";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            Estratégia digital para negócios que querem aparecer melhor, atrair mais clientes e vender com mais clareza.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Sou Flávia Guimarães, estrategista digital e gestora de tráfego pago. Ajudo empresas, profissionais e marcas locais a transformarem presença digital em posicionamento, relacionamento e oportunidades reais de venda.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Quero marcar uma reunião
          </a>
          <p className="text-sm text-muted-foreground">
            Atendimento estratégico para Meta Ads, Google Ads, campanhas digitais, posicionamento e estruturação de presença online.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent border-4 border-primary/20 flex items-center justify-center text-muted-foreground text-sm">
            Foto profissional
          </div>
        </div>
      </div>
    </section>
  );
}