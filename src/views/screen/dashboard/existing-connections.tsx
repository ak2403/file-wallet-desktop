import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { useExistingConnections } from '../../../hooks-action/connection';
import { ConnectionDisplay } from '../../section/connection-display';

import { ReducerState } from '../../../types/reducer';
import { UiErrorMessage } from '../../../types/views';
import { LoadingView } from '../../section/loading-view';

import { ExistingConnectionLayout, ExistingConnectionHeader } from './existing-connections.styles';

export const ExistingConnections: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<UiErrorMessage>({ isError: false });
  const getExistingConnections = useExistingConnections();

  const existingConnections = useSelector<ReducerState>((state) => state.connection.existingConnections) as any[];

  useEffect(() => {
    getExistingConnections().then(({ success, errorMessage }) => {
      setIsLoaded(true);

      if (!success) {
        setErrorMessage({
          isError: true,
          message: errorMessage || '',
        });

        return;
      }

      setErrorMessage({
        isError: false,
        message: '',
      });
    });
  }, []);

  if (!isLoaded) {
    return <LoadingView />;
  }

  if (errorMessage.isError) {
    return <p>{errorMessage.message}</p>;
  }

  return (
    <ExistingConnectionLayout>
      <ExistingConnectionHeader>Connection who allowed to access</ExistingConnectionHeader>

      {existingConnections.length ? (
        existingConnections.map(({ id, deviceName, createdAt, user }) => (
          <ConnectionDisplay key={uuid()} id={id} connectionCreated={createdAt} name={deviceName} connectedBy={user} />
        ))
      ) : (
        <p>No connection available</p>
      )}
    </ExistingConnectionLayout>
  );
};
