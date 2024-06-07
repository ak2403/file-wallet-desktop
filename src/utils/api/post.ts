import { AxiosResponse } from 'axios';
import { BaseAPI } from './config';

export const post = async <T>(url: string, payload: object): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await BaseAPI.post(url, payload);

    return response.data;
  } catch (error) {
    throw new Error('error in signing in');
  }
};
