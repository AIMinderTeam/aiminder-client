import PageLayout from '@/shared/components/layout/PageLayout';

export default function AiAssistantLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout title="AI 비서">{children}</PageLayout>;
}
