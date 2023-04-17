import io from 'socket.io-client';

import { getSystemInfo } from '../../utils/system_information';

export const onSystemResume = async () => {
  const { machineId } = await getSystemInfo();

  const commonChannel = io(`http://10.0.0.18:3000`, { transports: ['websocket'] });

  commonChannel.on('connect', () => {
    commonChannel.emit('connected', machineId);
  });

  const machineChannel = io(`http://10.0.0.18:3000/${machineId}`, { transports: ['websocket'] });

  machineChannel.connect();
};
