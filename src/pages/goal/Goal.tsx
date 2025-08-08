import styles from './Goal.module.css';

import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import dayjs from 'dayjs';
import { CalendarCheck, Plus } from 'lucide-react';

export const GoalStatus = {
  PENDING: '미완료',
  DELAYED: '지연',
  COMPLETED: '완료',
};

const GoalList = [
  {
    id: 1,
    status: GoalStatus.PENDING,
    title: '5kg 빼기',
    endDate: '2025-12-31',
  },
  {
    id: 2,
    status: GoalStatus.PENDING,
    title: 'AI 비서 출시',
    endDate: '2025-11-01',
  },
];

export default function Goal() {
  const [goalStatus, setGoalStatus] = React.useState<string>(GoalStatus.PENDING);
  const navigate = useNavigate();

  return (
    <section className={styles.GoalSection}>
      <button className={styles.FloatingButton}>
        <Plus />
      </button>
      <div>
        <button onClick={() => navigate('/ai-assistant/new')}>AI 목표 생성</button>
        <button onClick={() => navigate('/ai-assistant/new/directly')}>직접 목표 생성</button>
      </div>
      <div className={styles.GoalStatusContainer}>
        <div
          className={classNames(styles.GoalStatusItem, {
            [styles.GoalStatusItemActive]: goalStatus === GoalStatus.PENDING,
          })}
          onClick={() => setGoalStatus(GoalStatus.PENDING)}
        >
          {GoalStatus.PENDING}
        </div>
        <div
          className={classNames(styles.GoalStatusItem, {
            [styles.GoalStatusItemActive]: goalStatus === GoalStatus.DELAYED,
          })}
          onClick={() => setGoalStatus(GoalStatus.DELAYED)}
        >
          {GoalStatus.DELAYED}
        </div>
        <div
          className={classNames(styles.GoalStatusItem, {
            [styles.GoalStatusItemActive]: goalStatus === GoalStatus.COMPLETED,
          })}
          onClick={() => setGoalStatus(GoalStatus.COMPLETED)}
        >
          {GoalStatus.COMPLETED}
        </div>
      </div>
      <div className={styles.GoalListContainer}>
        {GoalList.map((goal) => (
          <div
            className={styles.GoalItem}
            key={goal.id}
            onClick={() => {
              navigate(`/goal/${goal.id}`);
            }}
          >
            <div className={styles.GoalItemImage}>이미지</div>
            <div className={styles.GoalItemContent}>
              <div className={styles.GoalItemContentDate}>
                <CalendarCheck size={12} /> D-{dayjs(goal.endDate).diff(dayjs(), 'day')}
              </div>
              <div className={styles.GoalItemTitle}>{goal.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
