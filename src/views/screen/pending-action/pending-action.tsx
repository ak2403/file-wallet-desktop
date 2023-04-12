import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFetchPendingConnections } from '../../../hooks-action/connection';
import { Header } from '../../../ui-components/header';

import { PendingActionLayout } from './pending-action.styles';
import { ActionList } from './action-list';

export const PendingActionComponent: React.FC = () => {
  const connection = useSelector((state: any) => state.connection);
  const [notificationFetched, setNotificationFetched] = useState(false);
  const fetchPendingConnections = useFetchPendingConnections();

  const { pendingActions } = connection;

  useEffect(() => {
    (async () => {
      await fetchPendingConnections();
    })();

    setNotificationFetched(true);
  }, []);

  if (!notificationFetched) {
    return <>Loading...</>;
  }

  return (
    <PendingActionLayout>
      <Header text="Connection Request" />

      <ActionList actions={pendingActions} />
    </PendingActionLayout>
  );
};
