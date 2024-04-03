import io from 'socket.io-client';

import { DeviceService } from '../device';

export const onSystemResume = async (): Promise<void> => {
  const deviceId = await DeviceService.deviceId();

  const commonChannel = io(`http://10.0.0.18:3000`, { transports: ['websocket'] });

  commonChannel.on('connect', () => {
    commonChannel.emit('connected', deviceId);
  });

  const machineChannel = io(`http://10.0.0.18:3000/${deviceId}`, { transports: ['websocket'] });

  machineChannel.connect();
};
