import React, { useState } from 'react';

import { PushNotification } from '../../../ui-components/card/push-notification';
import { useFetchPendingConnections } from '../../../hooks-action/connection';

export const Notification: React.FC = () => {
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notification, setNotification] = useState<any>({});
  const fetchPendingConnections = useFetchPendingConnections();

  //@ts-ignore
  window.bridge.doActionForNotification(async (_: any, data: any) => {
    await fetchPendingConnections();

    setShowNotification(true);
    setNotification(data);
  });

  return showNotification ? (
    <PushNotification
      type="info"
      data={notification}
      message="New connection request received from users"
      onClose={() => setShowNotification(!showNotification)}
    />
  ) : null;
};
