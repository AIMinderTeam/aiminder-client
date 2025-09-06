import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import dayjs from 'dayjs';
import { ArrowLeft, Calendar, CheckCircle2, Clock, Image as ImageIcon, Plus, Target } from 'lucide-react';

export default function AiAssistantDirectlyForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    endDate: '',
    memo: '',
    image: null as File | null,
  });
  const [dailyGoals, setDailyGoals] = useState<string[]>(['']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDailyGoalChange = (index: number, value: string) => {
    const newGoals = [...dailyGoals];
    newGoals[index] = value;
    setDailyGoals(newGoals);
  };

  const addDailyGoal = () => {
    setDailyGoals([...dailyGoals, '']);
  };

  const removeDailyGoal = (index: number) => {
    if (dailyGoals.length > 1) {
      setDailyGoals(dailyGoals.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // TODO: API 호출
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/goal');
    }, 2000);
  };

  const isFormValid = formData.title.trim() && formData.endDate && dailyGoals.some((goal) => goal.trim());

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="space-y-6 px-4 py-6">
        {/* 목표 이미지 */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <ImageIcon size={18} className="text-gray-500" />
            <h3 className="font-semibold text-gray-900">목표 이미지</h3>
          </div>
          <div className="flex h-48 w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50">
            <div className="text-center">
              <ImageIcon size={32} className="mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-500">이미지를 추가해보세요</p>
              <p className="text-xs text-gray-400">선택사항</p>
            </div>
          </div>
        </div>

        {/* 기본 정보 */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Target size={18} className="text-gray-500" />
            <h3 className="font-semibold text-gray-900">기본 정보</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">목표 제목 *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="달성하고 싶은 목표를 입력해주세요"
                className="focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border border-gray-200 p-3 text-base transition-colors duration-200 focus:ring-2"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">목표 완료 날짜 *</label>
              <div className="relative">
                <Calendar size={18} className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  min={dayjs().format('YYYY-MM-DD')}
                  className="focus:border-primary-500 focus:ring-primary-500/20 w-full rounded-lg border border-gray-200 p-3 pl-10 text-base transition-colors duration-200 focus:ring-2"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">메모</label>
              <textarea
                value={formData.memo}
                onChange={(e) => handleInputChange('memo', e.target.value)}
                placeholder="목표에 대한 추가 설명이나 동기를 적어보세요"
                rows={4}
                className="focus:border-primary-500 focus:ring-primary-500/20 w-full resize-none rounded-lg border border-gray-200 p-3 text-base transition-colors duration-200 focus:ring-2"
              />
            </div>
          </div>
        </div>

        {/* 일일 목표 */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-gray-500" />
              <h3 className="font-semibold text-gray-900">일일 목표</h3>
            </div>
            <Button onClick={addDailyGoal} size="sm" variant="outline" className="flex items-center gap-1">
              <Plus size={14} />
              추가
            </Button>
          </div>

          <div className="space-y-3">
            {dailyGoals.map((goal, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="bg-primary-100 text-primary-600 flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium">
                  {index + 1}
                </div>
                <input
                  type="text"
                  value={goal}
                  onChange={(e) => handleDailyGoalChange(index, e.target.value)}
                  placeholder={`일일 목표 ${index + 1}을 입력해주세요`}
                  className="focus:border-primary-500 focus:ring-primary-500/20 flex-1 rounded-lg border border-gray-200 p-3 text-base transition-colors duration-200 focus:ring-2"
                />
                {dailyGoals.length > 1 && (
                  <button
                    onClick={() => removeDailyGoal(index)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors duration-200 hover:bg-red-50 hover:text-red-500"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg bg-blue-50 p-3">
            <p className="text-sm text-blue-700">
              💡 <strong>팁:</strong> 구체적이고 측정 가능한 일일 목표를 설정하면 성공 확률이 높아집니다.
            </p>
          </div>
        </div>

        {/* 제출 버튼 */}
        <div className="pt-4">
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid || isSubmitting}
            className="bg-primary-500 hover:bg-primary-600 w-full disabled:bg-gray-300"
            size="lg"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                등록 중...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} />
                목표 등록하기
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
