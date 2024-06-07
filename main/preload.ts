import { contextBridge, ipcRenderer } from 'electron';
import { MachineIdenity } from './services/machine-identity';

const electronHandler = {
  store: {
    getItem: (key: string) => ipcRenderer.invoke('store:get', key),
    setItem: (key: string, value: unknown) => ipcRenderer.send('setItem', key, value),
    delItem: (key: string) => ipcRenderer.invoke('store:del', key),
  },
  dialog: {
    openFile: () => ipcRenderer.invoke('file:open'),
  },
  identity: {
    getId: MachineIdenity.getMachineId,
  },
};

contextBridge.exposeInMainWorld('electronAPI', electronHandler);
