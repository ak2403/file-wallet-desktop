import { useDispatch } from 'react-redux';
import { get } from '../../api';
import { ENDPOINTS } from '../../config/api';
import { Connection } from '../../type';

export const useGetConnections = () => {
  const dispatch = useDispatch();

  const connections = async () => {
    const response = await get(ENDPOINTS.GET_CONNECTIONS);

    if (response.status === 200) {
      dispatch({
        type: Connection.FETCH_CONNECTION,
        payload: response.data.connections,
      });

      return true;
    }

    return false;
  };

  return connections;
};
