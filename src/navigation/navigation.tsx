import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import { LoginComponent } from '../views/screen/login';
import { SetupComponent } from '../views/screen/setup';
import { DashboardComponent } from '../views/screen/dashboard';

export const Navigation = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="" element={<LoginComponent />} />

        <Route path="setup" element={<SetupComponent />} />

        <Route path="dashboard" element={<DashboardComponent />} />
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};
