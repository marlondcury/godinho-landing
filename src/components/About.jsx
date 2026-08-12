import teamGroup from '../assets/team-group.jpg'
import { about, stats } from '../data/content'

export default function About() {
  return (
    <section id="sobre" className="relative bg-ink-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 border border-gold/20" />
          <img
            src={teamGroup}
            alt="Advogados da Godinho Advocacia, escritório em Governador Valadares"
            className="relative w-full max-w-md mx-auto h-[460px] object-cover shadow-2xl shadow-black/50"
            loading="lazy"
          />
          <div className="absolute -bottom-px left-0 right-0 mx-auto max-w-md h-px bg-gradient-to-r from-crimson via-gold to-crimson" />
        </div>

        <div className="order-1 lg:order-2">
          <p className="section-eyebrow mb-6">{about.eyebrow}</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-cream mb-2">
            {about.title} <span className="italic text-crimson">{about.titleHighlight}</span>
          </h2>
          <div className="divider-line mb-8" />

          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-cream/70 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-cream/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl lg:text-4xl text-gold-light">{s.value}</p>
                <p className="mt-1 text-xs text-cream/55 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
