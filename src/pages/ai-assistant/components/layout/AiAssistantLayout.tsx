import styles from './AiAssistantLayout.module.css';

import { Link, useNavigate } from 'react-router-dom';

import { Bell } from 'lucide-react';

export default function AiAssistantLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <main>
      <header className={styles.AiAssistantLayoutHeader}>
        <h1 className={styles.AiAssistantLayoutHeaderTitle} onClick={() => navigate('/')}>
          AI 비서
        </h1>
        <Link to="/notification" className={styles.AiAssistantLayoutHeaderButton}>
          <Bell size={24} className={styles.AiAssistantLayoutBellIcon} />
          <span className={styles.AiAssistantLayoutBellDot} />
        </Link>
      </header>
      {children}

      <nav className={styles.AiAssistantLayoutNav}>
        <Link to="/" className={styles.AiAssistantLayoutNavLink}>
          Home
        </Link>
        <Link to="/goal" className={styles.AiAssistantLayoutNavLink}>
          Goal
        </Link>
        <Link to="/ai-assistant" className={styles.AiAssistantLayoutNavLink}>
          Ai Assistant
        </Link>
        <Link to="/login" className={styles.AiAssistantLayoutNavLink}>
          Login
        </Link>
      </nav>
    </main>
  );
}
