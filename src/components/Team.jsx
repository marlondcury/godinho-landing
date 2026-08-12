import { Link } from 'react-router-dom'
import cesar from '../assets/cesar-crop.jpg'
import celton from '../assets/celton-crop.jpg'
import caroline from '../assets/caroline-crop.jpg'
import { team } from '../data/content'

const photos = { cesar, celton, caroline }

export default function Team() {
  return (
    <section id="equipe" className="relative bg-ink-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="section-eyebrow mb-6">Quem somos</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-cream">
            Nossa <span className="italic text-crimson">equipe</span>
          </h2>
          <div className="divider-line mt-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member) => (
            <Link key={member.slug} to={`/equipe/${member.slug}`} className="group relative block">
              <div className="relative overflow-hidden">
                <img
                  src={photos[member.photoKey]}
                  alt={`${member.name}, ${member.role.toLowerCase()} em Governador Valadares`}
                  loading="lazy"
                  className="w-full h-[420px] object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs tracking-[0.3em] uppercase text-gold-light">{member.role}</p>
                  <h3 className="font-serif text-2xl text-cream mt-1 group-hover:text-gold-light transition-colors">
                    {member.name}
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm text-cream/60 leading-relaxed">{member.bio}</p>
              <span className="mt-3 inline-block text-xs text-gold-light opacity-0 group-hover:opacity-100 transition-opacity">
                Ver perfil completo →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
