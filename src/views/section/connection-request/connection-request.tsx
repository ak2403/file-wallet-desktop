import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Menu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import { ConnectionRequestLayout, ConnectionRequestIcon } from './connection-request.styles';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { RequestList } from './request-list';
import { useFetchPendingConnections } from '../../../hooks-action/connection';
import { ReducerState } from '../../../types/reducer';

export const ConnectionRequest = () => {
  const pendingActions = useSelector((state: ReducerState) => state.connection.pendingActions);
  const fetchPendingConnections = useFetchPendingConnections();

  useEffect(() => {
    fetchPendingConnections();
  }, []);

  return (
    <Menu
      menuButton={
        <ConnectionRequestLayout>
          <ConnectionRequestIcon icon={faUserPlus} />
        </ConnectionRequestLayout>
      }
      transition
    >
      <RequestList requests={pendingActions} />
    </Menu>
  );
};
