import { useDispatch } from 'react-redux';
import { get } from '../../api';
import { ENDPOINTS } from '../../config/api';
import { Connection } from '../../type';

export const useFetchPendingConnections = () => {
  const dispatch = useDispatch();

  const fetchPendingConnections = async () => {
    const { status, data } = await get(ENDPOINTS.PENDING_CONNECTIONS);

    if (status === 200) {
      dispatch({
        type: Connection.PENDING_CONNECTION,
        payload: data.pendingConnections,
      });
    }
  };

  return fetchPendingConnections;
};
