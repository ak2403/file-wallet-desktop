import { contextBridge, ipcRenderer } from 'electron';
import { MachineIdenity } from './services/machine-identity';
import { DialogFileInformation } from '../packages/types/src/services';

const electronHandler = {
  dialog: {
    openFile: (): Promise<Partial<DialogFileInformation>> =>
      ipcRenderer.invoke('file:open') as Promise<Partial<DialogFileInformation>>,
  },
  identity: {
    getId: MachineIdenity.getMachineId,
  },
  store: {
    getItem: (key: string) => ipcRenderer.invoke('store:get', key),
    setItem: (key: string, value: unknown) => ipcRenderer.send('setItem', key, value),
    delItem: (key: string) => ipcRenderer.invoke('store:del', key),
  },
};

contextBridge.exposeInMainWorld('electronAPI', electronHandler);
