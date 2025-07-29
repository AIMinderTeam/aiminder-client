import styles from './Layout.module.css';

import { Link, useNavigate } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <main>
      <header className={styles.LayoutHeader}>
        <h1 className={styles.LayoutHeaderTitle} onClick={() => navigate('/')}>
          AIMinder
        </h1>
        <div>
          <Link to="/notification">알림</Link>
        </div>
      </header>
      {children}
      <nav className={styles.LayoutNav}>
        <Link to="/">Home</Link>
        <Link to="/goal">Goal</Link>
        <Link to="/ai-assistant">Ai Assistant</Link>
        <Link to="/login">Login</Link>
      </nav>
    </main>
  );
}
