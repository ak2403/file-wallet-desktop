import { contextBridge, ipcRenderer } from 'electron';
import { MachineIdenity } from './services/machine-identity';

const electronHandler = {
  store: {
    getItem: (key: string) => ipcRenderer.invoke('store:get', key),
    setItem: (key: string, value: unknown) => ipcRenderer.send('setItem', key, value),
  },
  identity: {
    getId: MachineIdenity.getMachineId,
  },
};

contextBridge.exposeInMainWorld('electronAPI', electronHandler);
