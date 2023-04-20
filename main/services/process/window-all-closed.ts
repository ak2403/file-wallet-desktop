import io from 'socket.io-client';

import { systemInformation } from '../common';

export const windowAllClosed = async (): Promise<void> => {
  const systemInfo = await systemInformation();

  if (!systemInfo) {
    return;
  }

  const { machineId } = systemInfo;

  const commonChannel = io(`http://10.0.0.18:3000`, { transports: ['websocket'] });

  commonChannel.emit('force-disconnect', machineId);
};
