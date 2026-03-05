import Link from 'next/link';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import ChevronRight from './ChevronRight';

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumbs = ({ items, className = '', ...props }: BreadcrumbProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${baseUrl}${item.href}` : undefined
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className={twMerge('text-neutral', className)} {...props}>
        <ol className="flex items-center space-x-1 text-sm leading-[22px]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <Fragment key={index}>
                {index > 0 && (
                  <li aria-hidden="true" className="flex items-center">
                    <ChevronRight className="flex-shrink-0" />
                  </li>
                )}
                {item.href ? (
                  <li className="flex items-center">
                    <Link href={item.href} className="hover:cursor-pointer whitespace-nowrap">
                      {item.label}
                    </Link>
                  </li>
                ) : (
                  <li className="flex items-center max-w-[250px] flex-shrink truncate">
                    <span
                      className={`truncate ${isLast ? 'font-bold' : ''}`}
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  </li>
                )}
              </Fragment>
            )
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
