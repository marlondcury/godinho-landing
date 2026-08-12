import { Link } from 'react-router-dom'
import logoWhite from '../assets/logo-white.png'
import SocialIcons from './SocialIcons'
import { firm, navLinks } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-ink-light border-t border-cream/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logoWhite} alt={firm.fullName} className="h-14 w-auto mb-4" />
            <p className="text-sm text-cream/55 leading-relaxed max-w-xs">
              Tradição de mais de {firm.yearsActive} anos em {firm.city}, com atendimento
              jurídico personalizado e especializado.
            </p>
            <SocialIcons className="mt-6" />
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold-light mb-5">Navegação</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-cream/60 hover:text-gold-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold-light mb-5">Contato</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li>{firm.phoneDisplay}</li>
              <li>{firm.whatsappDisplay}</li>
              <li>{firm.instagram}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold-light mb-5">Endereço</h4>
            <p className="text-sm text-cream/60 leading-relaxed">
              {firm.address.line1}
              <br />
              {firm.address.line2}
              <br />
              {firm.address.line3}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            © {year} {firm.fullName}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-cream/40">{firm.slogan}</p>
        </div>
      </div>
    </footer>
  )
}
