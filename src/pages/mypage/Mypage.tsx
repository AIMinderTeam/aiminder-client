import styles from './Mypage.module.css';

import { Link } from 'react-router-dom';

import { ChevronRight } from 'lucide-react';

export default function Mypage() {
  return (
    <section className={styles.MypageSection}>
      <Link to="/mypage/review" className={styles.MypageLink}>
        후기 및 문의
        <ChevronRight />
      </Link>
      <Link to="/mypage/notification" className={styles.MypageLink}>
        알림설정
        <ChevronRight />
      </Link>
      <Link to="/mypage/logout" className={styles.MypageLink}>
        로그아웃
        <ChevronRight />
      </Link>
      <Link to="/mypage/withdrawal" className={styles.MypageLink}>
        회원탈퇴
        <ChevronRight />
      </Link>
    </section>
  );
}
