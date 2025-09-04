import { Link, matchPath, useLocation } from 'react-router-dom';

import classNames from 'classnames';
import { Bot, Goal, Home, User } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const { pathname } = location;

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    } else {
      return matchPath({ path, end: false }, pathname);
    }
  };
  return (
    <nav className="fixed right-0 bottom-0 left-0 z-99 grid grid-cols-4 px-5 py-3 backdrop-blur-lg">
      <Link
        to="/"
        className={classNames(
          'text-decoration-none flex flex-col items-center text-base font-medium text-gray-500',
          isActive('/') && 'text-primary-500',
        )}
      >
        <Home size={24} />
        <span className="text-xs font-medium">홈</span>
      </Link>
      <Link
        to="/ai-assistant"
        className={classNames(
          'text-decoration-none flex flex-col items-center text-base font-medium text-gray-500',
          isActive('/ai-assistant') && 'text-primary-500',
        )}
      >
        <Bot size={24} />
        <span className="text-xs font-medium">AI 비서</span>
      </Link>
      <Link
        to="/goal"
        className={classNames(
          'text-decoration-none flex flex-col items-center text-base font-medium text-gray-500',
          isActive('/goal') && 'text-primary-500',
        )}
      >
        <Goal size={24} />
        <span className="text-xs font-medium">목표</span>
      </Link>
      <Link
        to="/mypage"
        className={classNames(
          'text-decoration-none flex flex-col items-center text-base font-medium text-gray-500',
          isActive('/mypage') && 'text-primary-500',
        )}
      >
        <User size={24} />
        <span className="text-xs font-medium">내 정보</span>
      </Link>
    </nav>
  );
}
