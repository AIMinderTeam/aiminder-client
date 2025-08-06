import styles from './AiAssistantDetail.module.css';

import { useParams } from 'react-router-dom';

import { SendHorizonal } from 'lucide-react';

export default function AIAssistantDetail() {
  const { aiAssistantId } = useParams();

  return (
    <section className={styles.AiAssistantDetailSection}>
      ai assistant detail :: {aiAssistantId}
      <div className={styles.AiAssistantDetailInputContainer}>
        <input type="text" placeholder="메시지를 입력해주세요." className={styles.AiAssistantDetailInput} />
        <button className={styles.AiAssistantDetailInputSendButton}>
          <SendHorizonal size={20} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
