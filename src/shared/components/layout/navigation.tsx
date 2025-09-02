import styles from './navigation.module.css';

import { Link, useLocation } from 'react-router-dom';

import classNames from 'classnames';

export default function Navigation() {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    } else {
      return pathname.includes(path);
    }
  };
  return (
    <nav className={styles.Navigation}>
      <Link to="/" className={classNames(styles.NavigationLink, isActive('/') && styles.NavigationLinkActive)}>
        Home
      </Link>
      <Link to="/goal" className={classNames(styles.NavigationLink, isActive('/goal') && styles.NavigationLinkActive)}>
        Goal
      </Link>
      <Link
        to="/ai-assistant"
        className={classNames(styles.NavigationLink, isActive('/ai-assistant') && styles.NavigationLinkActive)}
      >
        Ai Assistant
      </Link>
      <Link
        to="/login"
        className={classNames(styles.NavigationLink, isActive('/login') && styles.NavigationLinkActive)}
      >
        Login
      </Link>
      <Link
        to="/mypage"
        className={classNames(styles.NavigationLink, isActive('/mypage') && styles.NavigationLinkActive)}
      >
        Mypage
      </Link>
    </nav>
  );
}
