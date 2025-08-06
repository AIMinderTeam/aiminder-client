import styles from './AIAssistantDetail.module.css';

import { useParams } from 'react-router-dom';

export default function AIAssistantDetail() {
  const { aiAssistantId } = useParams();

  return <section className={styles.AiAssistantDetailSection}>ai assistant detail :: {aiAssistantId}</section>;
}
