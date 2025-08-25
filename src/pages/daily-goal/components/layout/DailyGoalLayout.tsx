import styles from './DailyGoalLayout.module.css';

import { useNavigate } from 'react-router-dom';

import { ChevronLeft, EllipsisVertical } from 'lucide-react';

export default function DailyGoalLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main>
      <header className={styles.DailyGoalLayoutHeader}>
        <button onClick={goBack} className={styles.DailyGoalLayoutHeaderButton}>
          <ChevronLeft size={24} />
        </button>
        <h1 className={styles.DailyGoalLayoutTitle}>일일 목표</h1>
        <button onClick={goBack} className={styles.DailyGoalLayoutHeaderButton}>
          <EllipsisVertical size={24} />
        </button>
      </header>
      {children}
    </main>
  );
}
