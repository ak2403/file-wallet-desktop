import React, { useEffect, useState } from 'react';

import { SetupLayout } from './setup.styles';
import { useRegisterDevice } from '../../../hooks-action/device';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Input } from '../../../ui-components/input';
import { Button } from '../../../ui-components/button';

export const SetupComponent: React.FC = () => {
  const authentication = useSelector((state: any) => state.authentication);
  const [deviceName, setDeviceName] = useState<string>('');
  const navigate = useNavigate();

  const registerDevice = useRegisterDevice();

  useEffect(() => {
    if (!authentication.isUserLogged) {
      navigate('/');

      return;
    }

    if (authentication.connectionEstablished) {
      navigate('/home');

      return;
    }
  }, []);

  const onClick = async () => {
    await registerDevice(deviceName);

    navigate('/home');

    return;
  };

  return (
    <SetupLayout>
      <Input
        value={deviceName}
        onChange={(event) => setDeviceName(event.target.value)}
        placeholder="Please set a device name"
      />

      <Button onClick={onClick}>Create</Button>
    </SetupLayout>
  );
};
