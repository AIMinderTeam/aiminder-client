import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Login = React.lazy(() => import('@/pages/login/Login'));
const Home = React.lazy(() => import('@/pages/home/Home'));
const Goal = React.lazy(() => import('@/pages/goal/Goal'));
const AiAssistant = React.lazy(() => import('@/pages/ai-assistant/AiAssistant'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/goal',
      element: <Goal />,
    },
    {
      path: '/ai-assistant',
      element: <AiAssistant />,
    },
    {
      path: '/',
      element: <Home />,
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
