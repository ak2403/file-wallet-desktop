import path from 'path';
import { app, BrowserWindow, screen, ipcMain, powerMonitor, dialog } from 'electron';

import { windowAllClosed, didFinishLoad, onSystemSuspend, onSystemResume } from './services/process';
import { accessTargetFolder } from './services/ipc-main/access-target-folder';

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

  ipcMain.on('access-target-folder', accessTargetFolder);

  ipcMain.handle('dialog', (event, method, params) => dialog[method](params));

  app.on('window-all-closed', windowAllClosed);

  mainWindow.webContents.on('did-finish-load', async () => didFinishLoad(mainWindow));

  powerMonitor.on('suspend', onSystemSuspend);

  powerMonitor.on('resume', onSystemResume);
}

app.whenReady().then(() => createWindow());
