import { useDispatch } from 'react-redux';

import { getItem } from '../../utils/localStorage';

import { Authentication } from '../../type';

export function useStartUp() {
  const dispatch = useDispatch();

  const startUp = async () => {
    const accessToken = await getItem('access_token');
    const relationId = await getItem('relation_id');

    dispatch({
      type: Authentication.LOADED_APP,
      userLogged: accessToken ? true : false,
      connectionEstablished: relationId ? true : false,
    });
  };

  return startUp;
}
