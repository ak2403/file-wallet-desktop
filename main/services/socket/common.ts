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
    console.log('The common communication is up and running with the server');

    commonChannel.emit('connected', machineId);
  });

  commonChannel.on('error', (error) => {
    console.log('-------Error in common socket communication-------');
    console.log(error);
  });

  commonChannel.on('ping', () => {
    console.log('-------ping in common socket communication-------');
  });

  commonChannel.on('reconnect_error', (error) => {
    console.log('-------reconnect error in common socket communication-------');
    console.log(error);
  });

  commonChannel.on('reconnect_failed', (error) => {
    console.log('-------reconnect failed in common socket communication-------');
    console.log(error);
  });
};
