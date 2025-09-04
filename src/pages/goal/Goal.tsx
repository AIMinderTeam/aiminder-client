import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import testImage1 from '@/assets/test/image1.png';
import testImage2 from '@/assets/test/image2.png';
import testImage3 from '@/assets/test/image3.png';
import testImage4 from '@/assets/test/image4.png';
import testImage5 from '@/assets/test/image5.png';
import Badge, { type BadgeVariant } from '@/shared/components/ui/badge';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { CalendarCheck, Plus } from 'lucide-react';

export const GoalStatus = {
  PENDING: '미완료',
  INPROGRESS: '진행',
  DELAYED: '지연',
  COMPLETED: '완료',
};
const badgeVariant: Record<string, BadgeVariant> = {
  [GoalStatus.PENDING]: 'gray',
  [GoalStatus.DELAYED]: 'red',
  [GoalStatus.INPROGRESS]: 'blue',
  [GoalStatus.COMPLETED]: 'green',
};
const GoalList = [
  {
    id: 1,
    status: GoalStatus.PENDING,
    title: '5kg 빼기',
    endDate: '2025-12-31',
    image: testImage1,
  },
  {
    id: 2,
    status: GoalStatus.DELAYED,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage2,
  },
  {
    id: 3,
    status: GoalStatus.INPROGRESS,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage3,
  },
  {
    id: 4,
    status: GoalStatus.PENDING,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage4,
  },
  {
    id: 5,
    status: GoalStatus.INPROGRESS,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage2,
  },
  {
    id: 6,
    status: GoalStatus.INPROGRESS,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage5,
  },
  {
    id: 7,
    status: GoalStatus.COMPLETED,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage1,
  },
  {
    id: 8,
    status: GoalStatus.PENDING,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage2,
  },
  {
    id: 9,
    status: GoalStatus.COMPLETED,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage3,
  },
  {
    id: 10,
    status: GoalStatus.COMPLETED,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage4,
  },
  {
    id: 11,
    status: GoalStatus.INPROGRESS,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage5,
  },
  {
    id: 12,
    status: GoalStatus.DELAYED,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage2,
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
      <div className="mb-40 flex flex-col mask-b-to-blue-400">
        {GoalList.map((goal) => {
          return (
            <div
              className="flex gap-4 border-b border-gray-100 py-2"
              key={goal.id}
              onClick={() => {
                navigate(`/goal/${goal.id}`);
              }}
            >
              <img src={goal.image} alt="goal-image" className="size-20 rounded-md object-cover" />
              <div className="flex flex-1 flex-col justify-between gap-2">
                <div className="text-base font-semibold">{goal.title}</div>
                <Badge variant={badgeVariant[goal.status]}>{goal.status}</Badge>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <CalendarCheck size={12} /> D-{dayjs(goal.endDate).diff(dayjs(), 'day')}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
