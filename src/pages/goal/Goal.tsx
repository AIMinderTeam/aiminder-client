import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import testImage1 from '@/assets/test/image1.png';
import testImage2 from '@/assets/test/image2.png';
import testImage3 from '@/assets/test/image3.png';
import testImage4 from '@/assets/test/image4.png';
import testImage5 from '@/assets/test/image5.png';
import { type BadgeVariant } from '@/shared/components/ui/badge';
import dayjs from 'dayjs';
import {
  AlertTriangle,
  Calendar,
  CalendarCheck,
  CheckCircle,
  Clock,
  Play,
  Sparkles,
  Target,
  Trophy,
} from 'lucide-react';

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
    streakDays: 0,
    completedMilestones: 0,
    totalMilestones: 5,
    dailyGoalCount: 3,
    completedToday: 0,
    nextMilestone: '1kg 감량',
  },
  {
    id: 2,
    status: GoalStatus.DELAYED,
    title: '독서 습관 만들기',
    endDate: '2025-11-01',
    image: testImage2,
    progress: 30,
    streakDays: 2,
    completedMilestones: 1,
    totalMilestones: 4,
    dailyGoalCount: 2,
    completedToday: 1,
    nextMilestone: '한 달 독서',
  },
  {
    id: 3,
    status: GoalStatus.INPROGRESS,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
    image: testImage3,
    progress: 65,
    streakDays: 7,
    completedMilestones: 3,
    totalMilestones: 5,
    dailyGoalCount: 4,
    completedToday: 3,
    nextMilestone: '베타 테스트',
  },
  {
    id: 4,
    status: GoalStatus.PENDING,
    title: '운동 루틴 만들기',
    endDate: '2025-11-01',
    image: testImage4,
    progress: 0,
    streakDays: 0,
    completedMilestones: 0,
    totalMilestones: 3,
    dailyGoalCount: 2,
    completedToday: 0,
    nextMilestone: '첫 운동',
  },
  {
    id: 5,
    status: GoalStatus.INPROGRESS,
    title: '영어 공부하기',
    endDate: '2025-11-01',
    image: testImage2,
    progress: 45,
    streakDays: 5,
    completedMilestones: 2,
    totalMilestones: 6,
    dailyGoalCount: 3,
    completedToday: 2,
    nextMilestone: '기초 문법 완성',
  },
  {
    id: 6,
    status: GoalStatus.INPROGRESS,
    title: '프로젝트 완성하기',
    endDate: '2025-11-01',
    image: testImage5,
    progress: 80,
    streakDays: 12,
    completedMilestones: 4,
    totalMilestones: 5,
    dailyGoalCount: 3,
    completedToday: 3,
    nextMilestone: '최종 배포',
  },
  {
    id: 7,
    status: GoalStatus.COMPLETED,
    title: '포트폴리오 제작',
    endDate: '2025-11-01',
    image: testImage1,
    progress: 100,
    streakDays: 15,
    completedMilestones: 5,
    totalMilestones: 5,
    dailyGoalCount: 2,
    completedToday: 2,
    nextMilestone: '완료',
  },
  {
    id: 8,
    status: GoalStatus.PENDING,
    title: '새로운 기술 학습',
    endDate: '2025-11-01',
    image: testImage2,
    progress: 0,
    streakDays: 0,
    completedMilestones: 0,
    totalMilestones: 4,
    dailyGoalCount: 2,
    completedToday: 0,
    nextMilestone: '기초 학습',
  },
  {
    id: 9,
    status: GoalStatus.COMPLETED,
    title: '건강한 식단 만들기',
    endDate: '2025-11-01',
    image: testImage3,
    progress: 100,
    streakDays: 20,
    completedMilestones: 4,
    totalMilestones: 4,
    dailyGoalCount: 3,
    completedToday: 3,
    nextMilestone: '완료',
  },
  {
    id: 10,
    status: GoalStatus.COMPLETED,
    title: '일기 쓰기 습관',
    endDate: '2025-11-01',
    image: testImage4,
    progress: 100,
    streakDays: 30,
    completedMilestones: 3,
    totalMilestones: 3,
    dailyGoalCount: 1,
    completedToday: 1,
    nextMilestone: '완료',
  },
  {
    id: 11,
    status: GoalStatus.INPROGRESS,
    title: '새로운 취미 찾기',
    endDate: '2025-11-01',
    image: testImage5,
    progress: 25,
    streakDays: 3,
    completedMilestones: 1,
    totalMilestones: 4,
    dailyGoalCount: 2,
    completedToday: 1,
    nextMilestone: '취미 선택',
  },
  {
    id: 12,
    status: GoalStatus.DELAYED,
    title: '여행 계획 세우기',
    endDate: '2025-11-01',
    image: testImage2,
    progress: 15,
    streakDays: 0,
    completedMilestones: 0,
    totalMilestones: 3,
    dailyGoalCount: 2,
    completedToday: 0,
    nextMilestone: '여행지 선정',
  },
];

export default function Goal() {
  const [goalStatus, setGoalStatus] = React.useState<string>('전체');
  const navigate = useNavigate();

  const filteredGoals = goalStatus === '전체' ? GoalList : GoalList.filter((goal) => goal.status === goalStatus);

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
              const daysLeft = dayjs(goal.endDate).diff(dayjs(), 'day');

              return (
                <div
                  key={goal.id}
                  className="cursor-pointer rounded-lg bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md"
                  onClick={() => navigate(`/goal/${goal.id}`)}
                >
                  <div className="flex items-center gap-4">
                    <img src={goal.image} alt="goal-image" className="size-20 rounded-xl object-cover" />

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <h3 className="truncate font-semibold text-gray-900">{goal.title}</h3>
                      </div>

                      <div className="mb-2 flex items-center gap-2">
                        <CalendarCheck className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">
                          {daysLeft > 0 ? `D-${daysLeft}` : daysLeft === 0 ? '오늘 마감' : '마감됨'}
                        </span>
                      </div>

                      {/* 다층적 진행률 표시 */}
                      <div className="space-y-2">
                        {/* 마일스톤 진행률 바 */}
                        {/* 목표 종료일 진행률 바 */}
                        <div className="h-1 w-full rounded-full bg-gray-100">
                          <div
                            className="h-1 rounded-full bg-purple-400 transition-all duration-300"
                            style={{ width: `${(goal.completedMilestones / goal.totalMilestones) * 100}%` }}
                          />
                        </div>

                        {/* 추가 정보 섹션 */}
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <Trophy className="h-3 w-3 text-purple-500" />
                              <span>
                                {goal.completedMilestones}/{goal.totalMilestones}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>
                              오늘 {goal.completedToday}/{goal.dailyGoalCount}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
