import { electronStore } from './config';

export const getItem = <T>(key: string): T => {
  try {
    return electronStore.get(key) as T;
  } catch (error) {
    console.log('Error in getting value for key: ', key);
    throw error;
  }
};
