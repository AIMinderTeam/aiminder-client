import PageLayout from '@/shared/components/layout/PageLayout';

export default function AiAssistantDirectlyFormLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageLayout title="직접 목표 생성" showNavigation={false}>
      {children}
    </PageLayout>
  );
}
