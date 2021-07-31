const io = require('socket.io-client')
const {get} = require('./api')
const { getItem, setItem } = require("./store");
const {readFolder, readFile, createFolder} = require('./file_system')

class SocketConnection {
  constructor() {
    this.socketURI = 'http://10.0.0.18:5000/'
    this.communicationChannel = 'communications'
  }

  openConnectionChannel(ID = '') {
    if (ID) {
      const connectionChannel = io(`${this.socketURI}${ID}`, { transports : ['websocket'] })

      connectionChannel.on('connect', function(){
        console.log(`connection of ${ID} is alive`)
      });

      connectionChannel.on('redirectRequestInformation', async (params) => {
        console.log('redirectRequestInformation : ', params)
        const {type, path, name} = params
        let output = {}

        switch(type) {
          case 'CHECK_CONNECTION':
            output = {
              type,
              status: true,
              message: 'alive'
            }
            break;
          case 'FETCH_FOLDERS':
            output = {
              type,
              status: true,
              data: await readFolder(path)
            }
            break
          case 'ADD_FOLDER':
            const createdFolder = await createFolder(path, name)
            output.type= type
            if (createdFolder) {
              output.status = true
              output.data = await readFolder(path)
            } else {
              output.status = false
            }
            break
          case 'FETCH_FILE':
            const retrieveFile = await readFile(path)
            output.type= type
            output.data = retrieveFile
            break
          default:
            return;
        }
        
        connectionChannel.emit('captureResponse', output)
      });
    }
  }

  async openExistingConnections() {
    let getSavedConnections = await getItem('existingConnections')
    getSavedConnections = getSavedConnections ? JSON.parse(getSavedConnections) : []

    if (getSavedConnections.length) {
      getSavedConnections.forEach(ID => this.openConnectionChannel(ID))
    }
  }

  openCommunication() {
    const socketConnection = io(`${this.socketURI}${this.communicationChannel}`, { transports : ['websocket'] })

    socketConnection.on('connect', function(){
      console.log(`connection of ${this.communicationChannel} is alive`)
    });

    socketConnection.on('onIncomingMessage', async (params) => {
      const getId = await getItem('device_id')

      if (params.id === getId) {
        const getConnections = await get('/connection')

        console.log("here: ", getConnections.data)
        if (getConnections.status === 200 && getConnections?.data?.connections) {
          let getSavedConnections = await getItem('existingConnections')
          getSavedConnections = getSavedConnections ? JSON.parse(getSavedConnections) : []

          getConnections.data.connections.forEach(item => {
            if (!getSavedConnections.includes(item._id)) {
              getSavedConnections.push(item._id)
            }
          })

          await setItem('existingConnections', JSON.stringify(getSavedConnections))
        }
      }
    })
  }
}

module.exports = SocketConnection

// socketConnection.on("operation", async (params) => {
//   const {type, path, name} = params
//   let outputRes;

//   if (type === 'create') {
//     outputRes = await createFolder(path, name)
//   }

//   if (outputRes) {
//     const getFolders = await readFolder(path)

//     return {data: getFolders, type: 'operation'}
//   }
//   return false;
// })

// this.mainSocket.on('tweet1', async (data) => {
//   let getData;

//   if (data.type === 'folder') {
//     getData = await readFolder(data.path);
//   } else {
//     getData = await readFile(data.path);
//   }
//   // console.log(getData)
//   this.mainSocket.emit('returntweet', {data: getData, type: 'read'})
// });