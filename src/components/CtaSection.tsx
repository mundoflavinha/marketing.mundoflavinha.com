const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20Fl%C3%A1via!%20Vim%20pela%20sua%20p%C3%A1gina%20e%20gostaria%20de%20conversar%20sobre%20estrat%C3%A9gia%20digital%20para%20o%20meu%20neg%C3%B3cio.";

export function CtaSection() {
  return (
    <section id="cta" className="py-24 bg-primary/5">
      <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
          Quer entender qual estratégia faz sentido para o seu negócio agora?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Vamos conversar sobre o momento da sua marca, seus objetivos e os caminhos possíveis para melhorar sua presença digital e atrair mais oportunidades.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity shadow-lg"
        >
          Quero marcar uma reunião
        </a>
      </div>
    </section>
  );
}