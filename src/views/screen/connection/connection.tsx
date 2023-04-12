import React from 'react';
import { Button } from '../../../ui-components/button';
import { useLocation } from 'react-router-dom';

export const ConnectionComponent: React.FC = (props) => {
  const { state } = useLocation();

  const connectionId = state?.id || 'dc0d1556-661d-4283-a9d2-cc9d26a9848d';

  const onClick = () => {
    //@ts-ignore
    window.electron.send('access-folder', connectionId);
  };

  return (
    <div>
      Connection
      <Button onClick={onClick}>Get Info</Button>
    </div>
  );
};
