import { useParams } from 'react-router-dom';

import { SendHorizonal } from 'lucide-react';

export default function AIAssistantDetail() {
  const { aiAssistantId } = useParams();
  console.log(aiAssistantId);

  return (
    <section className="flex flex-col gap-2 px-5 py-0">
      <div className="mt-4 mb-100 flex flex-col gap-10 text-sm">
        <>
          <div className="flex max-w-3/4 flex-col gap-1">
            <div className="rounded-lg rounded-tl-none border border-gray-300 bg-gray-200 p-3">
              안녕하세요!👋 저는 당신의 AI 비서입니다. 지금부터 목표 달성 여정을 함께 설계해 봐요. 먼저, 목표를 명확히
              파악해야 해요.🎯 이루고자 하는 목표는 무엇인가요?
            </div>
            <span className="text-xs text-gray-500">오전 01:27</span>
            <div className="flex flex-wrap gap-2">
              <div className="rounded-full bg-gray-200 px-3 py-1 text-xs">다이어트 💪</div>
              <div className="rounded-full bg-gray-200 px-3 py-1 text-xs">경제적 자유 💰</div>
              <div className="rounded-full bg-gray-200 px-3 py-1 text-xs">자격증 취득 🏅</div>
            </div>
          </div>
          <div className="flex max-w-3/4 flex-col gap-1 self-end">
            <div className="bg-primary-200 border-primary-300 rounded-lg rounded-tr-none border p-3">다이어트 💪</div>
            <span className="text-xs text-gray-500">오전 01:27</span>
          </div>
        </>
        <>
          <div className="flex max-w-3/4 flex-col gap-1">
            <div className="rounded-lg rounded-tl-none border border-gray-300 bg-gray-200 p-3">
              다이어트 목표를 위해 SMART 기준을 사용해 볼게요. 먼저 목표를 구체적으로 정해봅시다. 어떤 방식으로
              다이어트를 하시고 싶으신가요?
            </div>
            <span className="text-xs text-gray-500">오전 01:27</span>
            <div className="flex flex-wrap gap-2">
              <div className="rounded-full bg-gray-200 px-3 py-1 text-xs">매일 30분 걷기 🚶‍♂️</div>
              <div className="rounded-full bg-gray-200 px-3 py-1 text-xs">식단 조절 🍽️</div>
              <div className="rounded-full bg-gray-200 px-3 py-1 text-xs">둘 다 🚶‍♂️🍽️</div>
            </div>
          </div>
          <div className="flex max-w-3/4 flex-col gap-1 self-end">
            <div className="bg-primary-200 border-primary-300 rounded-lg rounded-tr-none border p-3">둘 다 🚶‍♂️🍽️</div>
            <span className="text-xs text-gray-500">오전 01:27</span>
          </div>
        </>
        <>
          <div className="flex max-w-3/4 flex-col gap-1">
            <div className="rounded-lg rounded-tl-none border border-gray-300 bg-gray-200 p-3">
              좋아요! 다이어트를 위한 구체적인 목표를 설정해불게요. 원하는 체중 감량 목표나 신체 변화가 있나요?
            </div>
            <span className="text-xs text-gray-500">오전 01:27</span>
            <div className="flex flex-wrap gap-2">
              <div className="rounded-full bg-gray-200 px-3 py-1 text-xs">5kg 감량 🎯</div>
              <div className="rounded-full bg-gray-200 px-3 py-1 text-xs">체지방률 20% 이하 📉</div>
              <div className="rounded-full bg-gray-200 px-3 py-1 text-xs">둘 다 🎯📉</div>
            </div>
          </div>
          <div className="flex max-w-3/4 flex-col gap-1 self-end">
            <div className="bg-primary-200 border-primary-300 rounded-lg rounded-tr-none border p-3">5kg 감량 🎯</div>
            <span className="text-xs text-gray-500">오전 01:27</span>
          </div>
        </>
      </div>
      <div className="fixed right-0 bottom-0 left-0 flex items-center justify-between gap-3 border-t border-gray-200 bg-white p-3">
        <input
          type="text"
          placeholder="메시지를 입력해주세요."
          className="w-full rounded-md border border-gray-200 bg-gray-100 p-3 text-base"
        />
        <button className="border-none bg-transparent p-0">
          <SendHorizonal size={20} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
