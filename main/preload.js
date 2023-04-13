import { contextBridge, shell, ipcRenderer } from 'electron';
import { getSystemInfo } from './utils/system_information';
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
  on(eventName, callback) {
    ipcRenderer.on(eventName, callback);
  },

  send(eventName, data) {
    ipcRenderer.send(eventName, data);
  },

  async shellOpenExternal(url) {
    await shell.openExternal(url);
  },

  async getSysInfo() {
    return await getSystemInfo();
  },
});

const bridge = {
  doActionForNotification: (callback) => ipcRenderer.on('do-action-for-notification', callback),
};

contextBridge.exposeInMainWorld('bridge', bridge);
