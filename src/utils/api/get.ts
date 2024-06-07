import { BaseAPI } from './config';

export const get = async <T>(url: string): Promise<T> => {
  try {
    const response = await BaseAPI.get(url);

    return response.data as T;
  } catch (error) {
    throw new Error('error in signing in');
  }
};
