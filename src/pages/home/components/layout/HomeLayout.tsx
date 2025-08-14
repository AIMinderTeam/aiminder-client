import styles from './HomeLayout.module.css';

import { Link, useNavigate } from 'react-router-dom';

import Navigation from '@/shared/components/layout/navigation';
import { Bell } from 'lucide-react';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <main>
      <header className={styles.HomeLayoutHeader}>
        <h1 className={styles.HomeLayoutHeaderTitle} onClick={() => navigate('/')}>
          AIMinder
        </h1>
        <Link to="/notification" className={styles.HomeLayoutHeaderButton}>
          <Bell size={24} className={styles.HomeLayoutBellIcon} />
          <span className={styles.HomeLayoutBellDot} />
        </Link>
      </header>
      {children}

      <Navigation />
    </main>
  );
}
