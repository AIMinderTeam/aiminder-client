import PageLayout from '@/shared/components/layout/PageLayout';

export default function MypageLayout({ children }: { children: React.ReactNode }) {
  return <PageLayout title="회원">{children}</PageLayout>;
}
