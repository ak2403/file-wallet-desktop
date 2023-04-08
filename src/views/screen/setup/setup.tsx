import React, { useEffect, useState } from 'react';

import { SetupLayout } from './setup.styles';
import { checkDeviceStatus } from '../../../hooks-action/device';

import { Input } from '../../../ui-components/input';
import { Button } from '../../../ui-components/button';
import { useRegisterDevice } from '../../../hooks-action/device';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SetupComponent = () => {
  const authentication = useSelector((state: any) => state.authentication);
  const [deviceChecked, setDeviceCheck] = useState(false);
  const [statusCheck, setStatusCheck] = useState({});

  const [deviceName, setDeviceName] = useState('');
  const registerDevice = useRegisterDevice();
  const navigate = useNavigate();

  if (authentication.connectionEstablished) {
    return <Navigate to="/dashboard" />;
  }

  useEffect(() => {
    (async () => {
      const deviceStatus = await checkDeviceStatus();

      setStatusCheck(deviceStatus);

      setDeviceCheck(true);
    })();
  }, [deviceChecked]);

  if (!deviceChecked) {
    return <>'Checking status...</>;
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeviceName(event.target.value);
  };

  const onClick = async () => {
    const response = await registerDevice(deviceName);

    debugger;

    if (response) {
      return navigate('/dashboard');
    }
  };

  return (
    <SetupLayout>
      <Input placeholder="Please provide a name for the device" value={deviceName} onChange={onChange} />

      <Button onClick={onClick}>Create</Button>
    </SetupLayout>
  );
};
