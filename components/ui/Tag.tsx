interface TagProps {
  props?: React.HTMLAttributes<HTMLDivElement>;
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ props, children }) => {
  return (
    <div className="inline-block bg-inverse-subtle hover:bg-eleveted text-neutral text-[12px] md:text-sm font-medium px-2 py-1 rounded-full truncate transition-all duration-500" {...props}>
      {children}
    </div>
  );
};

export default Tag;
