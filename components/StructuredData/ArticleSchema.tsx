interface ArticleSchemaProps {
  title: string
  description: string
  imageUrl: string
  datePublished: string
  dateModified?: string
  authorName?: string
  articleUrl: string
}

export function ArticleSchema({
  title,
  description,
  imageUrl,
  datePublished,
  dateModified,
  authorName = 'Pen Manufacturing',
  articleUrl
}: ArticleSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: authorName,
      url: 'https://pen-manufacturing.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pen Manufacturing',
      url: 'https://pen-manufacturing.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pen-manufacturing.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${articleUrl}`
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
