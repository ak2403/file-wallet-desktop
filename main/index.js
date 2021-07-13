const {app, BrowserWindow} = require('electron')
const io = require('socket.io-client')
const {readFolder} = require('./utils/file_system')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL('http://localhost:3000')

  const socket = io('http://10.0.0.18:5000', { transports : ['websocket'] })

  mainWindow.webContents.openDevTools()

  socket.on('connect', function(){
    console.log("hi")
  });

  socket.on('tweet', async (tweet) => {
    console.log('tweet1');
    const getFodler = await readFolder();
    socket.emit("message", {data: getFodler})
  });

}

app.on('ready', createWindow)