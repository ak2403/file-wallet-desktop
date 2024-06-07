import { post } from '../utils/api';

type UserCreateResponseProps = {
  code: string;
};

export const submitUser = async (email: string) => {
  const response = await post<UserCreateResponseProps>('/user/create', { email });

  return response.code;
};
