import dayjs from 'dayjs';
import { Bell, ChevronRight, ListTodo, Quote } from 'lucide-react';

export default function Notification() {
  return (
    <section className="flex flex-col gap-2">
      <ul className="m-0 list-none p-0">
        {/*  */}
        <li className="flex flex-col gap-2 border-t border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ListTodo size={20} fill="#666" stroke="#666" />
              <span className="text-sm font-bold">오늘의 할 일</span>
            </div>
            <span className="text-xs text-gray-500">{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <ul className="list-disc pl-4">
            <li className="text-sm font-medium">유산소 30분 (걷기/러닝)</li>
            <li className="text-sm font-medium">와이어프레임 완성</li>
          </ul>
        </li>

        {/*  */}
        <li className="flex flex-col gap-2 border-t border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Quote size={20} fill="#666" stroke="#666" />
              <span className="text-sm font-bold">오늘의 동기부여</span>
            </div>
            <span className="text-xs text-gray-500">{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <span className="text-sm font-medium">
            “성공은 최종 목적지가 아니라 여행 그 자체입니다. 오늘 하루도 당신의 꿈을 향해 한 걸음 더 나아가세요.”
          </span>
        </li>

        {/*  */}
        <li className="flex flex-col gap-2 border-t border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell size={20} fill="#666" stroke="#666" />
              <span className="text-sm font-bold">AI 비서 알림</span>
            </div>
            <span className="text-xs text-gray-500">{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
      </ul>
    </section>
  );
}
