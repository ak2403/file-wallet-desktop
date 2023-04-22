import React from 'react';

import { OcLayout, OcImageLayout, OcImage, OcContentLayout } from './offline-connection.styles';
import { Button } from '../../../ui-components/button';

import OfflineImg from '../../../assets/offline.png';
import { requestTargetFolder } from '../../../utils/electron';
import { useConnectionId } from '../../../hooks-action/common';

export const OfflineConnection: React.FC = () => {
  const connectionId = useConnectionId() as string;

  const onClick = () => {
    requestTargetFolder(connectionId);
  };

  return (
    <OcLayout>
      <OcImageLayout>
        <OcImage data-testid="offline-icon" aria-label="offline-icon" alt="Application Offline" src={OfflineImg} />
      </OcImageLayout>

      <OcContentLayout>
        <p>The device is not online. Once the device is online, please re-connect by clicking the below button.</p>

        <Button onClick={onClick}>Re Connect</Button>
      </OcContentLayout>
    </OcLayout>
  );
};
