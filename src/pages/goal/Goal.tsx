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
import { AlertTriangle, CalendarCheck, CheckCircle, Clock, Filter, Play, Plus, Sparkles, Target } from 'lucide-react';

const GoalStatus = {
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

const statusIcons = {
  [GoalStatus.PENDING]: Clock,
  [GoalStatus.DELAYED]: AlertTriangle,
  [GoalStatus.INPROGRESS]: Play,
  [GoalStatus.COMPLETED]: CheckCircle,
};

const GoalList = [
  {
    id: 1,
    status: GoalStatus.PENDING,
    title: '5kg 빼기',
    endDate: '2025-12-31',
    image: testImage1,
    progress: 0,
  },
  {
    id: 2,
    status: GoalStatus.DELAYED,
    title: '독서 습관 만들기',
    endDate: '2025-11-01',
    image: testImage2,
    progress: 30,
  },
  {
    id: 3,
    status: GoalStatus.INPROGRESS,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage3,
    progress: 65,
  },
  {
    id: 4,
    status: GoalStatus.PENDING,
    title: '운동 루틴 만들기',
    endDate: '2025-11-01',
    image: testImage4,
    progress: 0,
  },
  {
    id: 5,
    status: GoalStatus.INPROGRESS,
    title: '영어 공부하기',
    endDate: '2025-11-01',
    image: testImage2,
    progress: 45,
  },
  {
    id: 6,
    status: GoalStatus.INPROGRESS,
    title: '프로젝트 완성하기',
    endDate: '2025-11-01',
    image: testImage5,
    progress: 80,
  },
  {
    id: 7,
    status: GoalStatus.COMPLETED,
    title: '포트폴리오 제작',
    endDate: '2025-11-01',
    image: testImage1,
    progress: 100,
  },
  {
    id: 8,
    status: GoalStatus.PENDING,
    title: '새로운 기술 학습',
    endDate: '2025-11-01',
    image: testImage2,
    progress: 0,
  },
  {
    id: 9,
    status: GoalStatus.COMPLETED,
    title: '건강한 식단 만들기',
    endDate: '2025-11-01',
    image: testImage3,
    progress: 100,
  },
  {
    id: 10,
    status: GoalStatus.COMPLETED,
    title: '일기 쓰기 습관',
    endDate: '2025-11-01',
    image: testImage4,
    progress: 100,
  },
  {
    id: 11,
    status: GoalStatus.INPROGRESS,
    title: '새로운 취미 찾기',
    endDate: '2025-11-01',
    image: testImage5,
    progress: 25,
  },
  {
    id: 12,
    status: GoalStatus.DELAYED,
    title: '여행 계획 세우기',
    endDate: '2025-11-01',
    image: testImage2,
    progress: 15,
  },
];

export default function Goal() {
  const [goalStatus, setGoalStatus] = React.useState<string>('전체');
  const navigate = useNavigate();

  const filteredGoals = goalStatus === '전체' ? GoalList : GoalList.filter((goal) => goal.status === goalStatus);

  const statusCounts = {
    전체: GoalList.length,
    [GoalStatus.PENDING]: GoalList.filter((g) => g.status === GoalStatus.PENDING).length,
    [GoalStatus.INPROGRESS]: GoalList.filter((g) => g.status === GoalStatus.INPROGRESS).length,
    [GoalStatus.DELAYED]: GoalList.filter((g) => g.status === GoalStatus.DELAYED).length,
    [GoalStatus.COMPLETED]: GoalList.filter((g) => g.status === GoalStatus.COMPLETED).length,
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="px-4 py-4">
        {/* 목표 생성 버튼들 */}
        <div className="mb-6 grid grid-cols-2 gap-3">
          <button
            className="bg-primary-500 hover:bg-primary-600 flex items-center gap-3 rounded-xl px-3 py-4 text-white shadow-sm transition-all duration-200 hover:shadow-md"
            onClick={() => navigate('/ai-assistant/new')}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Sparkles size={20} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">AI 목표 생성</h3>
              <p className="text-sm text-white/80">AI와 함께 목표를 설정해보세요</p>
            </div>
          </button>

          <button
            className="bg-secondary-500 hover:bg-secondary-600 flex items-center gap-3 rounded-xl px-3 py-4 text-white shadow-sm transition-all duration-200 hover:shadow-md"
            onClick={() => navigate('/ai-assistant/new/directly')}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20">
              <Target size={20} />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">직접 목표 생성</h3>
              <p className="text-sm text-white/80">직접 목표를 만들어보세요</p>
            </div>
          </button>
        </div>

        {/* 필터 섹션 */}
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">상태별 필터</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['전체', GoalStatus.PENDING, GoalStatus.INPROGRESS, GoalStatus.DELAYED, GoalStatus.COMPLETED].map(
              (status) => {
                const Icon = status === '전체' ? Target : statusIcons[status as keyof typeof statusIcons];
                return (
                  <button
                    key={status}
                    onClick={() => setGoalStatus(status)}
                    className={classNames(
                      'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200',
                      goalStatus === status
                        ? 'bg-primary-500 text-white shadow-sm'
                        : 'border border-gray-200 bg-white text-gray-600 hover:border-gray-300',
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {status}
                    <span
                      className={classNames(
                        'rounded-full px-2 py-0.5 text-xs',
                        goalStatus === status ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500',
                      )}
                    >
                      {statusCounts[status as keyof typeof statusCounts]}
                    </span>
                  </button>
                );
              },
            )}
          </div>
        </div>

        {/* 목표 리스트 */}
        <div className="space-y-3">
          {filteredGoals.length === 0 ? (
            <div className="py-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                  <Target className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-medium text-gray-600">목표가 없어요</h3>
                  <p className="text-sm text-gray-500">새로운 목표를 만들어보세요!</p>
                </div>
              </div>
            </div>
          ) : (
            filteredGoals.map((goal) => {
              const StatusIcon = statusIcons[goal.status];
              const daysLeft = dayjs(goal.endDate).diff(dayjs(), 'day');

              return (
                <div
                  key={goal.id}
                  className="cursor-pointer rounded-lg bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md"
                  onClick={() => navigate(`/goal/${goal.id}`)}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img src={goal.image} alt="goal-image" className="h-16 w-16 rounded-xl object-cover" />
                      <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
                        <StatusIcon className="h-3 w-3 text-gray-600" />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <h3 className="truncate font-semibold text-gray-900">{goal.title}</h3>
                        <Badge variant={badgeVariant[goal.status]}>{goal.status}</Badge>
                      </div>

                      <div className="mb-2 flex items-center gap-2">
                        <CalendarCheck className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">
                          {daysLeft > 0 ? `D-${daysLeft}` : daysLeft === 0 ? '오늘 마감' : '마감됨'}
                        </span>
                      </div>

                      {/* 진행률 바 */}
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div
                          className={classNames(
                            'h-2 rounded-full transition-all duration-300',
                            goal.status === GoalStatus.COMPLETED
                              ? 'bg-green-500'
                              : goal.status === GoalStatus.DELAYED
                                ? 'bg-red-500'
                                : goal.status === GoalStatus.INPROGRESS
                                  ? 'bg-blue-500'
                                  : 'bg-gray-400',
                          )}
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-xs text-gray-500">{goal.progress}% 완료</span>
                        <span className="text-xs text-gray-400">{dayjs(goal.endDate).format('MM/DD')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* 플로팅 액션 버튼 */}
      <button
        className="bg-primary-500 hover:bg-primary-600 fixed right-4 bottom-20 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-all duration-200 hover:scale-105"
        onClick={() => navigate('/ai-assistant/new')}
      >
        <Plus className="h-6 w-6" />
      </button>
    </section>
  );
}
