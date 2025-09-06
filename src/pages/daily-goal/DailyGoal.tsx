import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Badge from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import dayjs from 'dayjs';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Edit3,
  MessageSquare,
  Pause,
  Play,
  Plus,
  RotateCcw,
  Target,
  Trash2,
} from 'lucide-react';

export default function DailyGoal() {
  const { dailyGoalId } = useParams();
  const navigate = useNavigate();

  // 임시 데이터
  const [goalData, setGoalData] = useState({
    id: dailyGoalId,
    title: '유산소 30분 (걷기/러닝)',
    status: '진행',
    date: '2025-08-13',
    startTime: '07:00',
    endTime: '07:30',
    duration: 30,
    isCompleted: false,
    memo: '아침에 공원에서 조깅하기. 날씨가 좋아서 기분이 좋았다.',
    progress: 0,
    isActive: false,
  });

  const [memo, setMemo] = useState(goalData.memo);
  const [isEditing, setIsEditing] = useState(false);

  const handleComplete = () => {
    setGoalData((prev) => ({ ...prev, isCompleted: !prev.isCompleted, progress: 100 }));
  };

  const handleStart = () => {
    setGoalData((prev) => ({ ...prev, isActive: !prev.isActive }));
  };

  const handleReset = () => {
    setGoalData((prev) => ({ ...prev, progress: 0, isActive: false }));
  };

  const handleSaveMemo = () => {
    setGoalData((prev) => ({ ...prev, memo }));
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="border-b border-gray-200 bg-white px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 hover:bg-gray-100"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">일일 목표</h1>
            <p className="text-sm text-gray-500">세부 목표 관리</p>
          </div>
        </div>
      </div>

      <div className="space-y-6 px-4 py-6">
        {/* 목표 정보 카드 */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-3">
                <Badge variant={goalData.isCompleted ? 'green' : 'blue'}>{goalData.status}</Badge>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar size={14} />
                  <span>{dayjs(goalData.date).format('MM월 DD일 (ddd)')}</span>
                </div>
              </div>
              <h2 className="mb-2 text-xl font-bold text-gray-900">{goalData.title}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>
                    {goalData.startTime} - {goalData.endTime}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Target size={14} />
                  <span>{goalData.duration}분</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="rounded-lg p-2 transition-colors duration-200 hover:bg-gray-100">
                <Edit3 size={16} className="text-gray-500" />
              </button>
              <button className="rounded-lg p-2 transition-colors duration-200 hover:bg-red-50">
                <Trash2 size={16} className="text-red-500" />
              </button>
            </div>
          </div>

          {/* 진행률 */}
          <div className="mb-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">진행률</span>
              <span className="text-primary-600 text-sm font-semibold">{goalData.progress}%</span>
            </div>
            <div className="h-3 w-full rounded-full bg-gray-200">
              <div
                className="bg-primary-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${goalData.progress}%` }}
              />
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className="flex gap-3">
            {!goalData.isCompleted ? (
              <>
                <Button onClick={handleStart} variant={goalData.isActive ? 'secondary' : 'default'} className="flex-1">
                  {goalData.isActive ? (
                    <>
                      <Pause size={16} className="mr-2" />
                      일시정지
                    </>
                  ) : (
                    <>
                      <Play size={16} className="mr-2" />
                      시작하기
                    </>
                  )}
                </Button>
                <Button onClick={handleComplete} className="flex-1 bg-green-500 hover:bg-green-600">
                  <CheckCircle2 size={16} className="mr-2" />
                  완료하기
                </Button>
              </>
            ) : (
              <div className="flex w-full gap-3">
                <Button onClick={handleReset} variant="outline" className="flex-1">
                  <RotateCcw size={16} className="mr-2" />
                  다시 시작
                </Button>
                <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2">
                  <CheckCircle2 size={16} className="text-green-600" />
                  <span className="text-sm font-medium text-green-700">완료됨</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 메모 섹션 */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <MessageSquare size={18} className="text-gray-500" />
            <h3 className="font-semibold text-gray-900">메모</h3>
          </div>

          {isEditing ? (
            <div className="space-y-3">
              <textarea
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="목표에 대한 메모를 작성해보세요..."
                className="focus:ring-primary-500 h-24 w-full resize-none rounded-lg border border-gray-200 p-3 focus:border-transparent focus:ring-2"
              />
              <div className="flex gap-2">
                <Button onClick={handleSaveMemo} size="sm">
                  저장
                </Button>
                <Button
                  onClick={() => {
                    setMemo(goalData.memo);
                    setIsEditing(false);
                  }}
                  variant="outline"
                  size="sm"
                >
                  취소
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {memo ? (
                <p className="leading-relaxed text-gray-700">{memo}</p>
              ) : (
                <p className="text-gray-400 italic">메모가 없습니다.</p>
              )}
              <Button
                onClick={() => setIsEditing(true)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Edit3 size={14} />
                {memo ? '수정하기' : '메모 추가'}
              </Button>
            </div>
          )}
        </div>

        {/* 통계 섹션 */}
        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-gray-900">통계</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-blue-50 p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-sm text-blue-600">이번 주 완료</div>
            </div>
            <div className="rounded-lg bg-green-50 p-4 text-center">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-sm text-green-600">완료율</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
