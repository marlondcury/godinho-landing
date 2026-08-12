import { socialLinks } from '../data/content'

const paths = {
  instagram: (
    <path d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 6a3 3 0 100 6 3 3 0 000-6zm4.5-1.5h.01" strokeLinecap="round" strokeLinejoin="round" />
  ),
  facebook: (
    <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V12H8v3h2.5v6H13v-6h2.4l.6-3H13V9.6c0-.4.3-.6.6-.6H14z" />
  ),
  jusbrasil: (
    <path d="M8 4h5v11.5a3.5 3.5 0 01-7 0V14h2v1.5a1.5 1.5 0 003 0V6H8V4zm8 0h4v2h-2v10h-2V4z" />
  ),
}

export default function SocialIcons({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.name}
          title={s.name}
          className="h-8 w-8 flex items-center justify-center border border-cream/20 text-cream/60 hover:text-ink hover:bg-gold hover:border-gold transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {s.icon === 'facebook' || s.icon === 'jusbrasil' ? (
              <g fill="currentColor" stroke="none">
                {paths[s.icon]}
              </g>
            ) : (
              paths[s.icon]
            )}
          </svg>
        </a>
      ))}
    </div>
  )
}
