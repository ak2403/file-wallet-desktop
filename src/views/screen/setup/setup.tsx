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

    //TODO: handle errors
    registerDevice().then(({ success, errors = [] }) => {
      if (success) {
        navigate('/home');

        return;
      }
    });
  }, []);

  return <SetupLayout>{'Setting up the device'}</SetupLayout>;
};
