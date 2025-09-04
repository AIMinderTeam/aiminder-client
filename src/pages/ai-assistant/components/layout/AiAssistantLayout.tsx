import Header from '@/shared/components/layout/header';
import Navigation from '@/shared/components/layout/navigation';

export default function AiAssistantLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header title="AI 비서" />

      {children}

      <Navigation />
    </main>
  );
}
