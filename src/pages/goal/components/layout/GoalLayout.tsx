import styles from './GoalLayout.module.css';

import { Link, useNavigate } from 'react-router-dom';

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

      <nav className={styles.GoalLayoutNav}>
        <Link to="/" className={styles.GoalLayoutNavLink}>
          Home
        </Link>
        <Link to="/goal" className={styles.GoalLayoutNavLink}>
          Goal
        </Link>
        <Link to="/ai-assistant" className={styles.GoalLayoutNavLink}>
          Ai Assistant
        </Link>
        <Link to="/login" className={styles.GoalLayoutNavLink}>
          Login
        </Link>
      </nav>
    </main>
  );
}
