import Switch from '@/shared/components/ui/switch';

export default function Notification() {
  return (
    <section className="flex flex-col gap-2 px-5 py-0">
      <div className="flex items-center justify-between rounded-sm border border-gray-200 bg-gray-50 p-3">
        <span className="text-sm font-bold">전체 알림</span> <Switch />
      </div>
      <div className="flex items-center justify-between rounded-sm border border-gray-200 bg-gray-50 p-3">
        <span className="text-sm font-bold">오늘의 할 일 알림</span> <Switch />
      </div>
      <div className="flex items-center justify-between rounded-sm border border-gray-200 bg-gray-50 p-3">
        <span className="text-sm font-bold">오늘의 동기부여 알림</span> <Switch />
      </div>
      <div className="flex items-center justify-between rounded-sm border border-gray-200 bg-gray-50 p-3">
        <span className="text-sm font-bold">AI 비서 피드백 알림</span> <Switch />
      </div>
    </section>
  );
}
