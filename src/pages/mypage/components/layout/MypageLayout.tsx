import Header from '@/shared/components/layout/header';
import Navigation from '@/shared/components/layout/navigation';

export default function MypageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header title="회원" />

      {children}

      <Navigation />
    </main>
  );
}
