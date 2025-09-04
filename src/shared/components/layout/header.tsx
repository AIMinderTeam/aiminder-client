import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Bell, ChevronLeft } from 'lucide-react';
import { Panda } from 'lucide-react';

export default function Header({ title }: { title: string }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  // const domain = pathname.split('/')[1];
  const subDomain = pathname.split('/')[2];

  const goBack = () => {
    navigate(-1);
  };

  return (
    <header className="sticky top-0 right-0 left-0 flex items-center justify-between gap-3 bg-white p-4">
      {subDomain ? (
        <button onClick={goBack} className="size-6 border-none bg-transparent p-0">
          <ChevronLeft size={24} />
        </button>
      ) : (
        <button onClick={() => navigate('/')} className="size-6 border-none bg-transparent p-0">
          <Panda size={24} className="text-primary-600" />
        </button>
      )}
      <h1 className="text-primary-600 flex-1 text-xl leading-none font-semibold">{title}</h1>
      <Link to="/notification" className="relative">
        <Bell size={24} className="fill-gray-500 text-gray-500" />
        <span className="absolute top-0 right-px size-2 rounded-full bg-red-500" />
      </Link>
    </header>
  );
}
