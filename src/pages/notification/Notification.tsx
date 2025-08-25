import styles from './Notification.module.css';

import dayjs from 'dayjs';
import { Bell, ChevronRight, ListTodo, Quote } from 'lucide-react';

export default function Notification() {
  return (
    <section className={styles.NotificationSection}>
      <ul className={styles.NotificationList}>
        {/*  */}
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <ListTodo size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>오늘의 할 일</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <ul className={styles.NotificationItemList}>
            <li>유산소 30분 (걷기/러닝)</li>
            <li>와이어프레임 완성</li>
          </ul>
        </li>

        {/*  */}
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Quote size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>오늘의 동기부여</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <span className={styles.NotificationItemQuote}>
            “성공은 최종 목적지가 아니라 여행 그 자체입니다. 오늘 하루도 당신의 꿈을 향해 한 걸음 더 나아가세요.”
          </span>
        </li>

        {/*  */}
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>

        {/* 
        
        
        */}

        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
        <li className={styles.NotificationItem}>
          <div className={styles.NotificationItemTitleContainer}>
            <div className={styles.NotificationItemTitle}>
              <Bell size={20} fill="#666" stroke="#666" />
              <span className={styles.NotificationItemTitleText}>AI 비서 알림</span>
            </div>
            <span className={styles.NotificationItemDate}>{dayjs().format('YYYY.MM.DD h:mm A')}</span>
          </div>
          <div className={styles.NotificationItemQuoteContainer}>
            <span className={styles.NotificationItemQuote}>
              <strong>"5kg 빼기"</strong> 목표에 대한 피드백을 확인하세요.
            </span>
            <ChevronRight size={20} stroke="#666" />
          </div>
        </li>
      </ul>
    </section>
  );
}
