//@ts-ignore
const { get, set, remove } = window.store;

export const setItem = async (key: string, value: string | boolean): Promise<boolean> => {
  try {
    await set(key, value);

    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
};

export const getItem = async (key: string): Promise<boolean | string> => {
  try {
    return await get(key);
  } catch (err) {
    console.log(err);

    return false;
  }
};

export const removeItem = async (key: string): Promise<boolean> => {
  try {
    const keyValue = get(key);

    if (!keyValue) {
      return true;
    }

    await remove(key);

    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
};
