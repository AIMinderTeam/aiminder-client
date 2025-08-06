import styles from './AiAssistantDetailLayout.module.css';

import { useNavigate } from 'react-router-dom';

import { ChevronLeft } from 'lucide-react';

export default function AiAssistantDetailLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main>
      <header className={styles.AiAssistantDetailLayoutHeader}>
        <button onClick={goBack} className={styles.AiAssistantDetailLayoutHeaderButton}>
          <ChevronLeft size={24} />
        </button>
        <div className={styles.AiAssistantDetailLayoutImage}>이미지</div>
        <h1 className={styles.AiAssistantDetailLayoutTitle}>5kg 빼기</h1>
      </header>
      {children}
    </main>
  );
}
