import { post } from '../utils/api/post';

type Payload = {
  email: string;
};

export const registerUser = async (payload: Payload) => await post('/user/create', payload);
