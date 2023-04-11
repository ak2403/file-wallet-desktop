import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { HomeComponent } from '../views/screen/home';
import { LoginComponent } from '../views/screen/login';
import { SetupComponent } from '../views/screen/setup';
import { DashboardComponent } from '../views/screen/dashboard';
import { NotificationComponent } from '../views/screen/notification';
import { PendingActionComponent } from '../views/screen/pending-action';

const NoMatch = () => {
  return <>No match found</>;
};

/**
 * HashRouter is used instead of BrowserRouter due to the refresh issue.
 *
 * Refer this: https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
 *
 */

export const Navigation: React.FC = () => {
  const router = (
    <Router>
      <Routes>
        <Route path="" element={<LoginComponent />} />

        <Route path="setup" element={<SetupComponent />} />

        <Route path="home" element={<HomeComponent />}>
          <Route index element={<DashboardComponent />} />

          <Route path="pending-action" element={<PendingActionComponent />} />
          <Route path="notification" element={<NotificationComponent />} />

          <Route path="*" element={<DashboardComponent />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );

  return router;
};
