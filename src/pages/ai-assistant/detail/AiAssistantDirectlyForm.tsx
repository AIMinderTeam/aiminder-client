import styles from './AiAssistantDirectlyForm.module.css';

export default function AiAssistantDirectlyForm() {
  return (
    <section className={styles.AiAssistantDirectlyFormSection}>
      <div className={styles.AiAssistantDirectlyFormImageContainer}>이미지</div>
      <div className={styles.AiAssistantDirectlyFormContentContainer}>
        <input
          type="text"
          placeholder="목표날짜를 입력해주세요."
          className={styles.AiAssistantDirectlyFormTitleInput}
        />
        <input type="text" placeholder="제목을 입력해주세요." className={styles.AiAssistantDirectlyFormTitleInput} />
        <textarea placeholder="메모를 입력해주세요." className={styles.AiAssistantDirectlyFormDescriptionInput} />
        <button className={styles.AiAssistantDirectlyFormButton}>등록하기</button>
        <div>일일목표 등록하기</div>
      </div>
    </section>
  );
}
