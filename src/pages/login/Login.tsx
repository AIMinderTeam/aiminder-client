import styles from './Login.module.css';

import { Button } from '@/shared/components/ui/button';

export default function Login() {
  return (
    <section className={styles.LoginSection}>
      <Button>구글 로그인</Button>
      <Button>카카오 로그인</Button>
    </section>
  );
}
