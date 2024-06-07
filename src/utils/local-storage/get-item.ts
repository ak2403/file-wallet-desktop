export const getItem = <T>(key: string): T => {
  try {
    return window.electronAPI.store.getItem(key) as T;
  } catch (error) {
    console.log('Error in getting value for key: ', key);
    throw error;
  }
};
