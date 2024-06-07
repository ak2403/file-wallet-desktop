import { useDispatch } from 'react-redux';
import { getItem } from '../utils/local-storage';
import { AppActionType } from '../types/reducer/actions';
import { get } from '../utils/api';

export const useRunStartup = () => {
  const dispatch = useDispatch();

  return async () => {
    const userLogged = await getItem('user-logged');

    if (!userLogged) {
      dispatch({
        type: AppActionType.AppStartup,
        payload: {
          userLogged,
        },
      });

      return;
    }

    try {
      await get('/connection/status');
    } catch (error) {
      dispatch({
        type: AppActionType.AppStartup,
        payload: {
          userLogged: false,
        },
      });

      return;
    }

    dispatch({
      type: AppActionType.AppStartup,
      payload: {
        userLogged: true,
      },
    });

    return;
  };
};
