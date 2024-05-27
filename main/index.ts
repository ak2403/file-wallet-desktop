import path from 'path';
import Store from 'electron-store';
import { app, BrowserWindow, screen, ipcMain } from 'electron';

async function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const mainWindow = new BrowserWindow({
    width: Math.round(width / 1.3),
    height: Math.round(height / 1.25),
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL('http://localhost:4005');

  app.setAsDefaultProtocolClient('com.filewallet.app');

  mainWindow.webContents.openDevTools();
}

Store.initRenderer();

const store = new Store();

ipcMain.handle('getItem', (e, key: string) => {
  console.log("Getting the value for key: ", key)
  return store.get(key);
});

ipcMain.on('setItem', (e, key: string, value: unknown) => {
  console.log("Setting the value for key: ", key, value)
  store.set(key, value);

  return true
});

app.whenReady().then(() => createWindow());
