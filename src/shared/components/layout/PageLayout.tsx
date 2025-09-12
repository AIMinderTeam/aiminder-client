import Header from '@/shared/components/layout/header';
import Navigation from '@/shared/components/layout/navigation';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  showNavigation?: boolean;
}

export default function PageLayout({ children, title, showNavigation = true }: PageLayoutProps) {
  return (
    <main className="min-h-screen">
      <Header title={title} />
      <div className={showNavigation ? 'pb-20' : ''}>{children}</div>
      {showNavigation && <Navigation />}
    </main>
  );
}
