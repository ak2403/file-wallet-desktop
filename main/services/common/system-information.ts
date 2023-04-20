import os from 'os';
import { machineIdSync } from 'node-machine-id';
import { SystemInformation } from '../../types/services/common';

export const systemInformation = async (): Promise<SystemInformation | null> => {
  try {
    const machineId = await machineIdSync(true);
    const userInformation = os.userInfo();

    return {
      machineId,
      systemName: userInformation?.username || '',
    };
  } catch (err) {
    return null;
  }
};
