import { Link } from 'react-router-dom';

import { ChevronRight } from 'lucide-react';

export default function Mypage() {
  return (
    <section className="flex flex-col gap-2 px-5 py-0">
      <Link
        to="/mypage/review"
        className="flex items-center justify-between rounded-sm border border-gray-200 bg-gray-50 p-3"
      >
        <span className="text-sm font-bold">후기 및 문의</span> <ChevronRight />
      </Link>
      <Link
        to="/mypage/notification"
        className="flex items-center justify-between rounded-sm border border-gray-200 bg-gray-50 p-3"
      >
        <span className="text-sm font-bold">알림설정</span> <ChevronRight />
      </Link>
      <Link
        to="/mypage/logout"
        className="flex items-center justify-between rounded-sm border border-gray-200 bg-gray-50 p-3"
      >
        <span className="text-sm font-bold">로그아웃</span> <ChevronRight />
      </Link>
      <Link
        to="/mypage/withdrawal"
        className="flex items-center justify-between rounded-sm border border-gray-200 bg-gray-50 p-3"
      >
        <span className="text-sm font-bold">회원탈퇴</span> <ChevronRight />
      </Link>
    </section>
  );
}
