import { Link, useLocation } from 'react-router-dom';

import classNames from 'classnames';

export default function Navigation() {
  const location = useLocation();
  const { pathname } = location;
  // const domain = pathname.split('/')[1];
  // const subDomain = pathname.split('/')[2];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    } else {
      return pathname.includes(path);
    }
  };
  return (
    <nav className="fixed right-0 bottom-0 left-0 z-99 flex justify-between border-t border-gray-300 bg-white p-4">
      <Link
        to="/"
        className={classNames(
          'text-decoration-none text-base font-medium text-gray-500',
          isActive('/') && 'text-primary-500 font-semibold',
        )}
      >
        Home
      </Link>
      <Link
        to="/goal"
        className={classNames(
          'text-decoration-none text-base font-medium text-gray-500',
          isActive('/goal') && 'text-primary-500 font-semibold',
        )}
      >
        Goal
      </Link>
      <Link
        to="/ai-assistant"
        className={classNames(
          'text-decoration-none text-base font-medium text-gray-500',
          isActive('/ai-assistant') && 'text-primary-500 font-semibold',
        )}
      >
        Ai Assistant
      </Link>
      <Link
        to="/login"
        className={classNames(
          'text-decoration-none text-base font-medium text-gray-500',
          isActive('/login') && 'text-primary-500 font-semibold',
        )}
      >
        Login
      </Link>
      <Link
        to="/mypage"
        className={classNames(
          'text-decoration-none text-base font-medium text-gray-500',
          isActive('/mypage') && 'text-primary-500 font-semibold',
        )}
      >
        Mypage
      </Link>
    </nav>
  );
}
