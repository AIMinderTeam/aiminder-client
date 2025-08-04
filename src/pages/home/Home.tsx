import styles from './Home.module.css';

import { useState } from 'react';

import dayjs from 'dayjs';
import { ChevronDown } from 'lucide-react';

const days = ['일', '월', '화', '수', '목', '금', '토'];

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const testCurrentDate = dayjs('2025-08-04');
  const startDayOfMonth = testCurrentDate.startOf('month').day();

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
      <div className={styles.HomeTimelineContainer}>test</div>
    </section>
  );
}
