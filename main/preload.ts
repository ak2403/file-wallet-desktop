import { contextBridge, shell, ipcRenderer } from 'electron';

import { DeviceService } from './services/device';
import { getKey, setKey, removeKey } from './services/local-storage';

contextBridge.exposeInMainWorld('shell', shell);
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);

contextBridge.exposeInMainWorld('store', {
  set: (key, value) => setKey(key, value),
  get: (key) => getKey(key),
  remove: (key) => removeKey(key),
});

contextBridge.exposeInMainWorld('electron', {
  on: (eventName, callback) => ipcRenderer.on(eventName, callback),
  remove: (eventName) => ipcRenderer.removeAllListeners(eventName),
  send: (eventName, data) => ipcRenderer.send(eventName, data),
  deviceId: async () => DeviceService.deviceId(),
  deviceOs: async () => DeviceService.deviceOs(),
});

const bridge = {
  doActionForNotification: (callback) => ipcRenderer.on('do-action-for-notification', callback),
  targetDataReceived: (callback) => ipcRenderer.on('target-data-received', callback),
  receivedTargetStatus: (callback) => ipcRenderer.on('received-target-status', callback),
  targetFileDataReceived: (callback) => ipcRenderer.on('target-file-data-received', callback),
  dialog: (method, params) => ipcRenderer.invoke('dialog', method, params),
};

contextBridge.exposeInMainWorld('bridge', bridge);
