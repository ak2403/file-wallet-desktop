export const delItem = async (key: string): Promise<boolean> => {
  try {
    return await window.electronAPI.store.delItem(key);
  } catch (error) {
    console.log('Error in deleting value for key: ', key);
    throw error;
  }
};
