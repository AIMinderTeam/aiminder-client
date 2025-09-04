import Header from '@/shared/components/layout/header';
import Navigation from '@/shared/components/layout/navigation';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header title="AIMinder" />

      {children}

      <Navigation />
    </main>
  );
}
