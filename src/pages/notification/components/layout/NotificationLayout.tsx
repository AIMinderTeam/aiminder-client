import { useNavigate } from 'react-router-dom';

import { ChevronLeft, EllipsisVertical } from 'lucide-react';

export default function NotificationLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main>
      <header className="sticky top-0 right-0 left-0 flex items-center justify-between gap-4 bg-white p-4">
        <button onClick={goBack} className="h-6 w-6 border-none bg-transparent p-0">
          <ChevronLeft size={24} />
        </button>
        <h1 className="flex-1 text-xl leading-none font-semibold">알림</h1>
        <button onClick={goBack} className="h-6 w-6 border-none bg-transparent p-0">
          <EllipsisVertical size={24} />
        </button>
      </header>
      {children}
    </main>
  );
}
