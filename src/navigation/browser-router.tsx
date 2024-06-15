import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/login';
import { PublicRoute } from './public-route';
import { PrivateRoute } from './private-route';
import { Setup } from '../pages/setup';
import { SideBarWrapper } from '../pages/_wrapper';
import { TransferPage } from '../pages/transfer';

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
    path: '/transfer',
    element: (
      <PrivateRoute>
        <SideBarWrapper children={<TransferPage />} title="Transfer file" />
      </PrivateRoute>
    ),
  },
]);
