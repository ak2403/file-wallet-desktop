import React from 'react';
import { useConnectionStatus } from '../../../hooks-action/connection';
import { ConnectionStatus } from '../../../types/reducer';

type RenderConnectionType = {
  children: React.ReactNode;
};

export const RenderConnection: React.FC<RenderConnectionType> = (props) => {
  const status = useConnectionStatus();
  const { children } = props;

  if (status === ConnectionStatus.Inactive) {
    return <p>Device not active</p>;
  }

  return <>{children}</>;
};
