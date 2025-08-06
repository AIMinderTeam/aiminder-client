import React, { Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import AiAssistantDetailLayout from '@/pages/ai-assistant/components/layout/AiAssistantDetailLayout';
import AiAssistantLayout from '@/pages/ai-assistant/components/layout/AiAssistantLayout';
import AIAssistantDetail from '@/pages/ai-assistant/detail/AIAssistantDetail';
import DailyGoalLayout from '@/pages/daily-goal/components/layout/DailyGoalLayout';
import GoalLayout from '@/pages/goal/components/layout/GoalLayout';
import DetailView from '@/pages/goal/DetailView';
import HomeLayout from '@/pages/home/components/layout/HomeLayout';
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
