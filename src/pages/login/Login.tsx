import styles from './Login.module.css';

import { Link, useNavigate } from 'react-router-dom';

import googleIcon from '@/assets/google.png';
import kakaoIcon from '@/assets/kakao.png';
import { Button } from '@/shared/components/ui/button';
import { Bot } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  return (
    <section className={styles.LoginSection}>
      <div className={styles.LoginLogoContainer}>
        <Bot size={100} strokeWidth={1.5} color="white" />
        <h1 className={styles.LoginLogoText}>AI MINDER</h1>
      </div>

      <div className={styles.LoginButtonContainer}>
        <div className={styles.LoginDescription}>AI와 함께 나의 루틴 계획을 공유해보세요!</div>
        <Button className={styles.LoginButton} onClick={goHome}>
          <img src={googleIcon} alt="google" className={styles.GoogleIcon} />
          <span className={styles.LoginButtonText}>구글 로그인</span>
        </Button>
        <Button className={styles.LoginButton} onClick={goHome}>
          <img src={kakaoIcon} alt="kakao" className={styles.KakaoIcon} />
          <span className={styles.LoginButtonText}>카카오 로그인</span>
        </Button>

        <div className={styles.NeedAccountContainer}>
          <div className={styles.NeedAccount}>계정이 없으신가요?</div>
          <div className={styles.NeedAccount}>회원가입하여 더 많은 서비스를 이용해보세요.</div>
          <Link to="/signup" className={styles.SignUpButton}>
            회원가입 하기
          </Link>
        </div>
      </div>
    </section>
  );
}
