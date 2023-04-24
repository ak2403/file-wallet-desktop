import React from 'react';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import {
  ConnectionDisplayLayout,
  ConnectionDisplayContent,
  ConnectionDisplayOption,
  ConnectionDisplayIcon,
} from './connection-display.styles';

import { useDisconnectConnection } from '../../../hooks-action/connection/disconnect-connection';

type ConnectionDisplayType = {
  id: string;
  connectedBy: string;
  connectionCreated: string;
  name: string;
};

export const ConnectionDisplay: React.FC<ConnectionDisplayType> = (props) => {
  const disconnectConnection = useDisconnectConnection();

  const { id, name, connectedBy, connectionCreated } = props;

  const onDisconnect = () => {
    disconnectConnection(id);
  };

  return (
    <ConnectionDisplayLayout>
      <ConnectionDisplayContent>
        <b>{name}</b>
        <br />
        connected by {connectedBy} on {connectionCreated}
      </ConnectionDisplayContent>

      <Menu
        menuButton={
          <ConnectionDisplayOption>
            <ConnectionDisplayIcon icon={faEllipsisVertical} />
          </ConnectionDisplayOption>
        }
        transition
      >
        <MenuItem onClick={() => console.log('activity')}>Activity</MenuItem>
        <MenuItem onClick={onDisconnect}>Disconnect</MenuItem>
      </Menu>
    </ConnectionDisplayLayout>
  );
};
