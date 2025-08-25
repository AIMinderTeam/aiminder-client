import styles from './GoalLayout.module.css';

import { Link, useNavigate } from 'react-router-dom';

import Navigation from '@/shared/components/layout/navigation';
import { Bell } from 'lucide-react';

export default function GoalLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <main>
      <header className={styles.GoalLayoutHeader}>
        <h1 className={styles.GoalLayoutHeaderTitle} onClick={() => navigate('/')}>
          목표
        </h1>
        <Link to="/notification" className={styles.GoalLayoutHeaderButton}>
          <Bell size={24} className={styles.GoalLayoutBellIcon} />
          <span className={styles.GoalLayoutBellDot} />
        </Link>
      </header>
      {children}

      <Navigation />
    </main>
  );
}
