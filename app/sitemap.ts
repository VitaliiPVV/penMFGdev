import { MetadataRoute } from 'next'
import { getCollection } from '@/lib/strapi/strapi'
import { StrapiArticle } from '@/types'

export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const mainRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/home`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quality`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work-culture`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const serviceIds = [
    'certified-welding',
    'sheet-metal',
    'machining',
    'finishing-assembling',
  ]

  const servicesRoutes: MetadataRoute.Sitemap = serviceIds.map((serviceId) => ({
    url: `${baseUrl}/portfolio/services/${serviceId}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const industryIds = [
    'aerospace-defence-space',
    'wastewater-sewage-treatment-disposal',
    'transit-infrastructure',
    'energy',
    'electronics-data-centres',
    'industrial',
  ]

  const industriesRoutes: MetadataRoute.Sitemap = industryIds.map((industryId) => ({
    url: `${baseUrl}/portfolio/featured-industries/${industryId}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const portfolioRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/portfolio/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/featured-industries`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
  let blogRoutes: MetadataRoute.Sitemap = []

  try {
    const { data: articles } = await getCollection<StrapiArticle>('articles', {
      fields: ['slug', 'updatedAt'],
      pagination: { pageSize: 1000 },
    })

    blogRoutes = articles.map((article) => ({
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error fetching blog articles for sitemap:', error)
  }

  return [
    ...mainRoutes,
    ...portfolioRoutes,
    ...servicesRoutes,
    ...industriesRoutes,
    ...blogRoutes,
  ]
}
