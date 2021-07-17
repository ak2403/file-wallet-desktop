const path = require('path')
const {app, BrowserWindow} = require('electron')
// const io = require('socket.io-client')
// const {readFolder} = require('./utils/file_system')

global.electron = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname,'preload.js'),
    }
  })

  mainWindow.loadURL('http://localhost:3002')

  app.setAsDefaultProtocolClient('com.sharespace.app')

  // const socket = io('http://10.0.0.18:5000', { transports : ['websocket'] })

  mainWindow.webContents.openDevTools()

  app.on('open-url', function (event, data) {
    mainWindow.webContents.send('login-success', {
      data
    })
  })

  // socket.on('connect', function(){
  //   console.log("hi")
  // });

  // socket.on('tweet', async (tweet) => {
  //   console.log('tweet1');
  //   // const getFodler = await readFolder();
  //   // socket.emit("message", {data: getFodler})
  // });

}

app.on('ready', createWindow)