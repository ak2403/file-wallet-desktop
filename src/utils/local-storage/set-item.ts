
export const setItem = <T>(key: string, value: T): boolean => {
  try {
    window.electronAPI.store.setItem(key, value);

    return true;
  } catch (error) {
    console.log('Error in getting value for key: ', key);
    throw error;
  }
};
