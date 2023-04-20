import { SystemInformationType } from '../types/utils';

export const SystemInformation = async (): Promise<SystemInformationType | null> => {
  try {
    //@ts-ignore
    return await window.electron.systemInformation();
  } catch (err) {
    console.log(err);

    return null;
  }
};
