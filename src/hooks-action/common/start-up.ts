import { useDispatch } from 'react-redux';

import { getItem, removeItem } from '../../utils/localStorage';

import { Authentication } from '../../type';
import { post } from '../../api';
import { ENDPOINTS } from '../../config/api';

export function useStartUp() {
  const dispatch = useDispatch();

  const startUp = async () => {
    const accessToken = await getItem('access_token');
    const relationId = await getItem('relation_id');

    if (!accessToken || !relationId) {
      dispatch({
        type: Authentication.LOADED_APP,
        userLogged: accessToken ? true : false,
        connectionEstablished: relationId ? true : false,
      });

      return;
    }

    const checkValidity = await post(ENDPOINTS.CHECK_DEVICE, {
      relationId,
    });

    if (checkValidity.status === 200) {
      dispatch({
        type: Authentication.LOADED_APP,
        userLogged: accessToken ? true : false,
        connectionEstablished: relationId ? true : false,
      });

      return true;
    }

    await removeItem('access_token');
    await removeItem('relation_id');

    dispatch({
      type: Authentication.LOADED_APP,
      userLogged: false,
      connectionEstablished: false,
    });

    return true;
  };

  return startUp;
}
