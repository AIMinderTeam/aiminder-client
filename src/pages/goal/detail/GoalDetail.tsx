import { GoalStatus } from '../Goal';

import { useState } from 'react';

import testImage from '@/assets/test/image2.png';
import dayjs from 'dayjs';
import { Check } from 'lucide-react';

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
  const [list, setList] = useState(listData);

  const handleTimelineItemComplete = (goalDate: string, contentId: number) => {
    setList(
      list.map((item) => {
        if (item.dailyGoalDate === goalDate) {
          return {
            ...item,
            items: item.items.map((item) => {
              if (item.id === contentId) {
                return { ...item, isCompleted: !item.isCompleted };
              }
              return item;
            }),
          };
        }
        return item;
      }),
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[200px] bg-gray-200">
        <img src={testImage} alt="goal-image" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-4 px-4 py-0">
        <h3>{goalData.title}</h3>
        <div className="flex items-center gap-2 text-xs">
          <span className="rounded-full bg-gray-200 px-2 py-1">{GoalStatus.PENDING}</span>
          <span className="text-gray-500">{dayjs(goalData.endDate).format('YYYY.MM.DD')}</span>
          <span className="text-gray-500">D-{dayjs(goalData.endDate).diff(dayjs(), 'day')}</span>
        </div>
        <div className="flex flex-1 flex-col gap-2">
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
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-md bg-gray-100 px-3 py-2 text-sm active:bg-gray-200 data-[complete=true]:opacity-50"
                        data-complete={item.isCompleted}
                        onClick={() => {
                          // navigate(`/daily-goal/${item.id}`);
                        }}
                      >
                        <button
                          className="flex size-8 items-center justify-center rounded-full border border-gray-300 active:bg-gray-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTimelineItemComplete(list.dailyGoalDate, item.id);
                          }}
                        >
                          {item.isCompleted ? <Check className="stroke-width-1.5" /> : null}
                        </button>

                        {item.title}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
