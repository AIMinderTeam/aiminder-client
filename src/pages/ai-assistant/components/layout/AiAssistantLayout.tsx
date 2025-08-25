import styles from './AiAssistantLayout.module.css';

import { Link, useNavigate } from 'react-router-dom';

import Navigation from '@/shared/components/layout/navigation';
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

      <Navigation />
    </main>
  );
}
