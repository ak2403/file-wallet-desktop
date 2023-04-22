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

export const requestTargetFolder = (connectionId: string, filePath: string = '') => {
  //@ts-ignore
  window.electron.send('access-target-folder', { connectionId, filePath, requestType: 'read' });
};
