import PageLayout from '@/shared/components/layout/PageLayout';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout title="AIMinder">{children}</PageLayout>;
}
