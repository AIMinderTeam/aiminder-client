import Header from '@/shared/components/layout/header';
import Navigation from '@/shared/components/layout/navigation';

export default function GoalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header title="목표" />

      {children}

      <Navigation />
    </main>
  );
}
