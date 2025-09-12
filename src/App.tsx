import GoalPage from './pages/goal/GoalPage';
import Test from './pages/test/Test';

import React, { Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import AiAssistantDetailPage from '@/pages/ai-assistant/AiAssistantDetailPage';
import AiAssistantDirectlyFormPage from '@/pages/ai-assistant/AiAssistantDirectlyFormPage';
import AiAssistantPage from '@/pages/ai-assistant/AiAssistantPage';
import DailyGoalPage from '@/pages/daily-goal/DailyGoalPage';
import DetailView from '@/pages/goal/detail/GoalDetail';
import HomePage from '@/pages/home/HomePage';
import LogoutPage from '@/pages/mypage/LogoutPage';
import MypageNotificationPage from '@/pages/mypage/MypageNotificationPage';
import MypagePage from '@/pages/mypage/MypagePage';
import ReviewPage from '@/pages/mypage/ReviewPage';
import WithdrawalPage from '@/pages/mypage/WithdrawalPage';
import NotificationPage from '@/pages/notification/NotificationPage';
import LoadingPage from '@/shared/components/spinner/loading-page';

const Login = React.lazy(() => import('@/pages/login/Login'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/goal',
      element: <Outlet />,
      children: [
        {
          path: '',
          element: (
            <GoalPage />
            // <GoalLayout>
            //   <Goal />
            // </GoalLayout>
          ),
        },
        {
          path: ':goalId',
          element: <DetailView />,
        },
      ],
    },
    {
      path: '/ai-assistant',
      element: <AiAssistantPage />,
    },
    {
      path: '/ai-assistant/:aiAssistantId',
      element: <AiAssistantDetailPage />,
    },
    {
      path: '/ai-assistant/new/directly',
      element: <AiAssistantDirectlyFormPage />,
    },
    {
      path: '/notification',
      element: <NotificationPage />,
    },
    {
      path: '/daily-goal/:dailyGoalId',
      element: <DailyGoalPage />,
    },
    {
      path: '/mypage',
      element: <Outlet />,
      children: [
        {
          path: '',
          element: <MypagePage />,
        },
        {
          path: 'review',
          element: <ReviewPage />,
        },
        {
          path: 'notification',
          element: <MypageNotificationPage />,
        },
        {
          path: 'logout',
          element: <LogoutPage />,
        },
        {
          path: 'withdrawal',
          element: <WithdrawalPage />,
        },
      ],
    },

    {
      path: '/test',
      element: <Test />,
    },
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/loading',
      element: <LoadingPage />,
    },

    // {
    //   path: URL.USER_MANAGEMENT,
    //   element: <Outlet />,
    //   errorElement: errorElement,
    //   loader: async () => checkAuth(USER_MANAGEMENT_ACCESS),
    //   children: [
    //     {
    //       path: '',
    //       element: <UserList />,
    //       errorElement: errorElement,
    //     },
    //     {
    //       path: 'new',
    //       element: <UserNew />,
    //       errorElement: errorElement,
    //     },
    //     {
    //       path: ':userId/edit',
    //       element: <UserEdit />,
    //       errorElement: errorElement,
    //     },
    //     {
    //       path: ':userId/view',
    //       element: <UserView />,
    //       errorElement: errorElement,
    //     },
    //   ],
    // },
  ]);

  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
