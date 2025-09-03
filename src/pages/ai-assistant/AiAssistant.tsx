import { useNavigate } from 'react-router-dom';

import { ChevronRight, Plus } from 'lucide-react';

export default function AiAssistant() {
  const navigate = useNavigate();
  return (
    <section className="px-4 py-0">
      <ul className="m-0 flex list-none flex-col gap-3 p-0">
        <li
          className="flex gap-3 rounded-lg border border-gray-200 px-5 py-4"
          onClick={() => navigate('/ai-assistant/new')}
        >
          <div className="flex size-14 items-center justify-center rounded-full bg-gray-200">
            <Plus />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="text-base font-semibold">AI로 목표 설정</span>
            <span className="text-sm text-gray-500">AI와 함께 목표를 설정해보세요.</span>
            <span className="text-xs text-stone-500">AI로 설정한 내용은 본인의 목표로 저장됩니다.</span>
          </div>
        </li>
        <li
          className="flex gap-3 rounded-lg border border-gray-200 px-5 py-4"
          onClick={() => navigate('/ai-assistant/1')}
        >
          <div className="flex size-14 items-center justify-center rounded-full bg-gray-200">이미지</div>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="text-base font-semibold">5kg 빼기</span>
            <span className="text-sm text-gray-500">오늘 하루도 당신의 꿈을 향해 한 걸음 더 나아가세요.</span>
            <span className="text-xs text-stone-500">2분 전</span>
          </div>
          <div className="ml-auto">
            <ChevronRight />
          </div>
        </li>
        <li
          className="flex gap-3 rounded-lg border border-gray-200 px-5 py-4"
          onClick={() => navigate('/ai-assistant/2')}
        >
          <div className="flex size-14 items-center justify-center rounded-full bg-gray-200">이미지</div>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <span className="text-base font-semibold">AI 비서 출시</span>
            <span className="text-sm text-gray-500">
              좋습니다! SMART 목표를 설정하였습니다. 오늘 하루도 당신의 꿈을 향해 한 걸음 더 나아가세요.
            </span>
            <span className="text-xs text-stone-500">5분 전</span>
          </div>
          <div className="ml-auto">
            <ChevronRight />
          </div>
        </li>
      </ul>
    </section>
  );
}
