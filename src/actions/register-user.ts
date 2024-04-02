import { post } from '../utils/api/post';

type Payload = {
  email: string;
};

type RegisterUser = {
  isRegistered: boolean;
  errorMessage?: string;
};

export const registerUser = async (payload: Payload): Promise<RegisterUser> => {
  const { status, data } = await post('/user/create', payload);

  if (status === 200) {
    const { data: userResponse } = data;

    const token = userResponse.token;

    localStorage.setItem('auth-token', token);

    return {
      isRegistered: true,
    };
  }

  return {
    isRegistered: false,
    errorMessage: 'Error occurred',
  };
};
