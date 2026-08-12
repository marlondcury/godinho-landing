import { Link, Navigate, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { blogPosts, team, firm } from '../data/content'
import { formatDate } from '../utils/format'
import { articleSchema, breadcrumbSchema } from '../utils/schema'
import cesar from '../assets/cesar-crop.jpg'
import celton from '../assets/celton-crop.jpg'
import caroline from '../assets/caroline-crop.jpg'

const photos = { cesar, celton, caroline }

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const author = team.find((m) => m.photoKey === post.author)
  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2)

  return (
    <>
      <Seo
        title={`${post.title} | Godinho Advocacia`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={[
          articleSchema(post, author),
          breadcrumbSchema([
            { name: 'Início', url: firm.siteUrl },
            { name: 'Blog', url: `${firm.siteUrl}/blog` },
            { name: post.title, url: `${firm.siteUrl}/blog/${post.slug}` },
          ]),
        ]}
      />
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        breadcrumb={{ parent: { href: '/blog', label: 'Blog' }, current: post.title }}
      />

      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-12 text-sm text-cream/50">
            <span>{formatDate(post.date)}</span>
            {author && (
              <>
                <span>·</span>
                <Link to={`/equipe/${author.slug}`} className="hover:text-gold-light transition-colors">
                  {author.name}
                </Link>
              </>
            )}
          </div>

          <div className="space-y-6">
            {post.content.map((p, i) => (
              <p key={i} className="text-cream/75 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-14 border border-gold/30 p-8">
            <h3 className="font-serif text-xl text-cream mb-3">Precisa de orientação sobre o seu caso?</h3>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Fale com a nossa equipe e entenda os próximos passos.
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

          {author && (
            <Link
              to={`/equipe/${author.slug}`}
              className="mt-14 flex items-center gap-4 group border border-cream/10 hover:border-gold/40 p-5"
            >
              <img src={photos[author.photoKey]} alt={author.name} loading="lazy" className="h-16 w-16 object-cover object-top" />
              <div>
                <p className="text-xs text-cream/45">Texto de</p>
                <p className="font-serif text-cream group-hover:text-gold-light transition-colors">{author.name}</p>
                <p className="text-xs text-cream/50">{author.role}</p>
              </div>
            </Link>
          )}

          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xs tracking-[0.3em] uppercase text-gold-light mb-6">Leia também</h3>
              <div className="space-y-3">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/blog/${p.slug}`}
                    className="block text-sm text-cream/70 hover:text-gold-light border-b border-cream/10 pb-3 transition-colors"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
