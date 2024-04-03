import io from 'socket.io-client';

import { DeviceService } from '../device';

export const windowAllClosed = async (): Promise<void> => {
  const deviceId = await DeviceService.deviceId();

  const commonChannel = io(`http://10.0.0.18:3000`, { transports: ['websocket'] });

  commonChannel.emit('force-disconnect', deviceId);
};
