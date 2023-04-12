import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '../../../ui-components/icon';

import { ConnectionListLayout, Connection } from './connection-list.styles';
import { useNavigate } from 'react-router-dom';

type ConnectionListProps = {
  connections: object[];
};

export const ConnectionList: React.FC<ConnectionListProps> = (props) => {
  const navigate = useNavigate();
  const { connections } = props;

  const onClick = (connection: any) => {
    navigate(`/home/connection`, { state: connection });

    return;
  };

  return (
    <ConnectionListLayout>
      {connections.map((connection: any) => {
        return (
          <Connection>
            <Icon icon={faUser} onClick={() => onClick(connection)} />
          </Connection>
        );
      })}
    </ConnectionListLayout>
  );
};
