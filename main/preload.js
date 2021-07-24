const { contextBridge, shell, ipcRenderer } = require("electron");
const { getSystemInfo } = require("./utils/system_information");
const { removeItem, getItem, setItem } = require("./utils/store");

contextBridge.exposeInMainWorld("shell", shell);
contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer);

contextBridge.exposeInMainWorld("store", {
  set(key, value) {
    try {
      return setItem(key, value)
    }
    catch(err) {
      return false
    }
  },
  get(key) {
    try {
      return getItem(key)
    }
    catch(err) {
      return false
    }
  },
  remove(key) {
    try {
      return removeItem(key)
    }
    catch(err) {
      return false
    }
  }
});

contextBridge.exposeInMainWorld('electron', {
  on (eventName, callback) {
    ipcRenderer.on(eventName, callback)
  },

  async shellOpenExternal (url) {
    await shell.openExternal(url)
  },

  async getSysInfo() {
    return await getSystemInfo()
  }
})