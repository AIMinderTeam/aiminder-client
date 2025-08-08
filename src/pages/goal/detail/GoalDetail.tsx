import { GoalStatus } from '../Goal';

import styles from './GoalDetail.module.css';

import { useState } from 'react';

import dayjs from 'dayjs';
import { Check } from 'lucide-react';

const goalData = {
  id: 1,
  status: GoalStatus.PENDING,
  title: '5kg 빼기',
  endDate: '2025-12-31',
};

const maxTimelineProgress = 10;
const currentTimelineProgress = 4;

const goalItemList = [
  {
    id: 1,
    title: '유산소 30분 (걷기/러닝)',
    endDate: '2025-08-01',
    isCompleted: true,
  },
  {
    id: 2,
    title: '식단 사진 기록 (세끼)',
    endDate: '2025-08-02',
    isCompleted: false,
  },
  {
    id: 3,
    title: '유튜브 운동 영상 따라하기 (40분)',
    endDate: '2025-08-03',
    isCompleted: false,
  },
  {
    id: 4,
    title: '2L 이상 수분 섭취',
    endDate: '2025-08-04',
    isCompleted: false,
  },
];
const listData = [
  {
    dailyGoalDate: '2025-08-11',
    items: [
      {
        id: 1,
        title: '유산소 30분 (걷기/러닝)',
        isCompleted: true,
      },
      {
        id: 2,
        title: '식단 사진 기록 (세끼)',
        isCompleted: false,
      },
    ],
  },
  {
    dailyGoalDate: '2025-08-12',
    items: [
      {
        id: 3,
        title: '유튜브 운동 영상 따라하기 (40분)',
        isCompleted: false,
      },
      {
        id: 4,
        title: '2L 이상 수분 섭취',
        isCompleted: false,
      },
    ],
  },
];

export default function DetailView() {
  const [list, setList] = useState(listData);

  const handleTimelineItemComplete = (goalDate: string, contentId: number) => {
    setList(
      list.map((item) => {
        if (item.dailyGoalDate === goalDate) {
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
    <div className={styles.GoalDetailSection}>
      <div className={styles.TestImage}>이미지</div>

      <div className={styles.GoalDescriptionContainer}>
        <span className={styles.StatusBadge}>{GoalStatus.PENDING}</span>
        <span className={styles.DDay}>D-{dayjs(goalData.endDate).diff(dayjs(), 'day')}</span>
        <span className={styles.CurrentDay}>{dayjs(goalData.endDate).format('YYYY-MM-DD')}</span>
      </div>

      <div className={styles.HomeTimelineContainer}>
        <h3>{goalData.title}</h3>
        <div className={styles.HomeTimelineProgressContainer}>
          <div className={styles.HomeTimelineProgressHeader}>
            <span>{dayjs('2025-12-31').format('MM/DD')} 목표</span>
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
          {list.map((list) => {
            return (
              <div className={styles.HomeTimelineItem} key={list.dailyGoalDate}>
                <div className={styles.HomeTimelineItemHeader}>
                  <span className={styles.HomeTimelineItemHeaderTitle}>{list.dailyGoalDate}</span>
                  <div className={styles.HomeTimelineItemDivider} />
                  <span className={styles.HomeTimelineItemHeaderTitle}>
                    D-{dayjs(list.dailyGoalDate).diff(dayjs(), 'day')}
                  </span>
                </div>
                <div className={styles.HomeTimelineItemContent}>
                  {list.items.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={styles.HomeTimelineItemContentItem}
                        data-complete={item.isCompleted}
                        onClick={() => {
                          // navigate(`/daily-goal/${item.id}`);
                        }}
                      >
                        <button
                          className={styles.HomeTimelineItemContentItemIcon}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleTimelineItemComplete(list.dailyGoalDate, item.id);
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
    </div>
  );
}
