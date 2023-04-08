import { useDispatch } from 'react-redux';
import { Authentication } from '../../type';
import { ENDPOINTS } from '../../config/api';
import { post } from '../../api';
import { getItem, setItem } from '../../utils/localStorage';

export const useRegisterDevice = () => {
  const dispatch = useDispatch();

  const registerDevice = async () => {
    //@ts-ignore
    const deviceInfo = await window.electron.getSysInfo();

    const token = await getItem('access_token');

    const registerDevice = await post(ENDPOINTS.REGISTER_DEVICE, {
      device_id: deviceInfo.machineId,
      token,
    });

    if (registerDevice.status === 200) {
      await setItem('relation_id', registerDevice?.data?.id);

      dispatch({
        type: Authentication.REGISTER_DEVICE,
        payload: true,
      });

      return true;
    }

    dispatch({
      type: Authentication.REGISTER_DEVICE_ERROR,
      payload: 'registerDevice.message',
    });

    return false;
  };

  return registerDevice;
};
