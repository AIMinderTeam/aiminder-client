import { useParams } from 'react-router-dom';

export default function DailyGoal() {
  const { dailyGoalId } = useParams();

  console.log(dailyGoalId);

  return (
    <section className="flex flex-col gap-2 px-5 py-0">
      <div className="flex flex-col gap-2 rounded-md border border-gray-200 p-3">
        <div className="flex items-center justify-between gap-2 px-3 py-1 text-xs">
          <span className="rounded-full bg-gray-200 px-2 py-1 text-xs">진행</span>
          <span>2025-08-13</span>
        </div>
        <span className="text-base font-medium">유산소 30분 (걷기/러닝)</span>
      </div>
      <div className="flex flex-col gap-2 rounded-md border border-gray-200 p-3">메모</div>
    </section>
  );
}
