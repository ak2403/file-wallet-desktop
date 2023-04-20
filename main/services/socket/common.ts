import io from 'socket.io-client';

import { systemInformation } from '../common';

export const InitializeCommonSocket = async (): Promise<void> => {
  const systemInfo = await systemInformation();

  if (!systemInfo) {
    return;
  }

  const { machineId } = systemInfo;

  const commonChannel = io(`http://10.0.0.18:3000`, { transports: ['websocket'] });

  commonChannel.on('connect', () => {
    commonChannel.emit('connected', machineId);
  });
};
