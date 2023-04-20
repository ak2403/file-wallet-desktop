import { store } from './config';

export const setKey = (key: string, value: string): boolean => {
  try {
    store.set(key, value);

    return true;
  } catch (err) {
    return false;
  }
};
