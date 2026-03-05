import { twMerge } from 'tailwind-merge';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading = ({ children, className, as: Component = 'h1', ...props }: HeadingProps) => {
  return (
    <Component className={twMerge(className)} suppressHydrationWarning {...props}>
      {children}
    </Component>
  );
};

export default Heading;
