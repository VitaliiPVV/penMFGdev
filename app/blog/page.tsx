import { getCollection } from '@/lib/strapi/strapi';
import { StrapiArticle, StrapiFilterGroup } from '@/types';
import BlogClient from './BlogClient';
import type { Metadata } from 'next';
import { PAGE_SIZE } from './constants';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stay updated with the latest news, insights, and industry trends from Pen Manufacturing.',
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    title: 'Blog | Pen Manufacturing',
    description: 'Latest news and insights from Pen Manufacturing',
    url: '/blog'
  },
};

export const revalidate = 60;

export default async function BlogPage() {
  const [articlesResponse, filterGroupsResponse] = await Promise.all([
    getCollection<StrapiArticle>('articles', {
      populate: '*',
      sort: ['publishedAt:desc'],
      pagination: {
        page: 1,
        pageSize: PAGE_SIZE,
      },
    }),
    getCollection<StrapiFilterGroup>('blog-filter-groups', {
      populate: 'options',
    }),
  ]);

  const initialArticles = articlesResponse.data;
  const initialHasMore = articlesResponse.meta.pagination.page < articlesResponse.meta.pagination.pageCount;

  const initialFilterOptions = filterGroupsResponse.data.map(({ documentId, ...groupData }) => ({
    ...groupData,
    id: documentId,
    options: groupData.options.map(({ documentId, ...optionData }) => ({
      ...optionData,
      id: documentId,
    })),
  }));

  return (
    <BlogClient
      initialArticles={initialArticles}
      initialFilterOptions={initialFilterOptions}
      initialHasMore={initialHasMore}
      pageSize={PAGE_SIZE}
    />
  );
}
