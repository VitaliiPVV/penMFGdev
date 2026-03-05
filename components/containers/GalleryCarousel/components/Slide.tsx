import { RemoteMediaData } from '@/types';
import { getRemoteMediaData } from '@/lib';
import Image from 'next/image';

interface SlideProps extends React.HTMLAttributes<HTMLLIElement> {
  data: RemoteMediaData;
  imageProps: Record<string, string | number | boolean>;
  imageClassName?: string;
}

const Slide = ({ data, className, imageProps, imageClassName }: SlideProps) => {
  const { url, alt } = getRemoteMediaData(data);

  return (
    <li className={className}>
      <Image loading="eager" src={url} {...imageProps} alt={alt} className={imageClassName} unoptimized />
    </li>
  );
};

export default Slide;
