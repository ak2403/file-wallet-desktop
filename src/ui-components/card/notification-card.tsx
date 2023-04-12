import React from 'react';

import { NotificationCardLayout } from './notification-card.styles';

type NotificationCardType = {
  type: string;
  message: string;
};

export const NotificationCard: React.FC<NotificationCardType> = (props) => {
  const { type, message } = props;

  return (
    <NotificationCardLayout type={type}>
      <p>{message}</p>
    </NotificationCardLayout>
  );
};
