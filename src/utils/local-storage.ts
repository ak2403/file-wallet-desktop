export const setItem = async (key: string, value: string | boolean): Promise<boolean> => {
  //@ts-ignore
  const { set } = window.store;

  try {
    await set(key, value);

    return true;
  } catch (err) {
    console.log(err);

    return false;
  }
};

export const getItem = async (key: string): Promise<boolean | string> => {
  //@ts-ignore
  const { get } = window.store;

  try {
    return await get(key);
  } catch (err) {
    console.log(err);

    return false;
  }
};

export const removeItem = async (key: string): Promise<boolean> => {
  //@ts-ignore
  const { get, remove } = window.store;

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
