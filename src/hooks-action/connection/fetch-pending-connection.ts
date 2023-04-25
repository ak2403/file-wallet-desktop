import { useDispatch } from 'react-redux';

import { get } from '../../api';
import { Endpoints } from '../../config/api';
import { ConnectionTypes } from '../../types/reducer';
import { ApiDispatchResponse } from '../../types/hooks-action';

export const useFetchPendingConnections = () => {
  const dispatch = useDispatch();

  const fetchPendingConnections = async (): Promise<ApiDispatchResponse> => {
    const { status, data } = await get(Endpoints.PendingConnections);

    if (status === 200) {
      dispatch({
        type: ConnectionTypes.PendingConnections,
        payload: data.pendingConnections || [],
      });

      return {
        success: true,
      };
    }

    return {
      success: false,
    };
  };

  return fetchPendingConnections;
};
