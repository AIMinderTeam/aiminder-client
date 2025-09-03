import { Link, useNavigate } from 'react-router-dom';

import Navigation from '@/shared/components/layout/navigation';
import { Bell } from 'lucide-react';

export default function MypageLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <main>
      <header className="sticky top-0 right-0 left-0 flex items-center justify-between bg-white p-4">
        <h1 className="flex-1 text-xl leading-none font-semibold" onClick={() => navigate('/')}>
          회원
        </h1>
        <Link to="/notification" className="relative">
          <Bell size={24} className="fill-gray-500 text-gray-500" />
          <span className="absolute top-0 right-px size-2 rounded-full bg-red-500" />
        </Link>
      </header>
      {children}

      <Navigation />
    </main>
  );
}
