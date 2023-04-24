import React from 'react';

import { WelcomeHeader, WelcomeLayout } from './welcome.styles';
import { ConnectionRequest } from '../../section/connection-request';

export const Welcome: React.FC = () => {
  return (
    <WelcomeLayout>
      <WelcomeHeader>Welcome User</WelcomeHeader>

      <ConnectionRequest />
    </WelcomeLayout>
  );
};
