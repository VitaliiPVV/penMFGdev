import Link from 'next/link';
import Image from 'next/image';
import Tag from '@/components/ui/Tag';
import { Heading } from '@/components/ui';
import { StrapiArticle } from '@/types';
import { STRAPI_URL } from '@/constants';

interface CardProps {
  data: StrapiArticle;
  priority?: boolean;
}

const Card = ({ data, priority = false }: CardProps) => {
  const article = data;
  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const coverImageUrl = article.cover?.url
    ? article.cover.url.startsWith('http')
      ? article.cover.url
      : `${STRAPI_URL}${article.cover.url}`
    : '/images/blog_placeholder.png';

  return (
    <article key={data.id} className="bg-inverse-subtle rounded-3xl min-h-[430px] overflow-hidden">
      <Link href={`/blog/${data.slug}`} className="flex flex-col h-full">
        <figure className="relative min-h-1/2 overflow-hidden">
          <Image
            fill
            unoptimized
            src={coverImageUrl}
            alt={article.title || 'article image'}
            className="w-full object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />
          <figcaption className="absolute top-3 left-3 right-3 flex flex-wrap gap-2 min-w-0">
            {article.filterOptions?.map((category) => (
              <Tag key={category.id}>
                <span className="block truncate w-full max-w-full">{category.label}</span>
              </Tag>
            ))}
          </figcaption>
        </figure>
        <div className="p-4 text-muted font-medium md:p-6">
          <time dateTime={article.publishedAt} className="text-xs">
            {date}
          </time>
          <Heading as="h3" className="mt-1 text-lg font-bold text-neutral leading-tight line-clamp-3">{article.title}</Heading>
          <p className="mt-3 text-sm leading-tight line-clamp-3">{article.description}</p>
        </div>
      </Link>
    </article>
  );
};

export default Card;
