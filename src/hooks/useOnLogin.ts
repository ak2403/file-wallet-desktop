import { useDispatch } from 'react-redux';
import { post } from '../utils/api';
import { setItem } from '../utils/local-storage';

export const useOnLogin = () => {
  const dispatch = useDispatch();

  return async (payload: object) => {
    const deviceId = window.electronAPI.identity.getId();

    const response = await post('/users/create', { ...payload, device_Id: deviceId });

    setItem('auth-token', response);
    setItem('user-logged', true);

    return true;
  };
};
