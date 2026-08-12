import { Helmet } from 'react-helmet-async'
import { firm } from '../data/content'

export default function Seo({ title, description, path = '', image, type = 'website', jsonLd }) {
  const metaTitle = title || firm.defaultSeoTitle
  const metaDescription = description || firm.defaultSeoDescription
  const url = `${firm.siteUrl}${path}`
  const metaImage = image || `${firm.siteUrl}/images/og-image.jpg`
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={firm.fullName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
