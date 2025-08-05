import styles from './Home.module.css';

import { useState } from 'react';

import dayjs from 'dayjs';
import { Check, ChevronDown } from 'lucide-react';

const days = ['일', '월', '화', '수', '목', '금', '토'];
const maxTimelineProgress = 10;
const currentTimelineProgress = 4;

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const testCurrentDate = dayjs();
  const startDayOfMonth = testCurrentDate.startOf('month').day();

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
      isToday: i === testCurrentDate.date(),
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

  return (
    <section className={styles.HomeSection}>
      <div className={styles.HomeTitle}>{testCurrentDate.format('YYYY년 M월')}</div>

      {/* 이번 주 달력 */}
      <div className={styles.HomeCalendarWeeksContainer}>
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className={styles.HomeCalendarWeek}>
            <span className={styles.HomeCalendarWeekNumber} data-day={days[index]}>
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
                className={styles.HomeCalendarItem}
                data-today={date.isToday}
                data-current-month={date.isCurrentMonth}
              >
                <span className={styles.HomeCalendarItemNumber}>{date.day}</span>
              </div>
            ))
          : weekDates.map((date, index) => (
              <div
                key={'week' + index}
                className={styles.HomeCalendarItem}
                data-today={date.isToday}
                data-current-month={date.isCurrentMonth}
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
      <div className={styles.HomeTimelineContainer}>
        <div className={styles.HomeTimelineProgressContainer}>
          <div className={styles.HomeTimelineProgressHeader}>
            <span>{dayjs().format('MM/DD')} 목표</span>
            <span>
              {currentTimelineProgress}/{maxTimelineProgress}
            </span>
          </div>
          <progress
            value={currentTimelineProgress}
            max={maxTimelineProgress}
            className={styles.HomeTimelineProgress}
          ></progress>
        </div>
        <div className={styles.HomeTimelineList}>
          {homeTimelineList.map((list) => {
            return (
              <div className={styles.HomeTimelineItem} key={list.id}>
                <div className={styles.HomeTimelineItemHeader}>
                  <span className={styles.HomeTimelineItemHeaderTitle}>{list.goal}</span>
                  <div className={styles.HomeTimelineItemDivider} />
                  <span className={styles.HomeTimelineItemHeaderTitle}>D-{list.endDate.diff(dayjs(), 'day')}</span>
                </div>
                <div className={styles.HomeTimelineItemContent}>
                  {list.items.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={styles.HomeTimelineItemContentItem}
                        data-complete={item.isCompleted}
                      >
                        <button
                          className={styles.HomeTimelineItemContentItemIcon}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTimelineItemComplete(list.id, item.id);
                          }}
                        >
                          {item.isCompleted ? <Check className={styles.HomeTimelineItemContentItemIconCheck} /> : null}
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
