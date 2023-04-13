import { useDispatch } from 'react-redux';

import { post } from '../../api';
import { Authentication } from '../../type';
import { setItem } from '../../utils/localStorage';
import { AuthenticateUserResponse, UserLoginPayload } from '../../types/hooks-action';

export function useLoginUser() {
  const dispatch = useDispatch();

  const authenticateUser = async (userLogin: UserLoginPayload): Promise<AuthenticateUserResponse> => {
    try {
      const { data, status } = await post('/user/login', userLogin);

      if (status === 200) {
        await setItem('access_token', data.token);

        dispatch({
          type: Authentication.LOGGED_IN,
          payload: true,
        });

        return {
          success: true,
        };
      }

      return {
        success: false,
        errors: data?.errors || [],
      };
    } catch (error) {
      console.log(error);

      dispatch({
        type: Authentication.LOGGED_IN_ERROR,
      });

      return {
        success: false,
      };
    }
  };

  return authenticateUser;
}
