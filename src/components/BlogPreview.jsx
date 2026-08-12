import { Link } from 'react-router-dom'
import { blogPosts } from '../data/content'
import { formatDate } from '../utils/format'

export default function BlogPreview() {
  const latest = blogPosts.slice(0, 3)

  return (
    <section className="relative bg-ink-light py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="section-eyebrow mb-6">Blog jurídico</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-cream">
              Conteúdo para <span className="italic text-crimson">orientar</span> você
            </h2>
            <div className="divider-line mt-8" />
          </div>
          <Link
            to="/blog"
            className="text-sm tracking-wide text-gold-light hover:text-gold border-b border-gold/40 hover:border-gold pb-1 transition-colors"
          >
            Ver todos os artigos
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {latest.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block border border-cream/10 hover:border-gold/40 bg-ink p-8 transition-colors"
            >
              <p className="text-xs tracking-[0.25em] uppercase text-gold-light">{post.category}</p>
              <h3 className="mt-4 font-serif text-xl text-cream leading-snug group-hover:text-gold-light transition-colors">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-cream/55 leading-relaxed line-clamp-3">{post.excerpt}</p>
              <p className="mt-6 text-xs text-cream/40">{formatDate(post.date)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
