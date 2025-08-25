import styles from './Notification.module.css';

import Switch from '@/shared/components/ui/switch';

export default function Notification() {
  return (
    <section className={styles.NotificationSection}>
      <div className={styles.NotificationItem}>
        전체 알림 <Switch />
      </div>
      <div className={styles.NotificationItem}>
        오늘의 할 일 알림 <Switch />
      </div>
      <div className={styles.NotificationItem}>
        오늘의 동기부여 알림 <Switch />
      </div>
      <div className={styles.NotificationItem}>
        AI 비서 피드백 알림 <Switch />
      </div>
    </section>
  );
}
