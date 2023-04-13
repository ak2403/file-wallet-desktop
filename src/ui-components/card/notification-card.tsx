import React, { useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { NotificationCardLayout } from './notification-card.styles';

import { Icon } from '../icon';

type NotificationCardType = {
  type: string;
  message: string;
};

export const NotificationCard: React.FC<NotificationCardType> = (props) => {
  const { type, message } = props;
  const [showCard, setShowCard] = useState(true);

  return showCard ? (
    <NotificationCardLayout type={type}>
      <p>{message}</p>
      <Icon bgColor="none" color="#fff" icon={faClose} onClick={() => setShowCard(false)} />
    </NotificationCardLayout>
  ) : null;
};
