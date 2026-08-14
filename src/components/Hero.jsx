import teamGroup from '../assets/team-group.jpg'
import { firm } from '../data/content'

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ink pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-crimson/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-eyebrow mb-6">Godinho Advocacia e Assessoria Jurídica</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-cream">
            Escritório de advocacia, com equipe de{' '}
            <span className="italic text-gold-light">profissionais especializados</span> e
            prontos para atender você
          </h1>
          <p className="mt-6 text-cream/70 text-base lg:text-lg leading-relaxed max-w-xl">
            Há mais de {firm.yearsActive} anos em {firm.city}, a Godinho Advocacia oferece
            atendimento personalizado e soluções jurídicas sólidas para proteger o que
            é mais importante para você.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={firm.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white px-7 py-3.5 text-sm tracking-wide transition-colors"
            >
              Agendar consulta
            </a>
            <a
              href="#areas"
              className="inline-flex items-center gap-2 border border-cream/25 hover:border-gold text-cream/85 hover:text-gold-light px-7 py-3.5 text-sm tracking-wide transition-colors"
            >
              Conhecer áreas de atuação
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 text-cream/60 text-sm">
            <div>
              <span className="block font-serif text-3xl text-gold-light">{firm.yearsActive}+</span>
              anos de tradição
            </div>
            <div className="h-10 w-px bg-cream/15" />
            <div>
              <span className="block font-serif text-3xl text-gold-light">UMA EQUIPE</span>
              de advogados especialistas
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 border border-gold/30" />
          <img
            src={teamGroup}
            alt="Equipe de advogados da Godinho Advocacia em Governador Valadares, MG"
            className="relative w-full h-[520px] object-cover object-top shadow-2xl shadow-black/50"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute -bottom-6 -left-6 bg-ink border border-gold/40 px-6 py-4 hidden sm:block">
            <p className="text-xs tracking-[0.25em] uppercase text-cream/50">Governador Valadares</p>
            <p className="font-serif text-gold-light text-lg leading-snug">Atendimento especializado</p>
          </div>
        </div>
      </div>
    </section>
  )
}
