const {app, BrowserWindow} = require('electron')
const io = require('socket.io-client')

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL('http://localhost:3000')

  console.log('Try to connect');
  // const socketClient = net.connect({host:'http://10.0.0.18', port:5000},  () => {
  //   // 'connect' listener
  //   console.log('connected to server!');
  //   // socketClient.write('world!\r\n');
  // });

  // socketClient.on('tweet', (data) => {
  //   console.log(data.toString());
  //   // var person = JSON.parse(data);

  //   // console.log('Hello '+person.prenom+"!");

  // });
  // socketClient.on('end', () => {
  //   console.log('disconnected from server');
  // });
  const socket = io('http://10.0.0.18/5000')

  socket.on('connect', function(){
    console.log("hi")
  });
  socket.on('tweet', (tweet) => {
    console.log('tweet', tweet);
  });

}

app.on('ready', createWindow)