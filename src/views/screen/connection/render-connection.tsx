import React from 'react';

type RenderConnectionType = {
  children: React.ReactNode;
};

export const RenderConnection: React.FC<RenderConnectionType> = (props) => {
  const { children } = props;

  return <>{children}</>;
};
