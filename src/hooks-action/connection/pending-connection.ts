import { useDispatch } from 'react-redux';
import { get } from '../../api';
import { Endpoints } from '../../config/api';
import { ConnectionTypes } from '../../types/reducer';

export const useFetchPendingConnections = () => {
  const dispatch = useDispatch();

  const fetchPendingConnections = async () => {
    const { status, data } = await get(Endpoints.PendingConnections);

    if (status === 200) {
      dispatch({
        type: ConnectionTypes.PendingConnections,
        payload: data.pendingConnections,
      });
    }
  };

  return fetchPendingConnections;
};
