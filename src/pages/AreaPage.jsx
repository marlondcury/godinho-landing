import { Link, Navigate, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { practiceAreas, team, firm } from '../data/content'
import { serviceSchema, breadcrumbSchema } from '../utils/schema'
import cesar from '../assets/cesar-crop.jpg'
import celton from '../assets/celton-crop.jpg'
import caroline from '../assets/caroline-crop.jpg'

const photos = { cesar, celton, caroline }

export default function AreaPage() {
  const { slug } = useParams()
  const area = practiceAreas.find((a) => a.slug === slug)

  if (!area) return <Navigate to="/" replace />

  const relatedLawyers = team.filter((m) => area.relatedLawyers?.includes(m.photoKey))
  const otherAreas = practiceAreas.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      <Seo
        title={area.seoTitle}
        description={area.seoDescription || area.description}
        path={`/areas/${area.slug}`}
        jsonLd={[
          serviceSchema(area),
          breadcrumbSchema([
            { name: 'Início', url: firm.siteUrl },
            { name: 'Áreas de atuação', url: `${firm.siteUrl}/#areas` },
            { name: area.title, url: `${firm.siteUrl}/areas/${area.slug}` },
          ]),
        ]}
      />
      <PageHeader
        eyebrow={area.featured ? 'Caso de relevância nacional' : 'Área de atuação'}
        title={area.title}
        breadcrumb={{ parent: { href: '/#areas', label: 'Áreas de atuação' }, current: area.title }}
      />

      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2">
            <p className="text-cream/70 text-lg leading-relaxed">{area.intro}</p>

            <h2 className="font-serif text-2xl text-cream mt-12 mb-6">Como podemos ajudar</h2>
            <ul className="space-y-4">
              {area.highlights.map((h) => (
                <li key={h} className="flex gap-4 text-cream/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-12 border border-gold/30 p-8">
              <h3 className="font-serif text-xl text-cream mb-3">Precisa de orientação nessa área?</h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-6">
                Fale com a nossa equipe e entenda como podemos ajudar no seu caso específico.
              </p>
              <a
                href={firm.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-crimson hover:bg-crimson-dark text-white px-7 py-3 text-sm tracking-wide transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div>
            {relatedLawyers.length > 0 && (
              <div className="mb-12">
                <h3 className="text-xs tracking-[0.3em] uppercase text-gold-light mb-6">Quem atende</h3>
                <div className="space-y-5">
                  {relatedLawyers.map((m) => (
                    <Link
                      key={m.slug}
                      to={`/equipe/${m.slug}`}
                      className="flex items-center gap-4 group border border-cream/10 hover:border-gold/40 p-4 transition-colors"
                    >
                      <img
                        src={photos[m.photoKey]}
                        alt={m.name}
                        className="h-16 w-16 object-cover object-top" loading="lazy"
                      />
                      <div>
                        <p className="font-serif text-cream group-hover:text-gold-light transition-colors">
                          {m.name}
                        </p>
                        <p className="text-xs text-cream/50">{m.role}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xs tracking-[0.3em] uppercase text-gold-light mb-6">Outras áreas</h3>
              <div className="space-y-3">
                {otherAreas.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/areas/${a.slug}`}
                    className="block text-sm text-cream/60 hover:text-gold-light border-b border-cream/10 pb-3 transition-colors"
                  >
                    {a.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
