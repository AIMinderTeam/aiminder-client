import PageLayout from '@/shared/components/layout/PageLayout';

export default function GoalLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout title="목표">{children}</PageLayout>;
}
