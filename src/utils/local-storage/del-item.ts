export const delItem = (key: string): boolean => {
  try {
    return window.electronAPI.store.delItem(key);
  } catch (error) {
    console.log('Error in deleting value for key: ', key);
    throw error;
  }
};
