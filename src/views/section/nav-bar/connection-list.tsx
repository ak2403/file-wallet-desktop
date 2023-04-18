import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faAdd, faUser } from '@fortawesome/free-solid-svg-icons';

import { Modal } from '../../../ui-components/modal';
import { Input } from '../../../ui-components/input';
import { Button } from '../../../ui-components/button';

import { sendConnectionRequest } from '../../../hooks-action/connection';
import { Card, NotificationCard } from '../../../ui-components/card';
import { ErrorMessage } from '../../../types/hooks-action';

import { NavItem } from './nav-item';

import { ConnectionListLayout, ConnectionHeader, AddConnectionIcon, ConnectionForm } from './connection-list.styles';

type ConnectionListProps = {
  connections: object[];
};

export const ConnectionList: React.FC<ConnectionListProps> = (props) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [deviceName, setDeviceName] = useState<string>('');
  const [waitForCompletion, setWaitForCompletion] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorMessage[]>([]);

  const navigate = useNavigate();
  const { connections = [] } = props;

  const onClick = (connection: any) => {
    navigate('/home/connection', { state: connection });

    return;
  };

  const onModalClick = async () => {
    setWaitForCompletion(true);

    sendConnectionRequest({
      deviceName,
    }).then(({ success, errors = [{ message: 'Internal Error' }] }) => {
      if (success) {
        setDisplayModal(false);
        setWaitForCompletion(false);
        setErrors([]);

        return;
      }

      setErrors([...errors]);
      setWaitForCompletion(false);
    });
  };

  return (
    <>
      <ConnectionListLayout>
        <ConnectionHeader>
          <span>My connections</span>
          <AddConnectionIcon icon={faAdd} onClick={() => setDisplayModal(!displayModal)} />
        </ConnectionHeader>

        {connections.map((connection: any) => (
          <NavItem icon={faUser} onClick={() => onClick(connection)} label={connection.targetConnection.deviceName} />
        ))}
      </ConnectionListLayout>

      <Modal header="New Connection" show={displayModal} onClose={() => setDisplayModal(!displayModal)}>
        <ConnectionForm>
          <Card>
            <p>💡 To request a new connection, please use the device name that you want to connect.</p>
          </Card>
          <Input
            value={deviceName}
            placeholder="Enter the device name"
            onChange={(event) => setDeviceName(event.target.value)}
          />

          <Button loading={waitForCompletion} onClick={onModalClick}>
            Connect
          </Button>

          {errors.map(({ message }) => (
            <NotificationCard type="error" message={message} />
          ))}
        </ConnectionForm>
      </Modal>
    </>
  );
};
