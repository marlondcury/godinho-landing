// Geradores de dados estruturados (JSON-LD / schema.org) para SEO local.
// Referência: https://schema.org/Attorney · https://developers.google.com/search/docs/appearance/structured-data

import { firm, team } from '../data/content'

const imageUrl = (name) => `${firm.siteUrl}/images/${name}`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    '@id': `${firm.siteUrl}/#escritorio`,
    name: firm.fullName,
    alternateName: firm.name,
    description: firm.defaultSeoDescription,
    image: imageUrl('team-group.jpg'),
    logo: imageUrl('logo.png'),
    url: firm.siteUrl,
    telephone: firm.phoneDisplay,
    email: firm.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      ...firm.addressSchema,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: firm.geo.lat,
      longitude: firm.geo.lng,
    },
    areaServed: [
      { '@type': 'City', name: 'Governador Valadares' },
      { '@type': 'AdministrativeArea', name: 'Vale do Rio Doce' },
      { '@type': 'State', name: 'Minas Gerais' },
    ],
    sameAs: [firm.instagramUrl, firm.facebookUrl, firm.jusbrasilUrl],
    employee: team.map((m) => ({
      '@type': 'Person',
      name: m.fullName,
      jobTitle: m.role,
      url: `${firm.siteUrl}/equipe/${m.slug}`,
    })),
  }
}

export function personSchema(member) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${firm.siteUrl}/equipe/${member.slug}#pessoa`,
    name: member.fullName,
    alternateName: member.name,
    jobTitle: member.role,
    description: member.bio,
    image: imageUrl(`${member.photoKey}.jpg`),
    url: `${firm.siteUrl}/equipe/${member.slug}`,
    telephone: firm.phoneDisplay,
    worksFor: {
      '@type': 'Attorney',
      name: firm.fullName,
      url: firm.siteUrl,
    },
    address: {
      '@type': 'PostalAddress',
      ...firm.addressSchema,
    },
  }
}

export function serviceSchema(area) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${firm.siteUrl}/areas/${area.slug}#servico`,
    serviceType: area.title,
    name: area.seoTitle || area.title,
    description: area.seoDescription || area.description,
    url: `${firm.siteUrl}/areas/${area.slug}`,
    provider: {
      '@type': 'Attorney',
      name: firm.fullName,
      url: firm.siteUrl,
    },
    areaServed: [
      { '@type': 'City', name: 'Governador Valadares' },
      { '@type': 'AdministrativeArea', name: 'Vale do Rio Doce' },
    ],
  }
}

export function articleSchema(post, author) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${firm.siteUrl}/blog/${post.slug}#artigo`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'pt-BR',
    image: imageUrl('og-image.jpg'),
    mainEntityOfPage: `${firm.siteUrl}/blog/${post.slug}`,
    author: author
      ? { '@type': 'Person', name: author.fullName, url: `${firm.siteUrl}/equipe/${author.slug}` }
      : { '@type': 'Organization', name: firm.fullName },
    publisher: {
      '@type': 'Organization',
      name: firm.fullName,
      logo: { '@type': 'ImageObject', url: imageUrl('logo.png') },
    },
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
