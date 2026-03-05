interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  listProps?: React.HTMLAttributes<HTMLDivElement>;
}

const TabList = ({ children, listProps = {}, ...props }: TabListProps) => {
  return (
    <div {...props}>
      <div role="tablist" {...listProps}>{children}</div>
    </div>
  );
};

export default TabList;
