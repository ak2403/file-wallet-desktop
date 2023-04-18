import { SystemInformation } from '../types/utils';

export const getSystemInfo = async (): Promise<SystemInformation | null> => {
  try {
    //@ts-ignore
    return await window.electron.getSysInfo();
  } catch (err) {
    console.log(err);

    return null;
  }
};
