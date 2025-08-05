import styles from './HomeLayout.module.css';

import { Link, useNavigate } from 'react-router-dom';

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

      <nav className={styles.HomeLayoutNav}>
        <Link to="/" className={styles.HomeLayoutNavLink}>
          Home
        </Link>
        <Link to="/goal" className={styles.HomeLayoutNavLink}>
          Goal
        </Link>
        <Link to="/ai-assistant" className={styles.HomeLayoutNavLink}>
          Ai Assistant
        </Link>
        <Link to="/login" className={styles.HomeLayoutNavLink}>
          Login
        </Link>
      </nav>
    </main>
  );
}
