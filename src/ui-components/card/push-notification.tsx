import React from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { PushNotificationCard, PushNotificationLayout } from './push-notification.styles';

import { Icon } from '../icon';

type PushNotificationType = {
  type: string;
  message: string;
  data?: any;
  onClose: () => void;
};

export const PushNotification: React.FC<PushNotificationType> = (props) => {
  const { type, message, data, onClose } = props;

  return (
    <PushNotificationLayout type={type}>
      <PushNotificationCard>
        <p>{message}</p>
        <Icon bgColor="none" color="#fff" icon={faClose} onClick={onClose} />
      </PushNotificationCard>
    </PushNotificationLayout>
  );
};
