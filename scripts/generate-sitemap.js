// Gera public/sitemap.xml a partir das rotas conhecidas do site (áreas,
// equipe e posts do blog vêm de src/data/content.js). Rode com `npm run sitemap`
// ou automaticamente antes do build (`npm run build`).

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { firm, practiceAreas, team, blogPosts } from '../src/data/content.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const today = new Date().toISOString().slice(0, 10)

const staticRoutes = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
]

const areaRoutes = practiceAreas.map((a) => ({
  loc: `/areas/${a.slug}`,
  changefreq: 'monthly',
  priority: '0.9',
}))

const lawyerRoutes = team.map((m) => ({
  loc: `/equipe/${m.slug}`,
  changefreq: 'monthly',
  priority: '0.7',
}))

const blogRoutes = blogPosts.map((p) => ({
  loc: `/blog/${p.slug}`,
  changefreq: 'yearly',
  priority: '0.6',
  lastmod: p.date,
}))

const routes = [...staticRoutes, ...areaRoutes, ...lawyerRoutes, ...blogRoutes]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${firm.siteUrl}${r.loc}</loc>
    <lastmod>${r.lastmod || today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const outPath = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(outPath, xml, 'utf-8')
console.log(`sitemap.xml gerado com ${routes.length} URLs em ${outPath}`)
