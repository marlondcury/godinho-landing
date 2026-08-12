import { firm } from '../data/content'

export default function CtaBanner() {
  return (
    <section className="relative bg-ink-lighter py-20">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <p className="section-eyebrow justify-center mb-6">
          <span className="hidden sm:block h-px w-8 bg-gold" />
          Fale com um especialista
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
          Sua causa merece atenção,
          <br className="hidden sm:block" /> técnica e <span className="italic text-crimson">dedicação</span>
        </h2>
        <p className="mt-6 text-cream/60 max-w-xl mx-auto">
          Entre em contato e agende uma conversa com a equipe Godinho Advocacia.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={firm.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white px-8 py-3.5 text-sm tracking-wide transition-colors"
          >
            Falar no WhatsApp
          </a>
          <a
            href={firm.phoneHref}
            className="inline-flex items-center gap-2 border border-cream/25 hover:border-gold text-cream/85 hover:text-gold-light px-8 py-3.5 text-sm tracking-wide transition-colors"
          >
            {firm.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
