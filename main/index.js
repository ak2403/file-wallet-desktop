const path = require('path')
const {app, BrowserWindow} = require('electron')
const io = require('socket.io-client')
const {readFolder, readFile, createFolder} = require('./utils/file_system')

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

  const socket = io('http://10.0.0.18:5000', { transports : ['websocket'] })

  mainWindow.webContents.openDevTools()

  app.on('open-url', function (event, data) {
    mainWindow.webContents.send('login-success', {
      data
    })
  })

  socket.on('connect', function(){
    console.log("hi")
  });

  socket.on("operation", async (params) => {
    const {type, path, name} = params
    let outputRes;

    if (type === 'create') {
      outputRes = await createFolder(path, name)
    }

    if (outputRes) {
      const getFolders = await readFolder(path)

      return {data: getFolders, type: 'operation'}
    }
    return false;
  })

  socket.on('tweet1', async (data) => {
    let getData;

    if (data.type === 'folder') {
      getData = await readFolder(data.path);
    } else {
      getData = await readFile(data.path);
    }
    // console.log(getData)
    socket.emit('returntweet', {data: getData, type: 'read'})
  });

}

app.on('ready', createWindow)