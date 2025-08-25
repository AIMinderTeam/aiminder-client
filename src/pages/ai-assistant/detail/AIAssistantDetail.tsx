import styles from './AiAssistantDetail.module.css';

import { useParams } from 'react-router-dom';

import { SendHorizonal } from 'lucide-react';

export default function AIAssistantDetail() {
  const { aiAssistantId } = useParams();
  console.log(aiAssistantId);

  return (
    <section className={styles.AiAssistantDetailSection}>
      <div className={styles.AiAssistantDetailMessageContainer}>
        <>
          <div className={styles.AiAssistantDetailMessageAiChatContainer}>
            <div className={styles.AiAssistantDetailMessageAiChatContent}>
              안녕하세요!👋 저는 당신의 AI 비서입니다. 지금부터 목표 달성 여정을 함께 설계해 봐요. 먼저, 목표를 명확히
              파악해야 해요.🎯 이루고자 하는 목표는 무엇인가요?
            </div>
            <span className={styles.AiAssistantDetailMessageAiChatTime}>오전 01:27</span>
            <div className={styles.AiAssistantDetailMessageAiChatOptionContainer}>
              <div className={styles.AiAssistantDetailMessageAiChatOption}>다이어트 💪</div>
              <div className={styles.AiAssistantDetailMessageAiChatOption}>경제적 자유 💰</div>
              <div className={styles.AiAssistantDetailMessageAiChatOption}>자격증 취득 🏅</div>
            </div>
          </div>
          <div className={styles.AiAssistantDetailMessageUserChatContainer}>
            <div className={styles.AiAssistantDetailMessageUserChatContent}>다이어트 💪</div>
            <span className={styles.AiAssistantDetailMessageUserChatTime}>오전 01:27</span>
          </div>
        </>
        <>
          <div className={styles.AiAssistantDetailMessageAiChatContainer}>
            <div className={styles.AiAssistantDetailMessageAiChatContent}>
              다이어트 목표를 위해 SMART 기준을 사용해 볼게요. 먼저 목표를 구체적으로 정해봅시다. 어떤 방식으로
              다이어트를 하시고 싶으신가요?
            </div>
            <span className={styles.AiAssistantDetailMessageAiChatTime}>오전 01:27</span>
            <div className={styles.AiAssistantDetailMessageAiChatOptionContainer}>
              <div className={styles.AiAssistantDetailMessageAiChatOption}>매일 30분 걷기 🚶‍♂️</div>
              <div className={styles.AiAssistantDetailMessageAiChatOption}>식단 조절 🍽️</div>
              <div className={styles.AiAssistantDetailMessageAiChatOption}>둘 다 🚶‍♂️🍽️</div>
            </div>
          </div>
          <div className={styles.AiAssistantDetailMessageUserChatContainer}>
            <div className={styles.AiAssistantDetailMessageUserChatContent}>둘 다 🚶‍♂️🍽️</div>
            <span className={styles.AiAssistantDetailMessageUserChatTime}>오전 01:27</span>
          </div>
        </>
        <>
          <div className={styles.AiAssistantDetailMessageAiChatContainer}>
            <div className={styles.AiAssistantDetailMessageAiChatContent}>
              좋아요! 다이어트를 위한 구체적인 목표를 설정해불게요. 원하는 체중 감량 목표나 신체 변화가 있나요?
            </div>
            <span className={styles.AiAssistantDetailMessageAiChatTime}>오전 01:27</span>
            <div className={styles.AiAssistantDetailMessageAiChatOptionContainer}>
              <div className={styles.AiAssistantDetailMessageAiChatOption}>5kg 감량 🎯</div>
              <div className={styles.AiAssistantDetailMessageAiChatOption}>체지방률 20% 이하 📉</div>
              <div className={styles.AiAssistantDetailMessageAiChatOption}>둘 다 🎯📉</div>
            </div>
          </div>
          <div className={styles.AiAssistantDetailMessageUserChatContainer}>
            <div className={styles.AiAssistantDetailMessageUserChatContent}>5kg 감량 🎯</div>
            <span className={styles.AiAssistantDetailMessageUserChatTime}>오전 01:27</span>
          </div>
        </>
      </div>
      <div className={styles.AiAssistantDetailInputContainer}>
        <input type="text" placeholder="메시지를 입력해주세요." className={styles.AiAssistantDetailInput} />
        <button className={styles.AiAssistantDetailInputSendButton}>
          <SendHorizonal size={20} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
