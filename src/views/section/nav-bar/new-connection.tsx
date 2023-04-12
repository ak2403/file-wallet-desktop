import React, { useState } from 'react';

import { faAdd } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '../../../ui-components/icon';
import { Modal } from '../../../ui-components/modal';
import { Input } from '../../../ui-components/input';
import { Button } from '../../../ui-components/button';
import { ConnectionForm } from './new-connection.styles';
import { sendConnectionRequest } from '../../../hooks-action/connection';
import { Card, NotificationCard } from '../../../ui-components/card';

export const NewConnection = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [deviceName, setDeviceName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onClick = async () => {
    const response = await sendConnectionRequest({
      deviceName,
    });

    if (response?.isSuccess) {
      setDisplayModal(false);

      setErrorMessage('');

      return;
    }

    setErrorMessage(response?.errorMessage || 'Internal Error');
  };

  return (
    <>
      <Icon icon={faAdd} onClick={() => setDisplayModal(!displayModal)} />

      <Modal header="New Connection" show={displayModal} onClose={() => setDisplayModal(!displayModal)}>
        <ConnectionForm>
          <Card>
            <p>
              <b>Note:</b> To request a new connection, please use the device name that you want to connect.
            </p>
          </Card>
          <Input
            value={deviceName}
            placeholder="Enter the device name"
            onChange={(event) => setDeviceName(event.target.value)}
          />

          <Button onClick={onClick}>Connect</Button>

          {errorMessage ? <NotificationCard type="error" message={errorMessage} /> : null}
        </ConnectionForm>
      </Modal>
    </>
  );
};
