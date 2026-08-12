import { differentiators } from '../data/content'

const icons = [
  // atendimento personalizado
  <path key="a" d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20c0-3.5 3.5-6 8-6s8 2.5 8 6" strokeLinecap="round" strokeLinejoin="round" />,
  // tradição
  <path key="b" d="M4 21h16M6 21V9l6-5 6 5v12M10 21v-6h4v6" strokeLinecap="round" strokeLinejoin="round" />,
  // inovação
  <path key="c" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.5-6.5l-1.4 1.4M6.9 17.1l-1.4 1.4m0-13l1.4 1.4M17.1 17.1l1.4 1.4M12 8a4 4 0 100 8 4 4 0 000-8z" strokeLinecap="round" strokeLinejoin="round" />,
  // equipe especializada
  <path key="d" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />,
]

export default function WhyUs() {
  return (
    <section className="relative bg-ink py-24 lg:py-32 border-y border-cream/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="section-eyebrow mb-6">Diferenciais</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-cream">
            Por que escolher a <span className="italic text-gold-light">Godinho</span>
          </h2>
          <div className="divider-line mt-8" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {differentiators.map((item, i) => (
            <div key={item.title}>
              <div className="h-12 w-12 flex items-center justify-center border border-gold/40 text-gold-light mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {icons[i]}
                </svg>
              </div>
              <h3 className="font-serif text-lg text-cream mb-2">{item.title}</h3>
              <p className="text-sm text-cream/55 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
