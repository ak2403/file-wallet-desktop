import React, { useEffect } from 'react';

import { SetupLayout } from './setup.styles';
import { useRegisterDevice } from '../../../hooks-action/device';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SetupComponent = () => {
  const authentication = useSelector((state: any) => state.authentication);

  const registerDevice = useRegisterDevice();

  if (!authentication.isUserLogged) {
    return <Navigate to="/" />;
  }

  if (authentication.connectionEstablished) {
    return <Navigate to="/dashboard" />;
  }

  useEffect(() => {
    (async () => {
      await registerDevice();
    })();
  }, []);

  return <SetupLayout>Checking the connection</SetupLayout>;
};
