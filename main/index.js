import io from 'socket.io-client';
import path from 'path';
import { app, BrowserWindow, screen, ipcMain, powerMonitor } from 'electron';

import { windowAllClosed, didFinishLoad, onSystemSuspend, onSystemResume } from './services/process';

async function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const mainWindow = new BrowserWindow({
    width: Math.round(width / 1.3),
    height: Math.round(height / 1.25),
    titleBarStyle: 'hidden',
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      webSecurity: false,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL('http://localhost:4005');
  // mainWindow.loadFile(path.resolve(
  //   __dirname,
  //   '..',
  //   'public',
  //   'index.html'
  //  ))

  app.setAsDefaultProtocolClient('com.sharespace.app');

  mainWindow.webContents.openDevTools();

  app.on('open-url', function (event, data) {
    mainWindow.webContents.send('login-success', {
      data,
    });
  });

  ipcMain.on('access-target-folder', (event, data) => {
    const { connectionId, path } = data;

    const connectionChannel = io(`http://10.0.0.18:3000/${connectionId}`, { transports: ['websocket'] });

    connectionChannel.emit('request-file-from-target', { requestType: 'read', path });
  });

  app.on('window-all-closed', windowAllClosed);

  mainWindow.webContents.on('did-finish-load', async () => didFinishLoad(mainWindow));

  powerMonitor.on('suspend', onSystemSuspend);

  powerMonitor.on('resume', onSystemResume);
}

app.whenReady().then(() => createWindow());
