import { useDispatch } from 'react-redux';
import { get } from '../../api';
import { ENDPOINTS } from '../../config/api';
import { Connection } from '../../type';

export const useFetchPendingConnections = () => {
  const dispatch = useDispatch();

  const fetchPendingConnections = async () => {
    const response = await get(ENDPOINTS.PENDING_CONNECTIONS);

    if (response.status === 200) {
      dispatch({
        type: Connection.PENDING_CONNECTION,
        payload: response.data.pendingConnections,
      });
    }
  };

  return fetchPendingConnections;
};
