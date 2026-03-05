'use client';

import { Heading } from '@/components/ui';
import StandardsCard from './StandardsCard';
import { getCollection } from '@/lib/strapi/strapi';
import { useEffect, useState } from 'react';

interface StandardsDocument {
  documentId: string;
  label: string;
  doc: {
    documentId: string;
    url: string;
    alternativeText?: string;
    name: string;
  };
}

const StandardsClient = () => {
  const [links, setLinks] = useState<StandardsDocument[]>([]);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const { data } = await getCollection<StandardsDocument>('quality-standards', {
          populate: 'doc',
          fields: ['label', 'documentId'],
        });

        if (isMounted) {
          setLinks(data);
        }
      } catch (error) {
        console.error('Failed to load quality standards', error);
      }
    };

    void load();

    return () => {
      isMounted = false;
    };
  }, []);

  if (!links.length) {
    return null;
  }

  return (
    <section className="flex flex-col gap-y-xl 2xl:gap-y-2xl pt-4xl 2xl:pt-5xl">
      <Heading as="h2" className="text-2xl/8  2xl:text-[32px]/10 font-bold">
        <span>Quality</span> <span className="text-brand-primary">Standards</span>
      </Heading>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {links.map(({ documentId, label, doc }) => (
          <li key={documentId}>
            <StandardsCard data={doc} label={label} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StandardsClient;

