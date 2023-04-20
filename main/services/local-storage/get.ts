import { store } from './config';

export const getKey = (key: string): string | null => {
  try {
    return store.get(key) as string;
  } catch (err) {
    return null;
  }
};
