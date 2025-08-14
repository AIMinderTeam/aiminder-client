import styles from './navigation.module.css';

import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <Link to="/" className={styles.NavigationLink}>
        Home
      </Link>
      <Link to="/goal" className={styles.NavigationLink}>
        Goal
      </Link>
      <Link to="/ai-assistant" className={styles.NavigationLink}>
        Ai Assistant
      </Link>
      <Link to="/login" className={styles.NavigationLink}>
        Login
      </Link>
      <Link to="/mypage" className={styles.NavigationLink}>
        Mypage
      </Link>
    </nav>
  );
}
