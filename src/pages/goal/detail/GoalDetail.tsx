import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import testImage from '@/assets/test/image1.png';
import DailyCard from '@/shared/components/daily-card';
import Badge from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import dayjs from 'dayjs';
import { ArrowLeft, CalendarCheck, CheckCircle2, Clock, Image, Plus, Target } from 'lucide-react';

// GoalStatus는 Goal.tsx에서 export되지 않으므로 여기서 정의
const GoalStatus = {
  PENDING: '미완료',
  INPROGRESS: '진행',
  DELAYED: '지연',
  COMPLETED: '완료',
};

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
  const navigate = useNavigate();

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

  const completedItems = list.reduce((total, day) => total + day.items.filter((item) => item.isCompleted).length, 0);
  const totalItems = list.reduce((total, day) => total + day.items.length, 0);
  const progressPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* 뒤로가기 버튼이 있는 헤더 */}
      <div className="relative">
        <img src={testImage} alt="goal-image" className="h-[280px] w-full object-cover" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/30"
        >
          <ArrowLeft size={16} />
        </button>
        <Button size="icon" className="absolute right-4 bottom-4 shadow-sm">
          <Image size={20} />
        </Button>
      </div>

      {/* 목표 정보 섹션 */}
      <div className="bg-white px-4 py-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-gray-900">{goalData.title}</h3>

          <div className="flex items-center gap-4 text-xs">
            <Badge variant="gray">{GoalStatus.PENDING}</Badge>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <CalendarCheck size={12} />
              {dayjs(goalData.endDate).format('YYYY.MM.DD')}
            </span>
            <span className="text-gray-500">D-{dayjs(goalData.endDate).diff(dayjs(), 'day')}</span>
          </div>

          {/* 전체 진행률 */}
          <div className="mt-3 flex flex-1 flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-gray-700">전체 진행률</span>
              <span className="text-primary-600 text-sm font-semibold">{progressPercentage}%</span>
            </div>
            <div className="h-3 w-full rounded-full bg-gray-200">
              <div
                className="bg-primary-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{completedItems}개 완료</span>
              <span>{totalItems}개 중</span>
            </div>
          </div>
        </div>
      </div>

      {/* 구분선 */}
      <div className="h-3 w-full bg-gray-100" />

      {/* 일일 목표 섹션 */}
      <div className="flex-1 bg-white px-4 py-4">
        <div className="mb-4 flex items-center gap-2">
          <Target className="h-4 w-4 text-gray-500" />
          <h4 className="font-medium text-gray-900">일일 목표</h4>
        </div>

        <div className="flex flex-col gap-4">
          {list.length === 0 ? (
            <div className="py-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Clock className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <h5 className="mb-1 font-medium text-gray-600">일일 목표가 없어요</h5>
                  <p className="text-sm text-gray-500">새로운 일일 목표를 추가해보세요</p>
                </div>
              </div>
            </div>
          ) : (
            list.map((dayData) => {
              const diffCount = dayjs(dayData.dailyGoalDate).diff(dayjs(), 'day');
              const completedCount = dayData.items.filter((item) => item.isCompleted).length;
              const totalCount = dayData.items.length;
              const dayProgress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

              return (
                <div key={dayData.dailyGoalDate} className="rounded-lg border border-gray-200 p-4">
                  {/* 날짜 헤더 */}
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-gray-900">
                        {dayjs(dayData.dailyGoalDate).format('MM월 DD일')}
                      </span>
                      <span className="text-xs text-gray-500">({dayjs(dayData.dailyGoalDate).format('ddd')})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        D{diffCount < 0 ? '+' : '-'}
                        {diffCount < 0 ? diffCount * -1 : diffCount}
                      </span>
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <span className="text-xs text-gray-600">
                          {completedCount}/{totalCount}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 일일 진행률 */}
                  <div className="mb-3">
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div
                        className="h-2 rounded-full bg-green-500 transition-all duration-300"
                        style={{ width: `${dayProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* 일일 목표 아이템들 */}
                  <div className="flex flex-col gap-2">
                    {dayData.items.map((item) => (
                      <DailyCard
                        key={item.id}
                        isCompleted={item.isCompleted}
                        title={item.title}
                        onClick={() => handleTimelineItemComplete(dayData.dailyGoalDate, item.id)}
                      />
                    ))}

                    <Button
                      variant="soft"
                      className="mt-2"
                      onClick={() => {
                        // 일일 목표 추가 로직
                      }}
                    >
                      <Plus size={16} /> 직접 추가
                    </Button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
