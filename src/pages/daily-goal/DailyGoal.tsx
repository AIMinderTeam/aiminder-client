import styles from './DailyGoal.module.css';

import { useParams } from 'react-router-dom';

export default function DailyGoal() {
  const { dailyGoalId } = useParams();

  console.log(dailyGoalId);

  return <section className={styles.DailyGoalSection}>DailyGoal: {dailyGoalId}</section>;
}
