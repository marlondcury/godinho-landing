import { Link } from 'react-router-dom'

export default function PageHeader({ eyebrow, title, titleHighlight, breadcrumb }) {
  return (
    <section className="relative bg-ink-light pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-cream/10">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {breadcrumb && (
          <div className="flex items-center gap-2 text-xs text-cream/45 mb-6">
            <Link to="/" className="hover:text-gold-light transition-colors">
              Início
            </Link>
            <span>/</span>
            {breadcrumb.parent && (
              <>
                <Link to={breadcrumb.parent.href} className="hover:text-gold-light transition-colors">
                  {breadcrumb.parent.label}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-cream/70">{breadcrumb.current}</span>
          </div>
        )}
        {eyebrow && <p className="section-eyebrow mb-6">{eyebrow}</p>}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream max-w-3xl">
          {title} {titleHighlight && <span className="italic text-gold-light">{titleHighlight}</span>}
        </h1>
        <div className="divider-line mt-8" />
      </div>
    </section>
  )
}
