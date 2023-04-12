import React, { useEffect } from 'react';

import { SetupLayout } from './setup.styles';
import { useRegisterDevice } from '../../../hooks-action/device';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const SetupComponent: React.FC = () => {
  const authentication = useSelector((state: any) => state.authentication);
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

    (async () => {
      await registerDevice();
    })();
  }, []);

  return <SetupLayout>Checking the connection</SetupLayout>;
};
