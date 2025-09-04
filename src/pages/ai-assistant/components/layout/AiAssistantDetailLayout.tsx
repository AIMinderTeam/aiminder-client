import Header from '@/shared/components/layout/header';

export default function AiAssistantDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header title="AI 목표 생성" />

      {children}
    </main>
  );
}
