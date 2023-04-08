import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { MainLayout } from './dashboard.styles';
import { NavBar } from '../../section/nav-bar';

export const DashboardComponent = () => {
  const authentication = useSelector((state: any) => state.authentication);

  if (!authentication.connectionEstablished) {
    return <Navigate to="/" />;
  }

  return (
    <MainLayout>
      <NavBar />
    </MainLayout>
  );
};
