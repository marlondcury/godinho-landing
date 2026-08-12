import { Link } from 'react-router-dom'
import { practiceAreas } from '../data/content'

export default function PracticeAreas() {
  return (
    <section id="areas" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="section-eyebrow mb-6">O que fazemos</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-cream">
            Áreas de <span className="italic text-gold-light">atuação</span>
          </h2>
          <div className="divider-line mt-8" />
          <p className="mt-6 text-cream/60 leading-relaxed">
            Atendimento especializado e próximo, com soluções jurídicas pensadas para
            cada cliente. Clique em uma área para saber mais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10">
          {practiceAreas.map((area, i) => (
            <Link
              key={area.slug}
              to={`/areas/${area.slug}`}
              className={`group relative bg-ink hover:bg-ink-lighter p-8 lg:p-10 transition-colors ${
                area.featured ? 'border-l-2 border-crimson/70' : ''
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-serif text-gold/40 text-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {area.featured && (
                  <span className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase text-crimson">
                    <span className="h-1.5 w-1.5 rounded-full bg-crimson" />
                    Caso especial
                  </span>
                )}
              </div>
              <h3 className="mt-4 font-serif text-xl text-cream group-hover:text-gold-light transition-colors">
                {area.title}
              </h3>
              <p className="mt-3 text-sm text-cream/55 leading-relaxed">
                {area.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-gold-light/0 group-hover:text-gold-light/100 transition-colors">
                <span className="h-px w-10 bg-crimson/60 group-hover:w-6 transition-all" />
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">Saiba mais →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
