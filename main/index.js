import path from 'path';
import { app, BrowserWindow, screen, Tray, ipcMain } from 'electron';
// import SocketConnection from './utils/socket_connection';
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

  // const socket = new SocketConnection();

  // await socket.openCommunication(mainWindow);
  // await socket.openExistingConnections();

  app.on('open-url', function (event, data) {
    mainWindow.webContents.send('login-success', {
      data,
    });
  });

  ipcMain.on('establish-connection', (event, args) => {
    // socket.checkAndOpenConnection(args);
  });

  ipcMain.on('access-folder', (event, connectionId) => {
    // socket.requestFolderAccess(connectionId);
  });

  ipcMain.on('disconnect-all', async (event, args) => {
    // await socket.checkAndCloseConnection(args);

    mainWindow.webContents.send('disconnect-completed');
  });

  app.on('window-all-closed', () => {
    app.dock.hide();

    new Tray(path.join(__dirname, 'assets/logo.png'));
    // any other logic
  });

  mainWindow.webContents.on('did-finish-load', async function () {
    await InitializeSocket(mainWindow);
  });
}

app.whenReady().then(() => createWindow());
