import React from 'react';
import { useSelector } from 'react-redux';
import { ConnectionStatus } from '../../../types/reducer';

type RenderConnectionType = {
  children: React.ReactNode;
};

export const RenderConnection: React.FC<RenderConnectionType> = (props) => {
  const { status } = useSelector((state: any) => state.folderStructure);
  const { children } = props;

  if (status !== ConnectionStatus.Active) {
    return <p>The device is not active</p>;
  }

  return <>{children}</>;
};
