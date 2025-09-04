import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { SendHorizonal, Sparkles } from 'lucide-react';

export default function AIAssistantDetail() {
  const { aiAssistantId } = useParams();
  const [message, setMessage] = useState('');
  console.log(aiAssistantId);

  return (
    <section className="from-primary-50 via-secondary-50 to-primary-100 flex h-screen flex-col bg-gradient-to-br">
      {/* 채팅 영역 */}
      <div className="flex-1 space-y-6 overflow-y-auto px-4 py-6 pb-40">
        {/* AI 메시지 */}
        <div className="flex max-w-[85%] items-start space-x-3">
          <div className="bg-primary-500 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full shadow-sm">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="relative">
              <div className="rounded-2xl rounded-tl-md border border-white/20 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-gray-800">
                  안녕하세요!👋 저는 당신의 AI 비서입니다. 지금부터 목표 달성 여정을 함께 설계해 봐요. 먼저, 목표를
                  명확히 파악해야 해요.🎯 이루고자 하는 목표는 무엇인가요?
                </p>
              </div>
            </div>
            <span className="ml-2 text-xs text-gray-500">오전 01:27</span>
            <div className="ml-2 flex flex-wrap gap-2">
              <button className="group rounded-full border border-white/30 bg-white/60 px-4 py-2 text-xs font-medium text-gray-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white/50 hover:bg-white/80">
                다이어트 💪
              </button>
              <button className="group rounded-full border border-white/30 bg-white/60 px-4 py-2 text-xs font-medium text-gray-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white/50 hover:bg-white/80">
                경제적 자유 💰
              </button>
              <button className="group rounded-full border border-white/30 bg-white/60 px-4 py-2 text-xs font-medium text-gray-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white/50 hover:bg-white/80">
                자격증 취득 🏅
              </button>
            </div>
          </div>
        </div>

        {/* 사용자 메시지 */}
        <div className="flex justify-end">
          <div className="flex max-w-[85%] flex-col items-end space-y-2">
            <div className="relative">
              <div className="bg-secondary-500 rounded-2xl rounded-tr-md px-4 py-3 shadow-sm">
                <p className="text-sm text-white">다이어트 💪</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">오전 01:27</span>
          </div>
        </div>

        {/* AI 메시지 2 */}
        <div className="flex max-w-[85%] items-start space-x-3">
          <div className="bg-primary-500 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full shadow-sm">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="relative">
              <div className="rounded-2xl rounded-tl-md border border-white/20 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-gray-800">
                  다이어트 목표를 위해 SMART 기준을 사용해 볼게요. 먼저 목표를 구체적으로 정해봅시다. 어떤 방식으로
                  다이어트를 하시고 싶으신가요?
                </p>
              </div>
            </div>
            <span className="ml-2 text-xs text-gray-500">오전 01:27</span>
            <div className="ml-2 flex flex-wrap gap-2">
              <button className="group rounded-full border border-white/30 bg-white/60 px-4 py-2 text-xs font-medium text-gray-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white/50 hover:bg-white/80">
                매일 30분 걷기 🚶‍♂️
              </button>
              <button className="group rounded-full border border-white/30 bg-white/60 px-4 py-2 text-xs font-medium text-gray-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white/50 hover:bg-white/80">
                식단 조절 🍽️
              </button>
              <button className="group rounded-full border border-white/30 bg-white/60 px-4 py-2 text-xs font-medium text-gray-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white/50 hover:bg-white/80">
                둘 다 🚶‍♂️🍽️
              </button>
            </div>
          </div>
        </div>

        {/* 사용자 메시지 2 */}
        <div className="flex justify-end">
          <div className="flex max-w-[85%] flex-col items-end space-y-2">
            <div className="relative">
              <div className="bg-secondary-500 rounded-2xl rounded-tr-md px-4 py-3 shadow-sm">
                <p className="text-sm text-white">둘 다 🚶‍♂️🍽️</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">오전 01:27</span>
          </div>
        </div>

        {/* AI 메시지 3 */}
        <div className="flex max-w-[85%] items-start space-x-3">
          <div className="bg-primary-500 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full shadow-sm">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col space-y-2">
            <div className="relative">
              <div className="rounded-2xl rounded-tl-md border border-white/20 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm">
                <p className="text-sm leading-relaxed text-gray-800">
                  좋아요! 다이어트를 위한 구체적인 목표를 설정해불게요. 원하는 체중 감량 목표나 신체 변화가 있나요?
                </p>
              </div>
            </div>
            <span className="ml-2 text-xs text-gray-500">오전 01:27</span>
            <div className="ml-2 flex flex-wrap gap-2">
              <button className="group rounded-full border border-white/30 bg-white/60 px-4 py-2 text-xs font-medium text-gray-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white/50 hover:bg-white/80">
                5kg 감량 🎯
              </button>
              <button className="group rounded-full border border-white/30 bg-white/60 px-4 py-2 text-xs font-medium text-gray-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white/50 hover:bg-white/80">
                체지방률 20% 이하 📉
              </button>
              <button className="group rounded-full border border-white/30 bg-white/60 px-4 py-2 text-xs font-medium text-gray-700 shadow-xs backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-white/50 hover:bg-white/80">
                둘 다 🎯📉
              </button>
            </div>
          </div>
        </div>

        {/* 사용자 메시지 3 */}
        <div className="flex justify-end">
          <div className="flex max-w-[85%] flex-col items-end space-y-2">
            <div className="relative">
              <div className="bg-secondary-500 rounded-2xl rounded-tr-md px-4 py-3 shadow-sm">
                <p className="text-sm text-white">5kg 감량 🎯</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">오전 01:27</span>
          </div>
        </div>
      </div>

      {/* 입력 영역 */}
      <div className="fixed right-0 bottom-0 left-0 border-t border-white/20 bg-white/80 p-4 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="메시지를 입력해주세요..."
              className="focus:ring-primary-500/50 w-full rounded-2xl border border-white/30 bg-white/60 px-4 py-3 text-sm placeholder-gray-500 shadow-xs backdrop-blur-sm transition-all duration-200 focus:border-transparent focus:ring-2 focus:outline-none"
            />
          </div>
          <button className="group bg-secondary-500 hover:bg-primary-600 rounded-full p-3 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95">
            <SendHorizonal className="h-5 w-5 text-white transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
