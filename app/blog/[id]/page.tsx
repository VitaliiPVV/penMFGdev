import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Tag from '@/components/ui/Tag';
import { Heading } from '@/components/ui';
import { STRAPI_URL } from '@/constants';
import { getCollection } from '@/lib/strapi/strapi';
import { StrapiArticle } from '@/types';
import { type Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BlogContent from './BlogContent';import { ArticleSchema } from '@/components/StructuredData'

export const revalidate = 60;

async function getArticleBySlug(slug: string): Promise<StrapiArticle | null> {
  try {
    const articlesResponse = await getCollection<StrapiArticle>('articles', {
      filters: {
        slug: { $eq: slug },
      },
      populate: '*',
    });

    return articlesResponse.data[0] || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticleBySlug(id);

  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  const coverImageUrl = article.cover?.url
    ? article.cover.url.startsWith('http')
      ? article.cover.url
      : `${STRAPI_URL}${article.cover.url}`
    : '/images/blog_placeholder.png';

  return {
    title: article.title,
    description: article.description || article.title,
    alternates: {
      canonical: `/blog/${id}`
    },
    openGraph: {
      title: article.title,
      description: article.description || article.title,
      images: coverImageUrl,
      type: 'article',
      publishedTime: article.publishedAt,
      url: `/blog/${id}`,
    },
  };
}

export async function generateStaticParams() {
  try {
    const articlesResponse = await getCollection<StrapiArticle>('articles', {
      fields: ['slug'],
    });

    return articlesResponse.data.map((article) => ({
      id: article.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticleBySlug(id);

  if (!article) {
    return notFound();
  }

  const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: article.title }];

  const formattedDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const coverImageUrl = article?.cover?.url
    ? article.cover.url.startsWith('http')
      ? article.cover.url
      : `${STRAPI_URL}${article.cover.url}`
    : '/images/blog_placeholder.png';

  const categories = article.filterOptions?.map((cat) => cat.label) || [];

  const articleContent = article.body || [];

  return (
    <>
      <ArticleSchema
        title={article.title}
        description={article.description || article.title}
        imageUrl={coverImageUrl}
        datePublished={article.publishedAt}
        dateModified={article.updatedAt}
        articleUrl={`/blog/${id}`}
      />
      <Breadcrumbs items={breadcrumbItems} className="mb-3" />
      <div className="max-w-[796px]">
        <header className="mt-8">
          <time dateTime={article.publishedAt} className="text-base font-medium text-muted leading-tight">
            {formattedDate}
          </time>
          <Heading as="h1" className="xl:mt-2 mt-3 xl:text-[32px] text-2xl xl:leading-none leading-[32px] xl:font-extrabold font-bold text-neutral">
            {article.title}
            <span className="sr-only">
              {" "}
              - Metal Fabrication Industry News from Anaheim, Orange County, Los Angeles, and Southern California
            </span>
          </Heading>
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 min-w-0 mt-6 xl:mt-8">
              {categories.map((category, index) => (
                <Tag key={index}>
                  <span className="block truncate w-full max-w-full">{category}</span>
                </Tag>
              ))}
            </div>
          )}
        </header>
        <article className="blog-post-content mt-3 max-w-full">
          <div className="w-full h-[300px] relative overflow-hidden rounded-3xl">
            <Image
              unoptimized
              fill
              src={coverImageUrl}
              alt={article.title}
              className="w-full object-cover rounded-3xl"
              sizes="(max-width: 796px) 100vw, 796px"
              priority
            />
          </div>
          {article.description && (
            <p className="mt-6 text-lg text-gray-700 leading-relaxed font-medium">{article.description}</p>
          )}
          <div className="mt-6">
            <BlogContent content={articleContent} strapiUrl={STRAPI_URL} />
          </div>
        </article>
      </div>
    </>
  );
}
