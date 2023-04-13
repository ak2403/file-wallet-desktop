import React, { useEffect, useState } from 'react';

import { SetupLayout } from './setup.styles';
import { useRegisterDevice } from '../../../hooks-action/device';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Input } from '../../../ui-components/input';
import { Button } from '../../../ui-components/button';
import { LoginHeader } from '../../../ui-components/header';
import { ErrorMessage } from '../../../types/hooks-action';
import { NotificationCard } from '../../../ui-components/card';

export const SetupComponent: React.FC = () => {
  const authentication = useSelector((state: any) => state.authentication);
  const [deviceName, setDeviceName] = useState<string>('');
  const [waitForCompletion, setWaitForCompletion] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorMessage[]>([]);

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

  const onClick = () => {
    setWaitForCompletion(true);

    registerDevice(deviceName).then(({ success, errors = [] }) => {
      if (success) {
        navigate('/home');

        return;
      }

      setErrors([...errors]);

      setWaitForCompletion(false);
    });
  };

  return (
    <SetupLayout>
      <LoginHeader text="File Sync ." />

      <Input
        value={deviceName}
        onChange={(event) => setDeviceName(event.target.value)}
        placeholder="Please set a device name"
      />

      <Button loading={waitForCompletion} onClick={onClick}>
        Create
      </Button>

      {errors.map(({ message }) => (
        <NotificationCard type="error" message={message} />
      ))}
    </SetupLayout>
  );
};
