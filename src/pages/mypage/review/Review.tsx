import styles from './Review.module.css';

import { Button } from '@/shared/components/ui/button';

export default function Review() {
  return (
    <section className={styles.ReviewSection}>
      <textarea name="content" placeholder="내용을 입력해주세요." className={styles.ReviewTextarea}></textarea>
      <Button className={styles.ReviewButton}>등록</Button>
    </section>
  );
}
