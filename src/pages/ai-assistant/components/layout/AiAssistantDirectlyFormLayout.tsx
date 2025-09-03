import { useNavigate } from 'react-router-dom';

import { ChevronLeft } from 'lucide-react';

export default function AiAssistantDirectlyFormLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main>
      <header className="sticky top-0 right-0 left-0 flex items-center gap-2 border-b border-gray-200 bg-white p-3">
        <button onClick={goBack} className="size-6 border-none bg-transparent p-0">
          <ChevronLeft size={24} />
        </button>
        <h1 className="flex-1 text-xl leading-none font-semibold">직접 목표 생성</h1>
      </header>
      {children}
    </main>
  );
}
