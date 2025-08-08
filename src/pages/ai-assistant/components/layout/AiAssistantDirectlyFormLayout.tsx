import styles from './AiAssistantDirectlyFormLayout.module.css';

import { useNavigate, useParams } from 'react-router-dom';

import { ChevronLeft } from 'lucide-react';

export default function AiAssistantDirectlyFormLayout({ children }: { children: React.ReactNode }) {
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
        <h1 className={styles.AiAssistantDetailLayoutTitle}>직접 목표 생성</h1>
      </header>
      {children}
    </main>
  );
}
