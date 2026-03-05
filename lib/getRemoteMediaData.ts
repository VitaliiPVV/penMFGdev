import { STRAPI_URL } from '@/constants';
import { RemoteMediaData } from '@/types';

const getRemoteMediaData = (data: RemoteMediaData) => {
  const url = data.url.startsWith('http') || data.url.startsWith('/')
    ? data.url
    : `${STRAPI_URL}${data.url}`;

  return {
    id: data.documentId,
    url,
    alt: data.alternativeText || data.name || 'Media',
    description: data.description,
  };
};

export default getRemoteMediaData;
