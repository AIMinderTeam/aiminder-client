import Header from '@/shared/components/layout/header';

export default function DailyGoalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header title="일일 목표" />

      {children}
    </main>
  );
}
