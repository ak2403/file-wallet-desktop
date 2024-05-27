import { electronStore } from './config';

export const setItem = <T>(key: string, value: T): boolean => {
  try {
    electronStore.set(key, value);

    return true;
  } catch (error) {
    console.log('Error in getting value for key: ', key);
    throw error;
  }
};
