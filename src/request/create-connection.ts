import { post } from '../utils/api';
import { setItem } from '../utils/local-storage';

type ConnectionCreateResponseProps = {
  accessToken: string;
  refreshToken: string;
};

export const createConnection = async (code: string) => {
  const deviceId = window.electronAPI.identity.getId();

  const response = await post<ConnectionCreateResponseProps>(`/connection/create?code=${code}`, {
    device_type: 'desktop',
    device_id: deviceId,
    os: 'linux',
  });

  setItem('auth-token', response.accessToken);
  setItem('refresh-token', response.refreshToken);
  setItem('user-logged', true);

  return true;
};
