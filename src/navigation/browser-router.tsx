import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/login';
import { Dashboard } from '../pages/dashboard';
import { PublicRoute } from './public-route';
import { PrivateRoute } from './private-route';
import { Setup } from '../pages/setup';
import { SideBarWrapper } from '../pages/_wrapper';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: '/setup',
    element: <Setup />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <SideBarWrapper children={<Dashboard />} />
      </PrivateRoute>
    ),
  },
]);
