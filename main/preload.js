const { contextBridge, shell, ipcRenderer } = require("electron");
const { getSystemInfo } = require("./utils/system_information");

contextBridge.exposeInMainWorld("shell", shell);
contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer);

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