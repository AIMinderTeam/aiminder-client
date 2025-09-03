import styles from './Home.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';
import { Check, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const days = ['일', '월', '화', '수', '목', '금', '토'];
const maxTimelineProgress = 10;
const currentTimelineProgress = 4;

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [testCurrentDate, setTestCurrentDate] = useState(dayjs());
  const startDayOfMonth = testCurrentDate.startOf('month').day();

  const [selectedDate, setSelectedDate] = useState(dayjs());
  console.log(selectedDate.format('YYYY-MM-DD'));

  const [homeTimelineList, setHomeTimelineList] = useState([
    {
      id: 1,
      goal: '5kg 빼기',
      endDate: dayjs('2025-12-31'),
      items: [
        {
          id: '1-1',
          title: '유산소 30분 (걷기/러닝)',
          isCompleted: false,
        },
        {
          id: '1-2',
          title: '무산소 30분 (팔굽혀펴기/팔꿈치 펴기)',
          isCompleted: false,
        },
      ],
    },
    {
      id: 2,
      goal: 'AI 비서 출시',
      endDate: dayjs('2025-12-31'),
      items: [
        {
          id: '2-1',
          title: '와이어프레임 완성',
          isCompleted: true,
        },
        {
          id: '2-2',
          title: '프론트엔드 개발',
          isCompleted: false,
        },
      ],
    },
  ]);

  // 이번 주의 날짜들을 계산
  const weekDates = Array.from({ length: 7 }).map((_, index) => {
    const date = testCurrentDate.startOf('week').add(index, 'day');
    return {
      day: date.format('D'),
      isToday: date.isSame(testCurrentDate, 'day'),
      isCurrentMonth: date.isSame(testCurrentDate, 'month'),
    };
  });

  // 이번 달의 모든 날짜들을 계산 (이전 달 날짜 포함)
  const monthDates = [];

  // 이전 달의 마지막 날짜들 추가
  const prevMonth = testCurrentDate.subtract(1, 'month');
  const prevMonthLastDay = prevMonth.endOf('month').date();
  const daysToAddFromPrevMonth = startDayOfMonth;

  for (let i = daysToAddFromPrevMonth - 1; i >= 0; i--) {
    monthDates.push({
      day: prevMonthLastDay - i,
      isCurrentMonth: false,
      isToday: false,
    });
  }

  // 현재 달의 날짜들 추가
  for (let i = 1; i <= testCurrentDate.daysInMonth(); i++) {
    monthDates.push({
      day: i,
      isCurrentMonth: true,
      isToday: testCurrentDate.isSame(dayjs(), 'month') && i === dayjs().date(),
    });
  }

  const handleTimelineItemComplete = (itemId: number, contentId: string) => {
    setHomeTimelineList(
      homeTimelineList.map((item) => {
        if (item.id === itemId) {
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

  const handleMonthNavigation = (type: 'prev' | 'next') => {
    if (type === 'prev') {
      setTestCurrentDate(testCurrentDate.subtract(1, 'month'));
    } else {
      setTestCurrentDate(testCurrentDate.add(1, 'month'));
    }
  };

  return (
    <section className="flex flex-col gap-3 px-5 py-0">
      <div className="flex items-center gap-2">
        <button className="border-none bg-transparent p-0" onClick={() => handleMonthNavigation('prev')}>
          <ChevronLeft />
        </button>
        <span className="text-sm font-bold">{testCurrentDate.format('YYYY년 M월')}</span>
        <button className="border-none bg-transparent p-0" onClick={() => handleMonthNavigation('next')}>
          <ChevronRight />
        </button>
      </div>

      {/* 이번 주 달력 */}
      <div className="grid grid-cols-7 justify-items-center">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="flex items-center justify-center">
            <span className="text-sm font-bold" data-day={days[index]}>
              {days[index]}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.HomeCalendarDaysContainer} data-dropdown={isDropdownOpen ? 'open' : 'close'}>
        {isDropdownOpen
          ? monthDates.map((date, index) => (
              <div
                key={'month' + index}
                data-selected={selectedDate.isSame(testCurrentDate.set('date', Number(date.day)), 'day')}
                className={styles.HomeCalendarItem}
                data-today={date.isToday}
                data-current-month={date.isCurrentMonth}
                onClick={() => {
                  setSelectedDate(testCurrentDate.set('date', Number(date.day)));
                }}
              >
                <span className={styles.HomeCalendarItemNumber}>{date.day}</span>
              </div>
            ))
          : weekDates.map((date, index) => (
              <div
                key={'week' + index}
                data-selected={selectedDate.isSame(testCurrentDate.set('date', Number(date.day)), 'day')}
                className={styles.HomeCalendarItem}
                data-today={date.isToday}
                data-current-month={date.isCurrentMonth}
                onClick={() => {
                  setSelectedDate(testCurrentDate.set('date', Number(date.day)));
                }}
              >
                <span className={styles.HomeCalendarItemNumber}>{date.day}</span>
              </div>
            ))}
      </div>

      <button className={styles.HomeCalendarDropdownButton} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        <ChevronDown
          className={
            isDropdownOpen ? styles.HomeCalendarDropdownButtonIconOpen : styles.HomeCalendarDropdownButtonIconClose
          }
        />
      </button>

      {/* 
        타임라인 섹션
      */}
      <div className="flex flex-col">
        <div className="flex flex-1 flex-col">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{dayjs().format('MM/DD')} 목표</span>
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
        <div className="flex flex-col gap-2">
          {homeTimelineList.map((list) => {
            return (
              <div className="flex flex-col" key={list.id}>
                <div className="flex items-center justify-between gap-3 py-2 text-xs text-gray-500">
                  <span className="shrink-0 text-xs font-bold">{list.goal}</span>
                  <div className="h-px w-full bg-gray-200" />
                  <span className="shrink-0 text-xs font-bold">D-{list.endDate.diff(dayjs(), 'day')}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {list.items.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-md bg-gray-100 px-3 py-2 text-sm active:bg-gray-200 data-[complete=true]:opacity-50"
                        data-complete={item.isCompleted}
                        onClick={() => {
                          navigate(`/daily-goal/${item.id}`);
                        }}
                      >
                        <button
                          className="flex size-8 items-center justify-center rounded-full border border-gray-300 active:bg-gray-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTimelineItemComplete(list.id, item.id);
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
    </section>
  );
}
