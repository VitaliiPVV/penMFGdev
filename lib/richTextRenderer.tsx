import { createElement } from 'react';
import Image from 'next/image';

export interface RichTextNode {
  type: string;
  text?: string;
  children?: RichTextNode[];
  level?: number;
  format?: string;
  url?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  html?: string;
  image?: {
    url: string;
  };
}

const HEADING_CLASSES: Record<number, string> = {
  1: 'text-3xl font-bold text-neutral mt-10 mb-5',
  2: 'text-2xl font-bold text-neutral mt-8 mb-4',
  3: 'text-xl font-bold text-neutral mt-6 mb-3',
  4: 'text-lg font-semibold text-neutral mt-4 mb-2',
  5: 'text-base font-semibold text-neutral mt-3 mb-2',
  6: 'text-sm font-semibold text-neutral mt-2 mb-1',
};

const isEmbedHTML = (text: string): boolean => {
  const trimmed = text.trim();
  return trimmed.startsWith('<iframe') || (trimmed.startsWith('<') && trimmed.includes('embed'));
};

const renderEmbed = (html: string): React.ReactNode => {
  return (
    <div className="relative w-full my-6 overflow-hidden rounded-xl" style={{ paddingBottom: '46.25%', height: 0 }}>
      <div className="absolute top-0 left-0 w-full h-full" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export function richTextRenderer(content: RichTextNode[], strapiUrl: string): React.ReactNode {
  const renderText = (node: RichTextNode): React.ReactNode => {
    if (node.type !== 'text') return null;

    const text = node.text || '';

    if (isEmbedHTML(text)) return renderEmbed(text);
    if (node.code) return <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{text}</code>;
    if (node.bold && node.italic)
      return (
        <strong>
          <em>{text}</em>
        </strong>
      );
    if (node.bold) return <strong>{text}</strong>;
    if (node.italic) return <em>{text}</em>;
    if (node.underline) return <u>{text}</u>;
    if (node.strikethrough) return <s>{text}</s>;

    return text;
  };

  const renderChildren = (children?: RichTextNode[]): React.ReactNode => {
    return children?.map((child, i) => {
      const key = `child-${i}`;
      if (child.type === 'text') {
        const textContent = renderText(child);

        if (textContent && typeof textContent !== 'string') {
          return <span key={key}>{textContent}</span>;
        }
        return <span key={key}>{textContent}</span>;
      }
      if (child.type === 'link') {
        return (
          <a
            key={key}
            href={child.url}
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {renderChildren(child.children)}
          </a>
        );
      }
      return renderNode(child, i);
    });
  };

  const renderNode = (node: RichTextNode, index: number): React.ReactNode => {
    const key = `${node.type}-${index}`;

    switch (node.type) {
      case 'heading':
        return createElement(
          `h${node.level || 2}`,
          { key, className: HEADING_CLASSES[node.level || 2] },
          renderChildren(node.children)
        );

      case 'paragraph': {
        const hasOnlyEmbed =
          node.children?.length === 1 &&
          node.children[0].type === 'text' &&
          node.children[0].text?.trim().startsWith('<iframe');

        if (hasOnlyEmbed) {
          return <div key={key}>{renderChildren(node.children)}</div>;
        }

        return (
          <p key={key} className="text-muted leading-relaxed mb-4">
            {renderChildren(node.children)}
          </p>
        );
      }

      case 'list': {
        const ListTag = node.format === 'ordered' ? 'ol' : 'ul';
        const listClass =
          node.format === 'ordered'
            ? 'list-decimal list-inside mb-4 space-y-2'
            : 'list-disc list-inside mb-4 space-y-2';

        return (
          <ListTag key={key} className={listClass}>
            {node.children?.map((child, i) => renderNode(child, i))}
          </ListTag>
        );
      }

      case 'list-item':
        return (
          <li key={key} className="text-muted">
            {renderChildren(node.children)}
          </li>
        );

      case 'image': {
        const imageUrl = node.image?.url;
        if (!imageUrl) return null;
        const imageSrc = imageUrl.startsWith('http') ? imageUrl : `${strapiUrl}${imageUrl}`;

        return (
          <div
            key={key}
            className='relative w-full h-[400px] my-6 overflow-hidden rounded-xl'
          >
            <Image
              src={imageSrc}
              alt={node.text || 'Article image from Pen Manufacturing blog'}
              fill
              className='object-cover'
            />
          </div>
        );
      }

      case 'quote':
        return (
          <blockquote key={key} className="border-l-4 border-gray-300 pl-4 my-4 italic text-gray-700">
            {renderChildren(node.children)}
          </blockquote>
        );

      case 'code':
        return (
          <pre key={key} className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
            <code>{renderChildren(node.children)}</code>
          </pre>
        );

      case 'embed':
      case 'iframe':
        if (!node.html) return null;
        return <div key={key}>{renderEmbed(node.html)}</div>;

      default:
        return node.children ? <div key={key}>{renderChildren(node.children)}</div> : null;
    }
  };

  return content.map((node, index) => renderNode(node, index));
}
