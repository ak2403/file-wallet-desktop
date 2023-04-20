import { post } from '../../api';
import { Endpoints } from '../../config/api';

import { SystemInformation } from '../../utils/electron';

export const checkDeviceStatus = async () => {
  const deviceInformation = await SystemInformation();

  if (!deviceInformation) {
    return {
      isDeviceRegistered: false,
    };
  }

  const checkIfDeviceRegistered = await post(Endpoints.CheckDevice, {
    deviceId: deviceInformation.machineId,
  });

  if (checkIfDeviceRegistered.status === 200) {
    return {
      isDeviceRegistered: true,
    };
  }

  return {
    isDeviceRegistered: false,
  };
};
