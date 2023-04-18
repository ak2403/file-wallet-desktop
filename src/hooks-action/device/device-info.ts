import { post } from '../../api';
import { Endpoints } from '../../config/api';

export const checkDeviceStatus = async () => {
  //@ts-ignore
  const deviceInfo = await window.electron.getSysInfo();

  const checkIfDeviceRegistered = await post(Endpoints.CheckDevice, {
    deviceId: deviceInfo.machineId,
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
