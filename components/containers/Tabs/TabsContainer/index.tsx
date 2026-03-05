interface TabsContainerProps {
  children: React.ReactNode;
  className?: string;
}

const TabsContainer = ({ children, className = '' }: TabsContainerProps) => {
  return <div className={className}>
    {children}
  </div>;
};

export default TabsContainer;
