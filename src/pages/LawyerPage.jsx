import { Link, Navigate, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { team, practiceAreas, firm } from '../data/content'
import { personSchema, breadcrumbSchema } from '../utils/schema'
import cesar from '../assets/cesar-crop.jpg'
import celton from '../assets/celton-crop.jpg'
import caroline from '../assets/caroline-crop.jpg'

const photos = { cesar, celton, caroline }

export default function LawyerPage() {
  const { slug } = useParams()
  const member = team.find((m) => m.slug === slug)

  if (!member) return <Navigate to="/" replace />

  const areas = practiceAreas.filter((a) => member.areas?.includes(a.slug))
  const otherMembers = team.filter((m) => m.slug !== slug)

  return (
    <>
      <Seo
        title={member.seoTitle}
        description={member.seoDescription || member.bio}
        path={`/equipe/${member.slug}`}
        jsonLd={[
          personSchema(member),
          breadcrumbSchema([
            { name: 'Início', url: firm.siteUrl },
            { name: 'Equipe', url: `${firm.siteUrl}/#equipe` },
            { name: member.name, url: `${firm.siteUrl}/equipe/${member.slug}` },
          ]),
        ]}
      />
      <PageHeader
        eyebrow={member.role}
        title={member.name}
        breadcrumb={{ parent: { href: '/#equipe', label: 'Equipe' }, current: member.name }}
      />

      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-3 gap-14">
          <div>
            <img
              src={photos[member.photoKey]}
              alt={`${member.name} — ${member.role} em Governador Valadares`}
              className="w-full max-w-sm mx-auto lg:mx-0 h-[440px] object-cover object-top"
            />
            <p className="mt-4 text-xs text-cream/45 max-w-sm mx-auto lg:mx-0">{member.fullName}</p>

            {areas.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">Áreas de atuação</h3>
                <div className="flex flex-wrap gap-2">
                  {areas.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/areas/${a.slug}`}
                      className="text-xs text-cream/70 hover:text-ink hover:bg-gold border border-gold/30 px-3 py-1.5 transition-colors"
                    >
                      {a.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <p className="text-cream/70 text-lg leading-relaxed">{member.bio}</p>

            <h2 className="font-serif text-2xl text-cream mt-12 mb-6">Trajetória</h2>
            <ul className="space-y-4">
              {member.details.map((d) => (
                <li key={d} className="flex gap-4 text-cream/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-12 border border-gold/30 p-8">
              <h3 className="font-serif text-xl text-cream mb-3">Fale com {member.name.split(' ')[0]}</h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-6">
                Entre em contato com a nossa equipe e agende uma conversa.
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

            <div className="mt-14">
              <h3 className="text-xs tracking-[0.3em] uppercase text-gold-light mb-6">Restante da equipe</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {otherMembers.map((m) => (
                  <Link
                    key={m.slug}
                    to={`/equipe/${m.slug}`}
                    className="flex items-center gap-4 group border border-cream/10 hover:border-gold/40 p-4 transition-colors"
                  >
                    <img src={photos[m.photoKey]} alt={m.name} loading="lazy" className="h-14 w-14 object-cover object-top" />
                    <div>
                      <p className="font-serif text-cream group-hover:text-gold-light transition-colors">{m.name}</p>
                      <p className="text-xs text-cream/50">{m.role}</p>
                    </div>
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
