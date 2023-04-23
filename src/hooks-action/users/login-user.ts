import { useDispatch } from 'react-redux';

import { post } from '../../api';
import { setItem } from '../../utils/local-storage';
import { ApiDispatchResponse, UserLoginPayload } from '../../types/hooks-action';
import { AuthenticationTypes } from '../../types/reducer';

export function useLoginUser() {
  const dispatch = useDispatch();

  const authenticateUser = async (userLogin: UserLoginPayload): Promise<ApiDispatchResponse> => {
    try {
      const { data, status } = await post('/user/login', userLogin);

      if (status === 200) {
        await setItem('access_token', data.token);

        dispatch({
          type: AuthenticationTypes.UserLoggedIn,
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

      return {
        success: false,
      };
    }
  };

  return authenticateUser;
}
