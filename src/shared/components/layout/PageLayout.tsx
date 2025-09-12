import Header from '@/shared/components/layout/header';
import Navigation from '@/shared/components/layout/navigation';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  showNavigation?: boolean;
}

export default function PageLayout({ children, title, showNavigation = true }: PageLayoutProps) {
  return (
    <main>
      <Header title={title} />
      {children}
      {showNavigation && <Navigation />}
    </main>
  );
}
