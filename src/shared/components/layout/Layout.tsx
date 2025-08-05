import styles from './Layout.module.css';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { Bell, ChevronLeft, EllipsisVertical } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  const isHome = pathname === '/';
  const isNotification = pathname === '/notification';

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main>
      <header className={styles.LayoutHeader}>
        {isHome ? <HomeHeader /> : isNotification ? <NotificationHeader /> : null}
      </header>
      {children}
      {isNotification ? null : (
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
      )}
    </main>
  );

  function HomeHeader() {
    return (
      <>
        <h1 className={styles.LayoutHeaderTitle} onClick={() => navigate('/')}>
          AIMinder
        </h1>
        <Link to="/notification" className={styles.LayoutBellContainer}>
          <Bell size={24} className={styles.LayoutBellIcon} />
          <span className={styles.LayoutBellDot} />
        </Link>
      </>
    );
  }

  function NotificationHeader() {
    return (
      <>
        <button onClick={goBack} className={styles.LayoutHeaderButtonContainer}>
          <ChevronLeft size={24} />
        </button>
        <h1 className={styles.LayoutSubHeaderTitle}>알림</h1>
        <button onClick={goBack} className={styles.LayoutHeaderButtonContainer}>
          <EllipsisVertical size={24} />
        </button>
      </>
    );
  }
}
