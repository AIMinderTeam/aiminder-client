import Header from '@/shared/components/layout/header';

export default function AiAssistantDirectlyFormLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header title="직접 목표 생성" />
      {children}
    </main>
  );
}
