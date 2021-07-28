const path = require('path')
const {app, BrowserWindow} = require('electron')

global.electron = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      preload: path.join(__dirname,'preload.js'),
    }
  })

  mainWindow.loadURL('http://localhost:3002')

  app.setAsDefaultProtocolClient('com.sharespace.app')

  mainWindow.webContents.openDevTools()

  app.on('open-url', function (event, data) {
    mainWindow.webContents.send('login-success', {
      data
    })
  })
}

app.on('ready', createWindow)