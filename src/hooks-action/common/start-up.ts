import { useDispatch } from 'react-redux';

import { getItem, removeItem } from '../../utils/localStorage';

import { post } from '../../api';
import { Endpoints } from '../../config/api';
import { AuthenticationTypes } from '../../types/reducer';

export function useStartUp() {
  const dispatch = useDispatch();

  const startUp = async () => {
    const accessToken = await getItem('access_token');
    const connectionId = await getItem('connection_id');

    if (!accessToken || !connectionId) {
      await removeItem('access_token');
      await removeItem('connection_id');

      dispatch({
        type: AuthenticationTypes.LoadedApp,
        userLogged: accessToken ? true : false,
        connectionEstablished: connectionId ? true : false,
      });

      return;
    }

    const checkValidity = await post(Endpoints.CheckDevice, {
      connectionId,
    });

    if (checkValidity.status === 200) {
      dispatch({
        type: AuthenticationTypes.LoadedApp,
        userLogged: accessToken ? true : false,
        connectionEstablished: connectionId ? true : false,
      });

      return true;
    }

    await removeItem('access_token');
    await removeItem('connection_id');

    dispatch({
      type: AuthenticationTypes.LoadedApp,
      userLogged: false,
      connectionEstablished: false,
    });

    return true;
  };

  return startUp;
}
