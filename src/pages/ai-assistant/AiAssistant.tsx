import { useNavigate } from 'react-router-dom';

import { Bot, ChevronRight, Clock, MessageCircle, Plus, Sparkle, Sparkles } from 'lucide-react';

export default function AiAssistant() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="px-4 py-4">
        {/* 새 대화 시작 버튼 */}
        <div
          className="bg-primary-500 hover:bg-primary-600 mb-6 cursor-pointer rounded-xl p-4 text-white shadow-sm transition-all duration-200 hover:shadow-md"
          onClick={() => navigate('/ai-assistant/new')}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">새 대화 시작</h3>
              <p className="text-sm text-white/80">AI와 함께 새로운 목표를 설정해보세요</p>
            </div>
          </div>
        </div>

        {/* 대화 목록 */}
        <div className="space-y-2">
          <h2 className="mb-3 text-sm font-medium tracking-wide text-gray-500 uppercase">최근 대화</h2>

          {/* 대화 1 */}
          <div
            className="cursor-pointer rounded-lg bg-white p-4 transition-all duration-200 hover:bg-gray-50"
            onClick={() => navigate('/ai-assistant/1')}
          >
            <div className="flex items-center gap-3">
              <div className="bg-secondary-500 flex h-12 w-12 items-center justify-center rounded-full">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="truncate font-medium text-gray-900">5kg 빼기</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>2분 전</span>
                  </div>
                </div>
                <p className="truncate text-sm text-gray-600">오늘 하루도 당신의 꿈을 향해 한 걸음 더 나아가세요.</p>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* 대화 2 */}
          <div
            className="cursor-pointer rounded-lg bg-white p-4 transition-all duration-200 hover:bg-gray-50"
            onClick={() => navigate('/ai-assistant/2')}
          >
            <div className="flex items-center gap-3">
              <div className="bg-primary-500 flex h-12 w-12 items-center justify-center rounded-full">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="truncate font-medium text-gray-900">AI 비서 출시</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>5분 전</span>
                  </div>
                </div>
                <p className="truncate text-sm text-gray-600">
                  좋습니다! SMART 목표를 설정하였습니다. 오늘 하루도 당신의 꿈을 향해 한 걸음 더 나아가세요.
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* 대화 3 (예시) */}
          <div
            className="cursor-pointer rounded-lg bg-white p-4 transition-all duration-200 hover:bg-gray-50"
            onClick={() => navigate('/ai-assistant/3')}
          >
            <div className="flex items-center gap-3">
              <div className="bg-secondary-600 flex h-12 w-12 items-center justify-center rounded-full">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="truncate font-medium text-gray-900">독서 습관 만들기</h3>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>1시간 전</span>
                  </div>
                </div>
                <p className="truncate text-sm text-gray-600">매일 30분씩 책을 읽는 습관을 만들어보겠습니다.</p>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* 빈 상태 (대화가 없을 때) */}
        <div className="mt-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
              <Sparkles className="h-8 w-8 text-gray-400" />
            </div>
            <div>
              <h3 className="mb-1 text-lg font-medium text-gray-600">아직 대화가 없어요</h3>
              <p className="text-sm text-gray-500">AI와 함께 첫 번째 목표를 설정해보세요!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
