import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';
import dayjs from 'dayjs';
import { Bell, ListTodo, Quote, Sparkles, Trophy } from 'lucide-react';

export default function Notification() {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'todo',
      title: '오늘의 할 일',
      content: ['유산소 30분 (걷기/러닝)', '와이어프레임 완성'],
      time: dayjs().subtract(2, 'hour'),
      isRead: false,
      priority: 'high',
      linkId: null,
    },
    {
      id: 2,
      type: 'motivation',
      title: '오늘의 동기부여',
      content: '성공은 최종 목적지가 아니라 여행 그 자체입니다. 오늘 하루도 당신의 꿈을 향해 한 걸음 더 나아가세요.',
      time: dayjs().subtract(4, 'hour'),
      isRead: false,
      priority: 'medium',
      linkId: null,
    },
    {
      id: 3,
      type: 'ai',
      title: 'AI 비서 알림',
      content: '"5kg 빼기" 목표에 대한 피드백을 확인하세요.',
      time: dayjs().subtract(6, 'hour'),
      isRead: true,
      priority: 'high',
      linkId: 1,
    },
    {
      id: 4,
      type: 'achievement',
      title: '목표 달성',
      content: '축하합니다! "일일 운동" 목표를 달성했습니다.',
      time: dayjs().subtract(1, 'day'),
      isRead: true,
      priority: 'high',
      linkId: null,
    },
  ]);

  const [showAll, setShowAll] = useState(false);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'todo':
        return <ListTodo size={18} className="text-primary-600" />;
      case 'motivation':
        return <Quote size={18} className="text-secondary-600" />;
      case 'ai':
        return <Sparkles size={18} className="text-purple-600" />;
      case 'achievement':
        return <Trophy size={18} className="text-yellow-600" />;
      default:
        return <Bell size={18} className="text-gray-600" />;
    }
  };

  const markAsRead = (id: number) => {
    setNotifications((prev) => prev.map((notif) => (notif.id === id ? { ...notif, isRead: true } : notif)));
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;
  const displayNotifications = showAll ? notifications : notifications.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* 알림 목록 */}
      {displayNotifications.length > 0 ? (
        <div className="divide-y divide-gray-100">
          {displayNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`px-4 py-3 transition-colors duration-200 ${
                !notification.isRead ? 'bg-blue-50' : 'hover:bg-gray-50'
              }`}
              onClick={() => {
                markAsRead(notification.id);
                if (notification.linkId !== null) {
                  navigate(`/ai-assistant/${notification.linkId}`);
                }
              }}
            >
              <div className="flex items-start gap-3">
                <div className="relative mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                  {getNotificationIcon(notification.type)}
                  {!notification.isRead && (
                    <div className="bg-primary-500 absolute top-0 right-0 h-2 w-2 rounded-full"></div>
                  )}
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex flex-1 items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium text-gray-900">{notification.title}</p>
                    <span className="text-xs text-gray-400">{notification.time.format('MM.DD HH:mm A')}</span>
                  </div>
                  <p
                    className={classNames('mt-1 line-clamp-2 text-sm text-gray-600', {
                      underline: notification.linkId !== null,
                    })}
                  >
                    {Array.isArray(notification.content) ? notification.content.join(', ') : notification.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <Bell size={24} className="text-gray-400" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-gray-900">알림이 없습니다</h3>
          <p className="text-center text-gray-500">새로운 알림이 오면 여기에 표시됩니다.</p>
        </div>
      )}

      {/* 더보기 버튼 */}
      {notifications.length > 3 && (
        <div className="border-t border-gray-100 px-4 py-3">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full py-2 text-center text-sm text-gray-600 hover:text-gray-900"
          >
            {showAll ? '간략히 보기' : `더보기 (${notifications.length - 3}개 더)`}
          </button>
        </div>
      )}
    </div>
  );
}
