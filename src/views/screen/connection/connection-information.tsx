import React, { useState, useEffect } from 'react';

import { get } from '../../../api';
import { ConnectionInformationLayout } from './connection-information.styles';
import { Header } from '../../../ui-components/header';
import { useConnectionId } from '../../../hooks-action/common';

export const ConnectionInformation: React.FC = () => {
  const connectionId = useConnectionId();
  const [information, setInformation] = useState<any>({});

  useEffect(() => {
    if (!connectionId) {
      return;
    }
    get(`/connections/connection/${connectionId}`).then(({ status, data }) => {
      if (status === 200) {
        setInformation(data);
      }
    });
  }, [connectionId]);

  return (
    <ConnectionInformationLayout>
      <Header text={information?.targetConnection?.deviceName}></Header>
    </ConnectionInformationLayout>
  );
};
