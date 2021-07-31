const path = require('path')
const {app, BrowserWindow, screen} = require('electron')
const Socket = require('./utils/socket_connection')

global.electron = require('electron');

function createWindow() {
  const {width, height} = screen.getPrimaryDisplay().workAreaSize;
  
  const mainWindow = new BrowserWindow({
    width: Math.round(width/1.3),
    height: Math.round(height/1.25),
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      preload: path.join(__dirname,'preload.js'),
    }
  })

  mainWindow.loadURL('http://localhost:3002')

  app.setAsDefaultProtocolClient('com.sharespace.app')

  // mainWindow.webContents.openDevTools()

  const socket = new Socket()
  socket.openCommunication()
  socket.openExistingConnections()

  app.on('open-url', function (event, data) {
    mainWindow.webContents.send('login-success', {
      data
    })
  })
}

app.on('ready', createWindow)