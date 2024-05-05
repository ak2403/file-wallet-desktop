import path from 'path';
import Store from 'electron-store';
import { app, BrowserWindow, screen } from 'electron';

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

app.whenReady().then(() => createWindow());
