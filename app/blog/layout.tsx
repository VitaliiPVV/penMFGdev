import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest news, insights, and updates from Pen Manufacturing. Stay informed about metal fabrication techniques, industry trends, and company updates.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Blog | Pen Manufacturing",
    description: "Latest news and insights from our metal fabrication experts.",
    url: "/blog"
  },
};

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-background dark:bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-11 xl:px-10 py-16">{children}</div>
    </div>
  );
}
