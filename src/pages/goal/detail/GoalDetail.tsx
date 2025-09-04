import { GoalStatus } from '../Goal';

import { useState } from 'react';

import testImage from '@/assets/test/image1.png';
import DailyCard from '@/shared/components/daily-card';
import Badge from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import dayjs from 'dayjs';
import { CalendarCheck, Image, Plus } from 'lucide-react';

const goalData = {
  id: 1,
  status: GoalStatus.PENDING,
  title: '5kg 빼기',
  endDate: '2025-12-31',
};

const maxTimelineProgress = 10;
const currentTimelineProgress = 4;

const listData = [
  {
    dailyGoalDate: '2025-08-11',
    items: [
      {
        id: 1,
        title: '유산소 30분 (걷기/러닝)',
        isCompleted: true,
      },
      {
        id: 2,
        title: '식단 사진 기록 (세끼)',
        isCompleted: false,
      },
    ],
  },
  {
    dailyGoalDate: '2025-09-12',
    items: [
      {
        id: 3,
        title: '유튜브 운동 영상 따라하기 (40분)',
        isCompleted: false,
      },
      {
        id: 4,
        title: '2L 이상 수분 섭취',
        isCompleted: false,
      },
    ],
  },
];

export default function DetailView() {
  const [list, _setList] = useState(listData);

  // const handleTimelineItemComplete = (goalDate: string, contentId: number) => {
  //   setList(
  //     list.map((item) => {
  //       if (item.dailyGoalDate === goalDate) {
  //         return {
  //           ...item,
  //           items: item.items.map((item) => {
  //             if (item.id === contentId) {
  //               return { ...item, isCompleted: !item.isCompleted };
  //             }
  //             return item;
  //           }),
  //         };
  //       }
  //       return item;
  //     }),
  //   );
  // };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <img src={testImage} alt="goal-image" className="h-[280px] w-full object-cover" />
        <Button size="icon" className="absolute right-4 bottom-4 shadow-sm">
          <Image size={20} />
        </Button>
      </div>

      <div className="flex flex-col gap-2 px-4 py-0">
        <h3 className="py-2 text-xl font-bold">{goalData.title}</h3>
        <div className="flex items-center gap-4 text-xs">
          <Badge variant="gray">{GoalStatus.PENDING}</Badge>
          <span className="flex items-center gap-1 text-xs text-gray-500">
            <CalendarCheck size={12} />
            {dayjs(goalData.endDate).format('YYYY.MM.DD')}
          </span>
          <span className="text-gray-500">D-{dayjs(goalData.endDate).diff(dayjs(), 'day')}</span>
        </div>
        <div className="mt-3 flex flex-1 flex-col gap-1">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{dayjs('2025-12-31').format('MM/DD')} 목표</span>
            <span>
              {currentTimelineProgress}/{maxTimelineProgress}
            </span>
          </div>
          <progress
            value={currentTimelineProgress}
            max={maxTimelineProgress}
            className="h-3 w-full appearance-none rounded-md bg-gray-200"
          ></progress>
        </div>
      </div>

      <div className="my-8 h-3 w-full bg-gray-100" />
      <div className="mb-40 flex flex-col gap-2 px-4 py-0">
        <div className="flex flex-col gap-3">
          {list.map((list) => {
            const diffCount = dayjs(list.dailyGoalDate).diff(dayjs(), 'day');

            return (
              <div key={list.dailyGoalDate}>
                <div className="flex items-center justify-between gap-3 py-2 text-xs text-gray-500">
                  <span className="shrink-0">{list.dailyGoalDate}</span>
                  <div className="h-px w-full bg-gray-200" />
                  <span className="shrink-0">
                    D{diffCount < 0 ? '+' : '-'}
                    {diffCount < 0 ? diffCount * -1 : diffCount}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  {list.items.map((item) => {
                    return (
                      <DailyCard
                        key={item.id}
                        isCompleted={item.isCompleted}
                        title={item.title}
                        onClick={() => {
                          // navigate(`/daily-goal/${item.id}`);
                        }}
                      />
                    );
                  })}
                  <Button variant="soft">
                    <Plus /> 직접 추가
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
