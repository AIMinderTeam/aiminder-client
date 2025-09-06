import Switch from '@/shared/components/ui/switch';
import { Bell, CheckSquare, Heart, MessageSquare, Settings } from 'lucide-react';

export default function Notification() {
  return (
    <section className="min-h-screen bg-gray-50">
      <div className="px-4 py-4">
        {/* 전체 알림 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
            <div className="bg-primary-500 flex h-10 w-10 items-center justify-center rounded-full">
              <Bell className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">전체 알림</h3>
              <p className="text-sm text-gray-500">모든 알림을 한 번에 켜거나 끌 수 있습니다</p>
            </div>
            <Switch />
          </div>
        </div>

        {/* 알림 설정 목록 */}
        <div className="space-y-2">
          <span className="mb-3 block text-sm font-medium tracking-wide text-gray-500 uppercase">알림 유형</span>

          {/* 오늘의 할 일 알림 */}
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
            <div className="bg-secondary-100 flex h-10 w-10 items-center justify-center rounded-full">
              <CheckSquare className="text-secondary-600 h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">오늘의 할 일 알림</h3>
              <p className="text-sm text-gray-500">매일 목표 달성을 위한 할 일을 알려드립니다</p>
            </div>
            <Switch />
          </div>

          {/* 오늘의 동기부여 알림 */}
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
              <Heart className="h-5 w-5 text-pink-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">오늘의 동기부여 알림</h3>
              <p className="text-sm text-gray-500">목표 달성을 위한 격려 메시지를 보내드립니다</p>
            </div>
            <Switch />
          </div>

          {/* AI 비서 피드백 알림 */}
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
            <div className="bg-primary-100 flex h-10 w-10 items-center justify-center rounded-full">
              <MessageSquare className="text-primary-600 h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">AI 비서 피드백 알림</h3>
              <p className="text-sm text-gray-500">AI가 목표 진행 상황에 대한 피드백을 제공합니다</p>
            </div>
            <Switch />
          </div>
        </div>

        {/* 추가 설정 */}
        <div className="mt-6 space-y-2">
          <span className="mb-3 block text-sm font-medium tracking-wide text-gray-500 uppercase">추가 설정</span>

          {/* 알림 시간 설정 */}
          <div className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <Settings className="h-5 w-5 text-gray-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">알림 시간 설정</h3>
              <p className="text-sm text-gray-500">알림을 받을 시간을 설정하세요</p>
            </div>
            <div className="text-sm text-gray-500">오전 9시</div>
          </div>
        </div>

        {/* 도움말 섹션 */}
        <div className="mt-8 rounded-lg bg-blue-50 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500">
              <Bell className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="mb-1 font-medium text-blue-900">알림 설정 팁</span>
              <p className="text-sm text-blue-700">
                알림을 너무 자주 받으면 피로감을 느낄 수 있습니다. 중요한 알림만 선택하여 효과적으로 목표를
                달성해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
