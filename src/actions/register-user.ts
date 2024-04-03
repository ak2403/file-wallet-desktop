import { UserSpecificUrl } from '../constants/api';
import { post } from '../utils/api/post';

type UserPayload = {
  email: string;
};

type UserRegisterResponse = {
  data: {
    token: string;
  };
};

type RegisterUser = {
  isRegistered: boolean;
};

export const registerUser = (payload: UserPayload): Promise<RegisterUser> =>
  new Promise((resolve, reject) => {
    post<UserPayload, UserRegisterResponse>(UserSpecificUrl.registerUser, payload)
      .then(({ data }) => {
        const { data: userResponse } = data;

        const token = userResponse.token;

        localStorage.setItem('auth-token', token);

        resolve({
          isRegistered: true,
        });
      })
      .catch((error) => {
        reject({
          isRegistered: false,
          errorMessage: 'Error occurred',
        });
      });
  });
