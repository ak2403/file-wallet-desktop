import { useDispatch } from 'react-redux';
import { Endpoints } from '../../config/api';
import { get } from '../../api';
import { ConnectionTypes } from '../../types/reducer';
import { ApiDispatchResponse } from '../../types/hooks-action';

export const useExistingConnections = () => {
  const dispatch = useDispatch();

  const getExistingConnections = async (): Promise<ApiDispatchResponse> => {
    const { status, data, errorMessage } = await get(Endpoints.ExistingConnections);

    if (status === 200) {
      dispatch({
        type: ConnectionTypes.ExistingConnections,
        payload: data.connections || [],
      });

      return { success: true };
    }

    return {
      success: false,
      errorMessage,
    };
  };

  return getExistingConnections;
};
