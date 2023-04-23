import { useDispatch } from 'react-redux';
import { Endpoints } from '../../config/api';
import { post } from '../../api';
import { getItem, setItem } from '../../utils/local-storage';
import { ApiDispatchResponse } from '../../types/hooks-action';
import { AuthenticationTypes } from '../../types/reducer';
import { SystemInformation } from '../../utils/electron';

export const useRegisterDevice = () => {
  const dispatch = useDispatch();

  const registerDevice = async (): Promise<ApiDispatchResponse> => {
    const deviceInformation = await SystemInformation();

    if (!deviceInformation) {
      return { success: false };
    }

    const token = await getItem('access_token');

    const { status, data } = await post(Endpoints.RegisterDevice, {
      deviceId: deviceInformation.machineId,
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

    //TODO: maintain a standard error format
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
