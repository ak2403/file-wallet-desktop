import { useDispatch } from 'react-redux';
import { get } from '../../api';
import { ENDPOINTS } from '../../config/api';
import { Connection } from '../../type';
import { ApiDispatchResponse } from '../../types/hooks-action';

export const useGetConnections = () => {
  const dispatch = useDispatch();

  const connections = async (): Promise<ApiDispatchResponse> => {
    const { status, data } = await get(ENDPOINTS.GET_CONNECTIONS);

    if (status === 200) {
      dispatch({
        type: Connection.FETCH_CONNECTION,
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
