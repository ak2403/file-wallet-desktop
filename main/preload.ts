import { contextBridge, ipcRenderer } from 'electron';

const electronHandler = {
  store: {
    getItem: (key: string) => ipcRenderer.send("getItem", key),
    setItem: (key: string, value: unknown) => ipcRenderer.send("setItem", key, value),
  },
};

contextBridge.exposeInMainWorld('electronAPI', electronHandler);
