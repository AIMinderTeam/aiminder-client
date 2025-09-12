import PageLayout from '@/shared/components/layout/PageLayout';

export default function DailyGoalLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="일일 목표" showNavigation={false}>
      {children}
    </PageLayout>
  );
}
