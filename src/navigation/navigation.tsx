import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Startup from './startup';
import { LoginComponent } from '../views/screen/login';
import Setup from '../views/screen/setup';
import Dashboard from '../views/screen/dashboard';

export const Navigation = () => {
  let defaultRoute = 'login';

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index Component={LoginComponent} />

        {/* <Route path="setup" element={Setup} />

        <Route path="dashboard" element={Dashboard} /> */}
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};
