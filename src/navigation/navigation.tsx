import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginComponent } from '../views/login/login';
import { HomeComponent } from '../views/home/home';

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
        <Route path="/home" element={<HomeComponent />} />
      </Routes>
    </Router>
  );

  return router;
};
