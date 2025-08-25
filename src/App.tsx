import React, { Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import AiAssistantDetailLayout from '@/pages/ai-assistant/components/layout/AiAssistantDetailLayout';
import AiAssistantDirectlyFormLayout from '@/pages/ai-assistant/components/layout/AiAssistantDirectlyFormLayout';
import AiAssistantLayout from '@/pages/ai-assistant/components/layout/AiAssistantLayout';
import AIAssistantDetail from '@/pages/ai-assistant/detail/AIAssistantDetail';
import AiAssistantDirectlyForm from '@/pages/ai-assistant/detail/AiAssistantDirectlyForm';
import DailyGoalLayout from '@/pages/daily-goal/components/layout/DailyGoalLayout';
import GoalLayout from '@/pages/goal/components/layout/GoalLayout';
import DetailView from '@/pages/goal/detail/GoalDetail';
import HomeLayout from '@/pages/home/components/layout/HomeLayout';
import MypageLayout from '@/pages/mypage/components/layout/MypageLayout';
import Logout from '@/pages/mypage/logout/Logout';
import Mypage from '@/pages/mypage/Mypage';
import MypageNotification from '@/pages/mypage/notification/Notification';
import Review from '@/pages/mypage/review/Review';
import Withdrawal from '@/pages/mypage/withdrawal/Withdrawal';
import NotificationLayout from '@/pages/notification/components/layout/NotificationLayout';
import LoadingPage from '@/shared/components/spinner/loading-page';

const Login = React.lazy(() => import('@/pages/login/Login'));
const Home = React.lazy(() => import('@/pages/home/Home'));
const Goal = React.lazy(() => import('@/pages/goal/Goal'));
const AiAssistant = React.lazy(() => import('@/pages/ai-assistant/AiAssistant'));
const Notification = React.lazy(() => import('@/pages/notification/Notification'));
const DailyGoal = React.lazy(() => import('@/pages/daily-goal/DailyGoal'));

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
            <GoalLayout>
              <Goal />
            </GoalLayout>
          ),
        },
        {
          path: ':goalId',
          element: (
            <GoalLayout>
              <DetailView />
            </GoalLayout>
          ),
        },
      ],
    },
    {
      path: '/ai-assistant',
      element: (
        <AiAssistantLayout>
          <AiAssistant />
        </AiAssistantLayout>
      ),
    },
    {
      path: '/ai-assistant/:aiAssistantId',
      element: (
        <AiAssistantDetailLayout>
          <AIAssistantDetail />
        </AiAssistantDetailLayout>
      ),
    },
    {
      path: '/ai-assistant/new/directly',
      element: (
        <AiAssistantDirectlyFormLayout>
          <AiAssistantDirectlyForm />
        </AiAssistantDirectlyFormLayout>
      ),
    },
    {
      path: '/notification',
      element: (
        <NotificationLayout>
          <Notification />
        </NotificationLayout>
      ),
    },
    {
      path: '/daily-goal/:dailyGoalId',
      element: (
        <DailyGoalLayout>
          <DailyGoal />
        </DailyGoalLayout>
      ),
    },
    {
      path: '/mypage',
      element: <Outlet />,
      children: [
        {
          path: '',
          element: (
            <MypageLayout>
              <Mypage />
            </MypageLayout>
          ),
        },
        {
          path: 'review',
          element: (
            <MypageLayout>
              <Review />
            </MypageLayout>
          ),
        },
        {
          path: 'notification',
          element: (
            <MypageLayout>
              <MypageNotification />
            </MypageLayout>
          ),
        },
        {
          path: 'logout',
          element: (
            <MypageLayout>
              <Logout />
            </MypageLayout>
          ),
        },
        {
          path: 'withdrawal',
          element: (
            <MypageLayout>
              <Withdrawal />
            </MypageLayout>
          ),
        },
      ],
    },

    {
      path: '/',
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      ),
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
