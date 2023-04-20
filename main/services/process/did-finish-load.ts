import { InitializeCommonSocket, InitializeSocket } from '../socket';

export const didFinishLoad = async (mainWindow): Promise<void> => {
  await InitializeCommonSocket();

  await InitializeSocket(mainWindow);
};
