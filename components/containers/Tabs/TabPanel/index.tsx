interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const TabPanel = ({ children, className = '', ...props }: TabPanelProps) => {
  return <div className={className} {...props}>{children}</div>;
};

export default TabPanel;
