import { useDispatch } from 'react-redux';
import { Endpoints } from '../../config/api';
import { post } from '../../api';
import { getItem, setItem } from '../../utils/localStorage';
import { ApiDispatchResponse } from '../../types/hooks-action';
import { AuthenticationTypes } from '../../types/reducer';

export const useRegisterDevice = () => {
  const dispatch = useDispatch();

  const registerDevice = async (): Promise<ApiDispatchResponse> => {
    //@ts-ignore
    const deviceInfo = await window.electron.getSysInfo();

    const token = await getItem('access_token');

    const { status, data } = await post(Endpoints.RegisterDevice, {
      deviceId: deviceInfo.machineId,
      token,
    });

    if (status === 200) {
      await setItem('connection_id', data?.id);

      dispatch({
        type: AuthenticationTypes.DeviceRegister,
        payload: true,
      });

      return {
        success: true,
      };
    }

    return {
      success: false,
      errors: data?.errors || [
        {
          message: data.message,
        },
      ],
    };
  };

  return registerDevice;
};
