import styles from './NotificationLayout.module.css';

import { useNavigate } from 'react-router-dom';

import { ChevronLeft, EllipsisVertical } from 'lucide-react';

export default function NotificationLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main>
      <header className={styles.NotificationLayoutHeader}>
        <button onClick={goBack} className={styles.NotificationLayoutHeaderButton}>
          <ChevronLeft size={24} />
        </button>
        <h1 className={styles.NotificationLayoutTitle}>알림</h1>
        <button onClick={goBack} className={styles.NotificationLayoutHeaderButton}>
          <EllipsisVertical size={24} />
        </button>
      </header>
      {children}
    </main>
  );
}
