import React from 'react';

import { MainLayout } from './dashboard.styles';
import { Welcome } from './welcome';

export const DashboardComponent: React.FC = () => {
  return (
    <MainLayout>
      <Welcome />
    </MainLayout>
  );
};
