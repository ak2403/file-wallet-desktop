import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '../../../ui-components/icon';

import { ConnectionListLayout, Connection } from './connection-list.styles';

type ConnectionListProps = {
  connections: object[];
};

export const ConnectionList: React.FC<ConnectionListProps> = (props) => {
  const { connections } = props;

  return (
    <ConnectionListLayout>
      {connections.map((connection: any) => {
        return (
          <Connection>
            <Icon icon={faUser} onClick={() => {}} />
          </Connection>
        );
      })}
    </ConnectionListLayout>
  );
};
