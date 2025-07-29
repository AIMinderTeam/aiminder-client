import styles from './Layout.module.css';

import { Link, useNavigate } from 'react-router-dom';

import { Bell } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <main>
      <header className={styles.LayoutHeader}>
        <h1 className={styles.LayoutHeaderTitle} onClick={() => navigate('/')}>
          AIMinder
        </h1>
        <Link to="/notification" className={styles.LayoutBellContainer}>
          <Bell size={24} className={styles.LayoutBellIcon} />
          <span className={styles.LayoutBellDot} />
        </Link>
      </header>
      {children}
      <nav className={styles.LayoutNav}>
        <Link to="/" className={styles.LayoutNavLink}>
          Home
        </Link>
        <Link to="/goal" className={styles.LayoutNavLink}>
          Goal
        </Link>
        <Link to="/ai-assistant" className={styles.LayoutNavLink}>
          Ai Assistant
        </Link>
        <Link to="/login" className={styles.LayoutNavLink}>
          Login
        </Link>
      </nav>
    </main>
  );
}
