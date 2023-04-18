import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { ConnectionListLayout } from './connection-list.styles';
import { useNavigate } from 'react-router-dom';
import { NavItem } from './nav-item';

type ConnectionListProps = {
  connections: object[];
};

export const ConnectionList: React.FC<ConnectionListProps> = (props) => {
  const navigate = useNavigate();
  const { connections } = props;

  const onClick = (connection: any) => {
    navigate('/home/connection', { state: connection });

    return;
  };

  return (
    <ConnectionListLayout>
      {connections.map((connection: any) => (
        <NavItem icon={faUser} onClick={() => onClick(connection)} label={connection.targetConnection.deviceName} />
      ))}
    </ConnectionListLayout>
  );
};
