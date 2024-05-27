import { useDispatch } from 'react-redux';
import { getItem } from '../utils/local-storage';
import { AppActionType } from '../types/reducer/actions';

export const useRunStartup = () => {
  const dispatch = useDispatch();

  return () => {
    const userLogged = getItem('user-logged');

    dispatch({
      type: AppActionType.AppStartup,
      payload: {
        userLogged,
      },
    });
  };
};
