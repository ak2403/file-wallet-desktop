export const getItem = async <T>(key: string): Promise<T> => {
  try {
    return (await window.electronAPI.store.getItem(key)) as T;
  } catch (error) {
    console.log('Error in getting value for key: ', key);
    throw error;
  }
};
