import styles from './MypageLayout.module.css';

import { Link, useNavigate } from 'react-router-dom';

import Navigation from '@/shared/components/layout/navigation';
import { Bell } from 'lucide-react';

export default function MypageLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <main>
      <header className={styles.MypageLayoutHeader}>
        <h1 className={styles.MypageLayoutHeaderTitle} onClick={() => navigate('/')}>
          회원
        </h1>
        <Link to="/notification" className={styles.MypageLayoutHeaderButton}>
          <Bell size={24} className={styles.MypageLayoutBellIcon} />
          <span className={styles.MypageLayoutBellDot} />
        </Link>
      </header>
      {children}

      <Navigation />
    </main>
  );
}
