import { store } from './config';

export const removeKey = (key: string): boolean => {
  try {
    store.delete(key);

    return true;
  } catch (err) {
    return false;
  }
};
