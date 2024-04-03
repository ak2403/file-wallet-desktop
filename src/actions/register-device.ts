import { DeviceSpecificUrl } from '../constants/api';
import { post } from '../utils/api/post';

type DevicePayload = {
  device_id: string;
  device_type: string;
  device_os: string;
};

type DeviceRegisterResponse = {
  data: {
    id: string;
  };
};

type RegisterDevice = {
  isDeviceRegistered: boolean;
};

export const registerDevice = async (): Promise<RegisterDevice> => {
  const deviceId = await (window as any).electron.deviceId();
  const deviceOs = await (window as any).electron.deviceOs();

  return new Promise((resolve, reject) => {
    const devicePayload: DevicePayload = {
      device_id: deviceId,
      device_type: 'desktop',
      device_os: deviceOs,
    };

    post<DevicePayload, DeviceRegisterResponse>(DeviceSpecificUrl.registerDevice, devicePayload)
      .then(({ data }) => {
        const {
          data: { id },
        } = data;

        localStorage.setItem('device-record-id', id);

        resolve({
          isDeviceRegistered: true,
        });
      })
      .catch((error) => {
        reject({
          errorMessage: 'Error occurred',
        });
      });
  });
};
