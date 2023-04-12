import React from 'react';

type CardType = {
  children: React.ReactNode;
};

export const Card: React.FC<CardType> = (props) => {
  const { children } = props;

  return <>{children}</>;
};
