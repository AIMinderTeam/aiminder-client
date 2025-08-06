import styles from './AiAssistant.module.css';

import { useNavigate } from 'react-router-dom';

import { ChevronRight, Plus } from 'lucide-react';

export default function AiAssistant() {
  const navigate = useNavigate();
  return (
    <section className={styles.AiAssistantSection}>
      <ul className={styles.AiAssistantList}>
        <li className={styles.AiAssistantItem}>
          <div className={styles.AiAssistantItemImage}>
            <Plus />
          </div>
          <div className={styles.AiAssistantItemContent}>
            <span className={styles.AiAssistantItemTitle}>AI로 목표 설정</span>
            <span className={styles.AiAssistantItemDescription}>AI와 함께 목표를 설정해보세요.</span>
            <span className={styles.AiAssistantItemTime}>AI로 설정한 내용은 본인의 목표로 저장됩니다.</span>
          </div>
        </li>
        <li className={styles.AiAssistantItem} onClick={() => navigate('/ai-assistant/1')}>
          <div className={styles.AiAssistantItemImage}>이미지</div>
          <div className={styles.AiAssistantItemContent}>
            <span className={styles.AiAssistantItemTitle}>5kg 빼기</span>
            <span className={styles.AiAssistantItemDescription}>
              오늘 하루도 당신의 꿈을 향해 한 걸음 더 나아가세요.
            </span>
            <span className={styles.AiAssistantItemTime}>2분 전</span>
          </div>
          <div className={styles.AiAssistantItemIcon}>
            <ChevronRight />
          </div>
        </li>
        <li className={styles.AiAssistantItem} onClick={() => navigate('/ai-assistant/2')}>
          <div className={styles.AiAssistantItemImage}>이미지</div>
          <div className={styles.AiAssistantItemContent}>
            <span className={styles.AiAssistantItemTitle}>AI 비서 출시</span>
            <span className={styles.AiAssistantItemDescription}>
              좋습니다! SMART 목표를 설정하였습니다. 오늘 하루도 당신의 꿈을 향해 한 걸음 더 나아가세요.
            </span>
            <span className={styles.AiAssistantItemTime}>5분 전</span>
          </div>
          <div className={styles.AiAssistantItemIcon}>
            <ChevronRight />
          </div>
        </li>
      </ul>
    </section>
  );
}
