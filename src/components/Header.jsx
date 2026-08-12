import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logoWhite from '../assets/logo-white.png'
import SocialIcons from './SocialIcons'
import { firm, navLinks } from '../data/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logoWhite} alt={firm.fullName} className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm tracking-wide text-cream/80 hover:text-gold-light transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <SocialIcons />
          <a
            href={firm.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-gold/60 text-gold-light hover:bg-gold hover:text-ink px-5 py-2.5 text-sm tracking-wide transition-colors"
          >
            Fale conosco
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="lg:hidden text-cream p-2"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-ink border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-cream/85 text-sm tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <SocialIcons className="pt-1" />
          <a
            href={firm.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex justify-center items-center gap-2 border border-gold/60 text-gold-light px-5 py-2.5 text-sm tracking-wide"
          >
            Fale conosco
          </a>
        </div>
      )}
    </header>
  )
}
