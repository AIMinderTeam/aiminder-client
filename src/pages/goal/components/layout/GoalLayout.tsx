import { Link, useLocation, useNavigate } from 'react-router-dom';

import Navigation from '@/shared/components/layout/navigation';
import { Bell, ChevronLeft } from 'lucide-react';

export default function GoalLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  // const domain = pathname.split('/')[1];
  const subDomain = pathname.split('/')[2];

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main>
      <header className="sticky top-0 right-0 left-0 flex items-center justify-between gap-4 bg-white p-4">
        {subDomain && (
          <button onClick={goBack} className="h-6 w-6 border-none bg-transparent p-0">
            <ChevronLeft size={24} />
          </button>
        )}
        <h1 className="flex-1 text-xl leading-none font-semibold">목표</h1>
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
