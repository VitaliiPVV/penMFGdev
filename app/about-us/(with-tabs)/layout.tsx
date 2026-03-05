interface WithTabsLayoutProps {
  children: React.ReactNode;
}

export default function WithTabsLayout({ children }: WithTabsLayoutProps) {
  return (
    <div className="min-h-screen bg-background dark:bg-white">
      {children}
    </div>
  );
}
