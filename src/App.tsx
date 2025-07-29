import DetailView from './pages/goal/DetailView';

import React, { Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Layout from '@/shared/components/layout/Layout';

const Login = React.lazy(() => import('@/pages/login/Login'));
const Home = React.lazy(() => import('@/pages/home/Home'));
const Goal = React.lazy(() => import('@/pages/goal/Goal'));
const AiAssistant = React.lazy(() => import('@/pages/ai-assistant/AiAssistant'));
const Notification = React.lazy(() => import('@/pages/notification/Notification'));

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
            <Layout>
              <Goal />
            </Layout>
          ),
        },
        {
          path: ':goalId',
          element: (
            <Layout>
              <DetailView />
            </Layout>
          ),
        },
      ],
    },
    {
      path: '/ai-assistant',
      element: (
        <Layout>
          <AiAssistant />
        </Layout>
      ),
    },
    {
      path: '/notification',
      element: (
        <Layout>
          <Notification />
        </Layout>
      ),
    },
    {
      path: '/',
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
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
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
