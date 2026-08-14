import { firm } from '../data/content'

export default function Contact() {
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    firm.mapsQuery
  )}&output=embed`

  return (
    <section id="contato" className="relative bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="section-eyebrow mb-6">Contato</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-cream">
            Vamos <span className="italic text-gold-light">conversar</span>
          </h2>
          <div className="divider-line mt-8" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 ">
          <div className="lg:col-span-2 space-y-8">
            <ContactRow
              label="Telefone"
              value={firm.phoneDisplay}
              href={firm.phoneHref}
              icon={
                <path d="M4 5c0-.6.4-1 1-1h3l2 5-2 1a11 11 0 005 5l1-2 5 2v3c0 .6-.4 1-1 1h-1C9.5 19 5 14.5 5 8V7" strokeLinecap="round" strokeLinejoin="round" />
              }
            />
            <br></br>
            <ContactRow
              label="WhatsApp"
              value={firm.whatsappDisplay}
              href={firm.whatsappHref}
              external
              icon={
                <path d="M12 3a9 9 0 00-7.6 13.8L3 21l4.3-1.4A9 9 0 1012 3z" strokeLinecap="round" strokeLinejoin="round" />
              }
            />
            <br></br>

            <ContactRow
              label="Instagram"
              value={firm.instagram}
              href={firm.instagramUrl}
              external
              icon={
                <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 6a3 3 0 100 6 3 3 0 000-6zm4.5-1.5h.01" strokeLinecap="round" strokeLinejoin="round" />
              }
            />
            <ContactRow
              label="Endereço"
              value={
                <>
                  {firm.address.line1}
                  <br />
                  {firm.address.line2}
                  <br />
                  {firm.address.line3}
                </>
              }
              icon={
                <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12zm0-9a3 3 0 100-6 3 3 0 000 6z" strokeLinecap="round" strokeLinejoin="round" />
              }
            />
          </div>

          <div className="lg:col-span-3 border border-cream/10 h-[420px] lg:h-auto">
            <iframe
              title="Localização Godinho Advocacia"
              src={mapsEmbedSrc}
              className="w-full h-full  contrast-125 opacity-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, value, href, icon, external }) {
  const content = (
    <div className="flex gap-4 group">
      <div className="h-11 w-11 shrink-0 flex items-center justify-center border border-gold/40 text-gold-light group-hover:bg-gold group-hover:text-ink transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          {icon}
        </svg>
      </div>
      <div>
        <p className="text-xs tracking-[0.25em] uppercase text-cream/45">{label}</p>
        <p className="mt-1 text-cream/85 leading-relaxed group-hover:text-gold-light transition-colors">
          {value}
        </p>
      </div>
    </div>
  )

  if (!href) return content

  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
      {content}
    </a>
  )
}
