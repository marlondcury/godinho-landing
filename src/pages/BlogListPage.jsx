import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import { blogPosts, firm } from '../data/content'
import { formatDate } from '../utils/format'
import { breadcrumbSchema } from '../utils/schema'

export default function BlogListPage() {
  return (
    <>
      <Seo
        title="Blog Jurídico | Godinho Advocacia — Governador Valadares"
        description="Artigos e orientações jurídicas escritos pela equipe da Godinho Advocacia sobre Direito de Família, Previdenciário, Penal, do Consumidor e mais, em Governador Valadares (MG)."
        path="/blog"
        jsonLd={breadcrumbSchema([
          { name: 'Início', url: firm.siteUrl },
          { name: 'Blog', url: `${firm.siteUrl}/blog` },
        ])}
      />
      <PageHeader
        eyebrow="Blog jurídico"
        title="Artigos e"
        titleHighlight="orientações"
        breadcrumb={{ current: 'Blog' }}
      />

      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block border border-cream/10 hover:border-gold/40 p-8 transition-colors"
              >
                <p className="text-xs tracking-[0.25em] uppercase text-gold-light">{post.category}</p>
                <h2 className="mt-4 font-serif text-xl text-cream leading-snug group-hover:text-gold-light transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-cream/55 leading-relaxed">{post.excerpt}</p>
                <p className="mt-6 text-xs text-cream/40">{formatDate(post.date)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
