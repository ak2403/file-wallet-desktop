import React from 'react';

import { MainLayout, TopLayout, ContentLayout } from './dashboard.styles';
import { Welcome } from './welcome';
import { ExistingConnections } from './existing-connections';

export const DashboardComponent: React.FC = () => {
  return (
    <MainLayout>
      <TopLayout>
        <Welcome />
      </TopLayout>

      <ContentLayout>
        <ExistingConnections />
      </ContentLayout>
    </MainLayout>
  );
};
