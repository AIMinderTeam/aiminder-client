import PageLayout from '@/shared/components/layout/PageLayout';

export default function AiAssistantDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="AI 목표 생성" showNavigation={false}>
      {children}
    </PageLayout>
  );
}
