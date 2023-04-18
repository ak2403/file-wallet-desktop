import { useDispatch } from 'react-redux';
import { get } from '../../api';
import { ENDPOINTS } from '../../config/api';

import { ApiDispatchResponse } from '../../types/hooks-action';
import { ConnectionTypes } from '../../types/reducer';

export const useGetConnections = () => {
  const dispatch = useDispatch();

  const connections = async (): Promise<ApiDispatchResponse> => {
    const { status, data } = await get(ENDPOINTS.GET_CONNECTIONS);

    if (status === 200) {
      dispatch({
        type: ConnectionTypes.FetchConnections,
        payload: data.connections,
      });

      return {
        success: true,
      };
    }

    return {
      success: false,
    };
  };

  return connections;
};
