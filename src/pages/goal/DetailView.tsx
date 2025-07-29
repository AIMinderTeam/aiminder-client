import { GoalStatus } from './Goal';

import styles from './DetailView.module.css';

import dayjs from 'dayjs';

const goalData = {
  id: 1,
  status: GoalStatus.PENDING,
  title: '5kg 빼기',
  endDate: '2025-12-31',
};

const goalItemList = [
  {
    id: 1,
    title: '유산소 30분 (걷기/러닝)',
    endDate: '2025-08-01',
  },
  {
    id: 2,
    title: '식단 사진 기록 (세끼)',
    endDate: '2025-08-16',
  },
  {
    id: 3,
    title: '유튜브 운동 영상 따라하기 (40분)',
    endDate: '2025-08-17',
  },
  {
    id: 4,
    title: '2L 이상 수분 섭취',
    endDate: '2025-09-01',
  },
];

export default function DetailView() {
  return (
    <div className={styles.DetailViewSection}>
      <div className={styles.TestImage}>이미지</div>

      <div className={styles.GoalDescriptionContainer}>
        <span className={styles.StatusBadge}>{GoalStatus.PENDING}</span>
        <span className={styles.DDay}>D-{dayjs(goalData.endDate).diff(dayjs(), 'day')}</span>
        <span className={styles.CurrentDay}>{dayjs(goalData.endDate).format('YYYY-MM-DD')}</span>
      </div>

      <h3>{goalData.title}</h3>
      <div className={styles.GoalItemListContainer}>
        {goalItemList.map((item) => (
          <div key={item.id} className={styles.GoalItem}>
            <div className={styles.GoalItemTitle}>{item.title}</div>
            <span> {dayjs(item.endDate).format('YYYY-MM-DD')}</span>
          </div>
        ))}
      </div>
      {/* <div>이미지</div> */}
    </div>
  );
}
