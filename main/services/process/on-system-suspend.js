import io from 'socket.io-client';

import { systemInformation } from '../common';

export const onSystemSuspend = async () => {
  const { machineId } = await systemInformation();
  const commonChannel = io(`http://10.0.0.18:3000`, { transports: ['websocket'] });

  commonChannel.emit('force-disconnect', machineId);
};
