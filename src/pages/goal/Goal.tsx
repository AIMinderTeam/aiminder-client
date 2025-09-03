import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import dayjs from 'dayjs';
import { CalendarCheck, Plus } from 'lucide-react';

export const GoalStatus = {
  PENDING: '미완료',
  DELAYED: '지연',
  COMPLETED: '완료',
};

const GoalList = [
  {
    id: 1,
    status: GoalStatus.PENDING,
    title: '5kg 빼기',
    endDate: '2025-12-31',
  },
  {
    id: 2,
    status: GoalStatus.PENDING,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
  },
];

export default function Goal() {
  const [goalStatus, setGoalStatus] = React.useState<string>(GoalStatus.PENDING);
  const navigate = useNavigate();

  return (
    <section className="flex flex-col gap-4 px-4 py-0">
      <button className="fixed right-5 bottom-20 z-99 flex size-10 items-center justify-center rounded-full bg-indigo-400 text-white">
        <Plus />
      </button>
      <div>
        <button
          className="rounded-md border bg-orange-400 px-5 py-2 text-sm text-white"
          onClick={() => navigate('/ai-assistant/new')}
        >
          AI 목표 생성
        </button>
        <button
          className="rounded-md border bg-blue-400 px-5 py-2 text-sm text-white"
          onClick={() => navigate('/ai-assistant/new/directly')}
        >
          직접 목표 생성
        </button>
      </div>
      <div className="flex gap-2 bg-gray-100">
        <div
          className={classNames('flex-1 p-2 text-center', {
            'bg-gray-300': goalStatus === GoalStatus.PENDING,
          })}
          onClick={() => setGoalStatus(GoalStatus.PENDING)}
        >
          {GoalStatus.PENDING}
        </div>
        <div
          className={classNames('flex-1 p-2 text-center', {
            'bg-gray-300': goalStatus === GoalStatus.DELAYED,
          })}
          onClick={() => setGoalStatus(GoalStatus.DELAYED)}
        >
          {GoalStatus.DELAYED}
        </div>
        <div
          className={classNames('flex-1 p-2 text-center', {
            'bg-gray-300': goalStatus === GoalStatus.COMPLETED,
          })}
          onClick={() => setGoalStatus(GoalStatus.COMPLETED)}
        >
          {GoalStatus.COMPLETED}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {GoalList.map((goal) => (
          <div
            className="flex gap-2 border-b border-gray-200 py-2"
            key={goal.id}
            onClick={() => {
              navigate(`/goal/${goal.id}`);
            }}
          >
            <div className="h-20 w-20 rounded-md bg-gray-500">이미지</div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <CalendarCheck size={12} /> D-{dayjs(goal.endDate).diff(dayjs(), 'day')}
              </div>
              <div className="text-base font-medium">{goal.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
