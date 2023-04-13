import React from 'react';

import { CardLayout } from './card.styles';

type CardType = {
  children: React.ReactNode;
};

export const Card: React.FC<CardType> = (props) => {
  const { children } = props;

  return <CardLayout>{children}</CardLayout>;
};
