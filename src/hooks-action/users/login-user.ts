import { useDispatch } from 'react-redux';

import { post } from '../../api';
import { Authentication } from '../../type';

export function useLoginUser() {
  const dispatch = useDispatch();

  const authenticateUser = async (data: any) => {
    try {
      const response = await post('/user/login', data);

      if (response.status === 200) {
        dispatch({
          type: Authentication.LOGGED_IN,
          payload: true,
        });

        return true;
      }

      dispatch({
        type: Authentication.LOGGED_IN_ERROR,
      });

      return false;
    } catch (error) {
      console.log(error);

      dispatch({
        type: Authentication.LOGGED_IN_ERROR,
      });

      return false;
    }
  };

  return authenticateUser;
}
