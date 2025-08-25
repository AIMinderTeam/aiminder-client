import styles from './AiAssistantDetailLayout.module.css';

import { useNavigate, useParams } from 'react-router-dom';

import { ChevronLeft } from 'lucide-react';

export default function AiAssistantDetailLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { aiAssistantId } = useParams();
  const isNew = aiAssistantId === 'new';

  return (
    <main>
      <header className={styles.AiAssistantDetailLayoutHeader}>
        <button onClick={goBack} className={styles.AiAssistantDetailLayoutHeaderButton}>
          <ChevronLeft size={24} />
        </button>
        {isNew ? (
          <h1 className={styles.AiAssistantDetailLayoutTitle}>AI 목표 생성</h1>
        ) : (
          <>
            <div className={styles.AiAssistantDetailLayoutImage}>이미지</div>
            <h1 className={styles.AiAssistantDetailLayoutTitle}>5kg 빼기</h1>
          </>
        )}
      </header>
      {children}
    </main>
  );
}
