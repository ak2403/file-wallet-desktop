import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import { RequestList } from './request-list';
import { usePendingConnections, useFetchPendingConnections } from '../../../hooks-action/connection';

import { ConnectionRequestLayout, ConnectionRequestIcon, NoList } from './connection-request.styles';

export const ConnectionRequest = () => {
  const pendingConnections = usePendingConnections();
  const fetchPendingConnections = useFetchPendingConnections();

  useEffect(() => {
    fetchPendingConnections();
  }, []);

  return (
    <Menu
      menuButton={
        <ConnectionRequestLayout data-testid="connection-request-icon">
          <ConnectionRequestIcon icon={faUserPlus} />
        </ConnectionRequestLayout>
      }
      transition
    >
      {pendingConnections.length ? (
        pendingConnections.map((pending) => (
          <MenuItem key={uuid()}>
            <RequestList {...pending} />
          </MenuItem>
        ))
      ) : (
        <NoList>There isn't no pending connection.</NoList>
      )}
    </Menu>
  );
};
