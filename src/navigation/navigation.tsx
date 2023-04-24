import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import { ProtectedComponent } from '../views/screen/protected';
import { LoginComponent } from '../views/screen/login';
import { SetupComponent } from '../views/screen/setup';
import { DashboardComponent } from '../views/screen/dashboard';
import { ConnectionComponent } from '../views/screen/connection';

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

        <Route path="home" element={<ProtectedComponent />}>
          <Route index element={<DashboardComponent />} />

          <Route path="connection" element={<ConnectionComponent />} />

          <Route path="*" element={<DashboardComponent />} />
        </Route>
      </Routes>
    </Router>
  );

  return router;
};
