import { InitializeCommonSocket, InitializeSocket } from '../socket';

export const didFinishLoad = async (mainWindow) => {
  await InitializeCommonSocket();

  await InitializeSocket(mainWindow);
};
