import { post } from '../utils/api/post';

type DevicePayload = {
  device_id: string;
  device_type: string;
  device_os: string;
};

type RegisterDevice = {
  isDeviceRegistered: boolean;
};

export const registerDevice = async (): Promise<RegisterDevice> => {
  const deviceId = await (window as any).electron.deviceId();
  const deviceOs = await (window as any).electron.deviceOs();

  const devicePayload: DevicePayload = {
    device_id: deviceId,
    device_type: 'desktop',
    device_os: deviceOs,
  };

  const { status, data } = await post<DevicePayload>('/device/create', devicePayload);

  if (status === 200) {
    const {
      data: { id },
    } = data as any;

    localStorage.setItem('device-record-id', id);

    return {
      isDeviceRegistered: true,
    };
  }

  return {
    isDeviceRegistered: false,
  };
};
