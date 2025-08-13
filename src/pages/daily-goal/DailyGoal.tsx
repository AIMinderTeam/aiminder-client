import styles from './DailyGoal.module.css';

import { useParams } from 'react-router-dom';

export default function DailyGoal() {
  const { dailyGoalId } = useParams();

  console.log(dailyGoalId);

  return (
    <section className={styles.DailyGoalSection}>
      <div className={styles.DailyGoalTitleContainer}>
        <div className={styles.DailyGoalTitleContainerHeader}>
          <span className={styles.StatusBadge}>진행</span>
          <span>2025-08-13</span>
        </div>
        <span className={styles.DailyGoalTitleContainerTitle}>유산소 30분 (걷기/러닝)</span>
      </div>
      <div className={styles.DailyGoalMemoContainer}>메모</div>
    </section>
  );
}
