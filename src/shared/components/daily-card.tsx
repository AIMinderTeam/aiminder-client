import { Check } from 'lucide-react';

interface DailyCardProps {
  isCompleted: boolean;
  title: string;
  onClick: () => void;
}

export default function DailyCard({ isCompleted, title, onClick }: DailyCardProps) {
  return (
    <div
      className="border-l-primary-500 flex items-center gap-3 rounded-md border border-l-3 border-gray-200 px-3 py-2 text-sm active:bg-gray-200 data-[complete=true]:bg-gray-200 data-[complete=true]:opacity-50"
      data-complete={isCompleted}
      onClick={onClick}
    >
      <button
        className="flex size-8 items-center justify-center rounded-full border border-gray-300 active:bg-gray-200"
        onClick={(e) => {
          e.stopPropagation();
          // handleTimelineItemComplete(dailyGoalDate, item.id);
        }}
      >
        {isCompleted ? <Check strokeWidth={1.5} className="stroke-primary-700" /> : null}
      </button>

      {title}
    </div>
  );
}
