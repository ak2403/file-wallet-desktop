import io from 'socket.io-client';
import path from 'path';
import { app, BrowserWindow, screen, Tray, ipcMain, powerMonitor } from 'electron';

import { InitializeSocket } from './services/socket';

async function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const mainWindow = new BrowserWindow({
    width: Math.round(width / 1.3),
    height: Math.round(height / 1.25),
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

  ipcMain.handle('access-folders', async (event, data) => {
    console.log(event, data);
    const { connectionId, path } = data;

    const connectionChannel = io(`http://10.0.0.18:3000/${connectionId}`, { transports: ['websocket'] });

    const datum = new Promise((resolve) =>
      connectionChannel.emit('request-file-from-target', { requestType: 'read', path }, (data) => resolve(data)),
    );

    console.log('datum : ', datum);

    return datum;
  });

  ipcMain.on('access-target-folder', (event, data) => {
    const { connectionId, path } = data;

    const connectionChannel = io(`http://10.0.0.18:3000/${connectionId}`, { transports: ['websocket'] });

    connectionChannel.emit('request-file-from-target', { requestType: 'read', path });
  });

  app.on('window-all-closed', () => {
    app.dock.hide();

    new Tray(path.join(__dirname, 'assets/logo.png'));
    // any other logic
  });

  mainWindow.webContents.on('did-finish-load', async function () {
    await InitializeSocket(mainWindow);
  });

  powerMonitor.on('suspend', () => {
    console.log('The system is going to sleep');
  });

  powerMonitor.on('resume', () => {
    console.log('The system is going to resume');
  });
}

app.whenReady().then(() => createWindow());
