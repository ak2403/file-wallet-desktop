import { BaseAPI } from './config';

export const post = async (url: string, payload: object) => {
  try {
    const response = await BaseAPI.post(url, payload);

    return response.data;
  } catch (error) {
    throw new Error('error in signing in');
  }
};
