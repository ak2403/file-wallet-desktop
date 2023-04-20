import { contextBridge, shell, ipcRenderer } from 'electron';

import { systemInformation } from './services/common';
import { removeItem, getItem, setItem } from './utils/store';

contextBridge.exposeInMainWorld('shell', shell);
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);

contextBridge.exposeInMainWorld('store', {
  set(key, value) {
    try {
      return setItem(key, value);
    } catch (err) {
      return false;
    }
  },
  get(key) {
    try {
      return getItem(key);
    } catch (err) {
      return false;
    }
  },
  remove(key) {
    try {
      return removeItem(key);
    } catch (err) {
      return false;
    }
  },
});

contextBridge.exposeInMainWorld('electron', {
  on: (eventName, callback) => ipcRenderer.on(eventName, callback),
  send: (eventName, data) => ipcRenderer.send(eventName, data),
  systemInformation: async () => systemInformation(),
});

const bridge = {
  doActionForNotification: (callback) => ipcRenderer.on('do-action-for-notification', callback),
  targetDataReceived: (callback) => ipcRenderer.on('target-data-received', callback),
  receivedTargetStatus: (callback) => ipcRenderer.on('received-target-status', callback),
  targetFileDataReceived: (callback) => ipcRenderer.on('target-file-data-received', callback),
  dialog: (method, params) => ipcRenderer.invoke('dialog', method, params),
};

contextBridge.exposeInMainWorld('bridge', bridge);
