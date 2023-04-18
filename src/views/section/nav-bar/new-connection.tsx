import React, { useState } from 'react';

import { faAdd } from '@fortawesome/free-solid-svg-icons';

import { Modal } from '../../../ui-components/modal';
import { Input } from '../../../ui-components/input';
import { Button } from '../../../ui-components/button';
import { ConnectionForm } from './new-connection.styles';
import { sendConnectionRequest } from '../../../hooks-action/connection';
import { Card, NotificationCard } from '../../../ui-components/card';
import { ErrorMessage } from '../../../types/hooks-action';
import { NavItem } from './nav-item';

export const NewConnection: React.FC = () => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [deviceName, setDeviceName] = useState<string>('');
  const [waitForCompletion, setWaitForCompletion] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorMessage[]>([]);

  const onClick = async () => {
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
      <NavItem icon={faAdd} onClick={() => setDisplayModal(!displayModal)} label="New connection request" />

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

          <Button loading={waitForCompletion} onClick={onClick}>
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
